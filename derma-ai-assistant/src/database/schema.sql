-- Supabase Schema for SkinScience Admin Dashboard
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (for patients/clients)
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  date_of_birth DATE,
  gender VARCHAR(10),
  address TEXT,
  medical_history TEXT,
  allergies TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Treatments table
CREATE TABLE IF NOT EXISTS treatments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100),
  description TEXT,
  price DECIMAL(10, 2),
  duration_minutes INTEGER,
  sessions_required INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  treatment_id UUID REFERENCES treatments(id) ON DELETE SET NULL,
  appointment_date DATE NOT NULL,
  appointment_time TIME NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  notes TEXT,
  payment_status VARCHAR(50) DEFAULT 'pending',
  amount DECIMAL(10, 2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Consultations table (Voice AI interactions)
CREATE TABLE IF NOT EXISTS consultations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  consultation_date TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  duration_seconds INTEGER,
  transcript TEXT,
  ai_recommendations TEXT,
  concerns TEXT[],
  follow_up_required BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Concerns table
CREATE TABLE IF NOT EXISTS concerns (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  common_treatments TEXT[],
  severity_levels VARCHAR(50)[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Patient Concerns Junction table
CREATE TABLE IF NOT EXISTS patient_concerns (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  concern_id UUID REFERENCES concerns(id) ON DELETE CASCADE,
  severity VARCHAR(50),
  diagnosed_date DATE,
  resolved_date DATE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Treatment Progress table
CREATE TABLE IF NOT EXISTS treatment_progress (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  treatment_id UUID REFERENCES treatments(id) ON DELETE CASCADE,
  appointment_id UUID REFERENCES appointments(id) ON DELETE CASCADE,
  session_number INTEGER,
  progress_notes TEXT,
  before_photo_url TEXT,
  after_photo_url TEXT,
  satisfaction_rating INTEGER CHECK (satisfaction_rating >= 1 AND satisfaction_rating <= 5),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Reviews/Testimonials table
CREATE TABLE IF NOT EXISTS reviews (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  treatment_id UUID REFERENCES treatments(id) ON DELETE SET NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Analytics Events table (for tracking user interactions)
CREATE TABLE IF NOT EXISTS analytics_events (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  event_type VARCHAR(100),
  event_data JSONB,
  user_agent TEXT,
  ip_address INET,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Revenue table
CREATE TABLE IF NOT EXISTS revenue (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  appointment_id UUID REFERENCES appointments(id) ON DELETE SET NULL,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  amount DECIMAL(10, 2) NOT NULL,
  payment_method VARCHAR(50),
  transaction_id VARCHAR(255),
  status VARCHAR(50) DEFAULT 'completed',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create indexes for better performance
CREATE INDEX idx_appointments_user_id ON appointments(user_id);
CREATE INDEX idx_appointments_date ON appointments(appointment_date);
CREATE INDEX idx_appointments_status ON appointments(status);
CREATE INDEX idx_consultations_user_id ON consultations(user_id);
CREATE INDEX idx_treatment_progress_user_id ON treatment_progress(user_id);
CREATE INDEX idx_reviews_user_id ON reviews(user_id);
CREATE INDEX idx_revenue_created_at ON revenue(created_at);
CREATE INDEX idx_analytics_events_created_at ON analytics_events(created_at);

-- Create views for analytics
CREATE OR REPLACE VIEW appointment_analytics AS
SELECT
  DATE_TRUNC('month', appointment_date) as month,
  COUNT(*) as total_appointments,
  COUNT(DISTINCT user_id) as unique_patients,
  SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as completed_appointments,
  SUM(CASE WHEN status = 'cancelled' THEN 1 ELSE 0 END) as cancelled_appointments,
  AVG(amount) as average_amount
FROM appointments
GROUP BY DATE_TRUNC('month', appointment_date);

CREATE OR REPLACE VIEW revenue_analytics AS
SELECT
  DATE_TRUNC('month', created_at) as month,
  SUM(amount) as total_revenue,
  COUNT(*) as total_transactions,
  AVG(amount) as average_transaction,
  COUNT(DISTINCT user_id) as unique_customers
FROM revenue
WHERE status = 'completed'
GROUP BY DATE_TRUNC('month', created_at);

CREATE OR REPLACE VIEW treatment_popularity AS
SELECT
  t.name as treatment_name,
  t.category,
  COUNT(a.id) as appointment_count,
  AVG(tp.satisfaction_rating) as avg_satisfaction,
  SUM(r.amount) as total_revenue
FROM treatments t
LEFT JOIN appointments a ON t.id = a.treatment_id
LEFT JOIN treatment_progress tp ON t.id = tp.treatment_id
LEFT JOIN revenue r ON a.id = r.appointment_id
GROUP BY t.id, t.name, t.category
ORDER BY appointment_count DESC;

-- Insert sample data for testing

-- Insert sample treatments
INSERT INTO treatments (name, category, description, price, duration_minutes, sessions_required) VALUES
('Laser Hair Reduction', 'Laser', 'Advanced laser technology for permanent hair reduction', 5000, 45, 6),
('Acne Treatment', 'Facial', 'Comprehensive acne treatment with medical-grade products', 3000, 60, 4),
('Anti-Aging Therapy', 'Facial', 'Collagen boosting and wrinkle reduction treatment', 8000, 90, 3),
('Chemical Peel', 'Facial', 'Deep exfoliation for skin renewal', 4500, 45, 3),
('HydraFacial', 'Facial', 'Deep cleansing and hydrating facial', 6000, 60, 1),
('Botox', 'Injectables', 'Wrinkle reduction injections', 15000, 30, 1),
('Dermal Fillers', 'Injectables', 'Volume restoration and contouring', 20000, 45, 1),
('PRP Hair Treatment', 'Hair', 'Platelet-rich plasma for hair regrowth', 12000, 60, 4),
('Hair Transplant Consultation', 'Hair', 'Consultation for hair transplant procedure', 2000, 45, 1),
('Body Contouring', 'Body', 'Non-invasive fat reduction and skin tightening', 25000, 90, 6);

-- Insert sample concerns
INSERT INTO concerns (name, description, common_treatments, severity_levels) VALUES
('Acne', 'Inflammatory skin condition with pimples and blackheads', ARRAY['Acne Treatment', 'Chemical Peel'], ARRAY['Mild', 'Moderate', 'Severe']),
('Pigmentation', 'Dark spots and uneven skin tone', ARRAY['Chemical Peel', 'Laser Treatment'], ARRAY['Light', 'Medium', 'Dark']),
('Hair Loss', 'Thinning or loss of hair', ARRAY['PRP Hair Treatment', 'Hair Transplant'], ARRAY['Early', 'Moderate', 'Advanced']),
('Aging', 'Fine lines, wrinkles, and sagging skin', ARRAY['Anti-Aging Therapy', 'Botox', 'Dermal Fillers'], ARRAY['Early Signs', 'Moderate', 'Advanced']),
('Dullness', 'Lack of skin radiance and glow', ARRAY['HydraFacial', 'Chemical Peel'], ARRAY['Mild', 'Moderate', 'Severe']);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc', NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_appointments_updated_at BEFORE UPDATE ON appointments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE treatment_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE revenue ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows read access for authenticated users
CREATE POLICY "Enable read access for all users" ON users FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON appointments FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON treatments FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON concerns FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON reviews FOR SELECT USING (true);

-- Grant permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO authenticated;
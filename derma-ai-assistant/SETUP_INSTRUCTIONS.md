# Derma Whisper AI Assistant - Setup Instructions

## Overview
A beautiful, responsive frontend application for SkinScience clinic featuring an AI-powered assistant for appointment booking and patient inquiries.

## Features
- 🎨 Beautiful, modern UI with gradient designs and animations
- 📱 Fully responsive design for all devices
- 🤖 Integrated Eleven Labs AI Assistant for voice interactions
- 📊 Admin Dashboard for appointment management
- 🏥 Treatment showcase with before/after gallery
- 📅 Appointment booking system with Supabase integration
- 🔐 Secure admin authentication

## Tech Stack
- React 19 with TypeScript
- Vite for fast development
- Tailwind CSS for styling
- ShadCN UI components
- Framer Motion for animations
- Eleven Labs for AI voice assistant
- Supabase for backend services
- React Router for navigation

## Setup Instructions

### 1. Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Eleven Labs account and agent ID
- Supabase account (optional, for database features)

### 2. Installation

```bash
# Clone the repository
git clone [your-repo-url]
cd derma-ai-assistant

# Install dependencies
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```env
# Eleven Labs Configuration (REQUIRED)
VITE_ELEVENLABS_AGENT_ID=your_agent_id_here

# Supabase Configuration (OPTIONAL - for database features)
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Eleven Labs Setup

1. Go to [Eleven Labs](https://elevenlabs.io)
2. Create an account and set up your AI agent
3. Configure your agent with the booking system prompts
4. Copy your agent ID and add it to the `.env` file

### 5. Running the Application

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Application Structure

### Pages
- **Home** (`/`): Landing page with all sections
- **About** (`/about`): Clinic information
- **Concerns** (`/concerns`): Skin concerns we treat
- **Treatments** (`/treatments`): Available treatments
- **Testimonials** (`/testimonials`): Patient reviews
- **Gallery** (`/gallery`): Photo gallery
- **Contact** (`/contact`): Contact information
- **Admin Login** (`/admin`): Admin portal login
- **Admin Dashboard** (`/admin/dashboard`): Appointment management

### Admin Access
For demo purposes, use these credentials:
- Email: `admin@skinscience.com`
- Password: `admin123`

## Key Features

### 1. AI Assistant Integration
The AI assistant is triggered by:
- "CALL US" button in the header
- "Book Consultation" button in hero section
- Any other buttons with the appropriate ID

### 2. Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interactions
- Hamburger menu for mobile

### 3. Admin Dashboard Features
- View all appointments
- Filter by status, date, or search
- Update appointment status
- Export appointment data
- Real-time statistics

### 4. Animations
- Smooth scroll animations
- Hover effects on cards
- Page transitions
- Interactive before/after slider

## Customization

### Changing Colors
Edit the gradient colors in components:
- Primary gradient: `from-purple-600 to-pink-600`
- Secondary gradient: `from-orange-500 to-red-500`

### Adding Images
Replace placeholder URLs in:
- `HeroSection.tsx`: Hero slider images
- `TreatmentsSection.tsx`: Treatment card images
- `BeforeAfterGallery.tsx`: Before/after images
- `PhotoGallery.tsx`: Clinic photos

### Modifying Content
Update text content in:
- Component files for section-specific content
- `App.tsx` for page-level content
- `types/index.ts` for data structures

## Supabase Database Setup (Optional)

If you want to use real database functionality:

1. Create tables in Supabase:

```sql
CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name TEXT NOT NULL,
  patient_email TEXT NOT NULL,
  patient_phone TEXT NOT NULL,
  date DATE NOT NULL,
  time TEXT NOT NULL,
  treatment TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMP DEFAULT NOW()
);
```

2. Enable Row Level Security (RLS) as needed
3. Update environment variables with your Supabase credentials

## Deployment

### Vercel
```bash
npm run build
# Deploy with Vercel CLI or connect GitHub repo
```

### Netlify
```bash
npm run build
# Drag and drop dist folder to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload dist folder to your web server
```

## Troubleshooting

### Common Issues

1. **AI Assistant not connecting**
   - Verify ELEVENLABS_AGENT_ID is correct
   - Check browser console for errors
   - Ensure agent is published and active

2. **Admin login not working**
   - Use demo credentials for testing
   - Check localStorage for auth state
   - Clear browser cache if needed

3. **Styling issues**
   - Run `npm install` to ensure all dependencies
   - Check Tailwind configuration
   - Clear browser cache

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License
This project is for demonstration purposes.

## Support
For issues or questions, please check the documentation or create an issue in the repository.
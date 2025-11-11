import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AIAssistant } from '@/components/AIAssistant';
import { Home } from '@/pages/Home';
import { AdminLogin } from '@/pages/AdminLogin';
import { AdminDashboard } from '@/pages/AdminDashboard';

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  return isAdmin ? <>{children}</> : <Navigate to="/admin" />;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          {/* Admin Routes (without header/footer) */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Public Routes (with header/footer) */}
          <Route
            path="/*"
            element={
              <>
                <Header />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/concerns" element={<ConcernsPage />} />
                    <Route path="/treatments" element={<TreatmentsPage />} />
                    <Route path="/testimonials" element={<TestimonialsPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                  </Routes>
                </main>
                <Footer />
                <AIAssistant />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

// Placeholder pages - you can create separate files for these
const AboutPage = () => (
  <div className="container mx-auto px-4 py-20">
    <h1 className="text-4xl font-bold text-center mb-8">About SkinScience</h1>
    <div className="max-w-3xl mx-auto text-gray-600 space-y-6">
      <p>
        SkinScience Clinic: Your Path to Beautiful, Healthy Skin. Dr. Vani Vasanth, the founder of Skinscience Clinic,
        offers world-class, advanced dermatological treatments.
      </p>
      <p>
        Starting from a small 300 sqft setup, the clinic has expanded to an impressive 2500 sqft within nine years.
        The state-of-the-art clinic features four procedure rooms, an operating theatre, two consultation rooms,
        and a fully equipped pharmacy.
      </p>
      <p>
        Recognized as one of the best skin clinics in Bangalore, Skinscience Clinic provides affordable,
        world-class treatments using advanced, FDA-approved techniques like the Alma Soprano laser,
        TRI-BEAM Q-Switched, FRAXIS DUO, and more.
      </p>
    </div>
  </div>
);

const ConcernsPage = () => (
  <div className="container mx-auto px-4 py-20">
    <h1 className="text-4xl font-bold text-center mb-8">Skin Concerns We Treat</h1>
    <p className="text-center text-gray-600 max-w-3xl mx-auto">
      We address all types of skin, hair, and aesthetic concerns with personalized treatment plans.
    </p>
  </div>
);

const TreatmentsPage = () => (
  <div className="container mx-auto px-4 py-20">
    <h1 className="text-4xl font-bold text-center mb-8">Our Treatments</h1>
    <p className="text-center text-gray-600 max-w-3xl mx-auto">
      Explore our comprehensive range of dermatological and aesthetic treatments.
    </p>
  </div>
);

const TestimonialsPage = () => (
  <div className="container mx-auto px-4 py-20">
    <h1 className="text-4xl font-bold text-center mb-8">Patient Testimonials</h1>
    <p className="text-center text-gray-600 max-w-3xl mx-auto">
      Read what our satisfied patients have to say about their experience at SkinScience.
    </p>
  </div>
);

const GalleryPage = () => (
  <div className="container mx-auto px-4 py-20">
    <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
    <p className="text-center text-gray-600 max-w-3xl mx-auto">
      Browse through our clinic photos and treatment results.
    </p>
  </div>
);

const ContactPage = () => (
  <div className="container mx-auto px-4 py-20">
    <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
    <div className="max-w-3xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              <strong>Phone:</strong> +91 9632629459
            </p>
            <p>
              <strong>Email:</strong> skinsciencebengaluru@gmail.com
            </p>
            <p>
              <strong>Address:</strong><br />
              942, 1st Floor, above ICICI Bank,<br />
              near BDA Complex, 21st main,<br />
              BSK 2nd Stage, Bengaluru - 560070
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Clinic Hours</h2>
          <div className="space-y-2 text-gray-600">
            <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
            <p>Sunday: 10:00 AM - 2:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
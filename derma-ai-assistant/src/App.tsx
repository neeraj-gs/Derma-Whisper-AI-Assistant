import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AIAssistant } from '@/components/AIAssistant';
import { Home } from '@/pages/Home';
import { AdminLogin } from '@/pages/AdminLogin';
import { AdminDashboard } from '@/pages/AdminDashboard';
import { ConcernsPage } from '@/pages/ConcernsPage';
import { TreatmentsPage } from '@/pages/TreatmentsPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { ContactPage } from '@/pages/ContactPage';
import { AboutPage } from '@/pages/AboutPage';
import { TestimonialsPage } from '@/pages/TestimonialsPage';

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

export default App;
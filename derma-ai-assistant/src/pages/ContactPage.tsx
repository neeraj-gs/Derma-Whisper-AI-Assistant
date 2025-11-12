import { motion } from 'framer-motion';
import {
  Phone, Mail, MapPin, Clock, MessageSquare,
  Facebook, Instagram, Twitter, Youtube,
  Navigation, Car, Train, Bus
} from 'lucide-react';

export const ContactPage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-orange-50 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="text-sm font-semibold text-purple-600 tracking-wide uppercase">GET IN TOUCH</span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-3 mb-6">
              We're Here to Help
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with our expert team for consultations, appointments, or any questions
              about our treatments and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-3">Mon-Sat: 10 AM - 7 PM</p>
              <a href="tel:+919632629459" className="text-purple-600 font-medium hover:text-purple-700">
                +91 9632629459
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-3">24/7 Support</p>
              <a href="mailto:skinsciencebengaluru@gmail.com" className="text-purple-600 font-medium hover:text-purple-700 text-sm">
                skinsciencebengaluru@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 text-sm mb-3">Quick Response</p>
              <a href="https://wa.me/919632629459" target="_blank" rel="noopener noreferrer" className="text-purple-600 font-medium hover:text-purple-700">
                Chat Now
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm mb-3">BSK 2nd Stage</p>
              <button className="text-purple-600 font-medium hover:text-purple-700">
                Get Directions
              </button>
            </motion.div>
          </div>

          {/* Main Contact Section */}
          <div className="max-w-4xl mx-auto">
            {/* Location & Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5689!2d77.56674!3d12.9354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzA3LjQiTiA3N8KwMzQnMDAuMyJF!5e0!3m2!1sen!2sin!4v1635959562000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="SkinScience Clinic Location"
                />
              </div>

              {/* Address Details */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Clinic Location</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">SkinScience Clinic</p>
                      <p className="text-gray-600">
                        942, 1st Floor, above ICICI Bank,<br />
                        near BDA Complex, 21st main,<br />
                        BSK 2nd Stage, Bengaluru - 560070
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Clinic Hours</p>
                      <p className="text-gray-600">
                        Monday - Saturday: 10:00 AM - 7:00 PM<br />
                        Sunday: 10:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Navigation className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Landmarks</p>
                      <p className="text-gray-600">
                        Above ICICI Bank<br />
                        Near BDA Complex<br />
                        BSK 2nd Stage Main Road
                      </p>
                    </div>
                  </div>
                </div>

                {/* Transport Options */}
                <div className="mt-6 pt-6 border-t">
                  <p className="font-semibold text-gray-900 mb-3">How to Reach</p>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Car className="w-5 h-5 text-purple-600" />
                      </div>
                      <p className="text-xs text-gray-600">Parking Available</p>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Train className="w-5 h-5 text-purple-600" />
                      </div>
                      <p className="text-xs text-gray-600">Metro: 1.5km</p>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Bus className="w-5 h-5 text-purple-600" />
                      </div>
                      <p className="text-xs text-gray-600">Bus Stop: 200m</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <p className="mb-6 text-white/90">
                  Follow us on social media for skincare tips, treatment updates, and exclusive offers.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto grid gap-6">
            {[
              {
                q: "Do I need an appointment?",
                a: "Yes, we recommend booking an appointment to ensure minimal wait times and personalized attention. Walk-ins are accepted based on availability."
              },
              {
                q: "What should I bring for my first visit?",
                a: "Please bring a valid ID, any previous medical records related to your skin condition, and a list of current medications or skincare products you use."
              },
              {
                q: "Do you offer online consultations?",
                a: "Yes, we offer video consultations for follow-ups and initial assessments. Contact us to schedule an online appointment."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept cash, all major credit/debit cards, UPI payments, and offer EMI options for treatments above ₹25,000."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
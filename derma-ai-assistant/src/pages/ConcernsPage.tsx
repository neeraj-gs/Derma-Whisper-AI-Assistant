import { motion } from 'framer-motion';
import { Activity, Palette, RefreshCw, Sun, Sparkles, Heart, Eye, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const allConcerns = [
  {
    id: 1,
    title: "Acne & Acne Scars",
    icon: Activity,
    color: "from-blue-500 to-cyan-500",
    description: "Comprehensive treatment for active acne and scarring",
    details: "Our advanced acne treatment protocol combines medical-grade chemical peels, laser therapy, and customized skincare regimens to address both active breakouts and post-acne scarring.",
    treatments: ["Laser Therapy", "Chemical Peels", "Microneedling", "Medical Facials"],
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&auto=format&fit=crop&q=60",
    results: "Visible improvement in 4-6 weeks",
    sessions: "6-8 sessions recommended"
  },
  {
    id: 2,
    title: "Pigmentation & Dark Spots",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    description: "Advanced solutions for uneven skin tone",
    details: "Target melanin overproduction and achieve an even, radiant complexion with our combination of Q-Switch laser technology and brightening treatments.",
    treatments: ["Q-Switch Laser", "IPL Therapy", "Tranexamic Acid", "Vitamin C Infusion"],
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&auto=format&fit=crop&q=60",
    results: "50-70% reduction in 3 months",
    sessions: "4-6 sessions recommended"
  },
  {
    id: 3,
    title: "Anti-Aging & Wrinkles",
    icon: RefreshCw,
    color: "from-green-500 to-teal-500",
    description: "Turn back time with advanced rejuvenation",
    details: "Our comprehensive anti-aging protocol combines botox, dermal fillers, and skin tightening technologies to restore youthful appearance and skin elasticity.",
    treatments: ["Botox", "Dermal Fillers", "Thread Lift", "HIFU"],
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60",
    results: "Immediate to 3 months",
    sessions: "1-3 sessions annually"
  },
  {
    id: 4,
    title: "Hair Loss & Thinning",
    icon: Sparkles,
    color: "from-orange-500 to-red-500",
    description: "Restore your crowning glory",
    details: "Advanced hair restoration using GFC therapy, PRP, and medical management to stimulate hair growth and prevent further loss.",
    treatments: ["GFC Therapy", "PRP Treatment", "Mesotherapy", "Hair Transplant"],
    image: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=800&auto=format&fit=crop&q=60",
    results: "New growth in 3-4 months",
    sessions: "4-6 sessions initially"
  },
  {
    id: 5,
    title: "Dullness & Uneven Texture",
    icon: Sun,
    color: "from-yellow-500 to-orange-500",
    description: "Reveal your natural radiance",
    details: "Restore skin's natural glow with our advanced exfoliation and rejuvenation treatments that improve texture and luminosity.",
    treatments: ["HydraFacial", "Diamond Dermabrasion", "Glycolic Peels", "Oxygen Therapy"],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=60",
    results: "Instant glow, progressive improvement",
    sessions: "Monthly maintenance"
  },
  {
    id: 6,
    title: "Sensitive & Rosacea",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
    description: "Gentle care for reactive skin",
    details: "Specialized treatments for sensitive skin conditions including rosacea, using gentle yet effective laser therapy and soothing protocols.",
    treatments: ["Vascular Laser", "LED Therapy", "Calming Facials", "Barrier Repair"],
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&auto=format&fit=crop&q=60",
    results: "Reduction in flare-ups",
    sessions: "Ongoing management"
  },
  {
    id: 7,
    title: "Body Contouring",
    icon: Shield,
    color: "from-indigo-500 to-purple-500",
    description: "Sculpt your ideal silhouette",
    details: "Non-invasive body contouring using advanced technologies to reduce stubborn fat and tighten skin for a more defined appearance.",
    treatments: ["Cool Sculpting", "RF Therapy", "Ultrasound Cavitation", "Lymphatic Drainage"],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=60",
    results: "Visible in 6-8 weeks",
    sessions: "3-4 sessions per area"
  },
  {
    id: 8,
    title: "Under-Eye Concerns",
    icon: Eye,
    color: "from-teal-500 to-blue-500",
    description: "Brighten and rejuvenate the eye area",
    details: "Targeted treatments for dark circles, puffiness, and fine lines around the delicate eye area using specialized techniques.",
    treatments: ["Eye Fillers", "Carboxy Therapy", "Eye Peels", "RF Microneedling"],
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60",
    results: "2-4 weeks for improvement",
    sessions: "3-4 sessions"
  }
];

export const ConcernsPage = () => {
  const [selectedConcern, setSelectedConcern] = useState<typeof allConcerns[0] | null>(null);

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
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-purple-600 tracking-wide uppercase">SKIN CONCERNS</span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-3 mb-6">
              We Understand Your Skin
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every skin is unique. Our expert dermatologists provide personalized solutions
              for all your skin, hair, and aesthetic concerns with cutting-edge treatments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Concerns Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allConcerns.map((concern, index) => {
              const Icon = concern.icon;
              return (
                <motion.div
                  key={concern.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedConcern(concern)}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${concern.color} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{concern.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{concern.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {concern.treatments.slice(0, 2).map((treatment, idx) => (
                        <span key={idx} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                          {treatment}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Selected Concern Detail Modal */}
      {selectedConcern && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedConcern(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
              <img
                src={selectedConcern.image}
                alt={selectedConcern.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <button
                onClick={() => setSelectedConcern(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100"
              >
                ×
              </button>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{selectedConcern.title}</h2>
                <p className="text-lg opacity-90">{selectedConcern.description}</p>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Overview</h3>
                <p className="text-gray-600">{selectedConcern.details}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Recommended Treatments</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedConcern.treatments.map((treatment, idx) => (
                      <span key={idx} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                        {treatment}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Expected Results</h4>
                  <p className="text-gray-600 text-sm">{selectedConcern.results}</p>
                  <p className="text-gray-500 text-sm mt-1">{selectedConcern.sessions}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  Book Consultation
                </Button>
                <Button variant="outline" className="flex-1">
                  Learn More
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "How do I know which treatment is right for me?",
                a: "Our expert dermatologists will assess your skin during a consultation and recommend personalized treatment plans based on your specific concerns and skin type."
              },
              {
                q: "Are the treatments painful?",
                a: "Most treatments are comfortable with minimal discomfort. We use numbing creams and cooling devices to ensure your comfort throughout the procedure."
              },
              {
                q: "How long do results last?",
                a: "Results vary by treatment and individual. Most treatments provide long-lasting results with proper maintenance and follow-up sessions as recommended."
              },
              {
                q: "Is there any downtime?",
                a: "Many of our treatments have minimal to no downtime. Your doctor will discuss any specific aftercare requirements during your consultation."
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Address Your Skin Concerns?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Book a consultation with our expert dermatologists and start your journey to healthier, more beautiful skin.
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Schedule Your Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};
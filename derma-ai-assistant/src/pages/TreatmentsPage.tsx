import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, Star, Award, TrendingUp, Users, ChevronRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const treatmentCategories = [
  {
    id: 'laser',
    name: 'Laser Treatments',
    description: 'Advanced laser technology for various skin concerns',
    icon: '⚡',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'facial',
    name: 'Facial Treatments',
    description: 'Rejuvenating facials and skin therapies',
    icon: '✨',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'hair',
    name: 'Hair Treatments',
    description: 'Solutions for hair loss and scalp health',
    icon: '💆',
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 'body',
    name: 'Body Treatments',
    description: 'Body contouring and skin tightening',
    icon: '💪',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'injectable',
    name: 'Injectables',
    description: 'Botox, fillers, and other injectable treatments',
    icon: '💉',
    color: 'from-indigo-500 to-purple-500'
  }
];

const allTreatments = [
  // Laser Treatments
  {
    id: 1,
    category: 'laser',
    name: 'Laser Hair Reduction',
    description: 'Permanent hair reduction using advanced Soprano laser technology',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&auto=format&fit=crop&q=60',
    duration: '45-60 min',
    sessions: '6-8 sessions',
    price: 'Starting ₹2,500',
    benefits: ['Painless procedure', 'Permanent reduction', 'All skin types', 'No downtime'],
    popular: true
  },
  {
    id: 2,
    category: 'laser',
    name: 'Q-Switch Laser Toning',
    description: 'Advanced pigmentation and tattoo removal treatment',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=60',
    duration: '30-45 min',
    sessions: '4-6 sessions',
    price: 'Starting ₹3,000',
    benefits: ['Even skin tone', 'Pigmentation removal', 'Tattoo removal', 'Melasma treatment']
  },
  {
    id: 3,
    category: 'laser',
    name: 'Fractional CO2 Laser',
    description: 'Skin resurfacing for scars, wrinkles, and texture improvement',
    image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&auto=format&fit=crop&q=60',
    duration: '60-90 min',
    sessions: '3-4 sessions',
    price: 'Starting ₹8,000',
    benefits: ['Scar reduction', 'Wrinkle treatment', 'Skin tightening', 'Texture improvement']
  },

  // Facial Treatments
  {
    id: 4,
    category: 'facial',
    name: 'HydraFacial',
    description: 'Deep cleansing and hydrating facial treatment',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=60',
    duration: '60 min',
    sessions: 'Monthly',
    price: 'Starting ₹4,500',
    benefits: ['Deep cleansing', 'Instant glow', 'Hydration boost', 'No downtime'],
    popular: true
  },
  {
    id: 5,
    category: 'facial',
    name: 'Chemical Peels',
    description: 'Medical-grade peels for various skin concerns',
    image: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=800&auto=format&fit=crop&q=60',
    duration: '30-45 min',
    sessions: '3-6 sessions',
    price: 'Starting ₹2,000',
    benefits: ['Acne treatment', 'Pigmentation', 'Anti-aging', 'Skin renewal']
  },
  {
    id: 6,
    category: 'facial',
    name: 'Vampire Facial (PRP)',
    description: 'Platelet-rich plasma therapy for skin rejuvenation',
    image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&auto=format&fit=crop&q=60',
    duration: '90 min',
    sessions: '3-4 sessions',
    price: 'Starting ₹12,000',
    benefits: ['Natural rejuvenation', 'Collagen boost', 'Improved texture', 'Long-lasting results']
  },

  // Hair Treatments
  {
    id: 7,
    category: 'hair',
    name: 'GFC Hair Treatment',
    description: 'Growth Factor Concentrate therapy for hair regrowth',
    image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=800&auto=format&fit=crop&q=60',
    duration: '60-90 min',
    sessions: '4-6 sessions',
    price: 'Starting ₹8,000',
    benefits: ['Hair regrowth', 'Reduces hair fall', 'Strengthens follicles', 'Natural treatment'],
    popular: true
  },
  {
    id: 8,
    category: 'hair',
    name: 'Hair Transplant',
    description: 'Advanced FUE hair transplantation',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60',
    duration: '4-8 hours',
    sessions: '1 session',
    price: 'Starting ₹50,000',
    benefits: ['Permanent solution', 'Natural results', 'Minimal scarring', 'High success rate']
  },
  {
    id: 9,
    category: 'hair',
    name: 'Scalp Micropigmentation',
    description: 'Non-surgical hair density enhancement',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&auto=format&fit=crop&q=60',
    duration: '2-4 hours',
    sessions: '2-3 sessions',
    price: 'Starting ₹25,000',
    benefits: ['Instant results', 'Non-invasive', 'Natural appearance', 'Long-lasting']
  },

  // Body Treatments
  {
    id: 10,
    category: 'body',
    name: 'Cool Sculpting',
    description: 'Non-invasive fat reduction treatment',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=60',
    duration: '60 min',
    sessions: '2-3 sessions',
    price: 'Starting ₹30,000',
    benefits: ['Fat reduction', 'Non-surgical', 'No downtime', 'FDA approved']
  },
  {
    id: 11,
    category: 'body',
    name: 'HIFU Body Contouring',
    description: 'Ultrasound technology for skin tightening',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=60',
    duration: '90 min',
    sessions: '3-4 sessions',
    price: 'Starting ₹15,000',
    benefits: ['Skin tightening', 'Cellulite reduction', 'Body sculpting', 'Non-invasive']
  },

  // Injectable Treatments
  {
    id: 12,
    category: 'injectable',
    name: 'Botox Treatment',
    description: 'Wrinkle reduction and prevention',
    image: 'https://images.unsplash.com/photo-1576086476369-13a7c0d80b3e?w=800&auto=format&fit=crop&q=60',
    duration: '30 min',
    sessions: 'Every 4-6 months',
    price: 'Starting ₹10,000',
    benefits: ['Wrinkle reduction', 'Preventive care', 'Quick results', 'Minimal downtime'],
    popular: true
  },
  {
    id: 13,
    category: 'injectable',
    name: 'Dermal Fillers',
    description: 'Volume restoration and facial contouring',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=60',
    duration: '45 min',
    sessions: 'Annual touch-ups',
    price: 'Starting ₹20,000',
    benefits: ['Instant results', 'Natural look', 'Long-lasting', 'Reversible']
  },
  {
    id: 14,
    category: 'injectable',
    name: 'Thread Lift',
    description: 'Non-surgical face lifting procedure',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&auto=format&fit=crop&q=60',
    duration: '60-90 min',
    sessions: '1 session',
    price: 'Starting ₹40,000',
    benefits: ['Instant lift', 'Collagen stimulation', 'Natural results', 'Minimal downtime']
  }
];

export const TreatmentsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTreatment, setSelectedTreatment] = useState<typeof allTreatments[0] | null>(null);

  const filteredTreatments = selectedCategory === 'all'
    ? allTreatments
    : allTreatments.filter(t => t.category === selectedCategory);

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
            <span className="text-sm font-semibold text-purple-600 tracking-wide uppercase">OUR TREATMENTS</span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-3 mb-6">
              Advanced Dermatological Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of cutting-edge treatments designed to address
              all your skin, hair, and aesthetic concerns with precision and care.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { icon: Award, label: 'FDA Approved', value: '100%' },
              { icon: Users, label: 'Happy Patients', value: '15,000+' },
              { icon: Star, label: 'Success Rate', value: '98%' },
              { icon: TrendingUp, label: 'Years Experience', value: '18+' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg mb-3">
                  <stat.icon className="w-7 h-7 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-white shadow-sm sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Treatments
            </button>
            {treatmentCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreatments.map((treatment, index) => (
              <motion.div
                key={treatment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                onClick={() => setSelectedTreatment(treatment)}
              >
                {treatment.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    POPULAR
                  </div>
                )}

                <div className="relative h-56 overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{treatment.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{treatment.description}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{treatment.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="w-4 h-4" />
                      <span>{treatment.sessions}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-purple-600">{treatment.price}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Detail Modal */}
      {selectedTreatment && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTreatment(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-80">
              <img
                src={selectedTreatment.image}
                alt={selectedTreatment.name}
                className="w-full h-full object-cover rounded-t-3xl"
              />
              <button
                onClick={() => setSelectedTreatment(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100"
              >
                ×
              </button>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedTreatment.name}</h2>
              <p className="text-gray-600 mb-6">{selectedTreatment.description}</p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-purple-50 rounded-xl p-4">
                  <Clock className="w-6 h-6 text-purple-600 mb-2" />
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold">{selectedTreatment.duration}</p>
                </div>
                <div className="bg-pink-50 rounded-xl p-4">
                  <Shield className="w-6 h-6 text-pink-600 mb-2" />
                  <p className="text-sm text-gray-600">Sessions</p>
                  <p className="font-semibold">{selectedTreatment.sessions}</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-4">
                  <Star className="w-6 h-6 text-orange-600 mb-2" />
                  <p className="text-sm text-gray-600">Starting Price</p>
                  <p className="font-semibold">{selectedTreatment.price}</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Key Benefits</h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedTreatment.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  Book This Treatment
                </Button>
                <Button variant="outline" className="flex-1">
                  Free Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not Sure Which Treatment is Right for You?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Our expert dermatologists will assess your concerns and recommend the perfect treatment plan tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Book Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download Treatment Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
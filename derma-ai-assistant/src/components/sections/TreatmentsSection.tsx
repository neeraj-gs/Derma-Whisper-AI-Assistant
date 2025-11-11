import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Clock, Shield, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const treatments = [
  {
    id: 1,
    number: "01",
    title: "LASER HAIR REDUCTION",
    description: "Advanced laser technology for permanent hair reduction with visible results in 3-5 sessions",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&auto=format&fit=crop&q=60",
    duration: "45-60 min",
    sessions: "6-8 sessions",
    category: "laser"
  },
  {
    id: 2,
    number: "02",
    title: "LASER TONING",
    description: "Even out skin tone, reduce pigmentation, and achieve a radiant complexion",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=60",
    duration: "30-45 min",
    sessions: "4-6 sessions",
    category: "laser"
  },
  {
    id: 3,
    number: "03",
    title: "FACIAL CONTOURING WITH FILLERS",
    description: "Enhance your natural beauty with dermal fillers for a youthful, sculpted appearance",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=60",
    duration: "30-45 min",
    sessions: "1-2 sessions",
    category: "facial"
  },
  {
    id: 4,
    number: "04",
    title: "GFC THERAPY",
    description: "Growth Factor Concentrate therapy for hair regrowth and skin rejuvenation",
    image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&auto=format&fit=crop&q=60",
    duration: "60-90 min",
    sessions: "3-4 sessions",
    category: "hair"
  },
  {
    id: 5,
    number: "05",
    title: "CHEMICAL PEELS",
    description: "Medical-grade peels to treat acne, pigmentation, and signs of aging",
    image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=800&auto=format&fit=crop&q=60",
    duration: "30-40 min",
    sessions: "3-6 sessions",
    category: "skin"
  },
  {
    id: 6,
    number: "06",
    title: "ANTI-AGING TREATMENTS",
    description: "Comprehensive solutions to reduce fine lines, wrinkles, and restore youthful skin",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60",
    duration: "45-60 min",
    sessions: "4-8 sessions",
    category: "skin"
  }
];

const technologies = [
  {
    title: "Alma Soprano Laser",
    description: "Pain-free laser hair removal technology",
    icon: "⚡"
  },
  {
    title: "TRI-BEAM Q-Switched",
    description: "Advanced pigmentation removal system",
    icon: "🎯"
  },
  {
    title: "FRAXIS DUO",
    description: "Fractional CO2 laser for skin resurfacing",
    icon: "💫"
  }
];

export const TreatmentsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTreatments = selectedCategory === 'all'
    ? treatments
    : treatments.filter(t => t.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-purple-600 tracking-wide uppercase">TREATMENTS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            REVITALIZE YOUR SKIN WITH ADVANCED TREATMENTS
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expert Solutions Tailored to Your Skin Needs—Experience the SkinScience Difference
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['all', 'laser', 'skin', 'hair', 'facial'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Treatments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTreatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-4 left-4 text-5xl font-bold text-white/20">
                  {treatment.number}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {treatment.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {treatment.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{treatment.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Shield className="w-4 h-4" />
                    <span>{treatment.sessions}</span>
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  variant="ghost"
                  className="group/btn flex items-center gap-2 text-purple-600 hover:text-purple-700 p-0"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Cutting-Edge Technologies
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{tech.title}</h4>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            View All Treatments
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
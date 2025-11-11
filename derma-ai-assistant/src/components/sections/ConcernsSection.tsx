import { motion } from 'framer-motion';
import { ArrowRight, Activity, Palette, Zap, RefreshCw, Sun, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const concerns = [
  {
    id: 1,
    title: "ACNE",
    description: "A prevalent skin condition leading to inflamed, clogged pores, often resulting in pimples and cysts.",
    icon: Activity,
    color: "from-blue-500 to-cyan-500",
    treatments: ["Chemical Peels", "Laser Therapy", "Medical Facials"]
  },
  {
    id: 2,
    title: "PIGMENTATION",
    description: "Excessive melanin production leads to uneven skin tone and dark patches or spots.",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    treatments: ["Q-Switch Laser", "Chemical Peels", "Skin Lightening"]
  },
  {
    id: 3,
    title: "LHR",
    description: "Laser hair reduction is an advanced unwanted hair removal treatment. Known for precision and lasting results.",
    icon: Zap,
    color: "from-orange-500 to-red-500",
    treatments: ["Soprano Laser", "Diode Laser", "IPL Treatment"]
  },
  {
    id: 4,
    title: "ANTI-AGING",
    description: "Comprehensive treatments to reduce fine lines, wrinkles, and restore youthful skin elasticity.",
    icon: RefreshCw,
    color: "from-green-500 to-teal-500",
    treatments: ["Botox", "Dermal Fillers", "Thread Lift"]
  },
  {
    id: 5,
    title: "ACNE SCARS",
    description: "Advanced treatments to minimize and eliminate acne scarring for smoother skin texture.",
    icon: Sun,
    color: "from-indigo-500 to-purple-500",
    treatments: ["Fractional Laser", "Microneedling", "PRP Therapy"]
  },
  {
    id: 6,
    title: "SKIN REJUVENATION",
    description: "Restore your skin's natural glow and vitality with our advanced rejuvenation treatments.",
    icon: Sparkles,
    color: "from-pink-500 to-rose-500",
    treatments: ["HydraFacial", "Vampire Facial", "LED Therapy"]
  }
];

export const ConcernsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-purple-600 tracking-wide uppercase">CONCERNS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            ADDRESS YOUR SKIN CONCERNS WITH SKINSCIENCE EXPERTISE
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Let's navigate your skin concerns with clarity, education, and cutting-edge treatments.
          </p>
        </motion.div>

        {/* Concerns Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concerns.map((concern, index) => {
            const Icon = concern.icon;
            return (
              <motion.div
                key={concern.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-300 hover:shadow-xl transition-all"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${concern.color} p-3 mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {concern.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {concern.description}
                </p>

                {/* Treatments */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Popular Treatments:</p>
                  <div className="flex flex-wrap gap-2">
                    {concern.treatments.map((treatment, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full"
                      >
                        {treatment}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  variant="ghost"
                  className="group/btn flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold"
                >
                  EXPLORE NOW
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>

                {/* Hover Effect Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${concern.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity pointer-events-none`} />
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-20 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15K+", label: "Happy Patients" },
              { value: "18+", label: "Years Experience" },
              { value: "4.5", label: "Google Rating" },
              { value: "100%", label: "FDA Approved" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
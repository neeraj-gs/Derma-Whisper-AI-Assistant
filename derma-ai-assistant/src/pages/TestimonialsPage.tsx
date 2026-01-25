import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    age: 28,
    treatment: 'Laser Hair Reduction',
    rating: 5,
    date: '2 months ago',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60',
    comment: 'I had an amazing experience at SkinScience! The laser hair removal treatment was painless and effective. After just 4 sessions, I can see a remarkable difference. Dr. Vani and her team are incredibly professional and made me feel comfortable throughout.',
    verified: true,
    highlight: 'Painless and Effective',
    category: 'laser'
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    age: 35,
    treatment: 'Hair Restoration (GFC)',
    rating: 5,
    date: '1 month ago',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60',
    comment: 'I was skeptical about hair restoration treatments, but GFC therapy at SkinScience changed my life! Visible results in just 3 months. The clinic uses the latest technology, and the staff is knowledgeable. Highly recommend!',
    verified: true,
    highlight: 'Life-Changing Results',
    category: 'hair'
  },
  {
    id: 3,
    name: 'Sneha Reddy',
    age: 32,
    treatment: 'HydraFacial',
    rating: 5,
    date: '3 weeks ago',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60',
    comment: 'The HydraFacial treatment was absolutely wonderful! My skin feels so refreshed and glowing. The clinic ambiance is very soothing, and the hygiene standards are top-notch. Will definitely come back for regular sessions.',
    verified: true,
    highlight: 'Instant Glow',
    category: 'facial'
  },
  {
    id: 4,
    name: 'Arun Kumar',
    age: 42,
    treatment: 'Anti-Aging (Botox)',
    rating: 5,
    date: '1 month ago',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60',
    comment: 'Excellent results with anti-aging treatment. The fine lines around my eyes and forehead have significantly reduced. Dr. Vani\'s expertise is evident in her approach. The results look very natural, which is exactly what I wanted.',
    verified: true,
    highlight: 'Natural Looking Results',
    category: 'anti-aging'
  },
  {
    id: 5,
    name: 'Divya Patel',
    age: 26,
    treatment: 'Acne Treatment',
    rating: 5,
    date: '3 months ago',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60',
    comment: 'After struggling with acne for years, I finally found the solution at SkinScience. The combination of chemical peels and laser therapy worked wonders. My skin is now clear and confident. Thank you, Dr. Vani!',
    verified: true,
    highlight: 'Clear Skin Finally',
    category: 'acne'
  },
  {
    id: 6,
    name: 'Karthik Iyer',
    age: 30,
    treatment: 'Pigmentation Treatment',
    rating: 5,
    date: '2 months ago',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=60',
    comment: 'The Q-Switch laser treatment for my pigmentation issues exceeded my expectations. The dark spots that bothered me for years have faded significantly. Professional service and reasonable pricing.',
    verified: true,
    highlight: 'Exceeded Expectations',
    category: 'pigmentation'
  },
  {
    id: 7,
    name: 'Anjali Verma',
    age: 29,
    treatment: 'Chemical Peel',
    rating: 5,
    date: '1 month ago',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60',
    comment: 'The chemical peel treatment has transformed my skin texture completely. The dullness is gone, and my skin looks radiant. The post-treatment care instructions were very helpful.',
    verified: true,
    highlight: 'Radiant Skin',
    category: 'facial'
  },
  {
    id: 8,
    name: 'Rohit Sharma',
    age: 38,
    treatment: 'Cool Sculpting',
    rating: 5,
    date: '4 months ago',
    image: 'https://images.unsplash.com/photo-1507081323647-4d250478b919?w=400&auto=format&fit=crop&q=60',
    comment: 'Cool Sculpting at SkinScience helped me get rid of stubborn fat that wouldn\'t go away with exercise. Non-invasive and effective! The staff made the whole process comfortable.',
    verified: true,
    highlight: 'Non-Invasive Solution',
    category: 'body'
  }
];

const videoTestimonials = [
  {
    id: 1,
    name: 'Neha Singh',
    treatment: 'Full Face Rejuvenation',
    thumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60',
    duration: '2:15'
  },
  {
    id: 2,
    name: 'Amit Desai',
    treatment: 'Hair Transplant Journey',
    thumbnail: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=60',
    duration: '3:45'
  },
  {
    id: 3,
    name: 'Pooja Reddy',
    treatment: 'Acne to Clear Skin',
    thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60',
    duration: '1:58'
  }
];

const categories = [
  { id: 'all', name: 'All Reviews', count: testimonials.length },
  { id: 'laser', name: 'Laser Treatments', count: 2 },
  { id: 'facial', name: 'Facial Treatments', count: 2 },
  { id: 'hair', name: 'Hair Treatments', count: 1 },
  { id: 'anti-aging', name: 'Anti-Aging', count: 1 },
  { id: 'acne', name: 'Acne Treatment', count: 1 },
  { id: 'body', name: 'Body Treatments', count: 1 }
];

export const TestimonialsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  const filteredTestimonials = selectedCategory === 'all'
    ? testimonials
    : testimonials.filter(t => t.category === selectedCategory);

  const nextTestimonial = () => {
    setSelectedTestimonial((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setSelectedTestimonial((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

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
            <span className="text-sm font-semibold text-purple-600 tracking-wide uppercase">TESTIMONIALS</span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-3 mb-6">
              Real People, Real Results
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what our patients have to say about their transformative experiences
              at SkinScience. Every story is a testament to our commitment to excellence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">15,000+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">4.5</div>
                <div className="text-sm text-gray-600">Google Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
              <div className="text-center hidden md:block">
                <div className="text-3xl font-bold text-purple-600">500+</div>
                <div className="text-sm text-gray-600">5-Star Reviews</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <Quote className="w-12 h-12 text-purple-200 mb-4" />

                  <motion.div
                    key={selectedTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-700 text-lg mb-6 italic">
                      "{filteredTestimonials[selectedTestimonial].comment}"
                    </p>

                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={filteredTestimonials[selectedTestimonial].image}
                        alt={filteredTestimonials[selectedTestimonial].name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {filteredTestimonials[selectedTestimonial].name}
                        </h3>
                        <p className="text-sm text-purple-600">
                          {filteredTestimonials[selectedTestimonial].treatment}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < filteredTestimonials[selectedTestimonial].rating
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">
                        {filteredTestimonials[selectedTestimonial].date}
                      </span>
                    </div>
                  </motion.div>

                  <div className="flex gap-3 mt-8">
                    <button
                      onClick={prevTestimonial}
                      className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-purple-600" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-purple-600" />
                    </button>
                  </div>
                </div>

                <div className="relative h-96 md:h-auto bg-gradient-to-br from-purple-100 to-pink-100">
                  <img
                    src={filteredTestimonials[selectedTestimonial].image}
                    alt={filteredTestimonials[selectedTestimonial].name}
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                        <Award className="w-12 h-12 text-purple-600" />
                      </div>
                      <p className="text-2xl font-bold text-gray-900">
                        {filteredTestimonials[selectedTestimonial].highlight}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-80">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-xs text-gray-500">Age: {testimonial.age}</p>
                    </div>
                  </div>
                  {testimonial.verified && (
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                      Verified
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-purple-600 mb-2">{testimonial.treatment}</p>
                  <p className="text-gray-700 text-sm line-clamp-4">"{testimonial.comment}"</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {testimonial.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
            <p className="text-gray-600">Watch our patients share their transformation stories</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src={video.thumbnail}
                    alt={video.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-purple-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="font-semibold text-gray-900">{video.name}</h3>
                  <p className="text-sm text-gray-600">{video.treatment}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google"
              className="w-16 h-16 mx-auto mb-6 bg-white rounded-full p-3"
            />
            <h2 className="text-3xl font-bold mb-4">We're Rated 4.5 Stars on Google</h2>
            <p className="text-white/90 mb-6">Based on 500+ authentic patient reviews</p>

            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-8 h-8 ${
                    i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-white/30'
                  }`}
                />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Write a Review
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Read All Reviews
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Community of Happy Patients
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Experience the SkinScience difference and become part of our growing family
            of satisfied patients who have transformed their skin and confidence.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
            Book Your Consultation Today
          </Button>
        </div>
      </section>
    </div>
  );
};
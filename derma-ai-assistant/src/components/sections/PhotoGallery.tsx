import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const clinicPhotos = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=60",
    title: "Treatment Room 1",
    description: "State-of-the-art laser treatment facility"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&auto=format&fit=crop&q=60",
    title: "Reception Area",
    description: "Welcoming and comfortable waiting area"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=60",
    title: "Consultation Room",
    description: "Private consultation spaces"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&auto=format&fit=crop&q=60",
    title: "Treatment Room 2",
    description: "Advanced dermatology equipment"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&auto=format&fit=crop&q=60",
    title: "Therapy Suite",
    description: "Relaxing therapy environment"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?w=800&auto=format&fit=crop&q=60",
    title: "Recovery Area",
    description: "Comfortable post-treatment recovery space"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    comment: "The best dermatology clinic in Bangalore! Dr. Vani and her team are incredibly professional and caring. My acne treatment results exceeded expectations.",
    treatment: "Acne Treatment",
    date: "2 months ago"
  },
  {
    id: 2,
    name: "Rahul Mehta",
    rating: 5,
    comment: "Hair restoration treatment at SkinScience changed my life. The GFC therapy showed visible results within weeks. Highly recommended!",
    treatment: "Hair Restoration",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Sneha Reddy",
    rating: 5,
    comment: "Laser hair removal was painless and effective. The staff is very knowledgeable and made me feel comfortable throughout the process.",
    treatment: "Laser Hair Removal",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Arun Kumar",
    rating: 5,
    comment: "Excellent results with anti-aging treatment. The clinic uses the latest technology and the results speak for themselves.",
    treatment: "Anti-Aging",
    date: "1 month ago"
  }
];

export const PhotoGallery = () => {
  return (
    <>
      {/* Photo Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-purple-600 tracking-wide uppercase">GALLERY</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              PHOTO GALLERY
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take a virtual tour of our state-of-the-art facility
            </p>
          </motion.div>

          {/* Photo Carousel */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 }
            }}
            className="clinic-gallery"
          >
            {clinicPhotos.map((photo) => (
              <SwiperSlide key={photo.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{photo.title}</h3>
                      <p className="text-sm text-gray-200">{photo.description}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-purple-600 tracking-wide uppercase">CLIENT REVIEWS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              REAL PEOPLE, REAL RESULTS: HEAR WHAT OUR PATIENTS SAY
            </h2>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>

                {/* Author Info */}
                <div className="flex items-center justify-between border-t pt-4">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-purple-600">{testimonial.treatment}</p>
                  </div>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Google Reviews Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google"
                className="w-8 h-8"
              />
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">4.5</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600">Based on 500+ Google Reviews</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
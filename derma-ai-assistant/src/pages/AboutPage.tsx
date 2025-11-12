import { motion } from 'framer-motion';
import { Award, Users, Calendar, Shield, Target, Heart, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const milestones = [
  { year: '2006', title: 'Foundation', desc: 'Started with a 300 sqft clinic' },
  { year: '2010', title: 'Expansion', desc: 'Upgraded to 800 sqft facility' },
  { year: '2015', title: 'Advanced Tech', desc: 'Introduced Alma Soprano Laser' },
  { year: '2018', title: 'Major Upgrade', desc: 'Expanded to 2500 sqft' },
  { year: '2020', title: 'Digital Era', desc: 'Launched online consultations' },
  { year: '2024', title: 'AI Integration', desc: 'Introduced AI-powered assistant' }
];

const teamMembers = [
  {
    name: 'Dr. Vani Vasanth',
    role: 'Founder & Chief Dermatologist',
    qualification: 'MBBS, MD (Dermatology)',
    experience: '18+ years',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=60'
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Senior Dermatologist',
    qualification: 'MBBS, DVD',
    experience: '12 years',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&auto=format&fit=crop&q=60'
  },
  {
    name: 'Dr. Rahul Mehta',
    role: 'Cosmetic Surgeon',
    qualification: 'MBBS, MCh',
    experience: '15 years',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop&q=60'
  },
  {
    name: 'Dr. Sneha Reddy',
    role: 'Aesthetic Specialist',
    qualification: 'MBBS, DDVL',
    experience: '10 years',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&auto=format&fit=crop&q=60'
  }
];

export const AboutPage = () => {
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
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-sm font-semibold text-purple-600 tracking-wide uppercase">ABOUT SKINSCIENCE</span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-3 mb-6">
              Your Path to Beautiful, Healthy Skin
            </h1>
            <p className="text-xl text-gray-600">
              For over 18 years, SkinScience has been Bangalore's premier destination for
              advanced dermatological treatments, combining cutting-edge technology with
              compassionate care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded by Dr. Vani Vasanth in 2006, SkinScience Clinic began as a modest
                  300 sqft setup with a vision to provide world-class dermatological care
                  to the people of Bangalore.
                </p>
                <p>
                  Through dedication, expertise, and a patient-first approach, we've grown
                  to become one of Bangalore's most trusted dermatology clinics. Our current
                  2500 sqft state-of-the-art facility features four procedure rooms, an
                  operating theatre, two consultation rooms, and a fully equipped pharmacy.
                </p>
                <p>
                  Today, we're proud to have treated over 15,000 happy patients, maintaining
                  a 4.5-star Google rating and a 98% patient satisfaction rate. Our success
                  is built on the foundation of trust, expertise, and results.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  Meet Our Team
                </Button>
                <Button variant="outline">
                  View Our Facility
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=60"
                alt="Clinic Reception"
                className="rounded-xl shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=60"
                alt="Treatment Room"
                className="rounded-xl shadow-lg mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&auto=format&fit=crop&q=60"
                alt="Consultation"
                className="rounded-xl shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60"
                alt="Technology"
                className="rounded-xl shadow-lg mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To provide accessible, affordable, and advanced dermatological care
                that transforms lives and boosts confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading dermatology clinic in India, setting new standards
                in patient care and treatment excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Values</h3>
              <p className="text-gray-600">
                Integrity, compassion, excellence, and innovation guide every
                interaction and treatment at SkinScience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Journey</h2>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-pink-600"></div>
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="w-1/2" />
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full z-10"></div>
                  <div className={`w-1/2 px-8 ${index % 2 === 0 ? 'text-right' : ''}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <span className="text-purple-600 font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-1">{milestone.title}</h3>
                      <p className="text-gray-600 mt-2">{milestone.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of experienced dermatologists and specialists are dedicated to
              providing you with the best possible care and results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-purple-600 text-sm font-medium">{member.role}</p>
                  <p className="text-gray-600 text-sm mt-2">{member.qualification}</p>
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm text-gray-500">Experience</p>
                    <p className="font-semibold text-gray-900">{member.experience}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Users, value: '15,000+', label: 'Happy Patients' },
              { icon: Award, value: '50+', label: 'Awards Won' },
              { icon: Star, value: '4.5', label: 'Google Rating' },
              { icon: TrendingUp, value: '98%', label: 'Success Rate' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-white/80 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Experience the SkinScience Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join thousands of satisfied patients who have transformed their skin and
            confidence with our expert care and advanced treatments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              Book Your Consultation
            </Button>
            <Button size="lg" variant="outline">
              Take a Virtual Tour
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
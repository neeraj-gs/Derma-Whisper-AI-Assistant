import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Grid, Play, X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const galleryCategories = [
  { id: 'all', name: 'All', count: 48 },
  { id: 'clinic', name: 'Clinic Tour', count: 12 },
  { id: 'before-after', name: 'Before & After', count: 16 },
  { id: 'treatments', name: 'Treatments', count: 10 },
  { id: 'events', name: 'Events', count: 8 },
  { id: 'team', name: 'Our Team', count: 6 }
];

const galleryItems = [
  // Clinic Tour
  {
    id: 1,
    category: 'clinic',
    type: 'image',
    title: 'Reception Area',
    description: 'Our welcoming reception area',
    thumbnail: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=60',
    fullImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    category: 'clinic',
    type: 'image',
    title: 'Treatment Room 1',
    description: 'State-of-the-art laser treatment facility',
    thumbnail: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&auto=format&fit=crop&q=60',
    fullImage: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    category: 'clinic',
    type: 'image',
    title: 'Consultation Room',
    description: 'Private consultation spaces',
    thumbnail: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=60',
    fullImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    category: 'clinic',
    type: 'image',
    title: 'Waiting Lounge',
    description: 'Comfortable waiting area for patients',
    thumbnail: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&auto=format&fit=crop&q=60',
    fullImage: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&auto=format&fit=crop&q=80'
  },

  // Before & After
  {
    id: 5,
    category: 'before-after',
    type: 'comparison',
    title: 'Acne Treatment',
    description: 'Complete acne clearance in 3 months',
    before: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&auto=format&fit=crop&q=60',
    after: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 6,
    category: 'before-after',
    type: 'comparison',
    title: 'Pigmentation Treatment',
    description: 'Melasma reduction with Q-Switch laser',
    before: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&auto=format&fit=crop&q=60',
    after: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 7,
    category: 'before-after',
    type: 'comparison',
    title: 'Hair Restoration',
    description: 'GFC therapy results after 4 months',
    before: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=800&auto=format&fit=crop&q=60',
    after: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 8,
    category: 'before-after',
    type: 'comparison',
    title: 'Anti-Aging Treatment',
    description: 'Botox and filler combination results',
    before: 'https://images.unsplash.com/photo-1593351415075-3bac9f45c877?w=800&auto=format&fit=crop&q=60',
    after: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60'
  },

  // Treatments in Action
  {
    id: 9,
    category: 'treatments',
    type: 'image',
    title: 'Laser Hair Removal',
    description: 'Soprano laser treatment session',
    thumbnail: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&auto=format&fit=crop&q=60',
    fullImage: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&auto=format&fit=crop&q=80'
  },
  {
    id: 10,
    category: 'treatments',
    type: 'image',
    title: 'HydraFacial',
    description: 'Deep cleansing facial treatment',
    thumbnail: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=60',
    fullImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&auto=format&fit=crop&q=80'
  },
  {
    id: 11,
    category: 'treatments',
    type: 'video',
    title: 'PRP Treatment',
    description: 'Platelet-rich plasma therapy process',
    thumbnail: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&auto=format&fit=crop&q=60',
    videoUrl: '#'
  },

  // Events
  {
    id: 12,
    category: 'events',
    type: 'image',
    title: 'Skin Health Workshop',
    description: 'Educational workshop for patients',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60',
    fullImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80'
  },
  {
    id: 13,
    category: 'events',
    type: 'image',
    title: 'New Technology Launch',
    description: 'Introduction of Alma Soprano laser',
    thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60',
    fullImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&auto=format&fit=crop&q=80'
  },

  // Team
  {
    id: 14,
    category: 'team',
    type: 'image',
    title: 'Dr. Vani Vasanth',
    description: 'Founder & Chief Dermatologist',
    thumbnail: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=60',
    fullImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&auto=format&fit=crop&q=80'
  },
  {
    id: 15,
    category: 'team',
    type: 'image',
    title: 'Our Medical Team',
    description: 'Expert dermatologists and aestheticians',
    thumbnail: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&auto=format&fit=crop&q=60',
    fullImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1200&auto=format&fit=crop&q=80'
  }
];

export const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [comparisonPosition, setComparisonPosition] = useState(50);

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleComparisonDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setComparisonPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="text-sm font-semibold text-purple-600 tracking-wide uppercase">GALLERY</span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-3 mb-6">
              Visual Journey of Excellence
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our clinic, witness remarkable transformations, and see the expertise
              that makes SkinScience the leading dermatology clinic in Bangalore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-white shadow-sm sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {galleryCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-80">({category.count})</span>
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-gray-100'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-gray-100'}`}
              >
                <Camera className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className={`grid gap-6 ${
            viewMode === 'grid'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1 md:grid-cols-2'
          }`}>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                {item.type === 'comparison' ? (
                  <div className="relative h-64">
                    <img src={item.before} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
                    <img
                      src={item.after}
                      alt="After"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ clipPath: `inset(0 0 0 50%)` }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white rounded-full px-3 py-1 shadow-lg">
                        <span className="text-xs font-semibold">DRAG TO COMPARE</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    )}
                  </div>
                )}

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {selectedItem.type === 'comparison' ? (
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <div
                className="relative rounded-xl overflow-hidden cursor-ew-resize"
                onMouseMove={handleComparisonDrag}
              >
                <img src={selectedItem.before} alt="Before" className="w-full" />
                <div
                  className="absolute inset-0"
                  style={{ width: `${comparisonPosition}%` }}
                >
                  <img
                    src={selectedItem.after}
                    alt="After"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ width: `${100 * (100 / comparisonPosition)}%`, maxWidth: 'none' }}
                  />
                </div>
                <div
                  className="absolute top-0 bottom-0"
                  style={{ left: `${comparisonPosition}%` }}
                >
                  <div className="absolute top-0 bottom-0 w-1 bg-white shadow-lg -translate-x-1/2">
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <ChevronLeft className="w-4 h-4 text-gray-600 absolute -left-1" />
                      <ChevronRight className="w-4 h-4 text-gray-600 absolute -right-1" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  BEFORE
                </div>
                <div className="absolute top-4 right-4 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                  AFTER
                </div>
              </div>
              <div className="mt-4 text-center text-white">
                <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
                <p className="text-gray-300 mt-2">{selectedItem.description}</p>
              </div>
            </div>
          ) : selectedItem.type === 'video' ? (
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="bg-black rounded-xl aspect-video flex items-center justify-center">
                <p className="text-white">Video Player Placeholder</p>
              </div>
              <div className="mt-4 text-center text-white">
                <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
                <p className="text-gray-300 mt-2">{selectedItem.description}</p>
              </div>
            </div>
          ) : (
            <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedItem.fullImage}
                alt={selectedItem.title}
                className="w-full rounded-xl"
              />
              <div className="mt-4 text-center text-white">
                <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
                <p className="text-gray-300 mt-2">{selectedItem.description}</p>
                <Button
                  className="mt-4 bg-white/10 backdrop-blur-sm hover:bg-white/20"
                  onClick={() => window.open(selectedItem.fullImage, '_blank')}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Image
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      )}

      {/* Instagram Feed */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Follow Us on Instagram</h2>
          <p className="text-white/90 mb-8">@skinscience_bangalore</p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            View Instagram
          </Button>
        </div>
      </section>
    </div>
  );
};
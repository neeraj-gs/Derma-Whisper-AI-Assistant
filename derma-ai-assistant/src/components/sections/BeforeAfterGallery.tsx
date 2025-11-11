import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const galleryItems = [
  {
    id: 1,
    treatment: "Acne Treatment",
    before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&auto=format&fit=crop&q=60",
    after: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    treatment: "Pigmentation Removal",
    before: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&auto=format&fit=crop&q=60",
    after: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    treatment: "Anti-Aging",
    before: "https://images.unsplash.com/photo-1593351415075-3bac9f45c877?w=800&auto=format&fit=crop&q=60",
    after: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    treatment: "Hair Restoration",
    before: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=800&auto=format&fit=crop&q=60",
    after: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60",
  },
];

export const BeforeAfterGallery = () => {
  const [dragPositions, setDragPositions] = useState<{ [key: number]: number }>({});

  const handleDrag = (id: number, position: number) => {
    setDragPositions(prev => ({
      ...prev,
      [id]: Math.max(0, Math.min(100, position))
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-purple-600 tracking-wide uppercase">PORTFOLIO</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            BEFORE & AFTER GALLERY
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Compelling before and after gallery, showcasing the remarkable transformations achieved through our expert treatments.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-4 border-b">
                <h3 className="text-lg font-semibold text-gray-900">{item.treatment}</h3>
              </div>

              <div className="relative h-96 overflow-hidden group">
                {/* Before Image */}
                <img
                  src={item.before}
                  alt={`${item.treatment} - Before`}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* After Image with Slider */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${dragPositions[item.id] || 50}%` }}
                >
                  <img
                    src={item.after}
                    alt={`${item.treatment} - After`}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ width: `${100 * (100 / (dragPositions[item.id] || 50))}%`, maxWidth: 'none' }}
                  />
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 cursor-ew-resize group"
                  style={{ left: `${dragPositions[item.id] || 50}%` }}
                  onMouseDown={(e) => {
                    const startX = e.clientX;
                    const rect = e.currentTarget.parentElement!.getBoundingClientRect();
                    const startPosition = dragPositions[item.id] || 50;

                    const handleMouseMove = (e: MouseEvent) => {
                      const deltaX = e.clientX - startX;
                      const percentChange = (deltaX / rect.width) * 100;
                      handleDrag(item.id, startPosition + percentChange);
                    };

                    const handleMouseUp = () => {
                      document.removeEventListener('mousemove', handleMouseMove);
                      document.removeEventListener('mouseup', handleMouseUp);
                    };

                    document.addEventListener('mousemove', handleMouseMove);
                    document.addEventListener('mouseup', handleMouseUp);
                  }}
                >
                  <div className="absolute top-0 bottom-0 w-1 bg-white shadow-lg -translate-x-1/2">
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <span className="text-gray-600 text-xs font-medium select-none">DRAG</span>
                    </div>
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  BEFORE
                </div>
                <div className="absolute top-4 right-4 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                  AFTER
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all"
          >
            VIEW ALL
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
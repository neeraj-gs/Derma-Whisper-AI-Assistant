import { HeroSection } from '@/components/sections/HeroSection';
import { TreatmentsSection } from '@/components/sections/TreatmentsSection';
import { BeforeAfterGallery } from '@/components/sections/BeforeAfterGallery';
import { ConcernsSection } from '@/components/sections/ConcernsSection';
import { PhotoGallery } from '@/components/sections/PhotoGallery';

export const Home = () => {
  return (
    <>
      <HeroSection />
      <TreatmentsSection />
      <BeforeAfterGallery />
      <ConcernsSection />
      <PhotoGallery />
    </>
  );
};
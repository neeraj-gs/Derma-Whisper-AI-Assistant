/**
 * Demo Section Component
 * Interactive voice agent demo area
 */

import React from 'react';
import { cn } from '../../utils/cn';
import { VoiceAgent } from '../voice/VoiceAgent';
import siteConfig from '../../config/site.config';

interface DemoSectionProps {
  className?: string;
}

export const DemoSection: React.FC<DemoSectionProps> = ({ className }) => {
  return (
    <section
      id="demo"
      className={cn('py-20 bg-slate-950', className)}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Try It Live
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the future of customer communication. Click the button below to start a conversation with our AI.
            </p>
          </div>

          {/* Voice Agent Component */}
          <VoiceAgent
            config={siteConfig.voiceAgent}
            variant="default"
            showCapabilities={true}
          />
        </div>
      </div>
    </section>
  );
};

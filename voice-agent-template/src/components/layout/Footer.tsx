/**
 * Footer Component
 */

import React from 'react';
import { DynamicIcon } from '../../utils/icons';
import siteConfig from '../../config/site.config';

export const Footer: React.FC = () => {
  const { business, footer } = siteConfig;

  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">{business.name}</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              {business.description}
            </p>
            <div className="flex gap-4">
              {business.socials.twitter && (
                <a
                  href={business.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <DynamicIcon name="Twitter" size={18} />
                </a>
              )}
              {business.socials.linkedin && (
                <a
                  href={business.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <DynamicIcon name="Linkedin" size={18} />
                </a>
              )}
              {business.socials.facebook && (
                <a
                  href={business.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <DynamicIcon name="Facebook" size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <DynamicIcon name="Mail" size={16} />
                <a href={`mailto:${business.email}`} className="hover:text-white transition-colors">
                  {business.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <DynamicIcon name="Phone" size={16} />
                <a href={`tel:${business.phone}`} className="hover:text-white transition-colors">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <DynamicIcon name="MapPin" size={16} className="mt-1 flex-shrink-0" />
                <span>{business.address}</span>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Legal</h4>
            <ul className="space-y-3 text-gray-400">
              {footer.links.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="hover:text-white transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

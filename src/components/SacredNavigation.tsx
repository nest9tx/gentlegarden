'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SacredNavigationProps {
  currentPage?: string;
  showBackToGarden?: boolean;
  showSanctuaries?: boolean;
}

export default function SacredNavigation({ 
  currentPage = '', 
  showBackToGarden = true,
  showSanctuaries = true 
}: SacredNavigationProps) {
  const pathname = usePathname();
  
  const sanctuaryLinks = [
    { name: 'Morning Light', href: '/community/morning-light', symbol: '🌅' },
    { name: 'Heart Temple', href: '/community/heart-temple', symbol: '💖' },
    { name: 'Wisdom Grove', href: '/community/wisdom-grove', symbol: '🌳' },
    { name: 'Moon Chamber', href: '/community/moon-chamber', symbol: '🌙' },
    { name: 'Integration', href: '/community/integration', symbol: '🔄' },
    { name: 'Evening Peace', href: '/community/evening-peace', symbol: '🌙' }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900/80 to-indigo-900/80 backdrop-blur-sm border-b border-purple-300/20">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* Left Navigation */}
          <div className="flex items-center space-x-4">
            {showBackToGarden && (
              <Link 
                href="/garden"
                className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-xl text-purple-200 hover:bg-white/20 hover:text-white transition-all duration-300 text-sm"
              >
                <span>🌸</span>
                <span>Sacred Garden</span>
              </Link>
            )}
            
            <Link 
              href="/community"
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-xl text-purple-200 hover:bg-white/20 hover:text-white transition-all duration-300 text-sm"
            >
              <span>🏛️</span>
              <span>All Sanctuaries</span>
            </Link>
          </div>

          {/* Center - Current Page */}
          {currentPage && (
            <div className="text-center">
              <div className="text-purple-100 font-medium text-lg">{currentPage}</div>
            </div>
          )}

          {/* Right - Quick Sanctuary Links */}
          {showSanctuaries && (
            <div className="hidden md:flex items-center space-x-2">
              {sanctuaryLinks.map((sanctuary) => (
                <Link
                  key={sanctuary.href}
                  href={sanctuary.href}
                  className={`p-2 rounded-lg transition-all duration-300 hover:bg-white/20 group relative ${
                    pathname === sanctuary.href ? 'bg-white/20 text-white' : 'text-purple-300 hover:text-white'
                  }`}
                  title={sanctuary.name}
                >
                  <span className="text-lg">{sanctuary.symbol}</span>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      {sanctuary.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button className="p-2 text-purple-300 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

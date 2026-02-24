import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { PageType } from '../types';

interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType, memberId?: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Projects', page: 'projects' },
    { label: 'Contact Us', page: 'contact' },
  ];

  const handleNavigate = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed top-0 w-full z-50"
      style={{
        background: 'rgba(17, 14, 14, 0.36)', // glass
        backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)',
        borderBottom: '1px solid rgba(255,255,255,0.15)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavigate('home')}
          >
            {/* Circular Logo Image */}
            <div className="w-11 h-11 rounded-full overflow-hidden border border-white/30 transition-transform duration-500 group-hover:rotate-12">
              <img
                src="/logo.jpg" // 👈 apna logo yaha daal
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Brand Name */}
            <div className="text-lg font-semibold tracking-tight">
              <span className="text-white">DevUnite</span>
              <span className="text-white/60 ml-1">Studio</span>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`px-5 py-2.5 text-sm font-medium rounded-md transition-all duration-300
                ${
                  currentPage === item.page
                    ? 'text-white bg-white/20 border border-white/20'
                    : 'text-white/70 hover:text-white hover:bg-white/15'
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => handleNavigate('contact')}
              className="ml-3 px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-md
              bg-white text-black hover:opacity-90 transition"
            >
              Get Started
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-md
            border border-white/20 bg-white/10"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          background: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(18px)',
        }}
      >
        <div className="px-4 py-5 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavigate(item.page)}
              className={`block w-full text-left px-5 py-3 rounded-md transition
              ${
                currentPage === item.page
                  ? 'text-white bg-white/20'
                  : 'text-white/70 hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
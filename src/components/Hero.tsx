import { ArrowRight, Sparkles, Code, Zap } from 'lucide-react';
import { PageType } from '../types';
import { useEffect, useState } from 'react';

interface HeroProps {
  onNavigate: (page: PageType) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Designing a Better",
      highlight: "World Today",
      subtitle: "Pioneering AI and web innovation where creativity knows no limits"
    },
    {
      title: "Building Intelligent",
      highlight: "Digital Solutions",
      subtitle: "Transform your vision into reality with cutting-edge technology"
    },
    {
      title: "Crafting Exceptional",
      highlight: "User Experiences",
      subtitle: "Where design meets functionality in perfect harmony"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const addRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position:absolute; border-radius:50%;
      background:rgba(0,0,0,0.12); pointer-events:none;
      width:60px; height:60px;
      left:${e.clientX - rect.left - 30}px;
      top:${e.clientY - rect.top - 30}px;
      animation: ripple-anim 0.6s ease-out forwards;
    `;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* BW floating blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full animate-blob-bounce blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)' }}></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full animate-blob-bounce blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.11) 0%, transparent 70%)', animationDelay: '3s' }}></div>

      {/* 3D Cubes - BW tinted */}
      <div className="absolute top-1/4 right-20 w-32 h-32 animate-rotate3d"
        style={{ border: '1px solid rgba(255,255,255,0.25)' }}></div>
      <div className="absolute bottom-1/3 left-20 w-24 h-24 animate-rotate3d"
        style={{ border: '1px solid rgba(255,255,255,0.11)', animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-10 animate-scaleIn hover:scale-105 transition-transform cursor-pointer group"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
            <Sparkles className="w-4 h-4 animate-pulse" style={{ color: '#f0f0f0' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#dddddd' }}>
              AI-Powered Innovation Studio
            </span>
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#ffffff' }}></div>
          </div>

          {/* Hero Carousel */}
          <div className="relative h-64 md:h-72 mb-10 overflow-hidden">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : index < currentSlide
                      ? 'opacity-0 -translate-y-full'
                      : 'opacity-0 translate-y-full'
                }`}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-tight mb-4"
                  style={{ fontFamily: 'DM Serif Display, serif', letterSpacing: '-0.03em' }}>
                  <span className="block drop-shadow-2xl" style={{ color: '#fafafa' }}>
                    {slide.title}
                  </span>
                  <span className="block mt-2" style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #9a9a9a 50%, #ffffff 100%)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'gradient-shift 6s ease infinite',
                  }}>
                    {slide.highlight}
                  </span>
                </h1>
                <p style={{ color: '#dddddd', fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '42rem', margin: '0 auto', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
                  {slide.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2 mb-12 animate-slideUp" style={{ animationDelay: '0.3s' }}>
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: index === currentSlide ? '3rem' : '0.5rem',
                  height: '0.4rem',
                  background: index === currentSlide ? '#ffffff' : 'rgba(255,255,255,0.2)',
                }}
              ></button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={(e) => { addRipple(e); onNavigate('projects'); }}
              className="group relative px-10 py-4 font-bold rounded-sm transition-all duration-300 flex items-center gap-3 overflow-hidden shimmer-hover"
              style={{
                background: '#ffffff',
                color: '#080808',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                letterSpacing: '0.06em',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                boxShadow: '0 4px 24px rgba(255,255,255,0.22)',
                borderRadius: '4px',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 6px 32px rgba(255,255,255,0.22)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 4px 24px rgba(255,255,255,0.22)')}
            >
              <Code className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Explore Projects</span>
              <div className="w-8 h-8 flex items-center justify-center relative z-10 transition-transform duration-300"
                style={{ background: '#080808', borderRadius: '2px' }}>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" style={{ color: '#ffffff' }} />
              </div>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="group px-10 py-4 font-semibold flex items-center gap-3 transition-all duration-300"
              style={{
                background: 'transparent',
                color: '#dddddd',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 600,
                letterSpacing: '0.06em',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: '4px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
                e.currentTarget.style.color = '#dddddd';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-20 animate-slideUp" style={{ animationDelay: '0.6s' }}>
            {[
              { number: "10+", label: "Projects Delivered" },
              { number: "20+", label: "Happy Clients" },
              { number: "1+", label: "Years Experience" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index}
                className="p-6 hover:scale-105 transition-all duration-300 cursor-pointer group shimmer-hover"
                style={{
                  background: 'rgba(255,255,255,0.11)',
                  border: '1px solid rgba(255,255,255,0.13)',
                  borderRadius: '4px',
                  backdropFilter: 'blur(20px)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.border = '1px solid rgba(255,255,255,0.26)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.09)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.border = '1px solid rgba(255,255,255,0.13)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.11)';
                }}
              >
                <div style={{
                  fontFamily: 'DM Serif Display, serif',
                  fontSize: '2.5rem',
                  color: '#ffffff',
                  marginBottom: '0.4rem',
                  lineHeight: 1.1,
                }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#aaaaaa', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500 }}
                  className="group-hover:text-gray-400 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)' }}></div>
    </div>
  );
}

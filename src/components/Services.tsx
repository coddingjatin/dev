import { Code, Brain, Wrench, Zap, Briefcase, Rocket } from 'lucide-react';
import { Service } from '../types';
import { useState, useEffect } from 'react';

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const services: Service[] = [
    { title: 'Full Stack Web & App Development', description: 'End-to-end development of modern web and mobile applications using cutting-edge technologies and best practices.', icon: 'code' },
    { title: 'AI & Machine Learning Integration', description: 'Integrate intelligent AI and ML models into your applications for smarter, data-driven decision-making.', icon: 'brain' },
    { title: 'Custom Software Solutions', description: 'Tailored software solutions meticulously designed to meet your unique business requirements and goals.', icon: 'wrench' },
    { title: 'API Development & Automation', description: 'Build robust, scalable APIs and automate complex workflows to streamline your business operations.', icon: 'zap' },
    { title: 'Business & Startup Solutions', description: 'Comprehensive digital solutions to help startups and enterprises scale efficiently in the modern market.', icon: 'briefcase' },
    { title: 'Cloud & DevOps Services', description: 'Modern cloud infrastructure setup, deployment pipelines, and DevOps practices for optimal performance.', icon: 'rocket' },
  ];

  const getIcon = (iconName: string) => {
    const iconProps = { className: 'w-8 h-8', strokeWidth: 1.5 };
    switch (iconName) {
      case 'code': return <Code {...iconProps} />;
      case 'brain': return <Brain {...iconProps} />;
      case 'wrench': return <Wrench {...iconProps} />;
      case 'zap': return <Zap {...iconProps} />;
      case 'briefcase': return <Briefcase {...iconProps} />;
      case 'rocket': return <Rocket {...iconProps} />;
      default: return <Code {...iconProps} />;
    }
  };

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(services.length / 3));
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlay, services.length]);

  const nextSlide = () => { setCurrentIndex((prev) => (prev + 1) % Math.ceil(services.length / 3)); setIsAutoPlay(false); };
  const prevSlide = () => { setCurrentIndex((prev) => (prev - 1 + Math.ceil(services.length / 3)) % Math.ceil(services.length / 3)); setIsAutoPlay(false); };
  const goToSlide = (index: number) => { setCurrentIndex(index); setIsAutoPlay(false); };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* BW background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl animate-blob-bounce"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.09) 0%, transparent 70%)' }}></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full blur-3xl animate-blob-bounce"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)', animationDelay: '2s' }}></div>
      <div className="absolute top-40 left-10 w-24 h-24 animate-rotate3d" style={{ border: '1px solid rgba(255,255,255,0.11)' }}></div>
      <div className="absolute bottom-40 right-10 w-32 h-32 animate-rotate3d" style={{ border: '1px solid rgba(255,255,255,0.09)', animationDelay: '3s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#bbbbbb',
              border: '1px solid rgba(255,255,255,0.22)',
              padding: '0.5rem 1.25rem',
              borderRadius: '2px',
              background: 'rgba(255,255,255,0.11)',
            }}>
              What We Offer
            </span>
          </div>
          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fafafa', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
            Our <em style={{ fontStyle: 'italic', color: '#bbbbbb' }}>Services</em>
          </h2>
          <p style={{ color: '#888888', maxWidth: '36rem', margin: '0 auto', lineHeight: 1.75, fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '1rem' }}>
            Comprehensive technology solutions to transform your business ideas into reality with cutting-edge innovation
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(services.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-4">
                    {services.slice(slideIndex * 3, slideIndex * 3 + 3).map((service, index) => (
                      <div key={index} className="group relative card-3d shimmer-hover">
                        {/* Card glow on hover */}
                        <div className="absolute inset-0 rounded-sm blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{ background: 'rgba(255,255,255,0.25)', borderRadius: '4px' }}></div>

                        {/* Main card */}
                        <div className="relative p-8 h-full overflow-hidden transition-all duration-500"
                          style={{
                            background: 'rgba(255,255,255,0.09)',
                            border: '1px solid rgba(255,255,255,0.13)',
                            borderRadius: '4px',
                            backdropFilter: 'blur(20px)',
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.border = '1px solid rgba(255,255,255,0.25)';
                            (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.25)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.border = '1px solid rgba(255,255,255,0.13)';
                            (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.09)';
                          }}
                        >
                          {/* Top accent line */}
                          <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)' }}></div>

                          <div className="relative z-10">
                            {/* Icon */}
                            <div className="w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                              style={{
                                background: 'rgba(255,255,255,0.11)',
                                border: '1px solid rgba(255,255,255,0.22)',
                                borderRadius: '4px',
                                color: '#dddddd',
                              }}>
                              {getIcon(service.icon)}
                            </div>

                            {/* Title */}
                            <h3 className="mb-4 transition-colors" style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.3rem', color: '#fafafa', letterSpacing: '-0.01em', lineHeight: 1.3 }}>
                              {service.title}
                            </h3>

                            {/* Description */}
                            <p style={{ color: '#888888', lineHeight: 1.75, fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.9rem' }}
                              className="group-hover:text-gray-400 transition-colors">
                              {service.description}
                            </p>

                            {/* Bottom line */}
                            <div className="mt-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                              style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.2), transparent)' }}></div>
                          </div>

                          {/* Corner decoration */}
                          <div className="absolute top-4 right-4 w-8 h-8 rotate-45 transition-all duration-500 group-hover:rotate-90"
                            style={{ border: '1px solid rgba(255,255,255,0.25)' }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 flex items-center justify-center transition-all duration-300 group"
            style={{ background: 'rgba(255,255,255,0.25)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', backdropFilter: 'blur(20px)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ffffff'; (e.currentTarget as HTMLElement).style.borderColor = '#ffffff'; (e.currentTarget as HTMLElement).querySelector('svg')!.style.color = '#080808'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.25)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).querySelector('svg')!.style.color = '#dddddd'; }}
          >
            <svg className="w-5 h-5 transition-colors" style={{ color: '#dddddd' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 flex items-center justify-center transition-all duration-300 group"
            style={{ background: 'rgba(255,255,255,0.25)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', backdropFilter: 'blur(20px)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ffffff'; (e.currentTarget as HTMLElement).style.borderColor = '#ffffff'; (e.currentTarget as HTMLElement).querySelector('svg')!.style.color = '#080808'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.25)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).querySelector('svg')!.style.color = '#dddddd'; }}
          >
            <svg className="w-5 h-5 transition-colors" style={{ color: '#dddddd' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: Math.ceil(services.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: index === currentIndex ? '2.5rem' : '0.4rem',
                  height: '0.35rem',
                  background: index === currentIndex ? '#ffffff' : 'rgba(255,255,255,0.18)',
                  borderRadius: '999px',
                }}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

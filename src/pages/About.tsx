import { Target, Heart, Lightbulb, Shield, Users, Award, Zap, TrendingUp, Globe, Rocket, Star, CheckCircle } from 'lucide-react';

const cardStyle = {
  background: 'rgba(255,255,255,0.09)',
  border: '1px solid rgba(255,255,255,0.13)',
  borderRadius: '4px',
  backdropFilter: 'blur(20px)',
};

const cardHover = {
  enter: (el: HTMLElement) => {
    el.style.border = '1px solid rgba(255,255,255,0.25)';
    el.style.background = 'rgba(255,255,255,0.09)';
  },
  leave: (el: HTMLElement) => {
    el.style.border = '1px solid rgba(255,255,255,0.13)';
    el.style.background = 'rgba(255,255,255,0.09)';
  },
};

export default function About() {
  const values = [
    { icon: <Heart className="w-8 h-8" />, title: 'Passion-Driven', description: 'We are a team of passionate developers who love what we do and are committed to excellence in every line of code we write.' },
    { icon: <Shield className="w-8 h-8" />, title: 'Quality & Transparency', description: 'We maintain the highest standards of quality and believe in transparent communication throughout the development journey.' },
    { icon: <Lightbulb className="w-8 h-8" />, title: 'Innovation First', description: 'We stay ahead of the curve by embracing cutting-edge technologies and innovative solutions that drive real results.' },
    { icon: <Target className="w-8 h-8" />, title: 'Long-Term Partnerships', description: 'We build lasting relationships with our clients, supporting them throughout their entire digital transformation journey.' },
  ];

  const achievements = [
    { icon: <Award className="w-7 h-7" />, number: '50+', label: 'Projects Completed' },
    { icon: <Users className="w-7 h-7" />, number: '30+', label: 'Happy Clients' },
    { icon: <Globe className="w-7 h-7" />, number: '10+', label: 'Countries Served' },
    { icon: <Star className="w-7 h-7" />, number: '98%', label: 'Client Satisfaction' },
  ];

  const expertise = [
    { title: 'Full Stack Development', description: 'Modern web & mobile apps with React, Next.js, Node.js, and cloud technologies' },
    { title: 'AI & Machine Learning', description: 'Intelligent systems with TensorFlow, PyTorch, NLP, and computer vision' },
    { title: 'Cloud & DevOps', description: 'Scalable infrastructure with AWS, Azure, Docker, Kubernetes, and CI/CD pipelines' },
    { title: 'UI/UX Design', description: 'Beautiful, intuitive interfaces that users love and convert' },
    { title: 'API Development', description: 'Robust, secure APIs with GraphQL, REST, and microservices architecture' },
    { title: 'Blockchain & Web3', description: 'Decentralized applications, smart contracts, and NFT platforms' },
  ];

  const labelStyle = {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.72rem',
    fontWeight: 600,
    letterSpacing: '0.14em',
    textTransform: 'uppercase' as const,
    color: '#bbbbbb',
    border: '1px solid rgba(255,255,255,0.1)',
    padding: '0.45rem 1.1rem',
    borderRadius: '2px',
    background: 'rgba(255,255,255,0.09)',
    display: 'inline-block',
  };

  return (
    <div className="pt-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ background: '#080808' }}></div>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl animate-blob-bounce"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.09) 0%, transparent 70%)' }}></div>
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full blur-3xl animate-blob-bounce"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)', animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 py-24" style={{ borderBottom: '1px solid rgba(255,255,255,0.11)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slideUp">
            <div className="mb-8 animate-scaleIn">
              <span style={labelStyle}>
                About DevUnite Studio
              </span>
            </div>
            <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(2.8rem, 6vw, 5rem)', color: '#fafafa', letterSpacing: '-0.03em', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Building the <em style={{ fontStyle: 'italic', color: '#bbbbbb' }}>Future</em> of Digital
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#888888', maxWidth: '50rem', margin: '0 auto', lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
              We're not just developers – we're innovators, problem-solvers, and your partners in creating intelligent digital solutions that transform businesses
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft">
              <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fafafa', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                Our <em style={{ fontStyle: 'italic', color: '#bbbbbb' }}>Story</em>
              </h2>
              <div className="space-y-5" style={{ color: '#888888', lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.95rem' }}>
                <p>DevUnite Studio was born from a simple yet powerful vision: to unite talented developers and create intelligent digital products that make a real difference in the world. We're not just another development agency – we're your dedicated technology partners.</p>
                <p>Our journey began with a group of passionate technologists who believed that great software is built on three pillars: innovation, quality, and collaboration. Today, we've grown into a full-service digital innovation studio, but our core values remain unchanged.</p>
                <p>We specialize in cutting-edge technologies including AI/ML, full-stack development, cloud architecture, and blockchain. Our expertise spans across industries, from startups launching their MVP to Fortune 500 companies modernizing their tech stack.</p>
                <p>What sets us apart is our commitment to not just delivering code, but crafting experiences. Every project we undertake is treated as our own, with meticulous attention to detail, scalable architecture, and user-centric design.</p>
              </div>
            </div>

            <div className="animate-slideInRight">
              <div className="grid grid-cols-2 gap-5">
                {achievements.map((achievement, index) => (
                  <div key={index}
                    className="p-7 transition-all duration-500 hover:scale-105 group cursor-default shimmer-hover"
                    style={{ ...cardStyle, animationDelay: `${index * 0.1}s` }}
                    onMouseEnter={e => cardHover.enter(e.currentTarget as HTMLElement)}
                    onMouseLeave={e => cardHover.leave(e.currentTarget as HTMLElement)}
                  >
                    <div className="w-12 h-12 flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                      style={{ background: 'rgba(255,255,255,0.11)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '3px', color: '#dddddd' }}>
                      {achievement.icon}
                    </div>
                    <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: '2.5rem', color: '#ffffff', marginBottom: '0.3rem', lineHeight: 1 }}>
                      {achievement.number}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#888888', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500 }}>
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative z-10 py-24" style={{ borderTop: '1px solid rgba(255,255,255,0.25)', borderBottom: '1px solid rgba(255,255,255,0.25)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-12 transition-all duration-500 animate-slideInLeft shimmer-hover"
              style={cardStyle}
              onMouseEnter={e => cardHover.enter(e.currentTarget as HTMLElement)}
              onMouseLeave={e => cardHover.leave(e.currentTarget as HTMLElement)}>
              <div className="w-16 h-16 flex items-center justify-center mb-6"
                style={{ background: '#ffffff', borderRadius: '4px', color: '#080808' }}>
                <Target className="w-8 h-8" />
              </div>
              <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.8rem', color: '#fafafa', marginBottom: '1rem', letterSpacing: '-0.01em' }}>Our Mission</h3>
              <p style={{ color: '#888888', lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
                To empower businesses worldwide with intelligent, scalable digital solutions that drive growth, innovation, and lasting impact. We're committed to transforming ideas into reality through cutting-edge technology and exceptional craftsmanship.
              </p>
            </div>

            <div className="p-12 transition-all duration-500 animate-slideInRight shimmer-hover"
              style={cardStyle}
              onMouseEnter={e => cardHover.enter(e.currentTarget as HTMLElement)}
              onMouseLeave={e => cardHover.leave(e.currentTarget as HTMLElement)}>
              <div className="w-16 h-16 flex items-center justify-center mb-6"
                style={{ background: 'rgba(255,255,255,0.25)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '4px', color: '#dddddd' }}>
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.8rem', color: '#fafafa', marginBottom: '1rem', letterSpacing: '-0.01em' }}>Our Vision</h3>
              <p style={{ color: '#888888', lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
                To be the global leader in AI-powered digital transformation, recognized for our innovation, technical excellence, and unwavering commitment to client success. We envision a future where technology seamlessly enhances every aspect of business and life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slideUp">
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fafafa', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Our <em style={{ fontStyle: 'italic', color: '#bbbbbb' }}>Expertise</em>
            </h2>
            <p style={{ color: '#888888', maxWidth: '36rem', margin: '0 auto', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
              Comprehensive technology solutions across the entire digital spectrum
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <div key={index}
                className="p-7 transition-all duration-500 hover:scale-105 group shimmer-hover"
                style={{ ...cardStyle, animation: 'slideUp 0.6s ease-out backwards', animationDelay: `${index * 0.08}s` }}
                onMouseEnter={e => cardHover.enter(e.currentTarget as HTMLElement)}
                onMouseLeave={e => cardHover.leave(e.currentTarget as HTMLElement)}
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#bbbbbb' }} />
                  <h3 className="transition-colors" style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.1rem', color: '#fafafa', letterSpacing: '-0.01em' }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ color: '#7a7a7a', lineHeight: 1.7, fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.88rem', paddingLeft: '2rem' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative z-10 py-24" style={{ borderTop: '1px solid rgba(255,255,255,0.25)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slideUp">
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fafafa', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Our Core <em style={{ fontStyle: 'italic', color: '#bbbbbb' }}>Values</em>
            </h2>
            <p style={{ color: '#888888', maxWidth: '36rem', margin: '0 auto', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
              The principles that guide everything we do and every solution we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index}
                className="p-8 text-center transition-all duration-500 hover:scale-105 group shimmer-hover"
                style={{ ...cardStyle, animation: 'scaleIn 0.6s ease-out backwards', animationDelay: `${index * 0.08}s` }}
                onMouseEnter={e => cardHover.enter(e.currentTarget as HTMLElement)}
                onMouseLeave={e => cardHover.leave(e.currentTarget as HTMLElement)}
              >
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: 'rgba(255,255,255,0.11)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', color: '#dddddd' }}>
                  {value.icon}
                </div>
                <h3 className="mb-3" style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.1rem', color: '#fafafa', letterSpacing: '-0.01em' }}>
                  {value.title}
                </h3>
                <p style={{ color: '#7a7a7a', lineHeight: 1.7, fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.85rem' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-16 text-center relative overflow-hidden group shimmer-hover"
            style={{ ...cardStyle, border: '1px solid rgba(255,255,255,0.25)' }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.11) 0%, transparent 70%)' }}></div>
            <div className="relative z-10">
              <Zap className="w-12 h-12 mx-auto mb-6 animate-pulse" style={{ color: '#888888' }} />
              <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fafafa', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                Ready to Build Something <em style={{ fontStyle: 'italic', color: '#bbbbbb' }}>Amazing?</em>
              </h2>
              <p style={{ color: '#888888', lineHeight: 1.8, maxWidth: '36rem', margin: '0 auto 2.5rem', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
                Let's turn your ideas into intelligent, scalable digital solutions that drive real business impact
              </p>
              <button
                className="px-12 py-4 font-semibold transition-all duration-300 hover:scale-105 shimmer-hover"
                style={{
                  background: '#ffffff',
                  color: '#080808',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  borderRadius: '3px',
                  boxShadow: '0 4px 24px rgba(255,255,255,0.22)',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 36px rgba(255,255,255,0.22)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(255,255,255,0.22)'}
              >
                Start Your Project Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

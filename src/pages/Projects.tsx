import { ExternalLink, Code2, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { Project } from '../types';

export default function Projects() {
 const projects: Project[] = [
  {
    title: 'Safe Route Navigation System',
    description:
      'An intelligent navigation application designed to suggest the safest routes based on time of day, locality, gender-sensitive parameters, and historical safety data. Built to help women and newcomers navigate unfamiliar cities with confidence.',
    technologies: [
      'React Native',
      'Firebase',
      'Google Maps API',
      'Machine Learning',
      'Node.js',
    ],
    category: 'AI & Safety',
  },
  {
    title: 'Mental Health Support Chatbot',
    description:
      'An AI-powered mental health chatbot that provides emotional support, coping strategies, and mental well-being guidance using NLP techniques, ensuring privacy and empathetic interactions.',
    technologies: [
      'Python',
      'NLP',
      'Flask',
      'React',
      'Machine Learning',
    ],
    category: 'AI & Healthcare',
  },
  {
    title: 'Fraud Detection & Transaction Monitoring System',
    description:
      'An ensemble-based fraud detection system that analyzes transaction data using multiple ML models and evaluates performance through accuracy, precision, recall, F1-score, and confidence metrics.',
    technologies: [
      'Python',
      'Scikit-learn',
      'Machine Learning',
      'Pandas',
      'Flask',
    ],
    category: 'FinTech & AI',
  },
  {
    title: 'Customer Complaint Classification System',
    description:
      'NLP-based classification system that automatically categorizes customer complaints into predefined financial product categories to assist faster resolution and analysis.',
    technologies: [
      'Python',
      'NLP',
      'Machine Learning',
      'TF-IDF',
      'Classification Models',
    ],
    category: 'NLP & Automation',
  },
  {
    title: 'Smart Inventory Management Platform',
    description:
      'A digital inventory management system with analytics-driven insights for tracking stock, managing products, and optimizing inventory operations for small businesses.',
    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'Express',
      'REST APIs',
    ],
    category: 'Business Solutions',
  },
  {
    title: 'Computer Vision Image Classification Model',
    description:
      'A deep learning-based image classification system built using convolutional neural networks to accurately identify and categorize images across multiple classes.',
    technologies: [
      'Python',
      'CNN',
      'TensorFlow',
      'Keras',
      'OpenCV',
    ],
    category: 'AI & ML',
  },
];

  const cardStyle = {
    background: 'rgba(255,255,255,0.09)',
    border: '1px solid rgba(255,255,255,0.13)',
    borderRadius: '4px',
    backdropFilter: 'blur(20px)',
  };

  return (
    <div className="pt-16 relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ background: '#080808' }}></div>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full blur-3xl animate-blob-bounce"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] rounded-full blur-3xl animate-blob-bounce"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.018) 0%, transparent 70%)', animationDelay: '3s' }}></div>
      </div>

      {/* Hero */}
      <div className="relative z-10 py-24" style={{ borderBottom: '1px solid rgba(255,255,255,0.11)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slideUp">
            <div className="mb-8 animate-scaleIn">
              <span style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', fontWeight: 600,
                letterSpacing: '0.14em', textTransform: 'uppercase', color: '#bbbbbb',
                border: '1px solid rgba(255,255,255,0.1)', padding: '0.45rem 1.1rem',
                borderRadius: '2px', background: 'rgba(255,255,255,0.09)',
              }}>
                Our Portfolio
              </span>
            </div>
            <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(2.8rem, 6vw, 5rem)', color: '#fafafa', letterSpacing: '-0.03em', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Featured <em style={{ fontStyle: 'italic', color: '#bbbbbb' }}>Projects</em>
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#888888', maxWidth: '50rem', margin: '0 auto', lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
              Showcasing intelligent solutions that drive business growth, innovation, and digital transformation across industries
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((project, index) => (
              <div key={index}
                className="group overflow-hidden transition-all duration-500 hover:scale-[1.02] card-3d shimmer-hover"
                style={{ ...cardStyle, animation: 'slideUp 0.6s ease-out backwards', animationDelay: `${index * 0.07}s` }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.border = '1px solid rgba(255,255,255,0.26)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.25)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(255,255,255,0.25)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.border = '1px solid rgba(255,255,255,0.13)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.09)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {/* Top accent line */}
                <div className="h-px" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.11), rgba(255,255,255,0.18), rgba(255,255,255,0.11))' }}></div>

                <div className="p-6 relative">
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-5">
                      <span style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#bbbbbb',
                        border: '1px solid rgba(255,255,255,0.1)',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '2px',
                        background: 'rgba(255,255,255,0.25)',
                      }}>
                        {project.category}
                      </span>
                      <div className="w-10 h-10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                        style={{ background: 'rgba(255,255,255,0.11)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '3px', color: '#bbbbbb' }}>
                        <Code2 className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mb-4 transition-colors"
                      style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.25rem', color: '#fafafa', letterSpacing: '-0.01em', lineHeight: 1.35 }}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-6 line-clamp-4"
                      style={{ color: '#7a7a7a', lineHeight: 1.75, fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.87rem' }}>
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="pt-4 mb-5" style={{ borderTop: '1px solid rgba(255,255,255,0.11)' }}>
                      <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888888', fontFamily: 'DM Sans, sans-serif', marginBottom: '0.75rem' }}>
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex}
                            style={{
                              fontFamily: 'DM Sans, sans-serif',
                              fontSize: '0.72rem',
                              fontWeight: 500,
                              color: '#7a7a7a',
                              background: 'rgba(255,255,255,0.25)',
                              border: '1px solid rgba(255,255,255,0.13)',
                              padding: '0.2rem 0.6rem',
                              borderRadius: '2px',
                            }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <button
                      className="w-full py-3 font-semibold flex items-center justify-center gap-2 transition-all duration-300 group/btn"
                      style={{
                        background: 'rgba(255,255,255,0.09)',
                        color: '#dddddd',
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        fontSize: '0.78rem',
                        textTransform: 'uppercase',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '3px',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = '#ffffff';
                        (e.currentTarget as HTMLElement).style.color = '#080808';
                        (e.currentTarget as HTMLElement).style.borderColor = '#ffffff';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.09)';
                        (e.currentTarget as HTMLElement).style.color = '#dddddd';
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                      }}
                    >
                      <span>View Case Study</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 py-24" style={{ borderTop: '1px solid rgba(255,255,255,0.09)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <TrendingUp className="w-6 h-6" />, number: '10+', label: 'Projects Delivered' },
              { icon: <Zap className="w-6 h-6" />, number: '98%', label: 'Client Satisfaction' },
              { icon: <Code2 className="w-6 h-6" />, number: '100K+', label: 'Lines of Code' },
              { icon: <Sparkles className="w-6 h-6" />, number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div key={index}
                className="p-8 text-center transition-all duration-500 hover:scale-105 group shimmer-hover"
                style={{ ...cardStyle, animation: 'scaleIn 0.6s ease-out backwards', animationDelay: `${index * 0.08}s` }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.border = '1px solid rgba(255,255,255,0.25)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.25)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.border = '1px solid rgba(255,255,255,0.13)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.09)';
                }}
              >
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: 'rgba(255,255,255,0.11)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '3px', color: '#bbbbbb' }}>
                  {stat.icon}
                </div>
                <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: '3rem', color: '#ffffff', marginBottom: '0.3rem', lineHeight: 1 }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#7a7a7a', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-16 text-center relative overflow-hidden group shimmer-hover"
            style={{ background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '4px', backdropFilter: 'blur(20px)' }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.11) 0%, transparent 70%)' }}></div>
            <div className="relative z-10">
              <Sparkles className="w-10 h-10 mx-auto mb-6 animate-pulse" style={{ color: '#888888' }} />
              <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fafafa', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                Have a Project in <em style={{ fontStyle: 'italic', color: '#bbbbbb' }}>Mind?</em>
              </h2>
              <p style={{ color: '#888888', lineHeight: 1.8, maxWidth: '36rem', margin: '0 auto 2.5rem', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
                Let's collaborate to build your next intelligent solution. Our team is ready to turn your vision into a powerful digital reality.
              </p>
              <button
                className="px-12 py-4 font-semibold transition-all duration-300 hover:scale-105 shimmer-hover"
                style={{
                  background: '#ffffff', color: '#080808',
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 700,
                  letterSpacing: '0.08em', fontSize: '0.8rem', textTransform: 'uppercase',
                  borderRadius: '3px', boxShadow: '0 4px 24px rgba(255,255,255,0.22)',
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

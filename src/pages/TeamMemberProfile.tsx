import { ArrowLeft, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { PageType } from '../types';

interface TeamMemberProfileProps {
  memberId?: string;
  onNavigate: (page: PageType) => void;
}

export default function TeamMemberProfile({ memberId, onNavigate }: TeamMemberProfileProps) {
  const teamData: { [key: string]: any } = {
    jatin: {
      name: 'Jatin Vishwakarma',
      role: 'Team Lead & Strategy Head',
      college: 'Walchand College Of Engineering Sangli Btech(CSE)',
      phone: '+91 8421569055',
      email: 'Jatinvish361@gmail.com',
      linkedin: 'https://www.linkedin.com/in/jatin-vishwakarma-563914246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      avatar: 'J',
      photo: '/images/jatin.jpeg',
      bio: 'Strategic visionary with 4+ years of experience driving technical direction and fostering collaborative excellence across all projects. Specialized in system architecture and team management.',
      expertise: ['System Design', 'Team Leadership', 'Full Stack Architecture', 'Cloud Infrastructure'],
    },
    chaitanya: {
      name: 'Chaitanya Rathod',
      role: 'Full Stack Developer',
      college: 'Vishwakarma Institute of Technology, Pune Btech(IT)',
      phone: '+91 7666965087',
      email: 'rathodchaitanya326@gmail.com',
      linkedin: 'www.linkedin.com/in/rathod-chaitanya',
      avatar: 'C',
      photo: '/images/chaitanya.jpeg',
      bio: 'Expert full-stack developer with deep expertise in modern web technologies, scalable architectures, and delivering pixel-perfect user experiences across the entire development stack.',
      expertise: ['React & Next.js', 'Node.js', 'TypeScript', 'Database Design'],
    },
    samarth: {
      name: 'Samarth Mane',
      role: 'Backend & System Developer',
      college: 'D. Y. Patil College Of Engineering & Technology, Kolhapur Btech(CSE)',
      phone: '+91 9356886291',
      email: 'manesamarth84@gmail.com',
      linkedin: 'https://www.linkedin.com/in/samarth-mane-aa51182a6/',
      avatar: 'S',
      photo: '/images/samarth.webp',
      bio: 'Backend systems specialist with a passion for building robust, high-performance APIs and distributed systems. Expert in microservices architecture and cloud-native development.',
      expertise: ['Microservices', 'API Design', 'PostgreSQL', 'Docker & K8s'],
    },
    richa: {
      name: 'Richa Waghmare',
      role: 'Frontend & UI Developer',
      college: 'Yeshwantrao Chavan college Of Engineering, Nagpur',
      phone: '+91 8669490817',
      email: 'richawaghmare7@gmail.com',
      linkedin: 'https://www.linkedin.com/in/richa-waghmare-009209345/',
      avatar: 'R',
      photo: '/images/richa.jpeg',
      bio: 'Creative frontend developer and UI specialist who bridges the gap between design and engineering. Passionate about crafting beautiful, accessible, and performant user interfaces.',
      expertise: ['React', 'UI/UX Design', 'Tailwind CSS', 'Animation'],
    },
  };

  const member = memberId && teamData[memberId];

  const cardStyle = { background: 'rgba(255,255,255,0.11)', border: '1px solid rgba(255,255,255,0.13)', borderRadius: '4px', backdropFilter: 'blur(20px)' };

  if (!member) {
    return (
      <div className="pt-16 min-h-screen" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <button onClick={() => onNavigate('home')}
            className="flex items-center gap-2 mb-8 transition-colors"
            style={{ color: '#bbbbbb', fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.88rem' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#fafafa'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#bbbbbb'}>
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <div className="text-center py-20">
            <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '2rem', color: '#fafafa' }}>Profile Not Found</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen" style={{ background: '#080808' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button onClick={() => onNavigate('home')}
          className="flex items-center gap-2 mb-10 transition-colors"
          style={{ color: '#888888', fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.85rem', letterSpacing: '0.04em' }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#fafafa'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#888888'}>
          <ArrowLeft className="w-4 h-4" />
          Back to Team
        </button>

        <div className="overflow-hidden" style={{ ...cardStyle, border: '1px solid rgba(255,255,255,0.09)' }}>
          {/* Header banner */}
          <div className="h-28" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.02) 100%)', borderBottom: '1px solid rgba(255,255,255,0.11)' }}></div>

          <div className="px-8 sm:px-12 py-8">
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-28 h-28 rounded-full overflow-hidden -mt-16"
                  style={{ border: '3px solid rgba(255,255,255,0.22)', filter: 'grayscale(20%)' }}>
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" style={{ filter: 'grayscale(30%)' }} />
                </div>
              </div>

              <div className="flex-grow">
                <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '2.5rem', color: '#fafafa', marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>
                  {member.name}
                </h1>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888888', marginBottom: '1rem' }}>
                  {member.role}
                </p>
                <p style={{ color: '#7a7a7a', lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontWeight: 300, maxWidth: '36rem', marginBottom: '1.5rem', fontSize: '0.92rem' }}>
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-3">
                  <a href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 transition-all duration-300"
                    style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '3px', color: '#dddddd', fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', fontWeight: 500, letterSpacing: '0.04em' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ffffff'; (e.currentTarget as HTMLElement).style.color = '#080808'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.09)'; (e.currentTarget as HTMLElement).style.color = '#dddddd'; }}>
                    <Mail className="w-4 h-4" /> Email
                  </a>
                  <a href={`tel:${member.phone}`}
                    className="inline-flex items-center gap-2 transition-all duration-300"
                    style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '3px', color: '#dddddd', fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', fontWeight: 500, letterSpacing: '0.04em' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ffffff'; (e.currentTarget as HTMLElement).style.color = '#080808'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.09)'; (e.currentTarget as HTMLElement).style.color = '#dddddd'; }}>
                    <Phone className="w-4 h-4" /> Call
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-all duration-300"
                    style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '3px', color: '#dddddd', fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', fontWeight: 500, letterSpacing: '0.04em' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ffffff'; (e.currentTarget as HTMLElement).style.color = '#080808'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.09)'; (e.currentTarget as HTMLElement).style.color = '#dddddd'; }}>
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.13)' }}>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#888888' }} />
                <div>
                  <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: '#dddddd', fontSize: '0.82rem', marginBottom: '0.4rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Education</h3>
                  <p style={{ color: '#7a7a7a', fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.9rem' }}>{member.college}</p>
                </div>
              </div>
              <div>
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: '#dddddd', fontSize: '0.82rem', marginBottom: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Key Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill: string, index: number) => (
                    <span key={index}
                      style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', fontWeight: 500, color: '#bbbbbb', background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.3rem 0.75rem', borderRadius: '2px' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.13)' }}>
              <div className="p-5 text-center" style={{ background: 'rgba(255,255,255,0.11)', border: '1px solid rgba(255,255,255,0.13)', borderRadius: '3px' }}>
                <p style={{ color: '#888888', fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Email Address</p>
                <p style={{ color: '#dddddd', fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.85rem', wordBreak: 'break-all' }}>{member.email}</p>
              </div>
              <div className="p-5 text-center" style={{ background: 'rgba(255,255,255,0.11)', border: '1px solid rgba(255,255,255,0.13)', borderRadius: '3px' }}>
                <p style={{ color: '#888888', fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Phone Number</p>
                <p style={{ color: '#dddddd', fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.85rem' }}>{member.phone}</p>
              </div>
              <div className="p-5 text-center" style={{ background: 'rgba(255,255,255,0.11)', border: '1px solid rgba(255,255,255,0.13)', borderRadius: '3px' }}>
                <p style={{ color: '#888888', fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>LinkedIn</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                  style={{ color: '#bbbbbb', fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.85rem' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#fafafa'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#bbbbbb'}>
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
            style={{
              padding: '1rem 2.5rem',
              background: '#ffffff', color: '#080808',
              fontFamily: 'DM Sans, sans-serif', fontWeight: 700,
              fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase',
              borderRadius: '3px', boxShadow: '0 4px 24px rgba(255,255,255,0.22)',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 36px rgba(255,255,255,0.22)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(255,255,255,0.22)'}>
            Start a Project with {member.name.split(' ')[0]}
          </button>
        </div>
      </div>
    </div>
  );
}

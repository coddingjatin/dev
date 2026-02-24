import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { PageType } from '../types';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  currentPage?: PageType;
}

export default function Footer({ onNavigate, currentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative py-20 overflow-hidden"
      style={{ borderTop: '1px solid rgba(255,255,255,0.11)' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, #0a0a0a, rgba(10,10,10,0.7) 50%, transparent)',
        }}
      ></div>

      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl animate-blob-bounce"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.015) 0%, transparent 70%)',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* BRAND */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">

              {/* LOGO IMAGE */}
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/30">
                <img
                  src="/logo.jpg"     // 👈 logo path
                  alt="DevUnite Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* BRAND NAME */}
              <div
                style={{
                  fontFamily: 'DM Serif Display, serif',
                  fontSize: '1.5rem',
                }}
              >
                <span style={{ color: '#fafafa' }}>DevUnite</span>
                <span style={{ color: '#888888', marginLeft: '0.4rem' }}>
                  Studio
                </span>
              </div>
            </div>

            <p
              style={{
                color: '#888888',
                lineHeight: 1.75,
                maxWidth: '28rem',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.9rem',
                marginBottom: '1.5rem',
              }}
            >
              Building intelligent full stack solutions with AI & ML integrations
              to power modern businesses. Let's create something amazing together.
            </p>

            {/* SOCIAL LINKS */}
            <div className="flex gap-3">
              {[
                {
                  icon: Github,
                  label: 'GitHub',
                  link: 'https://github.com/devunite-official',
                },
                {
                  icon: Linkedin,
                  label: 'LinkedIn',
                  link: 'https://www.linkedin.com/company/devunite30/posts/?feedView=all',
                },
                { icon: Twitter, label: 'Twitter' },
                {
                  icon: Mail,
                  label: 'Email',
                  link: 'mailto:devunite3@gmail.com',
                },
              ].map(({ icon: Icon, label, link }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(255,255,255,0.25)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    borderRadius: '3px',
                    color: '#888888',
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {(
                [
                  { label: 'Home', page: 'home' },
                  { label: 'About Us', page: 'about' },
                  { label: 'Projects', page: 'projects' },
                  { label: 'Contact Us', page: 'contact' },
                ] as { label: string; page: PageType }[]
              ).map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => {
                      onNavigate(item.page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 group transition-all duration-300"
                    style={{
                      color:
                        currentPage === item.page ? '#f0f0f0' : '#888888',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.88rem',
                      background: 'transparent',
                    }}
                  >
                    <span
                      className="w-0 h-px group-hover:w-3 transition-all duration-300"
                      style={{ background: '#ffffff' }}
                    ></span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5">
              Get in Touch
            </h4>

            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 text-white/70" />
                <a
                  href="mailto:devunite3@gmail.com"
                  className="text-white/60 hover:text-white transition"
                >
                  devunite3@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-2.5 text-white/60">
                <span>📍</span>
                Pune, Maharashtra, IN
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.11)' }}
        >
          <p className="flex items-center gap-2 text-white/50 text-sm">
            © {currentYear} DevUnite Studio. Crafted with
            <Heart className="w-4 h-4 animate-pulse fill-current" />
          </p>

          <div className="flex gap-6 text-sm text-white/50">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
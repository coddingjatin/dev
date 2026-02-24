import { Users, Linkedin, Mail, Phone } from 'lucide-react';
import { TeamMember, PageType } from '../types';

interface TeamProps {
  onNavigate: (page: PageType, memberId?: string) => void;
}

export default function Team({ onNavigate }: TeamProps) {
  const teamMembers: TeamMember[] = [
    {
      id: 'jatin',
      name: 'Jatin Vishwakarma',
      role: 'Team Lead & Strategy Head',
      description: "Strategic visionary driving DevUnite's technical direction and fostering collaborative excellence across all projects.",
      college: 'Walchand College Of Engineering, Sangli',
      phone: '+91 84215 69055',
      email: 'Jatinvish361@gmail.com',
      linkedin: 'https://www.linkedin.com/in/jatin-vishwakarma-563914246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      avatar: 'J',
      photo: '/images/jatin.jpeg',
    },
    {
      id: 'chaitanya',
      name: 'Chaitanya Rathod',
      role: 'Full Stack Developer',
      description: 'Expert in crafting seamless end-to-end solutions with modern frameworks and scalable architectures.',
      college: 'Vishwakarma Institute of Technology, Pune',
      phone: '+91 7666965087',
      email: 'rathodchaitanya326@gmail.com',
      linkedin: 'www.linkedin.com/in/rathod-chaitanya',
      avatar: 'C',
      photo: '/images/chaitanya.jpeg',
    },
    {
      id: 'samarth',
      name: 'Samarth Mane',
      role: 'Backend & System Developer',
      description: 'Specializes in building robust backend systems, APIs, and scalable infrastructure for high-performance applications.',
      college: 'D. Y. Patil College Of Engineering & Technology, Kolhapur',
      phone: '+91 9356886291',
      email: 'manesamarth84@gmail.com',
      linkedin: 'https://www.linkedin.com/in/samarth-mane-aa51182a6/',
      avatar: 'S',
      photo: '/images/samarth.webp',
    },
    {
      id: 'richa',
      name: 'Richa Waghmare',
      role: 'Frontend & UI Developer',
      description: 'Creates beautiful, intuitive user interfaces with a keen eye for design and exceptional user experience.',
      college: 'Yeshwantrao Chavan college Of Engineering, Nagpur ',
      phone: '+91 8669490817',
      email: 'richawaghmare7@gmail.com',
      linkedin: 'https://www.linkedin.com/in/richa-waghmare-009209345/',
      avatar: 'R',
      photo: '/images/richa.jpeg',
    },
  ];

  return (
    <section
      className="py-28"
      style={{
        background: "rgba(255,255,255,0.015)",
        borderTop: "1px solid rgba(255,255,255,0.11)",
        borderBottom: "1px solid rgba(255,255,255,0.11)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <Users className="w-5 h-5" style={{ color: "#888888" }} />
            <span
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#888888",
              }}
            >
              The People Behind the Work
            </span>
          </div>
          <h2
            style={{
              fontFamily: "DM Serif Display, serif",
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              color: "#fafafa",
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Meet Our Team
          </h2>
          <p
            style={{
              color: "#888888",
              maxWidth: "36rem",
              margin: "0 auto",
              lineHeight: 1.75,
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 300,
            }}
          >
            A passionate group of developers united by expertise, innovation,
            and a commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group overflow-hidden transition-all duration-500 hover:-translate-y-2 shimmer-hover"
              style={{
                background: "rgba(255,255,255,0.11)",
                border: "1px solid rgba(255,255,255,0.13)",
                borderRadius: "4px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.border =
                  "1px solid rgba(255,255,255,0.25)";
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.09)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(255,255,255,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.border =
                  "1px solid rgba(255,255,255,0.13)";
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.11)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Top accent */}
              <div
                className="h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
                }}
              ></div>

              <div className="p-7 flex flex-col h-full">
                <div className="flex-grow">
                  {/* Photo */}
                  <div
                    className="w-32 h-32 rounded-full overflow-hidden mb-6 mx-auto transition-all duration-500 group-hover:scale-105"
                    style={{
                      border: "3px solid rgba(255,255,255,0.4)",
                      boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
                    }}
                  >
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-500"
                      style={{
                        objectPosition:
                          member.id === "chaitanya" ? "50% 20%" : "top",

                        filter: "grayscale(0%)",
                      }}
                    />
                  </div>

                  <h3
                    className="text-center mb-1.5"
                    style={{
                      fontFamily: "DM Serif Display, serif",
                      fontSize: "1.15rem",
                      color: "#fafafa",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {member.name}
                  </h3>

                  <p
                    className="text-center mb-4"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#888888",
                    }}
                  >
                    {member.role}
                  </p>

                  <p
                    className="text-center"
                    style={{
                      color: "#888888",
                      fontSize: "0.85rem",
                      lineHeight: 1.7,
                      fontFamily: "DM Sans, sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {member.description}
                  </p>
                </div>

                <button
                  onClick={() => onNavigate("profile", member.id)}
                  className="mt-6 w-full py-3 font-semibold transition-all duration-300"
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: "0.78rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    background: "rgba(255,255,255,0.11)",
                    color: "#dddddd",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "3px",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "#ffffff";
                    (e.currentTarget as HTMLElement).style.color = "#080808";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.11)";
                    (e.currentTarget as HTMLElement).style.color = "#dddddd";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.1)";
                  }}
                >
                  Connect with Me
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

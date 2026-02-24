import { Mail, MapPin, Phone, Send, Clock, MessageCircle, Calendar, CheckCircle2 } from 'lucide-react';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const inputStyle = {
  width: '100%',
  padding: '0.875rem 1.25rem',
  background: 'rgba(255,255,255,0.25)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '3px',
  color: '#f0f0f0',
  fontFamily: 'DM Sans, sans-serif',
  fontWeight: 400,
  fontSize: '0.9rem',
  transition: 'all 0.2s ease',
};

const inputFocusStyle = {
  border: '1px solid rgba(255,255,255,0.35)',
  background: 'rgba(255,255,255,0.11)',
  outline: 'none',
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', projectType: '', budget: '', timeline: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setIsSubmitting(true);

  try {
    await emailjs.send(
      'service_sabnlng',        // 👈 YOUR SERVICE ID
      'template_k4nf2i9',       // 👈 YOUR TEMPLATE ID
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        projectType: formData.projectType,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.message,
      },
      'fjPNyye2CfvCSoLCY'             // 👈 YOUR PUBLIC KEY
    );

    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: '',
    });
  } catch (error) {
    console.error('EmailJS Error:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus('idle'), 5000);
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getInputStyle = (field: string) => ({
    ...inputStyle,
    ...(focusedField === field ? inputFocusStyle : {}),
  });

  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, title: 'Email Us', details: 'devunite3@gmail.com', subtext: 'Get response within 24 hours' },
    { icon: <Phone className="w-6 h-6" />, title: 'Call Us', details: '+91 8421569055', subtext: 'Mon-Fri 9AM - 6PM EST' },
    { icon: <MapPin className="w-6 h-6" />, title: 'Visit Us', details: 'Innovation Hub, Tech District', subtext: 'Pune, Maharashtra, IN' },
    { icon: <Clock className="w-6 h-6" />, title: 'Working Hours', details: 'Mon - Fri: 9AM - 6PM', subtext: 'Weekend: By Appointment' },
  ];

  const features = [
    { icon: <CheckCircle2 className="w-4 h-4" />, text: 'Expert team with 5+ years experience' },
    { icon: <CheckCircle2 className="w-4 h-4" />, text: 'AI & ML integration specialists' },
    { icon: <CheckCircle2 className="w-4 h-4" />, text: 'Transparent pricing & timelines' },
    { icon: <CheckCircle2 className="w-4 h-4" />, text: 'Agile development methodology' },
    { icon: <CheckCircle2 className="w-4 h-4" />, text: 'Post-launch support & maintenance' },
    { icon: <CheckCircle2 className="w-4 h-4" />, text: 'NDA & IP protection guaranteed' },
  ];

  const cardStyle = { background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.13)', borderRadius: '4px', backdropFilter: 'blur(20px)' };

  const labelStyle = { fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' as const, color: '#bbbbbb', display: 'block', marginBottom: '0.6rem' };

  return (
    <div className="pt-16 relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ background: '#080808' }}></div>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl animate-blob-bounce"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl animate-blob-bounce"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.018) 0%, transparent 70%)', animationDelay: '2s' }}></div>
      </div>

      {/* Hero */}
      <div className="relative z-10 py-24" style={{ borderBottom: '1px solid rgba(255,255,255,0.11)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slideUp">
            <div className="mb-8 animate-scaleIn">
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#bbbbbb', border: '1px solid rgba(255,255,255,0.1)', padding: '0.45rem 1.1rem', borderRadius: '2px', background: 'rgba(255,255,255,0.09)' }}>
                Let's Connect
              </span>
            </div>
            <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(2.8rem, 6vw, 5rem)', color: '#fafafa', letterSpacing: '-0.03em', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Get in <em style={{ fontStyle: 'italic', color: '#bbbbbb' }}>Touch</em>
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#888888', maxWidth: '44rem', margin: '0 auto', lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
              Ready to transform your ideas into reality? Let's build something extraordinary together
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="relative z-10 py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, index) => (
              <div key={index}
                className="p-6 transition-all duration-500 hover:scale-105 group shimmer-hover"
                style={{ ...cardStyle, animation: 'scaleIn 0.6s ease-out backwards', animationDelay: `${index * 0.08}s` }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.border = '1px solid rgba(255,255,255,0.25)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.09)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.border = '1px solid rgba(255,255,255,0.13)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.09)'; }}
              >
                <div className="w-12 h-12 flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: 'rgba(255,255,255,0.11)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '3px', color: '#bbbbbb' }}>
                  {info.icon}
                </div>
                <h3 style={{ fontFamily: 'DM Serif Display, serif', color: '#fafafa', fontSize: '1rem', marginBottom: '0.4rem' }}>{info.title}</h3>
                <p style={{ color: '#dddddd', fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.88rem', marginBottom: '0.25rem' }}>{info.details}</p>
                <p style={{ color: '#888888', fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.8rem' }}>{info.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left */}
            <div className="lg:col-span-2 animate-slideInLeft">
              <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#fafafa', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                Let's Start a <em style={{ fontStyle: 'italic', color: '#bbbbbb' }}>Conversation</em>
              </h2>
              <p style={{ color: '#888888', lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontWeight: 300, marginBottom: '2rem', fontSize: '0.95rem' }}>
                Whether you're a startup with a groundbreaking idea, an enterprise looking to innovate, or anywhere in between – we're here to help bring your vision to life with cutting-edge technology and exceptional execution.
              </p>

              <div className="p-7 mb-6" style={cardStyle}>
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#fafafa', marginBottom: '1.25rem', fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Why Choose DevUnite?
                </h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <span style={{ color: '#bbbbbb', flexShrink: 0, marginTop: '1px' }}>{feature.icon}</span>
                      <span style={{ color: '#888888', fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.88rem', lineHeight: 1.6 }}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5" style={cardStyle}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.11)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '3px', color: '#bbbbbb' }}>
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p style={{ color: '#f0f0f0', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.88rem' }}>Quick Response Time</p>
                    <p style={{ color: '#888888', fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.78rem' }}>We typically respond within 2-4 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 animate-slideInRight">
              <div className="p-10" style={{ ...cardStyle, border: '1px solid rgba(255,255,255,0.25)' }}>
                <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '2rem', color: '#fafafa', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>Send Us a Message</h3>
                <p style={{ color: '#888888', fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.88rem', marginBottom: '2rem' }}>Fill out the form and we'll get back to you within 24 hours</p>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 flex items-start gap-3 animate-slideInRight"
                    style={{ background: 'rgba(255,255,255,0.25)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '3px' }}>
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#bbbbbb' }} />
                    <div>
                      <p style={{ color: '#fafafa', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.25rem' }}>Message Sent Successfully!</p>
                      <p style={{ color: '#888888', fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.82rem' }}>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" style={labelStyle}>Your Name *</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                        style={getInputStyle('name')} placeholder="John Doe"
                        onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} />
                    </div>
                    <div>
                      <label htmlFor="email" style={labelStyle}>Email Address *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                        style={getInputStyle('email')} placeholder="john@company.com"
                        onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" style={labelStyle}>Phone Number</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                        style={getInputStyle('phone')} placeholder="+1 (555) 123-4567"
                        onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField(null)} />
                    </div>
                    <div>
                      <label htmlFor="company" style={labelStyle}>Company Name</label>
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleChange}
                        style={getInputStyle('company')} placeholder="Your Company"
                        onFocus={() => setFocusedField('company')} onBlur={() => setFocusedField(null)} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="projectType" style={labelStyle}>Project Type *</label>
                      <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} required
                        style={getInputStyle('projectType')}
                        onFocus={() => setFocusedField('projectType')} onBlur={() => setFocusedField(null)}>
                        <option value="">Select Type</option>
                        <option value="web">Web Application</option>
                        <option value="mobile">Mobile App</option>
                        <option value="ai">AI/ML Integration</option>
                        <option value="blockchain">Blockchain</option>
                        <option value="custom">Custom Software</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" style={labelStyle}>Estimated Budget</label>
                      <select id="budget" name="budget" value={formData.budget} onChange={handleChange}
                        style={getInputStyle('budget')}
                        onFocus={() => setFocusedField('budget')} onBlur={() => setFocusedField(null)}>
                        <option value="">Select Budget</option>
                        <option value="5k-10k">₹5K - ₹10K</option>
                        <option value="10k-25k">₹10K - ₹25K</option>
                        <option value="100k+">₹25K+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" style={labelStyle}>Timeline</label>
                    <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange}
                      style={getInputStyle('timeline')}
                      onFocus={() => setFocusedField('timeline')} onBlur={() => setFocusedField(null)}>
                      <option value="">Select Timeline</option>
                      <option value="urgent">ASAP (1-2 weeks)</option>
                      <option value="1-2months">1-2 Months</option>
                      <option value="3-6months">3-6 Months</option>
                      <option value="6+months">6+ Months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" style={labelStyle}>Project Details *</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6}
                      style={{ ...getInputStyle('message'), resize: 'none' }}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} />
                  </div>

                  <button type="submit" disabled={isSubmitting}
                    className="w-full py-4 font-bold flex items-center justify-center gap-3 transition-all duration-300 shimmer-hover"
                    style={{
                      background: '#ffffff', color: '#080808',
                      fontFamily: 'DM Sans, sans-serif', fontWeight: 700,
                      letterSpacing: '0.08em', fontSize: '0.82rem', textTransform: 'uppercase',
                      borderRadius: '3px', boxShadow: '0 4px 24px rgba(255,255,255,0.1)',
                      opacity: isSubmitting ? 0.6 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    }}
                    onMouseEnter={e => { if (!isSubmitting) (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 36px rgba(255,255,255,0.2)'; }}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(255,255,255,0.1)'}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>Send Message <Send className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation */}
      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-12 text-center group shimmer-hover"
            style={{ ...cardStyle, border: '1px solid rgba(255,255,255,0.25)' }}>
            <Calendar className="w-12 h-12 mx-auto mb-5" style={{ color: '#888888' }} />
            <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '2rem', color: '#fafafa', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Schedule a Free Consultation
            </h3>
            <p style={{ color: '#888888', lineHeight: 1.8, maxWidth: '32rem', margin: '0 auto 2rem', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
              Book a 30-minute call with our team to discuss your project and get expert advice – absolutely free!
            </p>
            <button
              className="px-10 py-3.5 font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255,255,255,0.11)', color: '#f0f0f0',
                fontFamily: 'DM Sans, sans-serif', fontWeight: 600,
                letterSpacing: '0.08em', fontSize: '0.8rem', textTransform: 'uppercase',
                border: '1px solid rgba(255,255,255,0.25)', borderRadius: '3px',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ffffff'; (e.currentTarget as HTMLElement).style.color = '#080808'; (e.currentTarget as HTMLElement).style.borderColor = '#ffffff'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.11)'; (e.currentTarget as HTMLElement).style.color = '#f0f0f0'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)'; }}
            >
              Book Your Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

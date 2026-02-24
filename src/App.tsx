import { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import TeamMemberProfile from './pages/TeamMemberProfile';
import { PageType } from './types';

const LETTERS = ['D','e','v','U','n','i','t','e'];

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center animate-fadeOut"
      style={{ background: '#080808', animationDelay: '3.4s' }}>

      {/* Scan line sweeping top to bottom */}
      <div className="scan-line" />

      {/* Full-screen ring ripples from center */}
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'1px', height:'1px' }}>
        <div className="ring-ripple" />
        <div className="ring-ripple" />
        <div className="ring-ripple" />
      </div>

      {/* Rotating wireframe rings behind content */}
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'500px', height:'500px', transformStyle:'preserve-3d' }}>
        <div className="ring-3d" style={{ position:'absolute', inset:0, animationDuration:'14s' }} />
        <div className="ring-3d" style={{ position:'absolute', inset:'40px', animationDuration:'20s', animationDirection:'reverse', borderColor:'rgba(255,255,255,0.14)' }} />
        <div className="ring-3d" style={{ position:'absolute', inset:'90px', animationDuration:'10s', borderColor:'rgba(255,255,255,0.1)' }} />
      </div>

      {/* Corner brackets around center content */}
      <div style={{ position:'relative', zIndex:10 }}>
        <div className="bracket-tl" />
        <div className="bracket-br" />

        <div className="text-center px-12 py-10">
          {/* Letter-by-letter drop animation */}
          <div style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(3.5rem, 10vw, 6.5rem)',
            color: '#ffffff',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            marginBottom: '0.6rem',
            perspective: '600px',
          }}>
            {LETTERS.map((ch, i) => (
              <span key={i} className="letter-drop" style={{ animationDelay: `${i * 0.08}s` }}>
                {ch}
              </span>
            ))}
          </div>

          {/* Glitch tagline */}
          <p className="glitch-text" style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.72rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#bbbbbb',
          }}>
            Studio — AI · Web · Innovation
          </p>

          {/* Progress bar */}
          <div style={{
            marginTop: '2.5rem',
            width: '200px',
            height: '1px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '999px',
            overflow: 'hidden',
            margin: '2.5rem auto 0',
          }}>
            <div className="load-bar-fill" />
          </div>

          {/* Percentage counter feel — static display */}
          <p style={{
            marginTop: '0.75rem',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.18em',
            color: 'rgba(255,255,255,0.3)',
          }}>
            LOADING EXPERIENCE
          </p>
        </div>
      </div>

      {/* Floating corner decorations */}
      {[
        { top:'5%',  left:'5%',  size:60 },
        { top:'5%',  right:'5%', size:45 },
        { bottom:'5%', left:'5%', size:45 },
        { bottom:'5%', right:'5%', size:60 },
      ].map((pos, i) => (
        <div key={i} className="animate-rotate3d" style={{
          position:'absolute', ...pos as any,
          width: pos.size, height: pos.size,
          border: '1px solid rgba(255,255,255,0.12)',
          animationDuration: `${14 + i*3}s`,
          animationDelay: `${i*0.4}s`,
        }} />
      ))}
    </div>
  );
}

function Background3D({ mousePosition }: { mousePosition: {x:number, y:number} }) {
  return (
    <div className="fixed inset-0 z-0" style={{ perspective: '1200px' }}>

      {/* ── Bright radial glows (much more visible) ── */}
      <div className="absolute rounded-full blur-3xl animate-blob-bounce" style={{
        top:'-10%', left:'-5%', width:'800px', height:'800px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.09) 0%, transparent 65%)',
        transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
      }} />
      <div className="absolute rounded-full blur-3xl animate-blob-bounce" style={{
        top:'20%', right:'-10%', width:'700px', height:'700px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 65%)',
        animationDelay:'3s',
        transform: `translate(-${mousePosition.x * 0.3}px, ${mousePosition.y * 0.4}px)`,
      }} />
      <div className="absolute rounded-full blur-3xl animate-blob-bounce" style={{
        bottom:'-10%', left:'30%', width:'600px', height:'600px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 65%)',
        animationDelay:'6s',
        transform: `translate(${mousePosition.x * 0.2}px, -${mousePosition.y * 0.3}px)`,
      }} />

      {/* ── Light beams (diagonal sweeps) ── */}
      <div className="light-beam animate-beam-sweep" style={{
        top:0, left:'20%', height:'120%', width:'1px',
        animationDuration:'9s',
      }} />
      <div className="light-beam animate-beam-sweep" style={{
        top:0, left:'60%', height:'120%', width:'1px',
        animationDuration:'13s', animationDelay:'4s',
        background:'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)',
      }} />

      {/* ── Wireframe rotating squares — MUCH more visible ── */}
      {/* Large front square */}
      <div className="animate-rotate3d" style={{
        position:'absolute', top:'15%', right:'8%',
        width:'180px', height:'180px',
        border: '1.5px solid rgba(255,255,255,0.28)',
        boxShadow: '0 0 30px rgba(255,255,255,0.08), inset 0 0 30px rgba(255,255,255,0.04)',
        animationDuration:'16s',
        transform:`translate(-${mousePosition.x * 0.08}px, ${mousePosition.y * 0.08}px)`,
      }} />
      {/* Medium inner square */}
      <div className="animate-rotate3d" style={{
        position:'absolute', top:'17%', right:'10%',
        width:'120px', height:'120px',
        border: '1px solid rgba(255,255,255,0.16)',
        animationDuration:'10s', animationDelay:'1s', animationDirection:'reverse',
      }} />

      {/* Bottom-left pair */}
      <div className="animate-rotate3d" style={{
        position:'absolute', bottom:'20%', left:'6%',
        width:'140px', height:'140px',
        border: '1.5px solid rgba(255,255,255,0.24)',
        boxShadow: '0 0 25px rgba(255,255,255,0.07)',
        animationDuration:'20s', animationDelay:'2s',
        transform:`translate(${mousePosition.x * 0.06}px, -${mousePosition.y * 0.06}px)`,
      }} />
      <div className="animate-rotate3d" style={{
        position:'absolute', bottom:'22%', left:'8%',
        width:'80px', height:'80px',
        border: '1px solid rgba(255,255,255,0.14)',
        animationDuration:'13s', animationDelay:'0.5s', animationDirection:'reverse',
      }} />

      {/* Center-ish floating square */}
      <div className="animate-float-slow" style={{
        position:'absolute', top:'45%', left:'45%',
        width:'60px', height:'60px',
        border: '1px solid rgba(255,255,255,0.18)',
        transform: 'rotate(45deg)',
        boxShadow: '0 0 20px rgba(255,255,255,0.06)',
      }} />

      {/* ── Rotating rings (3D ellipses) ── */}
      <div className="ring-3d animate-spin-slow" style={{
        position:'absolute', top:'5%', left:'50%',
        width:'300px', height:'300px',
        marginLeft:'-150px',
        borderColor:'rgba(255,255,255,0.14)',
        transform:'rotateX(75deg)',
        animationDuration:'22s',
      }} />
      <div className="ring-3d animate-spin-slower" style={{
        position:'absolute', bottom:'8%', right:'15%',
        width:'220px', height:'220px',
        borderColor:'rgba(255,255,255,0.12)',
        transform:'rotateX(65deg) rotateZ(30deg)',
        animationDuration:'18s',
      }} />

      {/* ── Diamonds ── */}
      <div className="diamond-3d animate-diamond" style={{
        position:'absolute', top:'35%', left:'3%',
        width:'40px', height:'40px',
        border: '1.5px solid rgba(255,255,255,0.3)',
        transform: 'rotate(45deg)',
        animationDuration:'7s',
      }} />
      <div className="diamond-3d animate-diamond" style={{
        position:'absolute', top:'60%', right:'4%',
        width:'28px', height:'28px',
        border: '1px solid rgba(255,255,255,0.22)',
        transform: 'rotate(45deg)',
        animationDuration:'9s', animationDelay:'2s',
      }} />
      <div className="diamond-3d animate-diamond" style={{
        position:'absolute', top:'12%', left:'30%',
        width:'20px', height:'20px',
        border: '1px solid rgba(255,255,255,0.18)',
        transform: 'rotate(45deg)',
        animationDuration:'11s', animationDelay:'1s',
      }} />

      {/* ── Morphing blob shapes ── */}
      <div className="animate-morph blur-2xl" style={{
        position:'absolute', top:'40%', left:'5%',
        width:'200px', height:'200px',
        background:'rgba(255,255,255,0.05)',
      }} />
      <div className="animate-morph blur-2xl" style={{
        position:'absolute', top:'20%', right:'5%',
        width:'240px', height:'240px',
        background:'rgba(255,255,255,0.04)',
        animationDelay:'4s',
      }} />

      {/* ── Grid pattern — more visible ── */}
      <div className="absolute inset-0" style={{
        opacity: 0.04,
        backgroundImage:`
          linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
        `,
        backgroundSize:'60px 60px',
      }} />

      {/* ── Diagonal cross-hatch accent ── */}
      <div className="absolute inset-0" style={{
        opacity: 0.015,
        backgroundImage:`
          linear-gradient(45deg,  rgba(255,255,255,0.6) 1px, transparent 1px),
          linear-gradient(-45deg, rgba(255,255,255,0.6) 1px, transparent 1px)
        `,
        backgroundSize:'80px 80px',
      }} />

      {/* ── Floating particles — brighter ── */}
      {[...Array(25)].map((_, i) => (
        <div key={i} className="absolute rounded-full" style={{
          width: i % 3 === 0 ? '3px' : '2px',
          height: i % 3 === 0 ? '3px' : '2px',
          background: i % 5 === 0 ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.35)',
          left: `${(i * 5.3 + 2) % 100}%`,
          top:  `${(i * 7.7 + 10) % 100}%`,
          animation: `particle-float ${10 + (i % 10) * 2}s linear infinite`,
          animationDelay: `${(i % 8) * 1.2}s`,
          boxShadow: i % 5 === 0 ? '0 0 6px rgba(255,255,255,0.4)' : 'none',
        }} />
      ))}
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage]       = useState<PageType>('home');
  const [selectedMemberId, setSelectedMemberId] = useState<string>();
  const [loading, setLoading]               = useState(true);
  const [mousePosition, setMousePosition]   = useState({ x: 0, y: 0 });

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 3900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePosition({
      x: (e.clientX / window.innerWidth)  * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleNavigate = (page: PageType, memberId?: string) => {
    setCurrentPage(page);
    setSelectedMemberId(memberId ?? undefined);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':    return <Home onNavigate={handleNavigate} />;
      case 'about':   return <About />;
      case 'projects':return <Projects />;
      case 'contact': return <Contact />;
      case 'profile': return <TeamMemberProfile memberId={selectedMemberId} onNavigate={handleNavigate} />;
      default:        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      {loading && <LoadingScreen />}

      <div className="min-h-screen relative overflow-hidden bg-gradient-mesh">
        <Background3D mousePosition={mousePosition} />

        {/* Noise texture */}
        <div className="fixed inset-0 z-0 noise-bg pointer-events-none" />

        {/* Main content */}
        <div className="relative z-10">
          <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
          <main>{renderPage()}</main>
            <Footer currentPage={currentPage} onNavigate={handleNavigate} />
        </div>
      </div>
    </>
  );
}

export default App;

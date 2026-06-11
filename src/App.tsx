import { motion } from 'motion/react';
import React, { useState, useEffect } from 'react';
import { CustomCursor, TouchRippleLayer, MobileMenu, ServiceCard, FeatureCard, Reveal } from './components';

const BRAND = 'DIRT BLASTER CLEANING';

const SERVICES = [
  { image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1470&auto=format&fit=crop', title: 'Home Deep Clean', subtitle: 'Residential' },
  { image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1470&auto=format&fit=crop', title: 'Office & Commercial', subtitle: 'Workspace' },
  { image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1470&auto=format&fit=crop', title: 'Move In / Move Out', subtitle: 'Property' },
];

const EXTRA_SERVICES = [
  { icon: '🛋️', name: 'Sofa & Carpet Cleaning', desc: 'Deep steam extraction for upholstery' },
  { icon: '🏗️', name: 'Post-Construction Clean', desc: 'Dust, debris & builder grime removal' },
  { icon: '💧', name: 'Water Tank Cleaning', desc: 'Sanitize, disinfect & de-scale tanks' },
  { icon: '🚿', name: 'Bathroom Sanitization', desc: 'Anti-bacterial deep clean & descaling' },
  { icon: '🍽️', name: 'Kitchen Deep Clean', desc: 'Grease, chimney & appliance cleaning' },
  { icon: '🪟', name: 'Window Cleaning', desc: 'Streak-free glass & frame polish' },
];

const FEATURES = [
  { icon: '🌿', title: 'Eco-Friendly Products', desc: 'Safe, non-toxic cleaning agents — gentle on your family, pets, and the planet.' },
  { icon: '🎓', title: 'Trained & Verified Staff', desc: 'Every cleaner is background-checked, trained, and uniformed for your peace of mind.' },
  { icon: '🛡️', title: 'Fully Insured Service', desc: 'We carry full liability insurance so your home and belongings are always protected.' },
  { icon: '📅', title: 'Flexible Scheduling', desc: '7 days a week, morning to evening — we work around your calendar, not ours.' },
  { icon: '💸', title: 'Transparent Pricing', desc: 'No hidden charges. Fixed, upfront quotes before we begin any work.' },
  { icon: '✅', title: '100% Satisfaction', desc: 'Not happy? We re-clean for free. Your satisfaction is our guarantee.' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0d0a07] text-white selection:bg-orange-500/30 overflow-x-hidden">
      <CustomCursor />
      <TouchRippleLayer />
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* BG Glows */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-orange-500 rounded-full blur-[160px] opacity-[0.08] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-amber-400 rounded-full blur-[130px] opacity-[0.06] pointer-events-none" />

      {/* ── NAVBAR ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-3 py-3 sm:px-4 sm:py-4 md:px-8 md:py-6 transition-all duration-300 ${scrolled ? 'bg-[#0d0a07]/80 backdrop-blur-xl' : ''}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl px-4 py-3 md:px-6 md:py-4 shadow-2xl">
          <div className="font-display font-bold text-xl sm:text-2xl tracking-widest uppercase text-orange-400">{BRAND}</div>
          <div className="hidden md:flex items-center gap-10 text-xs font-semibold tracking-widest uppercase text-white/60">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a href="#contact" className="hidden md:inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-orange-400 transition-all duration-300 active:scale-95">
            Book a Clean
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className={`hamburger-btn md:hidden ${menuOpen ? 'open' : ''}`} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-12 sm:pt-36 sm:pb-16 md:pt-48 md:pb-24 px-4 sm:px-6 min-h-hero flex items-center">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center w-full">
          <div className="relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6">
              Pune's #1 Cleaning Service
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[2.6rem] leading-[0.9] xs:text-[3rem] sm:text-7xl md:text-8xl lg:text-[110px] font-bold uppercase tracking-tighter">
              Dirt Gets{' '}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Blasted</span>
              <br />Clean.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
              className="mt-6 sm:mt-8 text-sm sm:text-lg text-white/50 max-w-md font-light leading-relaxed">
              Powerful, professional cleaning across Pune. Eco-friendly products, trained staff, and a spotless guarantee — every single time.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6">
              <a href="#contact" className="w-full sm:w-auto bg-orange-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-orange-400 transition-all duration-300 active:scale-95 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] flex items-center justify-center gap-3">
                Book Free Estimate →
              </a>
              <a href="#services" className="w-full sm:w-auto bg-white/[0.02] backdrop-blur-xl border border-white/10 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all duration-300 active:scale-95 text-center">
                View Services
              </a>
            </motion.div>
            {/* Stat pills */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-3 mt-8 flex-wrap">
              {[['500+','Happy Clients'], ['5★','Rated on Google'], ['3+','Years in Pune']].map(([n, l]) => (
                <div key={l} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                  <span className="text-orange-400 font-display font-bold text-sm">{n}</span>
                  <span className="text-white/40 text-[10px] uppercase tracking-wider font-bold">{l}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero image */}
          <div className="relative hidden sm:block">
            <motion.div initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} transition={{ duration: 1.2, delay: 0.2 }}
              className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a07] via-transparent to-transparent z-10 opacity-60 pointer-events-none" />
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1470&auto=format&fit=crop"
                alt="Professional Cleaning" className="w-full h-full object-cover object-center" referrerPolicy="no-referrer" loading="eager" />
            </motion.div>
            {/* Floating badge */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.8 }}
              className="absolute top-12 -right-4 md:-right-10 z-20 bg-white/[0.04] backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-xl">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 border border-orange-500/20 text-2xl">🏠</div>
              <div>
                <div className="font-display font-bold text-2xl tracking-tight">500+</div>
                <div className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">Homes Cleaned</div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 1 }}
              className="absolute bottom-24 md:bottom-32 -left-4 md:-left-10 z-20 bg-white/[0.04] backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-xl">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 border border-orange-500/20 text-2xl">⭐</div>
              <div>
                <div className="font-display font-bold text-2xl tracking-tight">5.0</div>
                <div className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">Avg Rating</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="marquee-section w-full overflow-hidden bg-orange-500/5 backdrop-blur-md border-y border-orange-500/10 py-3 sm:py-4 md:py-6 relative z-20">
        <div className="marquee-track whitespace-nowrap">
          {[0, 1].map(copy => (
            <span key={copy} aria-hidden={copy === 1} className="marquee-content font-anton text-4xl sm:text-5xl md:text-6xl text-stroke-heavy uppercase tracking-tight">
              DEEP CLEANING<span className="mx-4 sm:mx-6 text-orange-400"> • </span>
              OFFICE & COMMERCIAL<span className="mx-4 sm:mx-6 text-orange-400"> • </span>
              SOFA & CARPET<span className="mx-4 sm:mx-6 text-orange-400"> • </span>
              MOVE IN / MOVE OUT<span className="mx-4 sm:mx-6 text-orange-400"> • </span>
              ECO-FRIENDLY<span className="mx-4 sm:mx-6 text-orange-400"> • </span>
              POST-CONSTRUCTION<span className="mx-4 sm:mx-6 text-orange-400"> • </span>
            </span>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-500/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
          <div>
            <Reveal direction="left">
              <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6 md:mb-8">
                Pune's Most<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Powerful</span><br />
                Cleaners
              </h2>
            </Reveal>
            <Reveal delay={0.15} direction="left">
              <p className="text-white/50 text-base sm:text-lg font-light leading-relaxed mb-6 md:mb-8">
                Dirt Blaster Cleaning Services was founded in Pune with one mission — obliterate dirt, grime, and mess from homes, offices, and commercial spaces. We serve Pune, Pimpri-Chinchwad, Kothrud, Baner, Wakad, and beyond. Our eco-certified blasters deliver deep, thorough, and reliable cleaning — every visit, every time.
              </p>
            </Reveal>
            <Reveal delay={0.25} direction="left">
              <a href="#contact" className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-orange-500/20 transition-all duration-300 active:scale-95">
                Get a Free Quote
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.1} direction="right">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 h-[260px] sm:h-[450px] md:h-[600px]">
              <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] h-full group">
                <img src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=1470&auto=format&fit=crop" alt="Clean Kitchen"
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" referrerPolicy="no-referrer" loading="lazy" />
              </div>
              <div className="grid grid-rows-2 gap-3 sm:gap-4 h-full">
                <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] h-full group">
                  <img src="https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1470&auto=format&fit=crop" alt="Cleaning Supplies"
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" referrerPolicy="no-referrer" loading="lazy" />
                </div>
                <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] h-full group">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1470&auto=format&fit=crop" alt="Clean Office"
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" referrerPolicy="no-referrer" loading="lazy" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <Reveal direction="left">
              <div>
                <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tighter">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Services</span>
                </h2>
                <p className="mt-4 text-white/50 max-w-xl text-base sm:text-lg font-light">
                  From one-time deep cleans to regular maintenance — we cover every corner of your space.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15} direction="right">
              <a href="#contact" className="inline-block bg-white/[0.02] border border-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all duration-300 active:scale-95 shrink-0">
                Book Now
              </a>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {SERVICES.map((s, i) => (
              <div key={s.title}>
                <Reveal delay={i * 0.1}>
                  <ServiceCard image={s.image} title={s.title} subtitle={s.subtitle} index={i + 1} />
                </Reveal>
              </div>
            ))}
          </div>

          {/* Additional Services Grid */}
          <Reveal delay={0.3}>
            <div className="mt-12 sm:mt-16">
              <p className="text-white/40 text-xs font-bold uppercase tracking-[0.25em] text-center mb-6">Also Available</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {EXTRA_SERVICES.map((s) => (
                  <a key={s.name} href="#contact"
                    className="group flex items-start gap-3 sm:gap-4 bg-white/[0.02] hover:bg-white/[0.05] border border-white/8 hover:border-orange-500/30 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.08)] cursor-pointer">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:bg-orange-500/20 group-hover:border-orange-400/40 transition-all duration-300">
                      {s.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-display font-bold text-sm sm:text-base uppercase tracking-wide text-white group-hover:text-orange-300 transition-colors duration-300 leading-tight mb-1">{s.name}</h4>
                      <p className="text-white/40 text-[11px] sm:text-xs font-light leading-relaxed">{s.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-10 md:mb-16 text-center">
              <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tighter">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Dirt Blaster?</span>
              </h2>
              <p className="mt-4 text-white/50 max-w-2xl mx-auto text-base sm:text-lg font-light">
                We don't just clean — we restore freshness and give you your time back.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {FEATURES.map((f, i) => (
              <div key={f.title}>
                <Reveal delay={i * 0.08}>
                  <FeatureCard icon={<span className="text-2xl">{f.icon}</span>} title={f.title} desc={f.desc} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / CONTACT ── */}
      <section id="contact" className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-orange-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <Reveal>
            <div className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6">
              Free Estimate — No Obligation
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold uppercase tracking-tighter mb-6">
              Ready for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Blast</span> Clean?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/50 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
              Get in touch today for a free, no-obligation quote. Serving all areas across Pune — homes, offices, and commercial spaces.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 mb-12">
              <a href="tel:+917xxxxxx000" className="bg-orange-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-orange-400 transition-all duration-300 active:scale-95 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] flex items-center justify-center gap-3">
                📞 Call Us Now
              </a>
              <a href="https://wa.me/917xxxxxx000" target="_blank" rel="noopener noreferrer"
                className="bg-white/[0.02] backdrop-blur-xl border border-white/10 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3">
                💬 WhatsApp Us
              </a>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: '📞', label: '+91 7XX XXX XX00' },
              { icon: '✉️', label: 'hello@dirtblaster.in' },
              { icon: '📍', label: 'Baner, Pune, Maharashtra' },
            ].map((item, i) => (
              <div key={i}>
              <Reveal delay={0.1 + i * 0.1}>
                <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-orange-500/30 transition-all duration-300">
                  <div className="text-2xl">{item.icon}</div>
                  <p className="text-white/70 text-sm font-light text-center">{item.label}</p>
                </div>
              </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GIANT BRAND FOOTER ── */}
      <footer className="relative overflow-hidden border-t border-white/10">

        {/* === MASSIVE BRAND NAME — bleeds off both sides, fills height === */}
        <div className="relative overflow-hidden" style={{ height: '52vh', minHeight: '220px' }}>

          {/* Sky-blue radial glow at center — like the warm glow in the reference */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 55% 75% at 50% 55%, rgba(249,115,22,0.13) 0%, rgba(251,191,36,0.05) 45%, transparent 75%)'
          }} />

          <div className="absolute inset-0 flex items-center justify-center px-4 overflow-hidden">
            <motion.h2
              className="font-display font-bold uppercase whitespace-nowrap select-none leading-none"
              style={{
                fontSize: 'clamp(2.5rem, 10.5vw, 12rem)',
                letterSpacing: '-0.015em',
                lineHeight: 0.88,
                background: 'linear-gradient(175deg, #ffffff 0%, #fdba74 55%, rgba(253,186,116,0.7) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              DIRT BLASTER
            </motion.h2>
          </div>

          {/* Very subtle vignette on left and right edges to soften the crop */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'linear-gradient(90deg, #0d0a07 0%, transparent 8%, transparent 92%, #0d0a07 100%)'
          }} />
        </div>

        {/* Footer info bar */}
        <div className="border-t border-white/[0.07] px-4 sm:px-6 py-5 sm:py-7">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="font-display font-bold text-sm tracking-[0.2em] uppercase text-orange-400/80 mb-0.5">{BRAND} · Pune</div>
              <p className="text-white/20 text-xs tracking-wide">Dirt Gets Blasted Clean. Always.</p>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-1 text-white/20 text-xs">
              <p>Baner, Pune, Maharashtra — 411 045</p>
              <p>+91 7XX XXX XX00 · hello@dirtblaster.in</p>
              <p className="mt-1 text-white/12">© {new Date().getFullYear()} Dirt Blaster Cleaning Services. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

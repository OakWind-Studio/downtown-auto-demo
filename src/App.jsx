import { useState, useEffect, useRef } from 'react'
import {
  Phone, Mail, MapPin, Clock, Star, ChevronDown,
  CircleDot, Search, Droplets, Wrench, Disc, Wind,
  Zap, Settings, Palette, ArrowRight, Menu, X,
  Wifi, UtensilsCrossed, CreditCard, Shield, CheckCircle,
  Quote
} from 'lucide-react'

// ─── Intersection Observer Hook ───────────────────────────────────────────────
function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

// ─── Sticky Nav ───────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Team', href: '#team' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-charcoal shadow-[0_4px_24px_rgba(0,0,0,0.35)]' : 'bg-charcoal/97'}`}>
      {/* Crimson bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-crimson opacity-70" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[62px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-crimson flex items-center justify-center transition-transform group-hover:scale-105">
              <CircleDot className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-oswald text-white text-[17px] leading-none tracking-wide block">DOWNTOWN TIRES</span>
              <span className="text-crimson text-[10px] font-dm font-semibold tracking-[0.2em] uppercase leading-none block mt-0.5">& Auto Repair · Fort Worth</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="font-dm text-[13px] text-white/65 hover:text-white transition-colors font-medium tracking-wide"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+18178702237"
              className="hidden sm:flex items-center gap-2 bg-crimson hover:bg-crimson-dark text-white font-oswald text-sm tracking-wider px-5 py-2.5 transition-all duration-200 hover:scale-[1.02]"
            >
              <Phone className="w-3.5 h-3.5" />
              (817) 870-2237
            </a>
            <button
              className="md:hidden text-white p-1"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-white/10 py-4 space-y-0.5 bg-charcoal">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block font-dm text-white/75 hover:text-white hover:bg-white/5 px-3 py-3 font-medium text-sm transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+18178702237"
              className="flex items-center gap-2.5 bg-crimson text-white font-oswald text-sm tracking-wider px-4 py-4 mt-3"
            >
              <Phone className="w-4 h-4" />
              CALL NOW — (817) 870-2237
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      className="relative min-h-screen md:min-h-0 md:h-[85vh] md:max-h-[900px] flex flex-col justify-center overflow-hidden"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1800&q=85)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%',
      }}
    >
      {/* Layered overlay: dark top/bottom, slightly lighter mid */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/55 to-charcoal/85" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)`
        }}
      />

      {/* Left crimson accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-crimson" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 sm:px-10 pt-28 md:pt-[90px] pb-24 md:pb-10">
        {/* Pre-headline badge */}
        <a
          href="https://www.google.com/maps/place/?q=place_id:ChIJr6bE70JxToYReqS8feMtjIA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-black/30 border border-crimson/50 px-3.5 py-2 mb-5 md:mb-4 animate-fade-in backdrop-blur-sm hover:bg-black/50 hover:border-crimson transition-all duration-200 cursor-pointer"
        >
          <MapPin className="w-3.5 h-3.5 text-crimson flex-shrink-0" />
          <span className="font-dm text-[11px] text-white/90 font-semibold tracking-[0.18em] uppercase">
            118 N Henderson St · Fort Worth, TX 76102
          </span>
        </a>

        {/* Main headline */}
        <h1
          className="font-oswald text-[52px] sm:text-[68px] lg:text-[80px] text-white leading-[0.93] mb-4 md:mb-3 animate-fade-up"
          style={{ maxWidth: '780px' }}
        >
          DOWNTOWN<br />
          FORT WORTH'S{' '}
          <span className="text-crimson">TRUSTED</span><br />
          AUTO SHOP FOR{' '}
          <span
            className="text-crimson relative inline-block"
            style={{ textShadow: '0 0 40px rgba(192,57,43,0.4)' }}
          >
            20+ YEARS
          </span>
        </h1>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-4 md:mb-3 animate-fade-up delay-100">
          <div className="w-10 h-[3px] bg-crimson" />
          <div className="w-2 h-[3px] bg-crimson/40" />
        </div>

        {/* Sub-headline */}
        <p className="font-dm text-[17px] sm:text-[19px] text-white/75 max-w-[520px] leading-[1.6] mb-8 md:mb-6 animate-fade-up delay-200">
          Tires, repairs, inspections, and body work — done right, done fast, done honest.
          Steps from downtown, we get you back on the road while you grab lunch.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
          <a
            href="tel:+18178702237"
            className="inline-flex items-center justify-center gap-3 bg-crimson hover:bg-crimson-dark text-white font-oswald text-[15px] sm:text-[17px] tracking-[0.1em] px-7 sm:px-9 py-4.5 transition-all duration-200 hover:scale-[1.02] shadow-[0_4px_20px_rgba(192,57,43,0.4)] whitespace-nowrap"
            style={{ paddingTop: '14px', paddingBottom: '14px' }}
          >
            <Phone className="w-5 h-5" />
            CALL NOW — (817) 870-2237
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white/80 text-white font-dm font-semibold text-[15px] px-8 py-4 transition-all duration-200 hover:bg-white/8 backdrop-blur-sm"
            style={{ paddingTop: '14px', paddingBottom: '14px' }}
          >
            Our Services
            <ChevronDown className="w-4 h-4" />
          </a>
        </div>
      </div>

    </section>
  )
}

// ─── Trust Strip ─────────────────────────────────────────────────────────────
function TrustStrip() {
  return (
    <div className="relative z-20 bg-near-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 md:py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {[
            { icon: <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />, text: '4.3 Stars', sub: '400+ Reviews' },
            { icon: <Shield className="w-4 h-4 text-trust-green" />, text: '20+ Years', sub: 'in Business' },
            { icon: <CheckCircle className="w-4 h-4 text-trust-green" />, text: 'BBB Listed', sub: 'Accredited' },
            { icon: <MapPin className="w-4 h-4 text-crimson" />, text: 'Downtown', sub: 'Fort Worth, TX' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5">
              {item.icon}
              <span className="font-oswald text-white text-[14px] tracking-wider">{item.text}</span>
              <span className="font-dm text-white/50 text-[12px] hidden sm:block">· {item.sub}</span>
              {i < 3 && <span className="text-white/15 ml-5 hidden sm:block">|</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────
const SERVICES = [
  { icon: CircleDot, name: 'Tires', desc: 'Sales, repair, rotation, balancing, and TPMS service for all makes and models.' },
  { icon: Search,    name: 'State Inspections', desc: 'Texas vehicle inspections — in and out fast, no appointment needed.' },
  { icon: Droplets,  name: 'Oil Changes', desc: 'Conventional, blend, and full synthetic options with quick turnaround.' },
  { icon: Wrench,    name: 'Engine Repair', desc: 'Diagnostics, gaskets, timing belts, and complete engine rebuilds.' },
  { icon: Disc,      name: 'Brake Service', desc: 'Pads, rotors, and brake lines — stop safe, stop confident.' },
  { icon: Wind,      name: 'AC & Heating', desc: 'Leak diagnostics, recharges, and compressor repair year-round.' },
  { icon: Zap,       name: 'Electrical & Diagnostics', desc: 'Check engine lights, computer scans — we read what your car is telling us.' },
  { icon: Settings,  name: 'Suspension & Alignment', desc: 'Struts, shocks, springs, ball joints, and precision wheel alignment.' },
  { icon: Palette,   name: 'Body Work & Paint', desc: 'Dent repair, professional paint matching, frame straightening, insurance welcome.' },
]

function Services() {
  const [ref, inView] = useInView()

  return (
    <section id="services" className="py-20 sm:py-28 bg-warm-gray" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-1 bg-crimson" />
            <span className="font-dm text-[11px] font-semibold tracking-[0.2em] text-crimson uppercase">What We Do</span>
          </div>
          <h2 className="font-oswald text-[38px] sm:text-[50px] text-near-black mb-4 leading-tight">
            EVERYTHING YOUR CAR NEEDS —<br />
            <span className="text-crimson">UNDER ONE ROOF</span>
          </h2>
          <p className="font-dm text-[17px] text-gray-500 max-w-lg leading-relaxed">
            From a quick tire patch to a full engine rebuild, our team handles it all — with a fair price before we touch a single bolt.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => {
            const Icon = s.icon
            const num = String(i + 1).padStart(2, '0')
            const colDelay = (i % 3) * 80
            return (
              <div
                key={s.name}
                className={`bg-white border border-gray-100 hover:border-crimson/20 p-6 relative overflow-hidden card-lift group transition-all duration-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${colDelay + 100}ms`, transitionDuration: '600ms' }}
              >
                {/* Number watermark */}
                <span className="absolute top-3 right-4 font-oswald text-[36px] text-gray-100 group-hover:text-crimson/10 leading-none select-none transition-colors duration-300">
                  {num}
                </span>

                {/* Left crimson border on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-crimson transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-warm-gray group-hover:bg-crimson transition-all duration-250 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-crimson group-hover:text-white transition-colors duration-250" />
                  </div>
                  <div className="pt-0.5">
                    <h3 className="font-oswald text-[17px] text-near-black mb-1.5 tracking-wide">{s.name}</h3>
                    <p className="font-dm text-[13px] text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Closing CTA bar */}
        <div className={`mt-10 bg-charcoal relative overflow-hidden transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-crimson" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-8 py-5">
            <p className="font-dm text-white/85 text-[15px] leading-relaxed max-w-2xl">
              <span className="text-crimson font-semibold">Not sure what's wrong?</span>{' '}
              Bring it in — we'll diagnose it, explain it clearly, and give you a fair price before any work starts.
            </p>
            <a
              href="tel:+18178702237"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-crimson hover:bg-crimson-dark text-white font-oswald text-sm tracking-wider px-5 py-3 transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              CALL US
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Why Downtown Tires ───────────────────────────────────────────────────────
const STATS = [
  { value: '20+', label: 'Years Serving Fort Worth' },
  { value: '400+', label: 'Customer Reviews' },
  { value: '4.3★', label: 'Average Rating' },
  { value: 'Same Day', label: 'Service Available' },
]

function WhyUs() {
  const [ref, inView] = useInView()

  return (
    <section
      id="why-us"
      className="py-20 sm:py-28 bg-charcoal relative overflow-hidden"
      ref={ref}
    >
      {/* Ghost text watermark */}
      <div
        className="absolute -top-6 right-[-20px] font-oswald text-[200px] leading-none select-none pointer-events-none"
        style={{ color: 'rgba(255,255,255,0.028)', letterSpacing: '-4px' }}
        aria-hidden
      >
        HONEST
      </div>

      {/* Subtle diagonal stripe accent */}
      <div
        className="absolute bottom-0 left-0 w-64 h-1 bg-crimson/50"
        style={{ transform: 'rotate(-15deg) translateY(-20px) translateX(-30px)' }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Copy */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-1 bg-crimson" />
              <span className="font-dm text-[11px] font-semibold tracking-[0.2em] text-crimson uppercase">Our Story</span>
            </div>
            <h2 className="font-oswald text-[38px] sm:text-[48px] text-white mb-8 leading-tight">
              WHY <span className="text-crimson">400+{'\u00A0'}CUSTOMERS</span><br />TRUST US
            </h2>

            <div className="space-y-5 font-dm text-white/70 text-[15px] leading-[1.75]">
              <p>
                For over 20 years, our team has served downtown Fort Worth from our shop on Henderson Street. We're not a chain. We're not a franchise.{' '}
                <span className="text-white font-semibold">We're your neighbors.</span>
              </p>
              <p>
                When Mike tells you what's wrong with your car, he tells you <em className="text-white/90 not-italic font-medium">all</em> of it — the good and the bad — and gives you the cost before any work starts.
                No surprises. No upsells. Just an honest diagnosis from a team that's been doing this for two decades.
              </p>
              <p>
                Our shop is clean, our bays are organized, and we move fast. Need your car back by lunch?{' '}
                <span className="text-white font-semibold">We'll make it happen.</span>{' '}
                Want to grab food at one of the downtown spots around the corner while we work? Go for it — we'll text you when it's ready.
              </p>
            </div>

            {/* Amenity chips */}
            <div className="flex flex-wrap gap-2.5 mt-9">
              {[
                { icon: Wifi, label: 'Free WiFi' },
                { icon: UtensilsCrossed, label: 'Walkable to Restaurants' },
                { icon: CreditCard, label: 'All Cards Accepted' },
                { icon: Shield, label: '20+ Year Track Record' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 border border-white/15 hover:border-crimson/50 px-3.5 py-2 text-white/60 font-dm text-[13px] transition-colors duration-200 cursor-default">
                  <Icon className="w-3.5 h-3.5 text-crimson flex-shrink-0" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats + Photo */}
          <div className={`transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-2 gap-px bg-white/8 mb-px">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="bg-[#232527] hover:bg-[#282a2c] transition-colors duration-200 p-8 group"
                >
                  <span className="font-oswald text-[44px] sm:text-[52px] text-crimson leading-none block group-hover:scale-[1.03] transition-transform duration-200 origin-left">
                    {s.value}
                  </span>
                  <span className="font-dm text-[12px] text-white/50 font-medium mt-2.5 block leading-snug">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Shop photo — real auto repair image */}
            <div className="overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
                alt="Clean, professional auto repair shop bays"
                className="w-full h-52 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent flex items-end px-5 py-4">
                <p className="font-dm text-[12px] text-white/70 italic">"The garage bays are clean and debris clear." — Verified Google Review</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Team ─────────────────────────────────────────────────────────────────────
function Team() {
  const [ref, inView] = useInView()

  return (
    <section id="team" className="py-20 sm:py-28 bg-warm-gray" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-1 bg-crimson" />
            <span className="font-dm text-[11px] font-semibold tracking-[0.2em] text-crimson uppercase">The Team</span>
          </div>
          <h2 className="font-oswald text-[38px] sm:text-[50px] text-near-black leading-tight">
            THE PEOPLE <span className="text-crimson">BEHIND THE LIFTS</span>
          </h2>
          <p className="font-dm text-[16px] text-gray-500 mt-3 max-w-lg leading-relaxed">
            Your current site doesn't mention a single person. Ours puts the people customers love front and center.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: 'Mike',
              role: 'Service Advisor',
              initial: 'M',
              bio: "If you've been here before, you've probably met Mike. He's the guy who tells you not to worry, explains exactly what's going on, and gets you out fast. Customers call him honest, friendly, and the reason they keep coming back.",
              quote: 'Mike immediately told me not to worry and took great care of my tire and oil change in less than an hour.',
              attribution: 'Google Review',
              delay: 0,
            },
            {
              name: 'Nour',
              role: 'Lead Technician',
              initial: 'N',
              bio: "Known for being thorough, efficient, and approachable. Nour goes above and beyond — it's not just about fixing the car, it's about making sure you understand what was done and why.",
              quote: 'Thorough, efficient, and approachable, often going above and beyond to ensure customer satisfaction.',
              attribution: 'Google Review',
              delay: 150,
            },
          ].map((person) => (
            <div
              key={person.name}
              className={`bg-white overflow-hidden card-lift transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${person.delay}ms` }}
            >
              {/* Top accent bar */}
              <div className="h-1 bg-crimson" />

              <div className="p-8">
                <div className="flex items-center gap-5 mb-6">
                  {/* Avatar — styled monogram */}
                  <div className="relative flex-shrink-0">
                    <div className="w-[60px] h-[60px] bg-charcoal flex items-center justify-center">
                      <span className="font-oswald text-3xl text-white leading-none">{person.initial}</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-crimson" />
                  </div>
                  <div>
                    <h3 className="font-oswald text-[24px] text-near-black leading-none mb-1">{person.name}</h3>
                    <span className="font-dm text-[11px] text-crimson font-semibold uppercase tracking-[0.18em]">{person.role}</span>
                    <div className="flex gap-0.5 mt-1.5">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-yellow-400 fill-yellow-400" />)}
                    </div>
                  </div>
                </div>

                <p className="font-dm text-[14px] text-gray-600 leading-[1.75] mb-6">{person.bio}</p>

                {/* Quote */}
                <div className="bg-warm-gray p-5 relative">
                  <Quote className="absolute top-3 right-4 w-8 h-8 text-crimson/15" />
                  <p className="font-dm text-[13px] text-gray-600 italic leading-relaxed pr-8">"{person.quote}"</p>
                  <cite className="font-dm text-[11px] text-gray-400 mt-2 block not-italic font-medium">
                    — Verified {person.attribution}
                  </cite>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note below */}
        <p className={`mt-8 text-center font-dm text-[13px] text-gray-400 transition-all duration-700 delay-300 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          Photos coming soon — we'll swap in real headshots before launch.
        </p>
      </div>
    </section>
  )
}

// ─── Reviews ──────────────────────────────────────────────────────────────────
const REVIEWS = [
  {
    text: "He was extremely nice and accommodating. I'm not from or familiar with the area, and he guided me right to the shop. Got my car in and out so I could get back to the hospital with my child. Gave me the option to repair or replace my tire.",
    source: 'Google',
    stars: 5,
  },
  {
    text: "Mike was clear on the three issues it could be and the cost of what each would run. The garage bays are clean and debris clear. Mike is friendly and in constant communication. I paid less than $300.",
    source: 'Google',
    stars: 5,
  },
  {
    text: "THESE PEOPLE ARE EXCELLENT. I HAVE USED THEM NUMEROUS TIMES FOR REPAIRS, TIRES, AND ROUTINE MAINTENANCE. THEY ARE CONVENIENT, NICE, AND MOST OF ALL HONEST, WHICH IS HARD TO FIND.",
    source: 'Yellow Pages',
    stars: 5,
  },
  {
    text: "These are the nicest people. They are very honest when fixing your car, they have always done a very good job, never had any problems afterwards. They go out of their way to please their customers.",
    source: 'Yellow Pages',
    stars: 5,
  },
  {
    text: "Rushed to the nearest tire shop and luckily I landed here. Mike immediately told me not to worry and took great care of my tire and oil change in less than an hour.",
    source: 'Yelp',
    stars: 5,
  },
  {
    text: "I'm very happy with the work they have done. They found a few small things that needed repair. I was asked if I wanted the repair and given an estimate. They were very conscientious.",
    source: 'Google',
    stars: 5,
  },
]

function StarRow({ count = 5, size = 'md' }) {
  const cls = size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className={`${cls} text-yellow-400 fill-yellow-400`} />
      ))}
    </div>
  )
}

function Reviews() {
  const [ref, inView] = useInView()

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header + aggregate rating */}
        <div className={`mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-1 bg-crimson" />
            <span className="font-dm text-[11px] font-semibold tracking-[0.2em] text-crimson uppercase">Customer Reviews</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div>
              <h2 className="font-oswald text-[38px] sm:text-[50px] text-near-black leading-tight">
                DON'T TAKE <span className="text-crimson">OUR WORD FOR IT</span>
              </h2>
              <p className="font-dm text-gray-400 text-[15px] mt-2">Real customers. Real experiences. Unfiltered.</p>
            </div>

            {/* Aggregate badge */}
            <div className="flex-shrink-0 bg-warm-gray border border-gray-200 px-6 py-4 flex items-center gap-4">
              <div>
                <div className="font-oswald text-[42px] text-near-black leading-none">4.3</div>
                <StarRow count={4} size="sm" />
              </div>
              <div className="border-l border-gray-200 pl-4">
                <div className="font-dm text-[13px] text-gray-500 font-medium">400+</div>
                <div className="font-dm text-[11px] text-gray-400">reviews across</div>
                <div className="font-dm text-[11px] text-gray-400">Google, Yelp & more</div>
              </div>
            </div>
          </div>
        </div>

        {/* Review grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className={`bg-warm-gray p-6 relative overflow-hidden card-lift group transition-all duration-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(i % 3) * 80 + 80}ms`, transitionDuration: '600ms' }}
            >
              {/* Giant quote mark */}
              <Quote className="absolute top-2 right-3 w-10 h-10 text-gray-200 group-hover:text-crimson/10 transition-colors duration-300" />

              <StarRow count={r.stars} />
              <p className="font-dm text-[14px] text-gray-700 leading-[1.75] mt-3 mb-5 relative z-10">
                "{r.text}"
              </p>
              <div className="flex items-center gap-2.5 pt-3 border-t border-gray-200">
                <div className="w-5 h-5 bg-charcoal/15 rounded-full flex items-center justify-center">
                  <span className="font-oswald text-[8px] text-charcoal/60">{r.source[0]}</span>
                </div>
                <span className="font-dm text-[12px] text-gray-400 font-medium">Verified {r.source} Review</span>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-10 text-center transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a
            href="https://www.google.com/maps/place/?q=place_id:ChIJr6bE70JxToYReqS8feMtjIA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-oswald text-[14px] tracking-wider text-crimson hover:text-crimson-dark transition-colors border-b-2 border-crimson/30 hover:border-crimson pb-1"
          >
            READ ALL 400+ REVIEWS ON GOOGLE
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Location & Contact ───────────────────────────────────────────────────────
const HOURS = [
  { day: 'Monday',    hours: '8:00 AM – 6:00 PM' },
  { day: 'Tuesday',   hours: '8:00 AM – 6:00 PM' },
  { day: 'Wednesday', hours: '8:00 AM – 6:00 PM' },
  { day: 'Thursday',  hours: '8:00 AM – 6:00 PM' },
  { day: 'Friday',    hours: '8:00 AM – 6:00 PM' },
  { day: 'Saturday',  hours: '8:00 AM – 6:00 PM' },
  { day: 'Sunday',    hours: 'Closed', closed: true },
]

function Location() {
  const [ref, inView] = useInView()
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

  return (
    <section id="location" className="py-20 sm:py-28 bg-warm-gray" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-1 bg-crimson" />
            <span className="font-dm text-[11px] font-semibold tracking-[0.2em] text-crimson uppercase">Get Here</span>
          </div>
          <h2 className="font-oswald text-[38px] sm:text-[50px] text-near-black leading-tight">
            FIND US IN <span className="text-crimson">DOWNTOWN FORT WORTH</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Contact + Hours */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Contact links */}
            <div className="space-y-4 mb-8">
              <a
                href="https://maps.google.com/?q=118+N+Henderson+St+Fort+Worth+TX+76102"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 group p-4 bg-white hover:border-l-4 hover:border-crimson hover:pl-3 transition-all duration-200"
              >
                <MapPin className="w-5 h-5 text-crimson mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-oswald text-[16px] text-near-black group-hover:text-crimson transition-colors tracking-wide block">118 N HENDERSON ST</span>
                  <span className="font-dm text-[13px] text-gray-400">Fort Worth, TX 76102 · Click for directions</span>
                </div>
              </a>

              <a href="tel:+18178702237" className="flex items-center gap-3.5 group p-4 bg-white hover:border-l-4 hover:border-crimson hover:pl-3 transition-all duration-200">
                <Phone className="w-5 h-5 text-crimson flex-shrink-0" />
                <div>
                  <span className="font-oswald text-[16px] text-near-black group-hover:text-crimson transition-colors tracking-wide block">(817) 870-2237</span>
                  <span className="font-dm text-[13px] text-gray-400">Tap to call now</span>
                </div>
              </a>

              <a href="mailto:Downtowntire78@gmail.com" className="flex items-center gap-3.5 group p-4 bg-white hover:border-l-4 hover:border-crimson hover:pl-3 transition-all duration-200">
                <Mail className="w-5 h-5 text-crimson flex-shrink-0" />
                <div>
                  <span className="font-dm font-medium text-[14px] text-near-black group-hover:text-crimson transition-colors block">Downtowntire78@gmail.com</span>
                  <span className="font-dm text-[13px] text-gray-400">We respond same business day</span>
                </div>
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white p-6 mb-5">
              <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-gray-100">
                <Clock className="w-4 h-4 text-crimson" />
                <span className="font-oswald text-[15px] text-near-black tracking-widest">HOURS OF OPERATION</span>
              </div>
              <div className="space-y-0">
                {HOURS.map(({ day, hours, closed }) => {
                  const isToday = day === today
                  return (
                    <div
                      key={day}
                      className={`flex justify-between items-center py-2.5 border-b border-gray-50 last:border-0 ${isToday ? 'bg-crimson/5 -mx-2 px-2 rounded' : ''}`}
                    >
                      <span className={`font-dm text-[13px] ${isToday ? 'text-crimson font-semibold' : 'text-gray-500'}`}>
                        {day}{isToday && <span className="ml-2 text-[10px] font-oswald tracking-widest bg-crimson text-white px-1.5 py-0.5">TODAY</span>}
                      </span>
                      <span className={`font-dm text-[13px] font-medium ${closed ? 'text-gray-300' : isToday ? 'text-crimson font-semibold' : 'text-gray-700'}`}>
                        {hours}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Perks */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-[13px] font-dm text-gray-600 bg-white px-3 py-2">
                <Wifi className="w-3.5 h-3.5 text-trust-green" />
                Free WiFi while you wait
              </div>
              <div className="flex items-center gap-2 text-[13px] font-dm text-gray-600 bg-white px-3 py-2">
                <UtensilsCrossed className="w-3.5 h-3.5 text-trust-green" />
                Walkable to downtown restaurants
              </div>
            </div>
          </div>

          {/* Right: Fort Worth photo map */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="w-full overflow-hidden relative">
              <a
                href="https://www.google.com/maps/place/?q=place_id:ChIJr6bE70JxToYReqS8feMtjIA"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden group"
              >
                {/* Actual Fort Worth photo — Tarrant County Courthouse, Sundance Square */}
                <img
                  src="https://images.unsplash.com/photo-1757451754781-064d9c1f312e?w=900&q=82"
                  alt="Tarrant County Courthouse in downtown Fort Worth, Texas — walking distance from our shop"
                  className="w-full h-[360px] lg:h-[420px] object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

                {/* Top label */}
                <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-sm px-3 py-1.5 border-l-2 border-crimson">
                  <p className="font-dm text-[11px] text-white/80 font-medium tracking-wide">Downtown Fort Worth · Sundance Square Area</p>
                </div>

                {/* Pin + address */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                  <div>
                    <p className="font-oswald text-white text-[18px] tracking-wide leading-tight">118 N HENDERSON ST</p>
                    <p className="font-dm text-white/70 text-[13px]">Fort Worth, TX 76102</p>
                  </div>
                  <div className="bg-crimson group-hover:bg-crimson-dark transition-colors p-3">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Hover reveal */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-crimson text-white font-oswald text-[14px] tracking-widest px-6 py-3 flex items-center gap-2">
                    OPEN IN GOOGLE MAPS <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            </div>

            <p className="font-dm text-[12px] text-gray-400 mt-3 leading-relaxed">
              Just off Henderson Street in downtown Fort Worth, one block from the Convention Center.
              Easy to find, easy to park — and walkable to dozens of restaurants while you wait.
            </p>

            {/* Secondary phone */}
            <div className="mt-4 border-t border-gray-200 pt-4">
              <p className="font-dm text-[12px] text-gray-400">
                Secondary line: <a href="tel:+18176090078" className="text-crimson hover:underline">(817) 609-0078</a>
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className={`mt-16 bg-charcoal px-8 py-10 relative overflow-hidden transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {/* Decorative element */}
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-crimson" />
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-crimson/20" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <p className="font-oswald text-white text-[22px] tracking-wide mb-1">READY TO GET STARTED?</p>
              <p className="font-dm text-white/50 text-[14px]">Give us a call — we'll take care of the rest. Same-day service available.</p>
            </div>
            <a
              href="tel:+18178702237"
              className="flex-shrink-0 inline-flex items-center gap-3 bg-crimson hover:bg-crimson-dark text-white font-oswald text-[18px] tracking-wider px-10 py-4 transition-all duration-200 hover:scale-[1.02] shadow-[0_4px_20px_rgba(192,57,43,0.35)]"
            >
              <Phone className="w-5 h-5" />
              (817) 870-2237
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#111214] border-t border-white/8">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          {/* Mini logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 bg-crimson flex items-center justify-center flex-shrink-0">
              <CircleDot className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <span className="font-oswald text-white/60 text-[13px] tracking-wider">DOWNTOWN TIRES & AUTO REPAIR</span>
              <p className="font-dm text-white/25 text-[11px] mt-0.5">118 N Henderson St · Fort Worth, TX 76102 · (817) 870-2237</p>
            </div>
          </div>

          {/* Links + byline */}
          <div className="flex flex-col items-start sm:items-end gap-1.5">
            <div className="flex gap-4">
              <a href="https://www.google.com/maps/place/?q=place_id:ChIJr6bE70JxToYReqS8feMtjIA" target="_blank" rel="noopener noreferrer" className="font-dm text-[11px] text-white/25 hover:text-white/60 transition-colors">Google</a>
              <a href="https://www.facebook.com/p/Downtown-Tires-State-Inspection-100063652446557/" target="_blank" rel="noopener noreferrer" className="font-dm text-[11px] text-white/25 hover:text-white/60 transition-colors">Facebook</a>
              <a href="mailto:Downtowntire78@gmail.com" className="font-dm text-[11px] text-white/25 hover:text-white/60 transition-colors">Email</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-dm text-[11px] text-white/20">© 2025 Downtown Tires & Auto Repair</span>
              <span className="text-white/10">·</span>
              <a href="https://oakwindstudio.com" target="_blank" rel="noopener noreferrer" className="font-dm text-[11px] text-white/25 hover:text-crimson/80 transition-colors">
                Site by OakWind Studio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Nav />
      <main>
        {/* Dark wrapper prevents white triangle from clip-diagonal */}
        <div className="bg-near-black">
          <Hero />
          <TrustStrip />
        </div>
        <Services />
        <WhyUs />
        <Team />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </>
  )
}

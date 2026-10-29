export function PortfolioBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* 1. Deep Matte Charcoal Studio Base */}
      <div className="absolute inset-0 bg-[#0c0d12]" />

      {/* 2. Stealth Minimalist Developer Desk Flat-Lay Backdrop */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/desk-bg.jpg"
          alt="Developer Workspace Backdrop"
          className="w-full h-full object-cover object-center opacity-60 sm:opacity-70 filter brightness-[0.88] contrast-[1.12]"
        />
      </div>

      {/* 3. Studio Lighting Spotlight (Centered behind hero content for readability) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 48%, rgba(20, 22, 28, 0.35) 0%, rgba(14, 15, 20, 0.65) 55%, rgba(10, 11, 15, 0.92) 100%)",
        }}
      />

      {/* 4. Multi-Zone Atmospheric Ambient Lights */}
      {/* Hero Studio Backlight */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-radial from-slate-200/[0.05] via-indigo-500/[0.03] to-transparent rounded-full blur-3xl animate-orb-1" />

      {/* Hero Right Electric Cyan Accent (behind 3D avatar & annotations) */}
      <div className="absolute top-20 right-[-10%] w-[650px] h-[650px] bg-radial from-cyan-500/[0.07] via-blue-600/[0.03] to-transparent rounded-full blur-[140px] animate-orb-2" />

      {/* Mid-Page Aurora (Experience & Projects) */}
      <div className="absolute top-[32%] -left-32 w-[700px] h-[700px] bg-radial from-violet-600/[0.06] via-indigo-600/[0.02] to-transparent rounded-full blur-[160px] animate-orb-3" />

      {/* Projects Right Ambient Orb */}
      <div className="absolute top-[48%] -right-40 w-[650px] h-[650px] bg-radial from-sky-500/[0.05] via-indigo-500/[0.02] to-transparent rounded-full blur-[150px] animate-orb-1" />

      {/* Tech Skills & Architecture Accent */}
      <div className="absolute top-[68%] left-[10%] w-[600px] h-[600px] bg-radial from-emerald-500/[0.05] via-teal-600/[0.02] to-transparent rounded-full blur-[150px] animate-orb-2" />

      {/* Contact & Connect Deep Vignette (Bottom) */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-radial from-indigo-500/[0.07] via-purple-600/[0.02] to-transparent rounded-full blur-[150px] animate-orb-3" />

      {/* 5. Precision Viewfinder Blueprint Grid with Crosshairs */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="portfolio-grid"
            width="56"
            height="56"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 56 0 L 0 0 0 56"
              fill="none"
              stroke="rgba(255, 255, 255, 0.03)"
              strokeWidth="1"
            />
            <path
              d="M 0 -3 L 0 3 M -3 0 L 3 0"
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
            />
          </pattern>

          <radialGradient id="portfolio-grid-mask" cx="50%" cy="45%" r="75%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="80%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
          </radialGradient>
          <mask id="grid-vignette">
            <rect width="100%" height="100%" fill="url(#portfolio-grid-mask)" />
          </mask>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="url(#portfolio-grid)"
          mask="url(#grid-vignette)"
        />
      </svg>

      {/* 6. Subtle Tactile Studio Film Grain / Noise Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 7. Edge Vignette & Corner Fades */}
      <div className="absolute inset-0 bg-radial from-transparent via-black/25 to-black/75 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0c0d12] to-transparent pointer-events-none" />
    </div>
  );
}


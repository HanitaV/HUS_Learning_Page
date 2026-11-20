/**
 * Crisp vector celestial astrolabe and orbital geometry for the Atmospheric Observatory hero.
 * Uses pure SVG geometric primitives and CSS custom properties so it adapts cleanly to
 * light (morning sky) and dark (starlit midnight) themes without external assets or canvas overhead.
 */
export function ObservatoryCanvas() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
    >
      <svg
        viewBox="0 0 1200 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="mx-auto h-full w-full max-w-[1440px]"
      >
        <defs>
          <radialGradient id="hus-zenith-halo" cx="50%" cy="44%" r="48%">
            <stop offset="0%" stopColor="var(--hus-glow-core)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="hus-starlight-halo" cx="74%" cy="22%" r="28%">
            <stop offset="0%" stopColor="var(--hus-glow-warm)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Soft zenith & starlight atmospheric diffusion */}
        <circle cx="600" cy="316" r="420" fill="url(#hus-zenith-halo)" />
        <circle cx="880" cy="160" r="240" fill="url(#hus-starlight-halo)" />

        {/* Subtle meridian horizon & zenith axes */}
        <line
          x1="600"
          y1="20"
          x2="600"
          y2="700"
          stroke="var(--hus-orbit)"
          strokeWidth="1"
          strokeDasharray="3 7"
        />
        <line
          x1="60"
          y1="330"
          x2="1140"
          y2="330"
          stroke="var(--hus-orbit)"
          strokeWidth="1"
          strokeDasharray="3 7"
        />

        {/* Outer celestial sphere & degree ticks */}
        <g className="hus-orbit-spin-slow">
          <circle
            cx="600"
            cy="330"
            r="348"
            stroke="var(--hus-orbit)"
            strokeWidth="1.1"
          />
          <circle
            cx="600"
            cy="330"
            r="338"
            stroke="var(--hus-orbit-strong)"
            strokeWidth="1"
            strokeDasharray="1 18"
          />
          {/* Cardinal & solstice markers on outer ring */}
          <circle cx="948" cy="330" r="4" fill="var(--hus-accent)" fillOpacity="0.8" />
          <circle cx="252" cy="330" r="3" fill="var(--hus-starlight)" fillOpacity="0.85" />
          <circle cx="600" cy="-18" r="2.8" fill="var(--hus-accent)" fillOpacity="0.65" />
          <circle cx="846" cy="84" r="3.4" fill="var(--hus-starlight)" fillOpacity="0.9" />
        </g>

        {/* Middle inclined ecliptic orbit */}
        <g transform="rotate(-17 600 330)">
          <ellipse
            cx="600"
            cy="330"
            rx="472"
            ry="172"
            stroke="var(--hus-orbit-strong)"
            strokeWidth="1.15"
          />
          <circle
            cx="1072"
            cy="330"
            r="4.8"
            fill="var(--hus-accent)"
            fillOpacity="0.9"
            className="hus-star-node"
          />
          <circle
            cx="128"
            cy="330"
            r="3.2"
            fill="var(--hus-starlight)"
            fillOpacity="0.88"
          />
        </g>

        {/* Counter-inclined harmonic orbit */}
        <g transform="rotate(22 600 330)">
          <ellipse
            cx="600"
            cy="330"
            rx="416"
            ry="136"
            stroke="var(--hus-orbit)"
            strokeWidth="1"
            strokeDasharray="6 6"
          />
        </g>

        {/* Inner astrolabe ring (counter-rotating) */}
        <g className="hus-orbit-spin-reverse">
          <circle
            cx="600"
            cy="330"
            r="228"
            stroke="var(--hus-orbit-strong)"
            strokeWidth="1.1"
          />
          <circle
            cx="600"
            cy="330"
            r="146"
            stroke="var(--hus-orbit)"
            strokeWidth="1"
          />
          <circle cx="600" cy="102" r="3.2" fill="var(--hus-accent)" fillOpacity="0.85" />
          <circle cx="797" cy="444" r="2.8" fill="var(--hus-starlight)" fillOpacity="0.88" />
          <circle cx="403" cy="444" r="2.4" fill="var(--hus-accent)" fillOpacity="0.68" />
        </g>

        {/* Quiet constellation nodes across the upper field */}
        <g fill="var(--hus-starlight)">
          <circle cx="164" cy="128" r="2.4" fillOpacity="0.78" className="hus-star-node" />
          <circle cx="232" cy="94" r="1.8" fillOpacity="0.58" />
          <circle cx="968" cy="112" r="2.6" fillOpacity="0.82" className="hus-star-node" />
          <circle cx="1044" cy="184" r="1.9" fillOpacity="0.6" />
          <circle cx="1020" cy="494" r="2.2" fillOpacity="0.65" />
          <circle cx="166" cy="472" r="2" fillOpacity="0.62" />
        </g>
        <path
          d="M164 128L232 94M968 112L1044 184"
          stroke="var(--hus-orbit-strong)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

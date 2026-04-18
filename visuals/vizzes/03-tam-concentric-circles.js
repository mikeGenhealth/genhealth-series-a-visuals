// === V03 — TAM · concentric circles with orbital labels ===================
(function(){
  // r = k * sqrt(TAM); k=14 -> r1=31, r2=242, r3=542 (too big for 700px svg)
  // Use k=11 -> r1=25, r2=190, r3=425 (fits 900 diameter)
  const k = 11;
  const r1 = Math.sqrt(5)*k;    // ~25
  const r2 = Math.sqrt(300)*k;  // ~190
  const r3 = Math.sqrt(1500)*k; // ~426

  const viz = `
  <div class="viz">
    <div class="folio-tl"><span class="dot"></span>03 / TAM · ORBITS</div>
    <div class="folio-tr">SERIES A · 2026</div>

    <div style="position:absolute; left:40px; top:100px; max-width:440px;">
      <div class="eyebrow" style="color:#00c37a">Three orbits · one product</div>
      <h1 style="font-size:40px; margin-top:14px; line-height:1.05;">
        The agents don't change.<br/>
        <span style="color:#8a939f; font-weight:500;">The wallet does.</span>
      </h1>
      <p style="color:#8a939f; font-size:14px; line-height:1.6; margin-top:22px;">
        Each ring is sized by TAM. The core is today's software buyer; the outer ring is the premium dollar we collect against once we contract with the health plan.
      </p>
      <div style="margin-top:30px; font-family:'JetBrains Mono'; font-size:11px; letter-spacing:0.22em; color:#505a66;">
        AREAS SCALE AS √(TAM) — LINEAR WOULD BE UNREADABLE
      </div>
    </div>

    <svg viewBox="0 0 900 900" style="position:absolute; right:-40px; top:-60px; width:920px; height:920px;">
      <defs>
        <radialGradient id="rad3" cx="50%" cy="50%">
          <stop offset="0%" stop-color="#00c37a" stop-opacity="0.10"/>
          <stop offset="70%" stop-color="#00c37a" stop-opacity="0.02"/>
          <stop offset="100%" stop-color="#00c37a" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <!-- Stage 3 ring -->
      <g class="fade-in d1">
        <circle cx="450" cy="450" r="${r3}" fill="url(#rad3)"/>
        <circle cx="450" cy="450" r="${r3}" fill="none" stroke="#00c37a" stroke-opacity="0.35" stroke-width="1"/>
      </g>

      <!-- Stage 2 ring -->
      <g class="fade-in d2">
        <circle cx="450" cy="450" r="${r2}" fill="#00c37a" fill-opacity="0.05" stroke="#00c37a" stroke-opacity="0.5" stroke-width="1"/>
      </g>

      <!-- Stage 1 core -->
      <g class="fade-in d3">
        <circle cx="450" cy="450" r="${r1}" fill="#00c37a"/>
        <circle cx="450" cy="450" r="${r1 + 10}" fill="none" stroke="#00c37a" stroke-opacity="0.4"/>
      </g>

      <!-- Orbital tick marks -->
      <g stroke="#242b35" stroke-width="1">
        <line x1="450" y1="${450 - r3}" x2="450" y2="${450 - r3 - 10}"/>
        <line x1="${450 + r3}" y1="450" x2="${450 + r3 + 10}" y2="450"/>
        <line x1="450" y1="${450 + r3}" x2="450" y2="${450 + r3 + 10}"/>
        <line x1="${450 - r3}" y1="450" x2="${450 - r3 - 10}" y2="450"/>
      </g>

      <!-- Labels outside the rings -->
      <!-- Stage 3 label (top) -->
      <g class="fade-in d1">
        <line x1="450" y1="${450 - r3 - 20}" x2="450" y2="${450 - r3 - 70}" stroke="#00c37a" stroke-width="1" stroke-dasharray="2 3"/>
        <text x="450" y="${450 - r3 - 90}" text-anchor="middle" fill="#00c37a" font-family="JetBrains Mono" font-size="11" letter-spacing="0.22em">STAGE 3 · MAO</text>
        <text x="450" y="${450 - r3 - 60}" text-anchor="middle" fill="#eef1f6" font-family="Switzer" font-weight="700" font-size="40" letter-spacing="-0.03em">$1.5T</text>
      </g>

      <!-- Stage 2 label (right of middle ring) -->
      <g class="fade-in d2">
        <line x1="${450 + r2}" y1="450" x2="${450 + r2 + 60}" y2="450" stroke="#00c37a" stroke-opacity="0.6" stroke-width="1" stroke-dasharray="2 3"/>
        <text x="${450 + r2 + 70}" y="446" fill="#00c37a" font-family="JetBrains Mono" font-size="11" letter-spacing="0.22em">STAGE 2 · MAP</text>
        <text x="${450 + r2 + 70}" y="476" fill="#eef1f6" font-family="Switzer" font-weight="700" font-size="26" letter-spacing="-0.03em">$300B+</text>
      </g>

      <!-- Stage 1 label (inline) -->
      <g class="fade-in d3">
        <line x1="${450 + r1}" y1="450" x2="${450 + r1 + 40}" y2="440" stroke="#00c37a" stroke-width="1"/>
        <text x="${450 + r1 + 44}" y="436" fill="#00c37a" font-family="JetBrains Mono" font-size="10" letter-spacing="0.22em">S1 · SAAS</text>
        <text x="${450 + r1 + 44}" y="456" fill="#eef1f6" font-family="Switzer" font-weight="700" font-size="16" letter-spacing="-0.02em">$5B</text>
      </g>

      <!-- Inside-ring descriptors -->
      <g fill="#505a66" font-family="JetBrains Mono" font-size="10" letter-spacing="0.22em" text-anchor="middle">
        <text x="450" y="${450 - r3 + 24}">PREMIUM · ADMIN · AT-RISK</text>
        <text x="450" y="${450 - r2 + 22}" fill="#8a939f">BPO · MSP · INTERNAL LABOR</text>
      </g>

    </svg>

    <div class="folio-bl">$5B · $300B · $1.5T · √ scale · k=${k}</div>
    <div class="folio-br">V03 · Concentric orbits</div>
  </div>`;

  window.__VIZZES.push({
    name: 'TAM · Concentric orbits',
    desc: 'Core-outward: product stays, wallet grows.',
    html: viz,
  });
})();

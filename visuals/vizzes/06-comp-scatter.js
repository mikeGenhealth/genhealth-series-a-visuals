// === V06 — Competitive · 2D scatter (canonical VIZ 2) =====================
(function(){
  // Plot area within 1400x800
  // margins: left 90, right 120, top 130, bottom 90
  // So plot: x 90..1280 (width 1190), y 130..710 (height 580)
  const PX = (x) => 90 + (x/100) * 1190;
  const PY = (y) => 710 - (y/100) * 580; // Y=0 at bottom

  // Vendors: [name, sub, x, y, r, color, cat]
  const vendors = [
    ['SuperDial',    '$20M',            12, 60, 10, '#ffd666', 'Point AI'],
    ['Valerie',      '$39M',            22, 68, 11, '#ffd666', 'Point AI'],
    ['Tennr',        '$159M · $605M',   30, 80, 16, '#ffd666', 'Point AI'],
    ['Mandolin',     '$57M',            40, 85, 12, '#ffd666', 'Point AI'],
    ['Anterior',     '$64M',            48, 78, 12, '#ffd666', 'Point AI'],
    ['Thoughtful',   '$35M · absorbed', 50, 55, 11, '#505a66', 'Absorbed'],
    ['Notable',      '$119M',           32, 42, 14, '#94a3b8', 'Legacy'],
    ['Cohere',       '$200M',           42, 48, 16, '#94a3b8', 'Legacy'],
    ['Availity',     '$400M rev',       52, 42, 18, '#94a3b8', 'Legacy'],
    ['Cognizant',    'multi-B',         82, 22, 22, '#ff4f1f', 'BPO'],
    ['ACU-Serve',    '$58M rev',        68, 24, 12, '#ff4f1f', 'BPO'],
    ['Prochant',     '$147M rev',       75, 18, 15, '#ff4f1f', 'BPO'],
    ['Access HC',    '$800M combined',  88, 15, 20, '#ff4f1f', 'BPO'],
  ];

  const dots = vendors.map(([name, sub, x, y, r, color]) => `
    <g>
      <circle cx="${PX(x)}" cy="${PY(y)}" r="${r}" fill="${color}" fill-opacity="0.85" stroke="${color}" stroke-width="1"/>
      <text x="${PX(x)}" y="${PY(y) + r + 16}" text-anchor="middle" fill="${color}" font-family="Switzer" font-weight="600" font-size="12">${name}</text>
      <text x="${PX(x)}" y="${PY(y) + r + 30}" text-anchor="middle" fill="#8a939f" font-family="JetBrains Mono" font-size="10" letter-spacing="0.05em">${sub}</text>
    </g>
  `).join('');

  const viz = `
  <div class="viz">
    <div class="folio-tl"><span class="dot"></span>06 / COMPETITIVE MAP</div>
    <div class="folio-tr">SERIES A · 2026</div>

    <div style="position:absolute; left:40px; top:60px;">
      <div class="eyebrow" style="color:#00c37a">Competitive landscape</div>
      <h1 style="font-size:32px; margin-top:10px; max-width:700px; line-height:1.1;">
        GenHealth is the only vendor moving <span style="color:#00c37a">diagonally</span>.
      </h1>
    </div>

    <!-- Stamp top-right -->
    <div class="stamp" style="position:absolute; top:170px; right:40px;"><span class="d"></span>UNCONTESTED · MAO TERRITORY</div>

    <svg viewBox="0 0 1400 800" style="position:absolute; inset:0; width:100%; height:100%;">
      <!-- Quadrant tints -->
      <rect x="90" y="130" width="595" height="290" fill="#ffd666" fill-opacity="0.04"/>
      <rect x="685" y="130" width="595" height="290" fill="#00c37a" fill-opacity="0.06"/>
      <pattern id="hgreen" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="10" stroke="#00c37a" stroke-width="1" stroke-opacity="0.18"/>
      </pattern>
      <rect x="685" y="130" width="595" height="290" fill="url(#hgreen)"/>
      <rect x="90" y="420" width="595" height="290" fill="#94a3b8" fill-opacity="0.04"/>
      <rect x="685" y="420" width="595" height="290" fill="#ff4f1f" fill-opacity="0.04"/>

      <!-- Grid -->
      <g stroke="#242b35" stroke-width="1">
        <line x1="90" y1="130" x2="90" y2="710"/>
        <line x1="90" y1="710" x2="1280" y2="710"/>
        <line x1="90" y1="420" x2="1280" y2="420" stroke-dasharray="2 4" stroke-opacity="0.5"/>
        <line x1="685" y1="130" x2="685" y2="710" stroke-dasharray="2 4" stroke-opacity="0.5"/>
      </g>

      <!-- Quadrant labels, faint -->
      <g font-family="JetBrains Mono" font-size="10" letter-spacing="0.22em" fill="#505a66">
        <text x="106" y="152">TL · POINT AI</text>
        <text x="106" y="442">BL · LEGACY SOFTWARE</text>
        <text x="700" y="442">BR · BPO / MSO</text>
      </g>

      <!-- Axis labels -->
      <text x="685" y="760" text-anchor="middle" fill="#8a939f" font-family="JetBrains Mono" font-size="11" letter-spacing="0.22em">DEPTH OF WORK PERFORMED  →</text>
      <text x="50" y="420" transform="rotate(-90 50 420)" text-anchor="middle" fill="#8a939f" font-family="JetBrains Mono" font-size="11" letter-spacing="0.22em">COMPUTE-NATIVE  →</text>

      <!-- Axis endpoints -->
      <g font-family="JetBrains Mono" font-size="10" fill="#505a66">
        <text x="90" y="730">sells tools</text>
        <text x="1280" y="730" text-anchor="end">operates work</text>
        <text x="82" y="720" text-anchor="end">labor</text>
        <text x="82" y="140" text-anchor="end">compute</text>
      </g>

      <!-- Competitor dots -->
      ${dots}

      <!-- GenHealth NOW glow -->
      <g>
        <circle cx="${PX(62)}" cy="${PY(85)}" r="110" fill="url(#gglow)"/>
        <circle cx="${PX(62)}" cy="${PY(85)}" r="18" fill="#00c37a"/>
        <circle cx="${PX(62)}" cy="${PY(85)}" r="18" fill="none" stroke="#00c37a" stroke-width="1.5">
          <animate attributeName="r" values="18;40;18" dur="2.4s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.8;0;0.8" dur="2.4s" repeatCount="indefinite"/>
        </circle>
        <text x="${PX(62)}" y="${PY(85) - 32}" text-anchor="middle" fill="#00c37a" font-family="JetBrains Mono" font-size="11" letter-spacing="0.22em" font-weight="500">GENHEALTH · NOW</text>
        <text x="${PX(62)}" y="${PY(85) + 38}" text-anchor="middle" fill="#eef1f6" font-family="Switzer" font-weight="700" font-size="14">$10M CARR · 232% NRR</text>
      </g>

      <!-- GenHealth TARGET -->
      <g>
        <circle cx="${PX(95)}" cy="${PY(82)}" r="42" fill="#00c37a" fill-opacity="0.10" stroke="#00c37a" stroke-dasharray="4 4" stroke-width="1.5"/>
        <text x="${PX(95)}" y="${PY(82) + 58}" text-anchor="middle" fill="#00c37a" font-family="JetBrains Mono" font-size="10" letter-spacing="0.22em">MAO · TARGET · STAGE 3</text>
      </g>

      <!-- Trajectory arrow NOW -> TARGET -->
      <path d="M ${PX(62)+18},${PY(85)} Q ${PX(78)},${PY(94)} ${PX(95)-42},${PY(82)}" stroke="#00c37a" stroke-width="1.5" fill="none" stroke-dasharray="5 5"/>
      <text x="${PX(79)}" y="${PY(95) + 4}" text-anchor="middle" fill="#00c37a" font-family="JetBrains Mono" font-size="10" letter-spacing="0.22em">→ SAAS · MAP · MAO</text>

      <defs>
        <radialGradient id="gglow">
          <stop offset="0%" stop-color="#00c37a" stop-opacity="0.5"/>
          <stop offset="60%" stop-color="#00c37a" stop-opacity="0.06"/>
          <stop offset="100%" stop-color="#00c37a" stop-opacity="0"/>
        </radialGradient>
      </defs>
    </svg>

    <div class="folio-bl">Funding = bubble size · √ scale</div>
    <div class="folio-br">V06 · 2D scatter · canonical</div>
  </div>`;

  window.__VIZZES.push({
    name: 'Competitive · 2D scatter',
    desc: 'Depth × compute-native; GenHealth heads to uncontested TR.',
    html: viz,
  });
})();

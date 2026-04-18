// === V09 — Competitive · funding vs depth of work (dot plot) ==============
(function(){
  // X axis: depth of work (0 = tools, 100 = operates)
  // Y axis: funding (log-ish, or just rank)
  // We'll plot by funding with a sqrt-compressed y axis.

  const items = [
    { n: 'SuperDial',  x: 12, f: 20,  c: '#ffd666' },
    { n: 'Valerie',    x: 22, f: 39,  c: '#ffd666' },
    { n: 'Tennr',      x: 30, f: 159, c: '#ffd666' },
    { n: 'Anterior',   x: 48, f: 64,  c: '#ffd666' },
    { n: 'Mandolin',   x: 40, f: 57,  c: '#ffd666' },
    { n: 'Thoughtful', x: 50, f: 35,  c: '#505a66' },
    { n: 'Notable',    x: 32, f: 119, c: '#94a3b8' },
    { n: 'Cohere',     x: 42, f: 200, c: '#94a3b8' },
    { n: 'Availity',   x: 52, f: 400, c: '#94a3b8' },
    { n: 'ACU-Serve',  x: 68, f: 58,  c: '#ff4f1f' },
    { n: 'Prochant',   x: 75, f: 147, c: '#ff4f1f' },
    { n: 'Cognizant',  x: 82, f: 500, c: '#ff4f1f' },
    { n: 'Access HC',  x: 88, f: 800, c: '#ff4f1f' },
    { n: 'GenHealth',  x: 62, f: 13,  c: '#00c37a' },
  ];

  // plot area: x 100..1320, y 180..700
  const PX = (x) => 100 + (x/100) * 1220;
  // sqrt y axis: maxF=800 -> sqrtMax=28.28
  const sqrtMax = Math.sqrt(800);
  const PY = (f) => 700 - (Math.sqrt(f)/sqrtMax) * 520;

  // Y grid ticks
  const ticks = [10, 50, 100, 200, 400, 800];

  const dots = items.map(i => {
    const isGen = i.n === 'GenHealth';
    const r = isGen ? 12 : 7;
    return `
      ${isGen ? `<circle cx="${PX(i.x)}" cy="${PY(i.f)}" r="70" fill="url(#gglow3)"/>` : ''}
      <circle cx="${PX(i.x)}" cy="${PY(i.f)}" r="${r}" fill="${i.c}" ${isGen ? '' : 'fill-opacity="0.85"'}/>
      <text x="${PX(i.x) + r + 6}" y="${PY(i.f) + 4}" fill="${i.c}" font-family="Switzer" font-weight="${isGen ? 700 : 600}" font-size="${isGen ? 14 : 12}">${i.n}${isGen ? ' · seed' : ''}</text>
    `;
  }).join('');

  const viz = `
  <div class="viz">
    <div class="folio-tl"><span class="dot"></span>09 / FUNDING × DEPTH</div>
    <div class="folio-tr">SERIES A · 2026</div>

    <div style="position:absolute; left:40px; top:60px;">
      <div class="eyebrow" style="color:#00c37a">Capital raised vs depth of work</div>
      <h1 style="font-size:32px; margin-top:10px; max-width:900px; line-height:1.1;">
        $1.5B raised. <span style="color:#8a939f;">Nobody's built what we\u2019re building.</span>
      </h1>
    </div>

    <svg viewBox="0 0 1400 800" style="position:absolute; inset:0; width:100%; height:100%;">
      <defs>
        <radialGradient id="gglow3">
          <stop offset="0%" stop-color="#00c37a" stop-opacity="0.5"/>
          <stop offset="100%" stop-color="#00c37a" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <!-- grid -->
      <line x1="100" y1="180" x2="100" y2="700" stroke="#242b35"/>
      <line x1="100" y1="700" x2="1320" y2="700" stroke="#242b35"/>

      ${ticks.map(t => `
        <line x1="100" y1="${PY(t)}" x2="1320" y2="${PY(t)}" stroke="#242b35" stroke-dasharray="2 4" stroke-opacity="0.5"/>
        <text x="90" y="${PY(t) + 4}" text-anchor="end" fill="#8a939f" font-family="JetBrains Mono" font-size="10">$${t}M</text>
      `).join('')}

      <!-- x ticks -->
      <g fill="#505a66" font-family="JetBrains Mono" font-size="10" letter-spacing="0.15em">
        <text x="100" y="720">SELLS TOOLS</text>
        <text x="710" y="720" text-anchor="middle">OPERATES WORK (SOME)</text>
        <text x="1320" y="720" text-anchor="end">OPERATES THE WHOLE WORKFLOW</text>
      </g>

      <!-- axis labels -->
      <text x="40" y="450" transform="rotate(-90 40 450)" text-anchor="middle" fill="#8a939f" font-family="JetBrains Mono" font-size="11" letter-spacing="0.22em">FUNDING / REVENUE (√)</text>
      <text x="710" y="760" text-anchor="middle" fill="#8a939f" font-family="JetBrains Mono" font-size="11" letter-spacing="0.22em">DEPTH OF WORK PERFORMED</text>

      ${dots}

      <!-- Annotation -->
      <g>
        <rect x="970" y="200" width="340" height="90" fill="#171e26" stroke="#00c37a" stroke-width="1"/>
        <text x="986" y="226" fill="#00c37a" font-family="JetBrains Mono" font-size="10" letter-spacing="0.22em">CAPITAL EFFICIENCY · GENHEALTH</text>
        <text x="986" y="254" fill="#eef1f6" font-family="Switzer" font-weight="700" font-size="18">$13M raised · $10M CARR</text>
        <text x="986" y="276" fill="#8a939f" font-family="Switzer" font-size="13">vs. Tennr $159M → to build a narrower product.</text>
      </g>
    </svg>

    <div class="folio-bl">Dot size not weighted · Funding on √ axis</div>
    <div class="folio-br">V09 · Funding plot</div>
  </div>`;

  window.__VIZZES.push({
    name: 'Competitive · Funding vs depth',
    desc: 'The capital-efficiency cut: who raised what, for which depth.',
    html: viz,
  });
})();

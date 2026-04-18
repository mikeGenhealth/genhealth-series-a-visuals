// === V08 — Competitive · trajectory / bump chart ==========================
(function(){
  // Three columns: SaaS, MAP, MAO. Competitors have paths that terminate.
  // GenHealth path goes all three.

  const cols = [
    { x: 280, label: 'STAGE 1 · SAAS' },
    { x: 720, label: 'STAGE 2 · MAP' },
    { x: 1160, label: 'STAGE 3 · MAO' },
  ];

  // Each entry: name, category color, saas y, map y (null if blocked), mao y (null)
  const tracks = [
    { n: 'Tennr',         c: '#ffd666', y1: 140, y2: null, y3: null, stop: 1 },
    { n: 'Anterior',      c: '#ffd666', y1: 180, y2: null, y3: null, stop: 1 },
    { n: 'Mandolin',      c: '#ffd666', y1: 220, y2: null, y3: null, stop: 1 },
    { n: 'Valerie',       c: '#ffd666', y1: 260, y2: null, y3: null, stop: 1 },
    { n: 'SuperDial',     c: '#ffd666', y1: 300, y2: null, y3: null, stop: 1 },

    { n: 'Availity',      c: '#94a3b8', y1: 360, y2: null, y3: null, stop: 1 },
    { n: 'Cohere',        c: '#94a3b8', y1: 400, y2: null, y3: null, stop: 1 },
    { n: 'Notable',       c: '#94a3b8', y1: 440, y2: null, y3: null, stop: 1 },

    { n: 'Access HC',     c: '#ff4f1f', y1: null, y2: 500, y3: null, stop: 2 },
    { n: 'Cognizant',     c: '#ff4f1f', y1: null, y2: 540, y3: null, stop: 2 },
    { n: 'Prochant',      c: '#ff4f1f', y1: null, y2: 580, y3: null, stop: 2 },
    { n: 'ACU-Serve',     c: '#ff4f1f', y1: null, y2: 620, y3: null, stop: 2 },
  ];

  // GenHealth: moves y across all three
  const gen = { y1: 340, y2: 340, y3: 340 };

  const trackHtml = tracks.map(t => {
    let path = '';
    let labelX = 0, labelY = 0;
    if (t.y1 != null && t.y2 != null) {
      path += `M ${cols[0].x},${t.y1} L ${cols[1].x},${t.y2}`;
    } else if (t.y1 != null) {
      path = `M ${cols[0].x},${t.y1} L ${cols[1].x - 120},${t.y1}`;
      labelX = cols[0].x - 14; labelY = t.y1 + 4;
    } else if (t.y2 != null) {
      path = `M ${cols[1].x - 120},${t.y2} L ${cols[1].x},${t.y2} L ${cols[2].x - 120},${t.y2}`;
      labelX = cols[1].x - 130; labelY = t.y2 + 4;
    }
    const xEnd = t.stop === 1 ? cols[1].x - 120 : cols[2].x - 120;
    const yEnd = t.stop === 1 ? t.y1 : t.y2;
    return `
      <g>
        <path d="${path}" stroke="${t.c}" stroke-width="1.2" fill="none" stroke-opacity="0.7"/>
        <circle cx="${t.y1 != null ? cols[0].x : cols[1].x}" cy="${t.y1 != null ? t.y1 : t.y2}" r="5" fill="${t.c}"/>
        <text x="${(t.y1 != null ? cols[0].x : cols[1].x) - 12}" y="${(t.y1 != null ? t.y1 : t.y2) + 4}" text-anchor="end" fill="${t.c}" font-family="Switzer" font-weight="600" font-size="12">${t.n}</text>
        <!-- Block X at end -->
        <g transform="translate(${xEnd}, ${yEnd})" opacity="0.8">
          <line x1="-6" y1="-6" x2="6" y2="6" stroke="${t.c}" stroke-width="1.2"/>
          <line x1="6" y1="-6" x2="-6" y2="6" stroke="${t.c}" stroke-width="1.2"/>
        </g>
      </g>
    `;
  }).join('');

  const viz = `
  <div class="viz">
    <div class="folio-tl"><span class="dot"></span>08 / COMPETITIVE · TRAJECTORIES</div>
    <div class="folio-tr">SERIES A · 2026</div>

    <div style="position:absolute; left:40px; top:60px;">
      <div class="eyebrow" style="color:#00c37a">How far each vendor can go</div>
      <h1 style="font-size:32px; margin-top:10px; max-width:900px; line-height:1.1;">
        Everyone else <span style="color:#ff4f1f;">stops</span>. GenHealth continues through.
      </h1>
    </div>

    <svg viewBox="0 0 1400 800" style="position:absolute; inset:0; width:100%; height:100%;">
      <!-- Column headers -->
      ${cols.map(c => `
        <line x1="${c.x}" y1="130" x2="${c.x}" y2="720" stroke="#242b35" stroke-width="1" stroke-dasharray="2 4"/>
        <text x="${c.x}" y="170" text-anchor="middle" fill="#8a939f" font-family="JetBrains Mono" font-size="11" letter-spacing="0.22em">${c.label}</text>
      `).join('')}

      ${trackHtml}

      <!-- GenHealth track -->
      <g>
        <defs>
          <filter id="gglow2" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6"/>
          </filter>
        </defs>
        <!-- Halo -->
        <path d="M ${cols[0].x},${gen.y1} L ${cols[1].x},${gen.y2} L ${cols[2].x},${gen.y3}"
              stroke="#00c37a" stroke-width="8" fill="none" opacity="0.25" filter="url(#gglow2)"/>
        <path d="M ${cols[0].x},${gen.y1} L ${cols[1].x},${gen.y2}"
              stroke="#00c37a" stroke-width="2" fill="none"/>
        <path d="M ${cols[1].x},${gen.y2} L ${cols[2].x},${gen.y3}"
              stroke="#00c37a" stroke-width="2" fill="none" stroke-dasharray="5 5"/>

        <circle cx="${cols[0].x}" cy="${gen.y1}" r="9" fill="#00c37a"/>
        <circle cx="${cols[1].x}" cy="${gen.y2}" r="9" fill="#00c37a"/>
        <circle cx="${cols[2].x}" cy="${gen.y3}" r="12" fill="none" stroke="#00c37a" stroke-width="2" stroke-dasharray="3 3"/>

        <text x="${cols[0].x - 16}" y="${gen.y1 + 4}" text-anchor="end" fill="#00c37a" font-family="Switzer" font-weight="700" font-size="16">GenHealth</text>
        <text x="${cols[0].x - 16}" y="${gen.y1 + 22}" text-anchor="end" fill="#00c37a" font-family="JetBrains Mono" font-size="10" letter-spacing="0.22em">NOW · 2026</text>

        <text x="${cols[1].x}" y="${gen.y2 - 20}" text-anchor="middle" fill="#00c37a" font-family="JetBrains Mono" font-size="10" letter-spacing="0.22em">Q3 '26 · PILOT</text>
        <text x="${cols[2].x}" y="${gen.y3 - 24}" text-anchor="middle" fill="#00c37a" font-family="JetBrains Mono" font-size="10" letter-spacing="0.22em">Q2 '27 · TARGET</text>
      </g>

      <!-- Column footers: TAM -->
      ${[['$5B', 0], ['$300B+', 1], ['$1.5T', 2]].map(([t, i]) => `
        <text x="${cols[i].x}" y="740" text-anchor="middle" fill="#00c37a" font-family="Switzer" font-weight="700" font-size="22" letter-spacing="-0.02em">${t}</text>
      `).join('')}

      <!-- Legend -->
      <g transform="translate(40, 680)" font-family="JetBrains Mono" font-size="10" letter-spacing="0.22em" fill="#8a939f">
        <circle cx="6" cy="-4" r="4" fill="#ffd666"/>
        <text x="18" y="0">POINT AI</text>
        <circle cx="116" cy="-4" r="4" fill="#94a3b8"/>
        <text x="128" y="0">LEGACY</text>
        <circle cx="220" cy="-4" r="4" fill="#ff4f1f"/>
        <text x="232" y="0">BPO</text>
        <g transform="translate(300, -4)">
          <line x1="-6" y1="-6" x2="6" y2="6" stroke="#ff4f1f" stroke-width="1.5"/>
          <line x1="6" y1="-6" x2="-6" y2="6" stroke="#ff4f1f" stroke-width="1.5"/>
        </g>
        <text x="316" y="0">STRUCTURALLY BLOCKED</text>
      </g>
    </svg>

    <div class="folio-bl">Point AI blocked at Stage 2 · BPO blocked at Stage 3</div>
    <div class="folio-br">V08 · Trajectories</div>
  </div>`;

  window.__VIZZES.push({
    name: 'Competitive · Trajectories',
    desc: 'Every other category terminates at stage 1 or 2. GenHealth runs the table.',
    html: viz,
  });
})();

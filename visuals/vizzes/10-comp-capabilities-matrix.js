// === V10 — Competitive · capabilities matrix (dot heatmap) ================
(function(){
  // Rows: vendors. Cols: capabilities.
  // Cell: filled dot (strong), half (partial), empty (none), hatched (blocked)

  const cols = [
    'Eligibility',
    'Prior Auth',
    'Intake / Referrals',
    'Coding',
    'Claims submission',
    'Denials',
    'Voice / outbound',
    'Operate (ops team)',
    'Payer contract',
    'At-risk',
  ];

  const rows = [
    { n: 'Tennr',       c: '#ffd666', cells: [0,0,2,0,0,0,0,0,0,0] },
    { n: 'Mandolin',    c: '#ffd666', cells: [0,0,0,0,0,2,0,0,0,0] },
    { n: 'Valerie',     c: '#ffd666', cells: [2,0,1,0,0,0,0,0,0,0] },
    { n: 'Anterior',    c: '#ffd666', cells: [0,2,0,0,0,0,0,0,0,0] },
    { n: 'SuperDial',   c: '#ffd666', cells: [0,0,0,0,0,0,2,0,0,0] },
    { n: 'Notable',     c: '#94a3b8', cells: [1,0,2,0,0,0,1,0,0,0] },
    { n: 'Cohere',      c: '#94a3b8', cells: [0,2,0,0,0,0,0,0,0,0] },
    { n: 'Availity',    c: '#94a3b8', cells: [2,1,0,0,1,1,0,0,0,0] },
    { n: 'Access HC',   c: '#ff4f1f', cells: [2,2,2,2,2,2,1,2,0,0] },
    { n: 'Prochant',    c: '#ff4f1f', cells: [2,2,1,1,2,2,1,2,0,0] },
    { n: 'Cognizant',   c: '#ff4f1f', cells: [2,2,2,2,2,2,2,2,0,0] },
    { n: 'ACU-Serve',   c: '#ff4f1f', cells: [1,1,1,1,2,2,1,2,0,0] },
    { n: 'GenHealth',   c: '#00c37a', cells: [2,2,2,2,2,2,2,2,3,3] }, // 3 = target
  ];

  // Cell states: 0 empty, 1 partial, 2 full, 3 target (dashed green)

  const colWidth = 95;
  const rowHeight = 34;
  const x0 = 220;
  const y0 = 220;

  function cell(state, color, cx, cy) {
    if (state === 0) {
      return `<circle cx="${cx}" cy="${cy}" r="4" fill="#242b35"/>`;
    }
    if (state === 1) {
      return `<circle cx="${cx}" cy="${cy}" r="7" fill="none" stroke="${color}" stroke-width="1.2"/>`;
    }
    if (state === 2) {
      return `<circle cx="${cx}" cy="${cy}" r="8" fill="${color}"/>`;
    }
    if (state === 3) {
      return `<circle cx="${cx}" cy="${cy}" r="9" fill="none" stroke="${color}" stroke-width="1.5" stroke-dasharray="2 2"/>`;
    }
    return '';
  }

  const rowHtml = rows.map((r, ri) => {
    const isGen = r.n === 'GenHealth';
    const y = y0 + ri * rowHeight;
    const bg = isGen
      ? `<rect x="20" y="${y - 18}" width="1360" height="34" fill="rgba(0,195,122,0.08)"/>`
      : '';
    const row = r.cells.map((st, ci) => {
      const cx = x0 + ci * colWidth + colWidth / 2;
      return cell(st, r.c, cx, y);
    }).join('');
    return `
      ${bg}
      <text x="200" y="${y + 5}" text-anchor="end" fill="${r.c}" font-family="Switzer" font-weight="${isGen ? 700 : 600}" font-size="${isGen ? 15 : 13}">${r.n}</text>
      ${row}
    `;
  }).join('');

  const colHtml = cols.map((c, ci) => {
    const cx = x0 + ci * colWidth + colWidth / 2;
    return `
      <g transform="translate(${cx}, 200)">
        <text transform="rotate(-40)" text-anchor="start" fill="#8a939f" font-family="JetBrains Mono" font-size="10" letter-spacing="0.15em" text-transform="uppercase">${c.toUpperCase()}</text>
      </g>
    `;
  }).join('');

  const viz = `
  <div class="viz">
    <div class="folio-tl"><span class="dot"></span>10 / CAPABILITY MATRIX</div>
    <div class="folio-tr">SERIES A · 2026</div>

    <div style="position:absolute; left:40px; top:60px;">
      <div class="eyebrow" style="color:#00c37a">What each vendor actually does</div>
      <h1 style="font-size:32px; margin-top:10px; max-width:900px; line-height:1.1;">
        Point AI ships <span style="color:#8a939f">slivers</span>. BPOs cover <span style="color:#8a939f">breadth</span> on labor. <span style="color:#00c37a">GenHealth does both.</span>
      </h1>
    </div>

    <svg viewBox="0 0 1400 800" style="position:absolute; inset:0; width:100%; height:100%;">
      ${colHtml}
      ${rowHtml}

      <!-- Legend -->
      <g transform="translate(220, 720)" font-family="JetBrains Mono" font-size="10" letter-spacing="0.22em" fill="#8a939f">
        <circle cx="0" cy="0" r="8" fill="#eef1f6" fill-opacity="0.6"/>
        <text x="16" y="4">FULL</text>
        <circle cx="90" cy="0" r="7" fill="none" stroke="#eef1f6" stroke-opacity="0.6" stroke-width="1.2"/>
        <text x="106" y="4">PARTIAL</text>
        <circle cx="210" cy="0" r="4" fill="#242b35"/>
        <text x="222" y="4">NONE</text>
        <circle cx="310" cy="0" r="9" fill="none" stroke="#00c37a" stroke-width="1.5" stroke-dasharray="2 2"/>
        <text x="326" y="4">TARGET (MAO)</text>
      </g>
    </svg>

    <div class="folio-bl">Categories per public GTM docs + investor decks</div>
    <div class="folio-br">V10 · Capability matrix</div>
  </div>`;

  window.__VIZZES.push({
    name: 'Competitive · Capability matrix',
    desc: 'Vendors × workflows — who does what.',
    html: viz,
  });
})();

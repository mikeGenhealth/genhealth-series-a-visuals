// === V11 — Positioning · 3×3 Evolution Matrix =============================
(function(){
  const cols = ['STAGE 1 · SAAS', 'STAGE 2 · MAP', 'STAGE 3 · MAO'];
  const rows = ['POINT AI', 'LEGACY SOFTWARE', 'BPO / MSO', 'GENHEALTH'];

  // state: 'live' | 'blocked' | 'target' | 'inflight' | 'genlive'
  // Each cell: { state, bullet, sub }
  const grid = [
    // Point AI
    [
      { state:'live', color:'#ffd666', bullet:'LIVE', sub:'Tennr, Mandolin, Anterior, Valerie, SuperDial' },
      { state:'blocked', color:'#ffd666', bullet:'STRUCTURALLY BLOCKED', sub:'No ops DNA. Thoughtful tried, absorbed \u201925.' },
      { state:'blocked', color:'#ffd666', bullet:'STRUCTURALLY BLOCKED', sub:'No payer trust, balance sheet, actuarial depth.' },
    ],
    // Legacy
    [
      { state:'live', color:'#94a3b8', bullet:'LIVE', sub:'Availity, Notable, Cohere' },
      { state:'blocked', color:'#94a3b8', bullet:'STRUCTURALLY BLOCKED', sub:'Batch EDI can\u2019t support outcomes pricing.' },
      { state:'blocked', color:'#94a3b8', bullet:'STRUCTURALLY BLOCKED', sub:'No agent substrate, can\u2019t hit MAO margins.' },
    ],
    // BPO
    [
      { state:'blocked', color:'#ff4f1f', bullet:'STRUCTURALLY BLOCKED', sub:'Not their DNA. No software product.' },
      { state:'live', color:'#ff4f1f', bullet:'LIVE', sub:'Prochant, ACU-Serve, Access HC, Cognizant' },
      { state:'blocked', color:'#ff4f1f', bullet:'STRUCTURALLY BLOCKED', sub:'Labor margins can\u2019t underwrite at-risk.' },
    ],
    // GenHealth
    [
      { state:'genlive', bullet:'LIVE NOW · 2026', sub:'$10M CARR · 232% NRR · SaaS foundation' },
      { state:'inflight', bullet:'IN FLIGHT · 2026\u201327', sub:'First MAP pilot Q3 \u201926' },
      { state:'target', bullet:'TARGET · 2027+', sub:'First payer contract Q2 \u201927' },
    ],
  ];

  function cell(c, isGen) {
    if (c.state === 'blocked') {
      return `
        <div style="position:relative; height:100%; padding:14px; border:1px solid rgba(255,79,31,0.25); overflow:hidden;">
          <div style="position:absolute; inset:0; background-image:repeating-linear-gradient(45deg, rgba(255,79,31,0.10) 0 1px, transparent 1px 9px);"></div>
          <div style="position:relative; display:flex; align-items:center; gap:8px;">
            <svg width="12" height="12" viewBox="0 0 12 12"><line x1="2" y1="2" x2="10" y2="10" stroke="#ff4f1f" stroke-width="1.5"/><line x1="10" y1="2" x2="2" y2="10" stroke="#ff4f1f" stroke-width="1.5"/></svg>
            <div class="mono" style="font-size:10px; color:#ff4f1f;">${c.bullet}</div>
          </div>
          <div style="position:relative; margin-top:10px; color:#8a939f; font-size:12px; line-height:1.4;">${c.sub}</div>
        </div>`;
    }
    if (c.state === 'live') {
      return `
        <div style="height:100%; padding:14px; border:1px solid ${c.color}33; background:${c.color}0A;">
          <div class="mono" style="font-size:10px; color:${c.color};">● ${c.bullet}</div>
          <div style="margin-top:10px; color:#eef1f6; font-size:13px; font-weight:600; line-height:1.35;">${c.sub}</div>
        </div>`;
    }
    if (c.state === 'genlive') {
      return `
        <div style="height:100%; padding:14px; border:1px solid #00c37a; background:rgba(0,195,122,0.12); box-shadow: inset 0 0 40px rgba(0,195,122,0.1);">
          <div class="mono" style="font-size:10px; color:#00c37a;">● ${c.bullet}</div>
          <div style="margin-top:8px; color:#eef1f6; font-size:14px; font-weight:700; line-height:1.3;">${c.sub}</div>
        </div>`;
    }
    if (c.state === 'inflight') {
      return `
        <div style="height:100%; padding:14px; border:1px solid #00c37a; background:rgba(0,195,122,0.08);">
          <div class="mono" style="font-size:10px; color:#00c37a;">◐ ${c.bullet}</div>
          <div style="margin-top:8px; color:#eef1f6; font-size:14px; font-weight:700; line-height:1.3;">${c.sub}</div>
        </div>`;
    }
    if (c.state === 'target') {
      return `
        <div style="height:100%; padding:14px; border:1px dashed #00c37a; background:rgba(0,195,122,0.06);">
          <div class="mono" style="font-size:10px; color:#00c37a;">○ ${c.bullet}</div>
          <div style="margin-top:8px; color:#eef1f6; font-size:14px; font-weight:700; line-height:1.3;">${c.sub}</div>
        </div>`;
    }
    return '';
  }

  const rowsHtml = grid.map((r, ri) => {
    const isGen = ri === 3;
    const rowBg = isGen ? 'background:rgba(0,195,122,0.04);' : '';
    return `
      <div style="display:grid; grid-template-columns: 220px 1fr 1fr 1fr; gap:10px; align-items:stretch; ${rowBg} padding:8px 0;">
        <div style="padding:14px 10px;">
          <div class="mono" style="font-size:11px; color:${isGen ? '#00c37a' : '#8a939f'};">${rows[ri]}</div>
          <div style="color:${isGen ? '#eef1f6' : '#8a939f'}; font-size:12px; margin-top:4px; line-height:1.35;">
            ${ri === 0 ? 'agent-native · software margins' : ''}
            ${ri === 1 ? 'pre-LLM · mixed margins' : ''}
            ${ri === 2 ? 'labor-arbitrage · services margins' : ''}
            ${ri === 3 ? '<span style="color:#00c37a; font-weight:600;">agent-native + operator</span>' : ''}
          </div>
        </div>
        ${r.map(c => cell(c, isGen)).join('')}
      </div>
    `;
  }).join('');

  const viz = `
  <div class="viz">
    <div class="folio-tl"><span class="dot"></span>11 / 3×3 · EVOLUTION MATRIX</div>
    <div class="folio-tr">SERIES A · 2026</div>

    <div style="position:absolute; left:40px; top:50px; right:40px;">
      <div class="eyebrow" style="color:#00c37a">Who can occupy which stage</div>
      <h1 style="font-size:28px; margin-top:10px; line-height:1.15;">
        Point AI can\u2019t move right. Legacy can\u2019t evolve. BPOs can\u2019t move left. <span style="color:#00c37a">Only GenHealth fills all three.</span>
      </h1>
    </div>

    <div style="position:absolute; left:40px; right:40px; top:170px;">
      <!-- header -->
      <div style="display:grid; grid-template-columns: 220px 1fr 1fr 1fr; gap:10px; padding:8px 0 10px; border-bottom:1px solid #242b35;">
        <div></div>
        ${cols.map((c, i) => `<div class="mono" style="font-size:11px; color:${i === 2 ? '#00c37a' : '#8a939f'}; padding:4px 10px;">${c}</div>`).join('')}
      </div>
      ${rowsHtml}
    </div>

    <div class="folio-bl">Green band: GenHealth — live → in-flight → target</div>
    <div class="folio-br">V11 · 3×3 matrix</div>
  </div>`;

  window.__VIZZES.push({
    name: 'Positioning · 3×3 Evolution matrix',
    desc: 'Who can occupy which stage. Blocked cells hatched ember.',
    html: viz,
  });
})();

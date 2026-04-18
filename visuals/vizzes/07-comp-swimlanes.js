// === V07 — Competitive · swim lanes with funding bars =====================
(function(){
  const lanes = [
    {
      label: 'POINT AI', sub: 'agent-native · software margins',
      color: '#ffd666',
      blurb: 'Narrow workflow wedges. Can ship tech. Can\u2019t operate work.',
      items: [
        { n: 'Tennr', sub: '$159M · $605M val · a16z, IVP', v: 159 },
        { n: 'Anterior', sub: '$64M · NEA, Sequoia', v: 64 },
        { n: 'Mandolin', sub: '$57M · Greylock', v: 57 },
        { n: 'Valerie', sub: '$39M · Redpoint', v: 39 },
        { n: 'SuperDial', sub: '$20M · SignalFire', v: 20 },
      ],
    },
    {
      label: 'LEGACY SOFTWARE', sub: 'pre-LLM · mixed margins',
      color: '#94a3b8',
      blurb: 'Deep distribution. Batch-EDI cores. Renting AI from others.',
      items: [
        { n: 'Availity', sub: '$400M rev · PE-owned', v: 200 },
        { n: 'Cohere', sub: '$200M · Temasek, Deerfield', v: 200 },
        { n: 'Notable', sub: '$119M · flat val since \u201921', v: 119 },
      ],
    },
    {
      label: 'BPO / MSO', sub: 'labor-arbitrage · services margins',
      color: '#ff4f1f',
      blurb: 'Operates work today. 15\u201330% gross margins. Bolted-on tech.',
      items: [
        { n: 'Access HC · Smarter', sub: '$800M rev combined', v: 400 },
        { n: 'Cognizant HC BPO', sub: 'multi-B public', v: 400 },
        { n: 'Prochant', sub: '$147M rev · 3000 FTE', v: 147 },
        { n: 'ACU-Serve', sub: '$58M rev · PE', v: 58 },
      ],
    },
  ];

  // bar width: sqrt(v) * k ; max v=400 -> sqrt=20; k=10 -> 200px
  const barW = (v) => Math.min(Math.sqrt(v) * 10, 220);

  const laneHtml = lanes.map(l => `
    <div style="padding:14px 0; border-top:1px solid #242b35;">
      <div style="display:grid; grid-template-columns: 260px 1fr; gap:24px;">
        <div>
          <div class="mono" style="font-size:11px; color:${l.color};">${l.label}</div>
          <div style="font-size:14px; font-weight:600; color:#eef1f6; margin-top:4px;">${l.sub}</div>
          <div style="font-size:12px; color:#8a939f; margin-top:8px; line-height:1.45;">${l.blurb}</div>
        </div>
        <div style="display:flex; flex-direction:column; gap:8px; padding-top:2px;">
          ${l.items.map(it => `
            <div style="display:grid; grid-template-columns: 200px 280px 1fr; gap:16px; align-items:center;">
              <div style="font-weight:600; color:#eef1f6; font-size:14px;">${it.n}</div>
              <div style="font-family:'JetBrains Mono'; font-size:11px; color:#8a939f; letter-spacing:0.05em;">${it.sub}</div>
              <div style="position:relative; height:10px; background:#171e26;">
                <div class="fade-in d1" style="height:10px; background:${l.color}; width:${barW(it.v)}px; transform-origin:left center; opacity:0.8;"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');

  // GenHealth lane (green, highlighted)
  const genLane = `
    <div style="padding:16px 0; border-top:1px solid #00c37a; border-bottom:1px solid #00c37a; background:rgba(0,195,122,0.05); margin-top:6px;">
      <div style="display:grid; grid-template-columns: 260px 1fr; gap:24px; padding:0 12px;">
        <div>
          <div class="mono" style="font-size:11px; color:#00c37a;">GENHEALTH</div>
          <div style="font-size:14px; font-weight:700; color:#eef1f6; margin-top:4px;">agent-native <span style="color:#8a939f; font-weight:500;">+</span> operator</div>
          <div style="font-size:12px; color:#00c37a; margin-top:8px; line-height:1.45;">Only category that fills all three stages — SaaS + MAP + MAO.</div>
        </div>
        <div style="display:flex; flex-direction:column; gap:8px; padding-top:2px;">
          <div style="display:grid; grid-template-columns: 200px 280px 1fr; gap:16px; align-items:center;">
            <div style="font-weight:700; color:#eef1f6; font-size:16px;">GenHealth <span style="color:#00c37a; font-family:'JetBrains Mono'; font-size:11px; letter-spacing:0.22em; font-weight:500; margin-left:8px;">NOW</span></div>
            <div style="font-family:'JetBrains Mono'; font-size:11px; color:#00c37a; letter-spacing:0.05em;">$13M seed · Craft + Obvious · 232% NRR</div>
            <div style="position:relative; height:10px; background:rgba(0,195,122,0.12);">
              <div class="fade-in d2" style="height:10px; background:#00c37a; width:40px; transform-origin:left center; box-shadow:0 0 10px rgba(0,195,122,0.5);"></div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

  const viz = `
  <div class="viz">
    <div class="folio-tl"><span class="dot"></span>07 / COMPETITIVE LANES</div>
    <div class="folio-tr">SERIES A · 2026</div>

    <div style="position:absolute; left:40px; top:60px; right:40px;">
      <div class="eyebrow" style="color:#00c37a">Competitive lanes · by category</div>
      <h1 style="font-size:32px; margin-top:10px; line-height:1.1;">
        $1B+ of capital is trapped in <span style="color:#8a939f;">one-stage</span> categories.
      </h1>
    </div>

    <div style="position:absolute; left:40px; right:40px; top:170px; bottom:70px; overflow:hidden;">
      ${laneHtml}
      ${genLane}
      <div style="margin-top:14px; font-family:'JetBrains Mono'; font-size:11px; letter-spacing:0.22em; color:#505a66; text-align:right;">
        BAR WIDTH ∝ √(FUNDING or REVENUE)
      </div>
    </div>

    <div class="folio-bl">Source · Crunchbase · SEC · PitchBook · Apr 2026</div>
    <div class="folio-br">V07 · Swim lanes</div>
  </div>`;

  window.__VIZZES.push({
    name: 'Competitive · Swim lanes',
    desc: 'Vendors grouped by category; funding as bar width.',
    html: viz,
  });
})();

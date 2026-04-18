// === V13 — Positioning · Margin profile comparison ========================
(function(){
  const rows = [
    { stage: 'Stage 1 · SaaS', model: 'Per-seat / per-workflow', cogs: 'Compute + customer success', margin: '70–80%', rpc: '$60K ADV', isGen: true, highlight: true },
    { stage: 'Stage 2 · MAP',  model: 'Per-transaction / % throughput', cogs: 'Compute + ops supervisors (1:50)', margin: '60–70%', rpc: '$500K–$5M', isGen: true, highlight: true },
    { stage: 'Stage 3 · MAO',  model: '% of collections / at-risk', cogs: 'Compute + compliance + actuarial', margin: '50–70%', rpc: '$10M–$100M+', isGen: true, highlight: true },
    { stage: 'Reference · MSO', model: 'Mgmt fee on practice revenue', cogs: 'Billers, coders, coordinators', margin: '15–30%', rpc: '$5M–$50M', isGen: false },
    { stage: 'Reference · BPO', model: 'FTE billable / % collections', cogs: 'Offshore labor stack', margin: '20–35%', rpc: '$1M–$10M', isGen: false },
  ];

  // visualize margin as a bar. Max 80.
  function marginBar(m, isGen) {
    // parse first number
    const low = parseInt(m); const high = parseInt(m.split('–')[1]);
    const color = isGen ? '#00c37a' : '#94a3b8';
    const leftPct = low;
    const widthPct = (high - low);
    return `
      <div style="position:relative; height:22px; width:260px; background:#171e26;">
        <div style="position:absolute; left:0; top:0; bottom:0; width:1px; background:#242b35;"></div>
        <div style="position:absolute; left:${leftPct}%; top:4px; bottom:4px; width:${widthPct}%; background:${color}; ${isGen ? 'box-shadow: 0 0 10px rgba(0,195,122,0.35);' : 'opacity:0.6;'}"></div>
        <div style="position:absolute; top:3px; left:${leftPct+widthPct}%; font-family:'JetBrains Mono'; font-size:10px; color:${color}; transform:translateX(6px);">${m}</div>
      </div>`;
  }

  const rowHtml = rows.map((r, i) => `
    <div style="display:grid; grid-template-columns: 220px 260px 300px 280px 200px; gap:16px; align-items:center; padding:16px 14px; ${r.isGen ? 'border-top:1px solid #242b35;' : 'border-top:1px solid #242b35; opacity:0.62;'} ${r.highlight ? 'background:rgba(0,195,122,0.04);' : ''}">
      <div>
        <div class="mono" style="font-size:10px; color:${r.isGen ? '#00c37a' : '#8a939f'};">${r.stage.toUpperCase()}</div>
      </div>
      <div style="color:${r.isGen ? '#eef1f6' : '#8a939f'}; font-size:13px; font-weight:${r.isGen ? 600 : 500};">${r.model}</div>
      <div style="color:${r.isGen ? '#8a939f' : '#8a939f'}; font-size:12px;">${r.cogs}</div>
      ${marginBar(r.margin, r.isGen)}
      <div style="font-family:'JetBrains Mono'; font-size:12px; color:${r.isGen ? '#eef1f6' : '#8a939f'}; text-align:right;">${r.rpc}</div>
    </div>
  `).join('');

  const viz = `
  <div class="viz">
    <div class="folio-tl"><span class="dot"></span>13 / MARGIN PROFILE</div>
    <div class="folio-tr">SERIES A · 2026</div>

    <div style="position:absolute; left:40px; top:50px; right:40px;">
      <div class="eyebrow" style="color:#00c37a">Margin profile · GenHealth vs reference</div>
      <h1 style="font-size:28px; margin-top:10px; line-height:1.15; max-width:1100px;">
        Software margins on services-size revenue. <span style="color:#8a939f;">MSOs and BPOs can\u2019t match either.</span>
      </h1>
    </div>

    <div style="position:absolute; left:40px; right:40px; top:180px;">
      <!-- header row -->
      <div style="display:grid; grid-template-columns: 220px 260px 300px 280px 200px; gap:16px; padding:0 14px 10px; border-bottom:1px solid #242b35;">
        <div class="mono" style="font-size:10px; color:#505a66;">STAGE</div>
        <div class="mono" style="font-size:10px; color:#505a66;">REVENUE MODEL</div>
        <div class="mono" style="font-size:10px; color:#505a66;">COST OF GOODS</div>
        <div class="mono" style="font-size:10px; color:#505a66;">GROSS MARGIN (0 → 100%)</div>
        <div class="mono" style="font-size:10px; color:#505a66; text-align:right;">REV / CONTRACT</div>
      </div>
      ${rowHtml}
    </div>

    <div style="position:absolute; left:40px; right:40px; bottom:64px; padding:14px 18px; border-left:2px solid #00c37a; background:#141a21;">
      <div style="font-size:14px; color:#eef1f6; line-height:1.45;">
        <em style="color:#8a939f;">"MSOs and BPOs fight for 15–30% gross margins because their COGS is labor. Ours is compute and a small ops team."</em>
      </div>
    </div>

    <div class="folio-bl">Margins from public comps · GenHealth internal</div>
    <div class="folio-br">V13 · Margin comparison</div>
  </div>`;

  window.__VIZZES.push({
    name: 'Positioning · Margin profile',
    desc: 'Bars on a 0–100% axis; MSO/BPO de-emphasized.',
    html: viz,
  });
})();

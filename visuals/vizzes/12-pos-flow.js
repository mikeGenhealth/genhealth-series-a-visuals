// === V12 — Positioning · Stage Evolution Flow (horizontal) ================
(function(){
  const stages = [
    {
      num: 'STAGE 1',
      tagline: 'TODAY',
      name: 'SaaS',
      full: 'Software as a Service',
      rows: [
        ['Customer buys',  'software'],
        ['Who runs agents', 'the customer'],
        ['We\u2019re paid',   'per seat'],
        ['Margin',         '70–80%'],
      ],
      wallet: 'Software budget',
      tam: '$5B',
      sub: 'per-seat · per-workflow',
      highlight: false,
    },
    {
      num: 'STAGE 2',
      tagline: 'NEAR-TERM · 2026',
      name: 'MAP',
      full: 'Managed Agent Provider',
      rows: [
        ['Customer buys',  'outcomes'],
        ['Who runs agents', 'GenHealth'],
        ['We\u2019re paid',   'per transaction'],
        ['Margin',         '60–70%'],
      ],
      wallet: 'BPO / MSP wallet',
      tam: '$300B+',
      sub: 'per-transaction · % throughput',
      highlight: false,
    },
    {
      num: 'STAGE 3',
      tagline: 'LONG-TERM · 2027+',
      name: 'MAO',
      full: 'Managed Agent Organization',
      rows: [
        ['Customer buys',  'admin capacity'],
        ['Who runs agents', 'GenHealth'],
        ['We\u2019re paid',   '% of collections'],
        ['Margin',         '50–70%'],
      ],
      wallet: 'Premium + admin + at-risk',
      tam: '$1.5T',
      sub: '% of collections · at-risk',
      highlight: true,
    },
  ];

  const transitions = [
    'GenHealth starts operating the agents for the customer. They stop running the software and start buying outcomes.',
    'GenHealth contracts directly with the health plan. We stop selling to providers and start collecting on the premium dollar.',
  ];

  function card(s) {
    const border = s.highlight ? '#00c37a' : '#242b35';
    const bg = s.highlight
      ? 'background:linear-gradient(180deg, rgba(0,195,122,0.10) 0%, rgba(0,195,122,0.02) 100%);'
      : 'background:#141a21;';
    return `
      <div style="border:1px solid ${border}; padding:18px 18px 16px; ${bg} display:flex; flex-direction:column; height:100%;">
        <div style="display:flex; align-items:baseline; justify-content:space-between;">
          <div class="mono" style="font-size:10px; color:${s.highlight ? '#00c37a' : '#8a939f'};">${s.num}</div>
          <div class="mono" style="font-size:9px; color:#505a66;">${s.tagline}</div>
        </div>
        <div style="font-weight:700; letter-spacing:-0.03em; font-size:46px; margin-top:8px; color:${s.highlight ? '#00c37a' : '#eef1f6'};">${s.name}</div>
        <div style="font-style:italic; color:#8a939f; font-size:12px; margin-top:2px;">${s.full}</div>
        <div style="height:1px; background:#242b35; margin:12px 0 4px;"></div>
        ${s.rows.map(([k,v],i) => `
          <div style="display:grid; grid-template-columns: 1fr auto; gap:10px; padding:5px 0; ${i === s.rows.length-1 ? '' : 'border-bottom:1px solid #1c232c;'}">
            <div class="mono" style="font-size:9px; color:#8a939f;">${k.toUpperCase()}</div>
            <div style="font-size:12px; font-weight:600; color:${k === 'Margin' ? '#00c37a' : '#eef1f6'}; text-align:right;">${v}</div>
          </div>
        `).join('')}
        <div style="flex:1"></div>
        <div style="margin-top:12px; padding-top:12px; border-top:1px solid #242b35;">
          <div class="mono" style="font-size:9px; color:#8a939f;">${s.wallet.toUpperCase()}</div>
          <div style="font-size:32px; font-weight:700; letter-spacing:-0.03em; color:${s.highlight ? '#00c37a' : '#eef1f6'}; margin-top:4px;">${s.tam}</div>
          <div style="font-size:11px; color:#505a66; margin-top:2px;">${s.sub}</div>
        </div>
      </div>
    `;
  }

  function transition(text) {
    return `
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding:0 8px; gap:10px;">
        <div style="color:#00c37a; font-size:32px; line-height:1;">➤</div>
        <div class="stamp" style="padding:4px 8px; font-size:9px;"><span class="d"></span>WHAT CHANGES</div>
        <div style="color:#8a939f; font-size:11px; line-height:1.5; text-align:center; max-width:170px;">${text}</div>
      </div>
    `;
  }

  const viz = `
  <div class="viz">
    <div class="folio-tl"><span class="dot"></span>12 / STAGE EVOLUTION</div>
    <div class="folio-tr">SERIES A · 2026</div>

    <div style="position:absolute; left:40px; top:50px; right:40px;">
      <div class="eyebrow" style="color:#00c37a">The anchor slide</div>
      <h1 style="font-size:28px; margin-top:10px; line-height:1.15;">
        SaaS → MAP → MAO. <span style="color:#8a939f;">Same agents, bigger wallet at every step.</span>
      </h1>
    </div>

    <div style="position:absolute; left:40px; right:40px; top:160px; height:500px; display:grid; grid-template-columns: 1fr 190px 1fr 190px 1fr; gap:0;">
      ${card(stages[0])}
      ${transition(transitions[0])}
      ${card(stages[1])}
      ${transition(transitions[1])}
      ${card(stages[2])}
    </div>

    <div style="position:absolute; left:40px; right:40px; bottom:64px; padding:14px 18px; border:1px solid #242b35; background:#141a21;">
      <div class="mono" style="font-size:10px; color:#00c37a;">THE CONSTANT</div>
      <div style="font-size:14px; color:#eef1f6; margin-top:4px; line-height:1.45;">
        Across all three stages, the same GenHealth agents do the work. What changes at each transition is <em style="color:#8a939f;">who owns the operation</em> — and that\u2019s what expands the wallet from $5B to $1.5T.
      </div>
    </div>

    <div class="folio-bl">Canonical VIZ 4</div>
    <div class="folio-br">V12 · Stage flow</div>
  </div>`;

  window.__VIZZES.push({
    name: 'Positioning · Stage evolution flow',
    desc: 'Cards + "WHAT CHANGES" transitions + constant footer.',
    html: viz,
  });
})();

// === V02 — TAM · escalating horizontal bars with jump callouts ============
(function(){
  // bar widths scaled by sqrt so they're all visible.
  // Canvas 1400, plot area x:520..1320 (800 wide), labels left
  // sqrt(5)=2.24, sqrt(300)=17.32, sqrt(1500)=38.73
  // Max ~38.73 -> maps to 800px -> k=20.66
  const k = 20.66;
  const w1 = Math.sqrt(5)*k;    // ~46
  const w2 = Math.sqrt(300)*k;  // ~358
  const w3 = Math.sqrt(1500)*k; // ~800

  const viz = `
  <div class="viz">
    <div class="folio-tl"><span class="dot"></span>02 / TAM · BARS</div>
    <div class="folio-tr">SERIES A · 2026</div>

    <div style="position:absolute; left:40px; top:100px;">
      <div class="eyebrow" style="color:#00c37a">Market sizing</div>
      <h1 style="font-size:44px; margin-top:14px; max-width:800px; line-height:1.05;">
        Each stage sells the <span style="font-style:italic; color:#8a939f;">same agents</span> into a new wallet.
      </h1>
    </div>

    <!-- Bars -->
    <div style="position:absolute; left:40px; top:280px; right:40px;">

      <!-- row 1 -->
      <div style="display:grid; grid-template-columns: 220px 80px 1fr 160px; align-items:center; gap:24px; height:110px; border-top:1px solid #242b35; padding-top:16px;">
        <div>
          <div class="mono" style="font-size:11px;color:#8a939f">STAGE 1 · SAAS</div>
          <div style="font-weight:600; font-size:20px; margin-top:4px;">Software budget</div>
          <div style="color:#505a66; font-size:12px; margin-top:2px;">Per-seat / per-workflow</div>
        </div>
        <div class="mono" style="font-size:13px; color:#00c37a;">$5B</div>
        <div style="position:relative; height:50px;">
          <div class="fade-in d1" style="height:50px; width:${w1}px; background:linear-gradient(90deg,#00c37a 0%, rgba(0,195,122,0.45) 100%); transform-origin:left center;"></div>
        </div>
        <div style="text-align:right;">
          <div class="mono" style="font-size:11px; color:#505a66;">MARGIN</div>
          <div style="font-weight:600; color:#00c37a; font-size:18px;">70–80%</div>
        </div>
      </div>

      <!-- jump 60× -->
      <div class="fade-in d2" style="display:flex; align-items:center; gap:14px; padding:10px 0 10px 220px;">
        <span style="flex:0 0 80px;"></span>
        <span style="flex:0 0 auto; display:inline-flex; align-items:center; gap:8px; color:#00c37a; font-family:'JetBrains Mono'; font-size:11px; letter-spacing:0.22em;">
          <svg width="18" height="10" viewBox="0 0 18 10"><path d="M0 5 L14 5 M10 1 L14 5 L10 9" stroke="#00c37a" fill="none" stroke-width="1.2"/></svg>
          60× JUMP — customer stops running software, starts buying outcomes
        </span>
      </div>

      <!-- row 2 -->
      <div style="display:grid; grid-template-columns: 220px 80px 1fr 160px; align-items:center; gap:24px; height:110px; border-top:1px solid #242b35; padding-top:16px;">
        <div>
          <div class="mono" style="font-size:11px;color:#8a939f">STAGE 2 · MAP</div>
          <div style="font-weight:600; font-size:20px; margin-top:4px;">BPO / MSP wallet</div>
          <div style="color:#505a66; font-size:12px; margin-top:2px;">Per-transaction / % throughput</div>
        </div>
        <div class="mono" style="font-size:14px; color:#00c37a;">$300B+</div>
        <div style="position:relative; height:50px;">
          <div class="fade-in d2" style="height:50px; width:${w2}px; background:linear-gradient(90deg,#00c37a 0%, rgba(0,195,122,0.45) 100%); transform-origin:left center;"></div>
        </div>
        <div style="text-align:right;">
          <div class="mono" style="font-size:11px; color:#505a66;">MARGIN</div>
          <div style="font-weight:600; color:#00c37a; font-size:18px;">60–70%</div>
        </div>
      </div>

      <!-- jump 5× -->
      <div class="fade-in d3" style="display:flex; align-items:center; gap:14px; padding:10px 0 10px 220px;">
        <span style="flex:0 0 80px;"></span>
        <span style="flex:0 0 auto; display:inline-flex; align-items:center; gap:8px; color:#00c37a; font-family:'JetBrains Mono'; font-size:11px; letter-spacing:0.22em;">
          <svg width="18" height="10" viewBox="0 0 18 10"><path d="M0 5 L14 5 M10 1 L14 5 L10 9" stroke="#00c37a" fill="none" stroke-width="1.2"/></svg>
          5× JUMP — contract with the health plan, collect on premium
        </span>
      </div>

      <!-- row 3 -->
      <div style="display:grid; grid-template-columns: 220px 80px 1fr 160px; align-items:center; gap:24px; height:110px; border-top:1px solid #242b35; padding-top:16px;">
        <div>
          <div class="mono" style="font-size:11px;color:#00c37a">STAGE 3 · MAO</div>
          <div style="font-weight:700; font-size:22px; margin-top:4px; color:#eef1f6;">Premium dollar</div>
          <div style="color:#505a66; font-size:12px; margin-top:2px;">% of collections · at-risk</div>
        </div>
        <div class="mono" style="font-size:14px; color:#00c37a;">$1.5T</div>
        <div style="position:relative; height:60px;">
          <div class="fade-in d3" style="height:60px; width:${w3}px; background:linear-gradient(90deg,#00c37a 0%, rgba(0,195,122,0.35) 100%); transform-origin:left center; box-shadow: 0 0 40px rgba(0,195,122,0.25);"></div>
        </div>
        <div style="text-align:right;">
          <div class="mono" style="font-size:11px; color:#505a66;">MARGIN</div>
          <div style="font-weight:700; color:#00c37a; font-size:20px;">50–70%</div>
        </div>
      </div>

      <div style="border-top:1px solid #242b35; padding-top:14px; margin-top:2px;">
        <div class="mono" style="font-size:11px; color:#505a66;">Total across stages — 300× expansion on the same technology</div>
      </div>

    </div>

    <div class="folio-bl">Widths scale as √(TAM) · internal</div>
    <div class="folio-br">V02 · Escalating bars</div>
  </div>`;

  window.__VIZZES.push({
    name: 'TAM · Escalating bars',
    desc: 'Horizontal bars on √ scale, with "what changes" jumps.',
    html: viz,
  });
})();

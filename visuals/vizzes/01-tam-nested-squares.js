window.__VIZZES = window.__VIZZES || [];

// === V01 — TAM · nested proportional squares ==============================
// Areas proportional to TAM. Using sqrt scale so $5B vs $1.5T both readable.
// Side in px: S1=60, S2=sqrt(300/5)*60 ≈ 465 no — that's too big relative to frame.
// We'll use: radius_k * sqrt(TAM) with k tuned.
// Sqrt(5)=2.24 Sqrt(300)=17.32 Sqrt(1500)=38.73
// k = 14  -> sides: 31.3, 242.5, 542.2 (fits inside 580 frame)

(function(){
  const viz = `
  <div class="viz" style="padding:0;">
    <div class="folio-tl"><span class="dot"></span>01 / TAM · NESTED</div>
    <div class="folio-tr">SERIES A · 2026</div>

    <div style="position:absolute; left:60px; top:100px; max-width:520px;">
      <div class="eyebrow" style="color:#00c37a">Wallet expansion · same agents</div>
      <h1 style="font-size:56px; line-height:1.05; margin-top:18px;">300× the wallet.</h1>
      <div style="color:#8a939f; font-weight:500; font-size:40px; letter-spacing:-0.025em; margin-top:10px; line-height:1.1;">On the same product.</div>
      <p style="color:#8a939f; font-size:15px; line-height:1.6; margin-top:44px; max-width:420px;">
        Every stage re-prices the agents into a bigger buyer. Stage 1 is software. Stage 2 is outcomes. Stage 3 is premium.
      </p>

      <div style="margin-top:38px; display:flex; flex-direction:column; gap:14px;">
        <div style="display:flex; align-items:center; gap:14px;">
          <span style="width:10px;height:10px;border-radius:50%;background:#00c37a;opacity:0.35;"></span>
          <span class="mono" style="font-size:11px;color:#8a939f;width:110px;">STAGE 1 · SAAS</span>
          <span style="color:#eef1f6; font-weight:600;">$5B</span>
          <span style="color:#505a66; font-size:13px;">software budget · 70–80% margin</span>
        </div>
        <div style="display:flex; align-items:center; gap:14px;">
          <span style="width:10px;height:10px;border-radius:50%;background:#00c37a;opacity:0.6;"></span>
          <span class="mono" style="font-size:11px;color:#8a939f;width:110px;">STAGE 2 · MAP</span>
          <span style="color:#eef1f6; font-weight:600;">$300B+</span>
          <span style="color:#505a66; font-size:13px;">BPO / internal labor · 60–70%</span>
        </div>
        <div style="display:flex; align-items:center; gap:14px;">
          <span style="width:10px;height:10px;border-radius:50%;background:#00c37a;"></span>
          <span class="mono" style="font-size:11px;color:#8a939f;width:110px;">STAGE 3 · MAO</span>
          <span style="color:#eef1f6; font-weight:600;">$1.5T</span>
          <span style="color:#505a66; font-size:13px;">premium dollar · 50–70%</span>
        </div>
      </div>
    </div>

    <!-- Right side: nested squares on right -->
    <svg viewBox="0 0 700 700" style="position:absolute; right:10px; top:50px; width:700px; height:700px;">
      <!-- Stage 3 outer -->
      <g class="fade-in d1">
        <rect x="80" y="80" width="540" height="540" fill="none" stroke="#00c37a" stroke-opacity="0.28" stroke-width="1" />
        <rect x="80" y="80" width="540" height="540" fill="url(#g3)" opacity="0.6"/>
        <text x="96" y="108" fill="#00c37a" font-family="JetBrains Mono" font-size="10" letter-spacing="0.22em">STAGE 3 · MAO</text>
        <text x="96" y="596" fill="#eef1f6" font-family="Switzer" font-weight="700" font-size="44" letter-spacing="-0.03em">$1.5T</text>
        <text x="96" y="616" fill="#8a939f" font-family="Switzer" font-size="13">Premium + admin + at-risk</text>
      </g>

      <!-- Stage 2 mid -->
      <g class="fade-in d2">
        <rect x="200" y="200" width="300" height="300" fill="#141a21" stroke="#00c37a" stroke-opacity="0.55" stroke-width="1" />
        <rect x="200" y="200" width="300" height="300" fill="#00c37a" opacity="0.10"/>
        <text x="216" y="228" fill="#00c37a" font-family="JetBrains Mono" font-size="10" letter-spacing="0.22em">STAGE 2 · MAP</text>
        <text x="216" y="470" fill="#eef1f6" font-family="Switzer" font-weight="700" font-size="32" letter-spacing="-0.03em">$300B+</text>
        <text x="216" y="490" fill="#8a939f" font-family="Switzer" font-size="12">BPO · MSP · internal labor</text>
      </g>

      <!-- Stage 1 inner -->
      <g class="fade-in d3">
        <rect x="310" y="310" width="80" height="80" fill="#00c37a" opacity="0.22"/>
        <rect x="310" y="310" width="80" height="80" fill="none" stroke="#00c37a" stroke-width="1.5"/>
        <text x="314" y="328" fill="#00c37a" font-family="JetBrains Mono" font-size="9" letter-spacing="0.18em">S1·SAAS</text>
        <text x="314" y="378" fill="#eef1f6" font-family="Switzer" font-weight="700" font-size="20" letter-spacing="-0.02em">$5B</text>
      </g>

      <!-- Multipliers -->
      <g class="fade-in d4" font-family="JetBrains Mono" font-size="11" letter-spacing="0.22em" fill="#00c37a">
        <line x1="390" y1="350" x2="500" y2="350" stroke="#00c37a" stroke-opacity="0.5" stroke-dasharray="3 3"/>
        <text x="415" y="344">60×</text>
        <line x1="500" y1="350" x2="620" y2="350" stroke="#00c37a" stroke-opacity="0.5" stroke-dasharray="3 3"/>
        <text x="535" y="344">5×</text>
      </g>

      <defs>
        <linearGradient id="g3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#00c37a" stop-opacity="0.08"/>
          <stop offset="100%" stop-color="#00c37a" stop-opacity="0.02"/>
        </linearGradient>
      </defs>
    </svg>

    <div class="folio-bl">Source · internal · JAMA 2019 · Fortune BI 2024 · CAQH 2023</div>
    <div class="folio-br">V01 · Nested squares · sqrt scale</div>
  </div>`;

  window.__VIZZES.push({
    name: 'TAM · Nested proportional squares',
    desc: 'Areas scale as sqrt($). Three stages, one canvas.',
    html: viz,
  });
})();

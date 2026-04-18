// === V04 — TAM · staircase / climbing tower ===============================
(function(){
  const viz = `
  <div class="viz">
    <div class="folio-tl"><span class="dot"></span>04 / TAM · STAIRCASE</div>
    <div class="folio-tr">SERIES A · 2026</div>

    <div style="position:absolute; left:40px; top:60px;">
      <div class="eyebrow" style="color:#00c37a">Climbing the wallet</div>
      <h1 style="font-size:36px; margin-top:12px; max-width:800px; line-height:1.08;">
        Revenue per customer grows <span style="color:#00c37a">3 orders of magnitude</span>.
      </h1>
    </div>

    <!-- Staircase occupies bottom portion -->
    <svg viewBox="0 0 1320 520" style="position:absolute; left:40px; top:200px; width:1320px; height:520px;">
      <!-- baseline -->
      <line x1="0" y1="500" x2="1320" y2="500" stroke="#242b35" stroke-width="1"/>

      <!-- Step 1 -->
      <g class="fade-in d1">
        <rect x="60" y="420" width="340" height="80" fill="#141a21" stroke="#242b35"/>
        <rect x="60" y="420" width="340" height="80" fill="#00c37a" fill-opacity="0.06"/>
        <text x="80" y="448" fill="#00c37a" font-family="JetBrains Mono" font-size="11" letter-spacing="0.22em">STAGE 1 · SAAS</text>
        <text x="80" y="486" fill="#eef1f6" font-family="Switzer" font-weight="700" font-size="32" letter-spacing="-0.03em">$5B</text>
        <text x="200" y="486" fill="#8a939f" font-family="Switzer" font-size="14">· $60K ADV · 70–80% margin</text>
      </g>

      <!-- Step 2 -->
      <g class="fade-in d2">
        <rect x="400" y="260" width="440" height="240" fill="#141a21" stroke="#242b35"/>
        <rect x="400" y="260" width="440" height="240" fill="#00c37a" fill-opacity="0.08"/>
        <text x="420" y="288" fill="#00c37a" font-family="JetBrains Mono" font-size="11" letter-spacing="0.22em">STAGE 2 · MAP</text>
        <text x="420" y="340" fill="#eef1f6" font-family="Switzer" font-weight="700" font-size="52" letter-spacing="-0.03em">$300B+</text>
        <text x="420" y="376" fill="#8a939f" font-family="Switzer" font-size="14">$500K – $5M per contract</text>
        <text x="420" y="398" fill="#8a939f" font-family="Switzer" font-size="14">60–70% margin</text>
        <text x="420" y="480" fill="#505a66" font-family="Switzer" font-size="12" font-style="italic">Managed Agent Provider — we operate the work</text>
      </g>

      <!-- Step 3 -->
      <g class="fade-in d3">
        <rect x="840" y="60" width="440" height="440" fill="#141a21" stroke="#00c37a" stroke-opacity="0.55"/>
        <rect x="840" y="60" width="440" height="440" fill="#00c37a" fill-opacity="0.12"/>
        <rect x="840" y="60" width="440" height="2" fill="#00c37a"/>
        <text x="860" y="92" fill="#00c37a" font-family="JetBrains Mono" font-size="11" letter-spacing="0.22em">STAGE 3 · MAO · TARGET</text>
        <text x="860" y="168" fill="#eef1f6" font-family="Switzer" font-weight="700" font-size="80" letter-spacing="-0.04em">$1.5T</text>
        <text x="860" y="212" fill="#8a939f" font-family="Switzer" font-size="16">$10M – $100M+ per payer</text>
        <text x="860" y="234" fill="#8a939f" font-family="Switzer" font-size="16">50–70% margin</text>
        <text x="860" y="472" fill="#505a66" font-family="Switzer" font-size="12" font-style="italic">Managed Agent Organization — we collect on the premium</text>
      </g>

      <!-- Jump annotations -->
      <g class="fade-in d4" font-family="JetBrains Mono" font-size="10" letter-spacing="0.22em" fill="#00c37a">
        <path d="M400 420 L400 400 L440 400" fill="none" stroke="#00c37a" stroke-width="1" stroke-dasharray="2 3"/>
        <text x="445" y="404">60× WALLET</text>

        <path d="M840 260 L840 240 L880 240" fill="none" stroke="#00c37a" stroke-width="1" stroke-dasharray="2 3"/>
        <text x="885" y="244">5× WALLET</text>
      </g>
    </svg>

    <div class="folio-bl">Revenue per contract grows with wallet</div>
    <div class="folio-br">V04 · Climbing staircase</div>
  </div>`;

  window.__VIZZES.push({
    name: 'TAM · Climbing staircase',
    desc: 'Each step taller & wider — revenue per customer 3 OOM.',
    html: viz,
  });
})();

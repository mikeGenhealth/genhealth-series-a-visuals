// === V14 — Positioning · "Only one moves diagonally" (manifesto chart) ====
(function(){
  // Big editorial chart — simplified axes, just category centroids as halos, GenHealth as the only vector.

  const viz = `
  <div class="viz">
    <div class="folio-tl"><span class="dot"></span>14 / DIAGONAL</div>
    <div class="folio-tr">SERIES A · 2026</div>

    <div style="position:absolute; left:40px; top:48px;">
      <div class="eyebrow" style="color:#00c37a">The thesis</div>
      <h1 style="font-size:34px; margin-top:10px; max-width:900px; line-height:1.1;">
        GenHealth is the <span style="color:#00c37a">only vendor moving diagonally</span><br/>
        <span style="color:#8a939f; font-weight:500;">— agent-native economics and operator depth.</span>
      </h1>
    </div>

    <svg viewBox="0 0 1400 800" style="position:absolute; inset:0; width:100%; height:100%;">
      <defs>
        <radialGradient id="cloud-amber"><stop offset="0%" stop-color="#ffd666" stop-opacity="0.22"/><stop offset="100%" stop-color="#ffd666" stop-opacity="0"/></radialGradient>
        <radialGradient id="cloud-slate"><stop offset="0%" stop-color="#94a3b8" stop-opacity="0.18"/><stop offset="100%" stop-color="#94a3b8" stop-opacity="0"/></radialGradient>
        <radialGradient id="cloud-ember"><stop offset="0%" stop-color="#ff4f1f" stop-opacity="0.20"/><stop offset="100%" stop-color="#ff4f1f" stop-opacity="0"/></radialGradient>
        <radialGradient id="cloud-green"><stop offset="0%" stop-color="#00c37a" stop-opacity="0.35"/><stop offset="100%" stop-color="#00c37a" stop-opacity="0"/></radialGradient>
        <marker id="arrh" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#00c37a"/>
        </marker>
      </defs>

      <!-- plot area 80..1320, 210..710 -->
      <line x1="80" y1="710" x2="1320" y2="710" stroke="#242b35"/>
      <line x1="80" y1="210" x2="80" y2="710" stroke="#242b35"/>

      <!-- clouds for each category (centroid) -->
      <!-- Point AI - top left-ish -->
      <circle cx="320" cy="300" r="180" fill="url(#cloud-amber)"/>
      <text x="320" y="250" text-anchor="middle" fill="#ffd666" font-family="JetBrains Mono" font-size="11" letter-spacing="0.22em">POINT AI</text>
      <text x="320" y="340" text-anchor="middle" fill="#ffd666" font-family="Switzer" font-size="12" opacity="0.9">agent-native · shallow</text>
      <text x="320" y="358" text-anchor="middle" fill="#8a939f" font-family="Switzer" font-size="11">Tennr, Mandolin, Anterior…</text>

      <!-- Legacy - bottom left -->
      <circle cx="360" cy="580" r="170" fill="url(#cloud-slate)"/>
      <text x="360" y="540" text-anchor="middle" fill="#94a3b8" font-family="JetBrains Mono" font-size="11" letter-spacing="0.22em">LEGACY SOFTWARE</text>
      <text x="360" y="612" text-anchor="middle" fill="#94a3b8" font-family="Switzer" font-size="12" opacity="0.9">pre-LLM · mixed margins</text>
      <text x="360" y="630" text-anchor="middle" fill="#8a939f" font-family="Switzer" font-size="11">Availity, Notable, Cohere</text>

      <!-- BPO - bottom right -->
      <circle cx="1060" cy="620" r="180" fill="url(#cloud-ember)"/>
      <text x="1060" y="570" text-anchor="middle" fill="#ff4f1f" font-family="JetBrains Mono" font-size="11" letter-spacing="0.22em">BPO / MSO</text>
      <text x="1060" y="650" text-anchor="middle" fill="#ff4f1f" font-family="Switzer" font-size="12" opacity="0.9">labor · services margins</text>
      <text x="1060" y="668" text-anchor="middle" fill="#8a939f" font-family="Switzer" font-size="11">Cognizant, Access HC, Prochant</text>

      <!-- GenHealth zone - top right -->
      <circle cx="1100" cy="280" r="220" fill="url(#cloud-green)"/>
      <pattern id="hatch-green14" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="10" stroke="#00c37a" stroke-width="1" stroke-opacity="0.2"/>
      </pattern>
      <circle cx="1100" cy="280" r="180" fill="url(#hatch-green14)"/>
      <text x="1100" y="210" text-anchor="middle" fill="#00c37a" font-family="JetBrains Mono" font-size="11" letter-spacing="0.22em">UNCONTESTED · MAO</text>

      <!-- Diagonal trajectory -->
      <path d="M 320 330 Q 700 420 1080 300" stroke="#00c37a" stroke-width="2.5" fill="none" marker-end="url(#arrh)" stroke-dasharray="6 6"/>
      <!-- GenHealth dot at current position, ~65% along -->
      <circle cx="720" cy="360" r="100" fill="url(#cloud-green)"/>
      <circle cx="720" cy="360" r="18" fill="#00c37a"/>
      <circle cx="720" cy="360" r="18" fill="none" stroke="#00c37a" stroke-width="1.5">
        <animate attributeName="r" values="18;42;18" dur="2.4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;0;0.8" dur="2.4s" repeatCount="indefinite"/>
      </circle>
      <text x="720" y="398" text-anchor="middle" fill="#eef1f6" font-family="Switzer" font-weight="700" font-size="18">GenHealth</text>
      <text x="720" y="418" text-anchor="middle" fill="#00c37a" font-family="JetBrains Mono" font-size="11" letter-spacing="0.22em">NOW · $10M CARR</text>

      <!-- Axis labels -->
      <text x="700" y="750" text-anchor="middle" fill="#8a939f" font-family="JetBrains Mono" font-size="11" letter-spacing="0.22em">DEPTH OF WORK  →</text>
      <text x="40" y="460" transform="rotate(-90 40 460)" text-anchor="middle" fill="#8a939f" font-family="JetBrains Mono" font-size="11" letter-spacing="0.22em">COMPUTE-NATIVE  →</text>

      <!-- Corner footer quote -->
      <text x="80" y="780" fill="#505a66" font-family="Switzer" font-size="12" font-style="italic">"Same revenue lines on the P&amp;L as an MSO. Radically different economics underneath."</text>
    </svg>

    <div class="folio-br">V14 · Diagonal</div>
  </div>`;

  window.__VIZZES.push({
    name: 'Positioning · Only one moves diagonally',
    desc: 'Manifesto chart: four category clouds, one trajectory arrow.',
    html: viz,
  });
})();

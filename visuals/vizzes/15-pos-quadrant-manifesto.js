// === V15 — Positioning · Editorial quadrant manifesto =====================
(function(){
  const viz = `
  <div class="viz">
    <div class="folio-tl"><span class="dot"></span>15 / QUADRANT MANIFESTO</div>
    <div class="folio-tr">SERIES A · 2026</div>

    <!-- 2x2 giant quadrants, editorial -->
    <div style="position:absolute; inset:0; display:grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr;">

      <!-- TL: Point AI -->
      <div style="padding:80px 48px 40px; border-right:1px solid #242b35; border-bottom:1px solid #242b35; position:relative; overflow:hidden;">
        <div style="position:absolute; inset:0; background-image:repeating-linear-gradient(45deg, rgba(255,214,102,0.04) 0 1px, transparent 1px 10px);"></div>
        <div style="position:relative;">
          <div class="mono" style="color:#ffd666;">POINT AI — <span style="color:#8a939f;">blocks at Stage 2</span></div>
          <div style="font-size:52px; font-weight:700; letter-spacing:-0.03em; line-height:1.0; margin-top:14px; color:#eef1f6;">
            Can ship tech.<br/><span style="color:#ffd666;">Can't operate</span> work.
          </div>
          <div style="margin-top:18px; color:#8a939f; font-size:13px; line-height:1.6; max-width:440px;">
            Tennr · Mandolin · Anterior · Valerie · SuperDial. <br>$300M+ raised into slivers of one workflow each. Thoughtful tried to cross into MAP and got absorbed in 2025.
          </div>
        </div>
      </div>

      <!-- TR: GenHealth (green, highlighted) -->
      <div style="padding:80px 48px 40px; border-bottom:1px solid #00c37a; position:relative; overflow:hidden;
                  background: radial-gradient(600px 500px at 80% 20%, rgba(0,195,122,0.18) 0%, rgba(0,195,122,0) 60%);">
        <div style="position:absolute; top:28px; right:28px;">
          <span class="stamp"><span class="d"></span>UNCONTESTED · MAO</span>
        </div>
        <div class="mono" style="color:#00c37a;">GENHEALTH — <span style="color:#eef1f6;">fills all three stages</span></div>
        <div style="font-size:60px; font-weight:700; letter-spacing:-0.035em; line-height:1.0; margin-top:14px; color:#00c37a;">
          Agent-native<br/>and operator.
        </div>
        <div style="margin-top:20px; color:#eef1f6; font-size:14px; line-height:1.6; max-width:440px;">
          The only structural type of company that can legitimately sell SaaS today, operate Managed Agent Provider contracts next, and collect on the premium dollar as an MAO.
        </div>
        <div style="display:flex; gap:22px; margin-top:24px;">
          <div><div class="mono" style="font-size:10px; color:#00c37a;">CARR</div><div style="font-size:22px; font-weight:700; color:#eef1f6;">$10M</div></div>
          <div><div class="mono" style="font-size:10px; color:#00c37a;">NRR</div><div style="font-size:22px; font-weight:700; color:#eef1f6;">232%</div></div>
          <div><div class="mono" style="font-size:10px; color:#00c37a;">LTV:CAC</div><div style="font-size:22px; font-weight:700; color:#eef1f6;">12:1</div></div>
        </div>
      </div>

      <!-- BL: Legacy -->
      <div style="padding:40px 48px 60px; border-right:1px solid #242b35; position:relative; overflow:hidden;">
        <div style="position:absolute; inset:0; background-image:repeating-linear-gradient(45deg, rgba(148,163,184,0.03) 0 1px, transparent 1px 10px);"></div>
        <div style="position:relative;">
          <div class="mono" style="color:#94a3b8;">LEGACY SOFTWARE — <span style="color:#8a939f;">stuck at Stage 1</span></div>
          <div style="font-size:48px; font-weight:700; letter-spacing:-0.03em; line-height:1.0; margin-top:14px; color:#eef1f6;">
            Pre-LLM stacks.<br/><span style="color:#94a3b8;">Batch EDI</span> cores.
          </div>
          <div style="margin-top:18px; color:#8a939f; font-size:13px; line-height:1.6; max-width:440px;">
            Availity · Cohere · Notable. Provider-side UX criticized; renting AI from Abridge. Valuations flat. The architecture can't price on outcomes.
          </div>
        </div>
      </div>

      <!-- BR: BPO -->
      <div style="padding:40px 48px 60px; position:relative; overflow:hidden;">
        <div style="position:absolute; inset:0; background-image:repeating-linear-gradient(45deg, rgba(255,79,31,0.04) 0 1px, transparent 1px 10px);"></div>
        <div style="position:relative;">
          <div class="mono" style="color:#ff4f1f;">BPO / MSO — <span style="color:#8a939f;">operates labor, not agents</span></div>
          <div style="font-size:48px; font-weight:700; letter-spacing:-0.03em; line-height:1.0; margin-top:14px; color:#eef1f6;">
            15–30% margins.<br/><span style="color:#ff4f1f;">Offshore labor</span> P&amp;L.
          </div>
          <div style="margin-top:18px; color:#8a939f; font-size:13px; line-height:1.6; max-width:460px;">
            Cognizant · Access HC · Prochant · ACU-Serve. Multi-billion in revenue, but labor-arbitrage economics can't underwrite at-risk. Bolted-on AI can't change the margin structure.
          </div>
        </div>
      </div>

    </div>

    <!-- Axis cross overlay -->
    <div style="position:absolute; left:50%; top:130px; bottom:60px; width:1px; background:#1c232c; transform:translateX(-0.5px); pointer-events:none;"></div>
    <div style="position:absolute; top:50%; left:50px; right:50px; height:1px; background:#1c232c; transform:translateY(-0.5px); pointer-events:none;"></div>

    <!-- Axis labels (corners) -->
    <div class="mono" style="position:absolute; top:50%; left:28px; transform:translateY(-50%) rotate(-90deg); transform-origin:left center; color:#505a66; font-size:10px;">LABOR   ←     COMPUTE-NATIVE</div>
    <div class="mono" style="position:absolute; left:50%; bottom:26px; transform:translateX(-50%); color:#505a66; font-size:10px;">SHALLOW   ←     DEPTH OF WORK     →   OPERATOR</div>

    <div class="folio-br">V15 · Quadrant manifesto</div>
  </div>`;

  window.__VIZZES.push({
    name: 'Positioning · Quadrant manifesto',
    desc: 'Editorial 2×2. Each quadrant is a verdict.',
    html: viz,
  });
})();

// dyla.net — Coming Soon landing page + KV email capture (Dyla Archery)

const BRAND = {
  name: "Dyla Archery",
  kicker: "Premium custom arrow builds — coming soon",
  headline: "Custom arrows built to perform — and look lethal doing it.",
  subhead:
    "We’re building a full-service arrow shop focused on tight specs for hardcore hunters and precision shooters: correct spine, calculated FOC, bare shaft alignment, and broadhead-true tuning.",
  bullets: [
    { t: "FOC + weight targets", d: "Builds centered on your goals: speed, penetration, durability, or forgiveness." },
    { t: "Correct spine selection", d: "Spine matched to draw weight/length, point weight, and arrow length — no guessing." },
    { t: "Broadhead tuning focus", d: "Bare shaft / spine alignment and broadhead-true builds for confidence at distance." },
    { t: "Premium aesthetics", d: "Clean wraps, fletch combos, and finishes — your arrows should look as good as they fly." },
  ],
  footerEmail: "hello@dyla.net",
};

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));
}

function isValidEmail(email) {
  if (!email || email.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);
}

function htmlPage(env) {
  // Recommended: set LOGO_URL to a public PNG (GitHub raw works fine).
  const logoUrl = (env.LOGO_URL || "").trim();

  // Brand colors (default to logo-friendly yellow/orange)
  const YELLOW = (env.YELLOW || "#FFD400").trim();
  const ORANGE = (env.ORANGE || "#FF6A00").trim();
  const year = new Date().getFullYear();

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${escapeHtml(BRAND.name)} — Coming Soon</title>
  <meta name="description" content="Premium custom arrow builds: FOC, correct spine, bare shaft alignment, and broadhead tuning. Launching soon." />
  <meta name="theme-color" content="#07070a" />
  <style>
    :root{
      --bg:#07070a;
      --card: rgba(255,255,255,.06);
      --card2: rgba(255,255,255,.10);
      --text: rgba(255,255,255,.92);
      --muted: rgba(255,255,255,.68);
      --muted2: rgba(255,255,255,.55);
      --line: rgba(255,255,255,.12);

      --yellow: ${YELLOW};
      --orange: ${ORANGE};

      --shadow: 0 20px 90px rgba(0,0,0,.65);
      --radius: 18px;
      --radius2: 26px;
      --max: 1120px;
    }
    *{box-sizing:border-box}
    body{
      margin:0;
      font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
      color:var(--text);
      background:
        radial-gradient(900px 500px at 15% 10%, rgba(255,212,0,.10), transparent 60%),
        radial-gradient(900px 520px at 85% 18%, rgba(255,106,0,.10), transparent 58%),
        radial-gradient(900px 520px at 35% 90%, rgba(60,160,255,.08), transparent 60%),
        linear-gradient(180deg, #050506, #0b0b10 40%, #07070a);
      min-height:100vh;
    }
    .wrap{max-width:var(--max);margin:0 auto;padding:54px 22px 28px;}
    .top{
      display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:30px;
    }
    .brand{display:flex;align-items:center;gap:14px;min-width:240px;}
    .logo{
      width:54px;height:54px;border-radius:18px;
      border:1px solid var(--line);
      background:linear-gradient(135deg, rgba(255,212,0,.18), rgba(255,106,0,.10));
      box-shadow: 0 12px 44px rgba(0,0,0,.45);
      display:grid;place-items:center;overflow:hidden;
    }
    .logo img{width:100%;height:100%;object-fit:cover}
    .wordmark{line-height:1.05}
    .wordmark .name{font-weight:800;font-size:16px;letter-spacing:.2px}
    .wordmark .soon{font-size:12px;color:var(--muted);margin-top:4px}
    .pill{
      padding:10px 12px;border:1px solid var(--line);
      background: rgba(255,255,255,.04);border-radius:999px;
      color:var(--muted);font-size:12px;display:flex;gap:10px;align-items:center;white-space:nowrap;
    }
    .pill b{color:var(--text);font-weight:700}
    @media (max-width: 900px){ .pill{display:none} }

    .hero{display:grid;grid-template-columns: 1.15fr .85fr;gap:22px;align-items:stretch;}
    @media (max-width: 920px){ .hero{grid-template-columns:1fr} }

    .card{
      border:1px solid var(--line);
      background: var(--card);
      border-radius: var(--radius2);
      box-shadow: var(--shadow);
      overflow:hidden;
      position:relative;
    }
    .card::before{
      content:"";
      position:absolute; inset:-2px;
      background:
        radial-gradient(700px 330px at 18% 0%, rgba(255,212,0,.14), transparent 60%),
        radial-gradient(700px 330px at 82% 18%, rgba(255,106,0,.14), transparent 55%);
      pointer-events:none;
      filter: blur(2px);
      opacity:.85;
    }
    .card > *{position:relative}

    .left{padding:34px 30px 30px;}
    .kicker{
      display:inline-flex;gap:10px;align-items:center;
      font-size:12px;padding:8px 10px;border-radius:999px;
      background: rgba(0,0,0,.20);
      border:1px solid rgba(255,255,255,.14);
      color:var(--muted);margin-bottom:16px;
    }
    .dot{
      width:8px;height:8px;border-radius:99px;
      background: linear-gradient(90deg, var(--yellow), var(--orange));
      box-shadow:0 0 24px rgba(255,180,0,.35);
    }
    h1{font-size:44px;margin:0 0 12px;letter-spacing:-.7px;line-height:1.04;}
    @media (max-width: 520px){ h1{font-size:38px} }
    .lead{
      margin:0;color:var(--muted);font-size:16px;line-height:1.65;max-width: 60ch;
    }

    .grid{
      display:grid;
      grid-template-columns: repeat(2, minmax(0,1fr));
      gap:12px;margin-top:22px;
    }
    @media (max-width: 720px){ .grid{grid-template-columns:1fr} }
    .feat{
      padding:14px 14px;border-radius:16px;
      background: rgba(255,255,255,.04);
      border: 1px solid rgba(255,255,255,.12);
    }
    .feat .t{font-weight:800;font-size:13px}
    .feat .d{margin-top:6px;color:var(--muted2);font-size:12px;line-height:1.55}

    .right{padding:26px 22px 22px;display:flex;flex-direction:column;gap:14px;}
    .formCard{
      padding:18px 18px 16px;border-radius: var(--radius);
      background: rgba(0,0,0,.25);
      border:1px solid rgba(255,255,255,.14);
    }
    .formCard h2{margin:0 0 6px;font-size:16px;letter-spacing:-.2px}
    .formCard p{margin:0 0 14px;color:var(--muted);font-size:13px;line-height:1.55}
    form{display:flex;flex-direction:column;gap:10px}
    label{font-size:12px;color:var(--muted);display:flex;justify-content:space-between}
    input[type="email"]{
      width:100%;padding:12px 12px;border-radius:14px;
      border:1px solid rgba(255,255,255,.16);
      background: rgba(255,255,255,.06);
      color:var(--text);outline:none;font-size:14px;
    }
    input[type="email"]:focus{
      border-color: rgba(255,212,0,.40);
      box-shadow: 0 0 0 4px rgba(255,212,0,.10);
    }
    .row{display:flex;gap:10px;align-items:center}
    button{
      cursor:pointer;border:none;border-radius:14px;padding:12px 14px;
      font-weight:850;letter-spacing:.2px;min-width: 160px;
      color:#0b0b10;
      background: linear-gradient(90deg, var(--yellow), var(--orange));
      box-shadow: 0 14px 40px rgba(255,140,0,.18);
      transition: transform .06s ease, opacity .2s ease;
    }
    button:active{transform:translateY(1px)}
    .note{font-size:12px;color:var(--muted2);margin-top:10px;line-height:1.45}
    .msg{
      margin-top:10px;font-size:12px;padding:10px 10px;border-radius:14px;
      border:1px solid rgba(255,255,255,.14);
      background: rgba(255,255,255,.04);
      color: var(--muted);
      display:none;
    }
    .msg.ok{display:block;border-color: rgba(255,212,0,.35); color: rgba(255,245,210,.95)}
    .msg.err{display:block;border-color: rgba(255,130,130,.35); color: rgba(255,220,220,.92)}
    .fineprint{
      margin-top:auto;display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;
      color:var(--muted2);font-size:12px;padding:10px 4px 0;
    }
    a{color:rgba(255,255,255,.82);text-decoration:none;border-bottom:1px solid rgba(255,212,0,.30)}
    a:hover{opacity:.9}
    .honeypot{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}
  </style>
</head>
<body>
  <div class="wrap">
    <div class="top">
      <div class="brand">
        <div class="logo" aria-label="Logo">
          ${logoUrl ? `<img src="${escapeHtml(logoUrl)}" alt="${escapeHtml(BRAND.name)} logo" />` : `<span style="opacity:.92;font-weight:900">D</span>`}
        </div>
        <div class="wordmark">
          <div class="name">${escapeHtml(BRAND.name)}</div>
          <div class="soon">${escapeHtml(BRAND.kicker)}</div>
        </div>
      </div>
      <div class="pill"><b>Launch list</b> • FOC • spine • broadhead tuning</div>
    </div>

    <div class="hero">
      <div class="card">
        <div class="left">
          <div class="kicker"><span class="dot"></span> ${escapeHtml(BRAND.kicker)}</div>
          <h1>${escapeHtml(BRAND.headline)}</h1>
          <p class="lead">${escapeHtml(BRAND.subhead)}</p>

          <div class="grid">
            ${BRAND.bullets.map(b => `
              <div class="feat">
                <div class="t">${escapeHtml(b.t)}</div>
                <div class="d">${escapeHtml(b.d)}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>

      <div class="card">
        <div class="right">
          <div class="formCard">
            <h2>Get notified when builds open</h2>
            <p>Early access, build notes, and launch updates. No spam.</p>

            <form id="subForm">
              <div class="honeypot" aria-hidden="true">
                <label>Leave this field empty <input type="text" name="company" tabindex="-1" autocomplete="off" /></label>
              </div>

              <label>Email</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" required />

              <div class="row">
                <button id="btn" type="submit">Join the list</button>
                <div style="font-size:12px;color:var(--muted);line-height:1.3">
                  Be first to snag limited build slots.
                </div>
              </div>

              <div id="msg" class="msg"></div>
              <div class="note">Unsubscribe anytime. We’ll only email when it matters.</div>
            </form>
          </div>

          <div class="fineprint">
            <div>© ${year} ${escapeHtml(BRAND.name)}</div>
            <div><a href="mailto:${escapeHtml(BRAND.footerEmail)}">${escapeHtml(BRAND.footerEmail)}</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>

<script>
(() => {
  const form = document.getElementById("subForm");
  const msg  = document.getElementById("msg");
  const btn  = document.getElementById("btn");

  function setMsg(kind, text){
    msg.className = "msg " + kind;
    msg.textContent = text;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    msg.className = "msg";
    msg.textContent = "";
    btn.disabled = true;
    btn.style.opacity = .7;

    try{
      const fd = new FormData(form);
      const email = (fd.get("email") || "").toString().trim();
      const company = (fd.get("company") || "").toString().trim(); // honeypot

      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email,
          company,
          tz: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
          ref: document.referrer || "",
        }),
      });

      const data = await res.json().catch(() => ({}));

      if(!res.ok || data.ok !== true){
        setMsg("err", data.message || "Something went wrong. Please try again.");
      } else {
        setMsg("ok", "You’re on the list — we’ll keep you posted. 🏹");
        form.reset();
      }
    } catch (_err){
      setMsg("err", "Network error. Please try again.");
    } finally {
      btn.disabled = false;
      btn.style.opacity = 1;
    }
  });
})();
</script>
</body>
</html>`;
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

async function storeSubscriberKV(env, entry) {
  // Requires KV binding named SUBSCRIBERS_KV
  // Key: email lowercase
  // Value: JSON entry
  const key = entry.email.toLowerCase();
  await env.SUBSCRIBERS_KV.put(key, JSON.stringify(entry));
  return { stored: true, method: "kv" };
}

export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);

    if (req.method === "GET" && url.pathname === "/") {
      return new Response(htmlPage(env), {
        headers: {
          "content-type": "text/html; charset=utf-8",
          "cache-control": "no-store",
          "x-content-type-options": "nosniff",
          "referrer-policy": "strict-origin-when-cross-origin",
        },
      });
    }

    if (url.pathname === "/api/subscribe" && req.method === "POST") {
      let body = {};
      try { body = await req.json(); } catch {}

      const email = (body.email || "").toString().trim();
      const company = (body.company || "").toString().trim(); // honeypot
      const tz = (body.tz || "").toString().slice(0, 64);
      const ref = (body.ref || "").toString().slice(0, 300);

      // Honeypot: silently accept to avoid training bots
      if (company) return json({ ok: true }, 200);

      if (!isValidEmail(email)) {
        return json({ ok: false, message: "Please enter a valid email address." }, 400);
      }

      if (!env.SUBSCRIBERS_KV) {
        // Still allow “success” while you wire up KV
        return json({ ok: true, stored: false, method: "none" }, 200);
      }

      const entry = {
        email: email.toLowerCase(),
        createdAt: new Date().toISOString(),
        ip: req.headers.get("cf-connecting-ip") || "",
        ua: req.headers.get("user-agent") || "",
        tz,
        ref,
      };

      try {
        const result = await storeSubscriberKV(env, entry);
        return json({ ok: true, ...result }, 200);
      } catch (_e) {
        return json({ ok: false, message: "Could not subscribe right now. Please try again." }, 500);
      }
    }

    return new Response("Not found", { status: 404 });
  },
};

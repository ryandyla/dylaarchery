// dyla.net placeholder landing page + email capture
// Storage: defaults to KV if bound (SUBSCRIBERS_KV). Otherwise returns "ok" without storing.
// Add your logo by setting LOGO_URL as an env var (or hardcode it below).

const BRAND = {
  name: "Dyla Archery",
  tagline: "Custom arrows. Built to perform. Designed to turn heads.",
  sub: "We’re building a full-service arrow shop—precision-built custom arrows tuned to you. Leave your email to get launch updates, early drops, and build tips.",
};

function htmlPage(env) {
  const logoUrl = (env.LOGO_URL || "").trim(); // e.g. https://.../logo.png
  const accent = (env.ACCENT || "#ffffff").trim(); // optional
  const year = new Date().getFullYear();

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${escapeHtml(BRAND.name)} — Coming Soon</title>
  <meta name="description" content="Premium custom arrows — coming soon." />
  <meta name="theme-color" content="#0b0b0f" />
  <style>
    :root{
      --bg:#07070a;
      --card: rgba(255,255,255,.06);
      --card2: rgba(255,255,255,.10);
      --text: rgba(255,255,255,.92);
      --muted: rgba(255,255,255,.68);
      --muted2: rgba(255,255,255,.55);
      --line: rgba(255,255,255,.12);
      --accent:${accent};
      --ok:#9df5b0;
      --err:#ffb3b3;
      --shadow: 0 20px 80px rgba(0,0,0,.55);
      --radius: 18px;
      --radius2: 26px;
      --max: 1080px;
    }
    *{box-sizing:border-box}
    body{
      margin:0;
      font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
      color:var(--text);
      background:
        radial-gradient(1200px 600px at 10% 10%, rgba(255,255,255,.08), transparent 60%),
        radial-gradient(1000px 500px at 90% 25%, rgba(255,255,255,.06), transparent 55%),
        radial-gradient(900px 500px at 30% 90%, rgba(255,255,255,.05), transparent 55%),
        linear-gradient(180deg, #050506, #0b0b10 35%, #07070a);
      min-height:100vh;
    }
    .wrap{
      max-width:var(--max);
      margin:0 auto;
      padding:56px 22px 28px;
    }
    .top{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:18px;
      margin-bottom:34px;
    }
    .brand{
      display:flex;
      align-items:center;
      gap:14px;
      min-width:240px;
    }
    .logo{
      width:46px;height:46px;border-radius:14px;
      background:linear-gradient(135deg, rgba(255,255,255,.18), rgba(255,255,255,.06));
      border:1px solid var(--line);
      box-shadow: 0 10px 40px rgba(0,0,0,.35);
      display:grid;place-items:center;
      overflow:hidden;
    }
    .logo img{width:100%;height:100%;object-fit:cover}
    .wordmark{
      line-height:1.05;
      letter-spacing:.2px;
    }
    .wordmark .name{font-weight:700;font-size:16px}
    .wordmark .soon{font-size:12px;color:var(--muted);margin-top:3px}
    .pill{
      padding:10px 12px;
      border:1px solid var(--line);
      background: rgba(255,255,255,.04);
      border-radius:999px;
      color:var(--muted);
      font-size:12px;
      display:flex;
      gap:10px;
      align-items:center;
      white-space:nowrap;
    }
    .pill b{color:var(--text);font-weight:600}
    .hero{
      display:grid;
      grid-template-columns: 1.1fr .9fr;
      gap:22px;
      align-items:stretch;
    }
    @media (max-width: 900px){
      .hero{grid-template-columns:1fr}
      .pill{display:none}
    }
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
      background: radial-gradient(600px 300px at 20% 0%, rgba(255,255,255,.10), transparent 60%),
                  radial-gradient(600px 300px at 80% 20%, rgba(255,255,255,.08), transparent 55%);
      pointer-events:none;
      filter: blur(2px);
      opacity:.9;
    }
    .card > *{position:relative}
    .left{
      padding:34px 30px 30px;
    }
    .kicker{
      display:inline-flex;
      gap:10px;
      align-items:center;
      font-size:12px;
      padding:8px 10px;
      border-radius:999px;
      background: rgba(255,255,255,.05);
      border:1px solid var(--line);
      color:var(--muted);
      margin-bottom:16px;
    }
    .dot{width:7px;height:7px;border-radius:99px;background:var(--accent);box-shadow:0 0 22px rgba(255,255,255,.35)}
    h1{
      font-size:44px;
      margin:0 0 12px;
      letter-spacing:-.6px;
      line-height:1.03;
    }
    @media (max-width: 520px){ h1{font-size:38px} }
    .lead{
      margin:0;
      color:var(--muted);
      font-size:16px;
      line-height:1.6;
      max-width: 52ch;
    }
    .features{
      display:grid;
      grid-template-columns: repeat(3, minmax(0,1fr));
      gap:12px;
      margin-top:22px;
    }
    @media (max-width: 720px){ .features{grid-template-columns:1fr} }
    .feat{
      padding:14px 14px;
      border-radius:16px;
      background: rgba(255,255,255,.04);
      border: 1px solid var(--line);
    }
    .feat .t{font-weight:600;font-size:13px}
    .feat .d{margin-top:6px;color:var(--muted2);font-size:12px;line-height:1.5}
    .right{
      padding:26px 22px 22px;
      display:flex;
      flex-direction:column;
      gap:14px;
    }
    .formCard{
      padding:18px 18px 16px;
      border-radius: var(--radius);
      background: rgba(0,0,0,.25);
      border:1px solid var(--line);
    }
    .formCard h2{
      margin:0 0 6px;
      font-size:16px;
      letter-spacing:-.2px;
    }
    .formCard p{
      margin:0 0 14px;
      color:var(--muted);
      font-size:13px;
      line-height:1.55;
    }
    form{display:flex;flex-direction:column;gap:10px}
    label{font-size:12px;color:var(--muted);display:flex;justify-content:space-between}
    input[type="email"]{
      width:100%;
      padding:12px 12px;
      border-radius: 14px;
      border:1px solid rgba(255,255,255,.14);
      background: rgba(255,255,255,.06);
      color:var(--text);
      outline:none;
      font-size:14px;
    }
    input[type="email"]:focus{
      border-color: rgba(255,255,255,.35);
      box-shadow: 0 0 0 4px rgba(255,255,255,.08);
    }
    .row{
      display:flex; gap:10px; align-items:center;
    }
    button{
      cursor:pointer;
      border:none;
      border-radius: 14px;
      padding:12px 14px;
      font-weight:650;
      letter-spacing:.2px;
      background: rgba(255,255,255,.92);
      color: #0b0b10;
      transition: transform .06s ease, opacity .2s ease;
      min-width: 150px;
    }
    button:active{transform:translateY(1px)}
    .note{
      font-size:12px;
      color:var(--muted2);
      margin-top:10px;
      line-height:1.45;
    }
    .msg{
      margin-top:10px;
      font-size:12px;
      padding:10px 10px;
      border-radius: 14px;
      border:1px solid var(--line);
      background: rgba(255,255,255,.04);
      color: var(--muted);
      display:none;
    }
    .msg.ok{display:block;border-color: rgba(157,245,176,.35); color: rgba(220,255,230,.92)}
    .msg.err{display:block;border-color: rgba(255,179,179,.35); color: rgba(255,220,220,.92)}
    .fineprint{
      margin-top:auto;
      display:flex;
      justify-content:space-between;
      gap:14px;
      flex-wrap:wrap;
      color:var(--muted2);
      font-size:12px;
      padding:10px 4px 0;
    }
    a{color:rgba(255,255,255,.80);text-decoration:none;border-bottom:1px solid rgba(255,255,255,.20)}
    a:hover{opacity:.9}
    .honeypot{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}
  </style>
</head>
<body>
  <div class="wrap">
    <div class="top">
      <div class="brand">
        <div class="logo" aria-label="Logo">
          ${logoUrl ? `<img src="${escapeHtml(logoUrl)}" alt="${escapeHtml(BRAND.name)} logo" />` : `<span style="opacity:.9;font-weight:800">D</span>`}
        </div>
        <div class="wordmark">
          <div class="name">${escapeHtml(BRAND.name)}</div>
          <div class="soon">Coming soon • Custom arrow builds</div>
        </div>
      </div>
      <div class="pill"><b>Launch list</b> • early drops • tuning tips</div>
    </div>

    <div class="hero">
      <div class="card">
        <div class="left">
          <div class="kicker"><span class="dot"></span> Premium custom arrows in the works</div>
          <h1>${escapeHtml(BRAND.tagline)}</h1>
          <p class="lead">${escapeHtml(BRAND.sub)}</p>

          <div class="features">
            <div class="feat">
              <div class="t">Precision builds</div>
              <div class="d">Spine selection, cut length, insert/outsert, and tuning—dialed for your setup.</div>
            </div>
            <div class="feat">
              <div class="t">High performance</div>
              <div class="d">Weight, FOC, and durability goals—built to match your hunting or target needs.</div>
            </div>
            <div class="feat">
              <div class="t">Looks that pop</div>
              <div class="d">Clean wraps, fletch combos, and finishes—your arrows should look as good as they fly.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="right">
          <div class="formCard">
            <h2>Get updates when we launch</h2>
            <p>No spam. Just launch info, early access, and the occasional build/tuning tip.</p>

            <form id="subForm">
              <div class="honeypot" aria-hidden="true">
                <label>Leave this field empty <input type="text" name="company" tabindex="-1" autocomplete="off" /></label>
              </div>

              <label>Email <span id="count" style="opacity:.75"></span></label>
              <input id="email" name="email" type="email" placeholder="you@example.com" required />

              <div class="row">
                <button id="btn" type="submit">Notify me</button>
                <div style="font-size:12px;color:var(--muted);line-height:1.3">
                  Be first to know when custom builds open.
                </div>
              </div>

              <div id="msg" class="msg"></div>
              <div class="note">By subscribing, you agree to receive occasional emails from ${escapeHtml(
                BRAND.name
              )}. Unsubscribe anytime.</div>
            </form>
          </div>

          <div class="fineprint">
            <div>© ${year} ${escapeHtml(BRAND.name)}</div>
            <div><a href="mailto:hello@dyla.net">hello@dyla.net</a></div>
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
  const emailEl = document.getElementById("email");

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

      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email,
          // Basic client hints (optional)
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
    } catch (err){
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
  // Simple sanity check; you can harden later
  if (!email || email.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);
}

async function storeSubscriber(env, entry) {
  // Option 1: Cloudflare KV (recommended quick start)
  // Bind a KV namespace named SUBSCRIBERS_KV
  // Store key: email lowercase, value: JSON entry
  if (env.SUBSCRIBERS_KV) {
    const key = entry.email.toLowerCase();
    await env.SUBSCRIBERS_KV.put(key, JSON.stringify(entry));
    return { stored: true, method: "kv" };
  }

  // Option 2: forward to a webhook (Mailchimp/Brevo/ConvertKit/etc.)
  // Set env.SUBSCRIBE_WEBHOOK_URL and optionally SUBSCRIBE_WEBHOOK_TOKEN
  if (env.SUBSCRIBE_WEBHOOK_URL) {
    const headers = { "content-type": "application/json" };
    if (env.SUBSCRIBE_WEBHOOK_TOKEN) headers.Authorization = `Bearer ${env.SUBSCRIBE_WEBHOOK_TOKEN}`;
    const r = await fetch(env.SUBSCRIBE_WEBHOOK_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(entry),
    });
    if (!r.ok) throw new Error("Webhook failed");
    return { stored: true, method: "webhook" };
  }

  // No storage configured yet (still returns ok)
  return { stored: false, method: "none" };
}

export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);

    // Serve the landing page
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

    // Email subscribe endpoint
    if (url.pathname === "/api/subscribe" && req.method === "POST") {
      let body = {};
      try {
        body = await req.json();
      } catch {}

      const email = (body.email || "").toString().trim();
      const tz = (body.tz || "").toString().slice(0, 64);
      const ref = (body.ref || "").toString().slice(0, 300);

      // Honeypot: if bots fill "company" field (only in HTML form), reject.
      // We also support if someone POSTs it directly.
      const company = (body.company || "").toString().trim();
      if (company) return json({ ok: true }, 200); // silently accept

      if (!isValidEmail(email)) {
        return json({ ok: false, message: "Please enter a valid email address." }, 400);
      }

      // Basic rate limiting hint (optional):
      // You can add Cloudflare Rate Limiting rules on /api/subscribe.

      const entry = {
        email: email.toLowerCase(),
        createdAt: new Date().toISOString(),
        ip: req.headers.get("cf-connecting-ip") || "",
        ua: req.headers.get("user-agent") || "",
        tz,
        ref,
      };

      try {
        const result = await storeSubscriber(env, entry);
        return json({ ok: true, ...result }, 200);
      } catch (e) {
        return json({ ok: false, message: "Could not subscribe right now. Please try again." }, 500);
      }
    }

    return new Response("Not found", { status: 404 });
  },
};

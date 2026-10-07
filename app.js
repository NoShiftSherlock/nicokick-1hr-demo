/* Nicokick × Vesper Commerce — 1-hour delivery mockup interactions */

// ---------- Product catalog (homepage grid) ----------
const PRODUCTS = [
  { brand:"ZYN",    name:"ZYN Wintergreen",          img:"assets/zyn-wg.png",       str:"1.5 / 3 / 6 / 8 MG", price:"$3.99", status:"Best seller" },
  { brand:"ZYN",    name:"ZYN Spearmint",            img:"assets/zyn-sp.png",       str:"1.5 / 3 / 6 / 8 MG", price:"$3.99", status:"" },
  { brand:"ZYN",    name:"ZYN Peppermint",           img:"assets/zyn-pm.png",       str:"1.5 / 3 / 6 / 8 MG", price:"$3.99", status:"" },
  { brand:"ZYN",    name:"ZYN Cool Mint",            img:"assets/zyn-cm.png",       str:"1.5 / 3 / 6 / 8 MG", price:"$3.99", status:"" },
  { brand:"on!",    name:"on! Wintergreen",          img:"assets/on-wg.png",        str:"2 / 4 / 8 MG",       price:"$3.89", status:"Best seller" },
  { brand:"on!",    name:"on! Mint",                 img:"assets/on-mint.png",      str:"2 / 4 / 8 MG",       price:"$3.89", status:"" },
  { brand:"Rogue",  name:"Rogue Wintergreen",        img:"assets/rogue-wg.png",     str:"3 / 6 MG",           price:"$3.49", status:"" },
  { brand:"Rogue",  name:"Rogue Blue Raspberry",     img:"assets/rogue-br.png",     str:"3 / 6 MG",           price:"$3.49", status:"" },
  { brand:"zone",   name:"zone Wintergreen",         img:"assets/zone-wg.png",      str:"6 / 9 / 12 MG",      price:"$2.99", status:"Low price" },
  { brand:"zone",   name:"zone Spicy Strawberry",    img:"assets/zone-ss.png",      str:"6 / 9 MG",           price:"$2.99", status:"" },
  { brand:"Grizzly",name:"Grizzly Mint",             img:"assets/grizzly-mint.png", str:"9 / 12 MG",          price:"$4.30", status:"" },
  { brand:"FRE",    name:"FRE Mega Pack Wintergreen",img:"assets/fre-wg.png",       str:"9 / 12 / 15 MG",     price:"$28.95", status:"New", unit:"mega pack" },
];

function cardHTML(p) {
  const statusTag = p.status ? `<span class="tag status">${p.status}</span>` : "";
  return `
  <a class="card" href="product.html">
    <div class="thumb">
      <div class="badges">
        <span class="tag line gold"><span class="dot"></span> ${p.brand}</span>
        ${statusTag}
        <span class="tag onehr">⚡ 1-hr</span>
      </div>
      <img src="${p.img}" alt="${p.name}" loading="lazy" />
    </div>
    <div class="body">
      <div class="line-label">${p.brand}</div>
      <h3>${p.name}</h3>
      <div class="stats"><span>Strengths <b>${p.str}</b></span></div>
      <div class="rating">From</div>
      <div class="foot">
        <span class="price">${p.price}${p.unit ? "" : " / can"} <small style="font-weight:500;color:var(--gray)">+ tax</small></span>
        <button class="add" onclick="event.preventDefault();addToCart()">Add</button>
      </div>
    </div>
  </a>`;
}

// ---------- On-demand catalog (Nicokick Now page) ----------
const NOW_PRODUCTS = [
  { brand:"ZYN",   format:"Single can",  name:"ZYN Wintergreen",       img:"assets/zyn-wg.png",       size:"20 pouches · 6 MG",  badge:"6MG",  price:"$4.99" },
  { brand:"ZYN",   format:"5-can pack",  name:"ZYN Cool Mint",         img:"assets/zyn-cm.png",       size:"5 × 20 pouches · 6 MG", badge:"6MG", price:"$21.99" },
  { brand:"ZYN",   format:"Single can",  name:"ZYN Spearmint",         img:"assets/zyn-sp.png",       size:"20 pouches · 3 MG",  badge:"3MG",  price:"$4.99" },
  { brand:"on!",   format:"Single can",  name:"on! Wintergreen",       img:"assets/on-wg.png",        size:"20 pouches · 8 MG",  badge:"8MG",  price:"$4.49" },
  { brand:"on!",   format:"5-can pack",  name:"on! Mint",              img:"assets/on-mint.png",      size:"5 × 20 pouches · 4 MG", badge:"4MG", price:"$19.45" },
  { brand:"Rogue", format:"Single can",  name:"Rogue Wintergreen",     img:"assets/rogue-wg.png",     size:"20 pouches · 6 MG",  badge:"6MG",  price:"$3.99" },
  { brand:"Rogue", format:"Single can",  name:"Rogue Blue Raspberry",  img:"assets/rogue-br.png",     size:"20 pouches · 3 MG",  badge:"3MG",  price:"$3.99" },
  { brand:"zone",  format:"Single can",  name:"zone Wintergreen",      img:"assets/zone-wg.png",      size:"20 pouches · 6 MG",  badge:"6MG",  price:"$3.49" },
  { brand:"zone",  format:"5-can pack",  name:"zone Spicy Strawberry", img:"assets/zone-ss.png",      size:"5 × 20 pouches · 6 MG", badge:"6MG", price:"$14.95" },
  { brand:"Grizzly",format:"Single can", name:"Grizzly Mint",          img:"assets/grizzly-mint.png", size:"15 pouches · 9 MG",  badge:"9MG",  price:"$4.79" },
  { brand:"FRE",   format:"Single can",  name:"FRE Mega Pack Wintergreen", img:"assets/fre-wg.png",   size:"Mega pack · 6 MG",   badge:"6MG",  price:"$5.49" },
];

function nowCardHTML(p) {
  return `
  <div class="now-card">
    <div class="now-thumb">
      <button class="now-add" onclick="addToCart()" aria-label="Add ${p.name}">Add</button>
      <span class="now-protein">${p.badge}<small>nicotine</small></span>
      <img src="${p.img}" alt="${p.name}" loading="lazy" />
    </div>
    <div class="now-body">
      <div class="now-format"><span class="tag line gold"><span class="dot"></span> ${p.brand}</span> · ${p.format}</div>
      <h3>${p.name}</h3>
      <div class="now-foot"><span class="now-size">${p.size}</span><span class="now-price">${p.price}</span></div>
    </div>
  </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("prodGrid");
  if (grid) grid.innerHTML = PRODUCTS.map(cardHTML).join("");
  const nowGrid = document.getElementById("nowGrid");
  if (nowGrid) nowGrid.innerHTML = NOW_PRODUCTS.map(nowCardHTML).join("");
  // restore cart count
  const c = sessionStorage.getItem("cartCount");
  if (c) setCartCount(parseInt(c, 10));
});

// Nicokick Now address check -> reveal grid
function nowCheck() {
  const el = document.getElementById("nowAddrState");
  const grid = document.getElementById("nowGridWrap");
  if (el) el.classList.add("show");
  if (grid) grid.classList.add("show");
}

// ---------- Cart ----------
function setCartCount(n) {
  document.querySelectorAll(".cart-count").forEach(el => el.textContent = n);
  sessionStorage.setItem("cartCount", n);
}
function addToCart() {
  const el = document.querySelector(".cart-count");
  const n = (el ? parseInt(el.textContent, 10) : 0) + 1;
  setCartCount(n);
  toast("Added to cart · eligible for 1-hour delivery (21+ ID at door)");
}

// ---------- Homepage address availability ----------
function checkAvailability() {
  const box = document.getElementById("availResult");
  if (box) box.classList.add("show");
}

// ---------- PDP: purchase modes ----------
function setMode(mode) {
  document.querySelectorAll(".buy-mode").forEach(b => b.classList.toggle("active", b.dataset.mode === mode));
  const isOneHr = mode === "onehr";
  const mod = document.getElementById("onehrModule");
  const stdBenefits = document.getElementById("stdBenefits");
  const stdBuyRow = document.getElementById("stdBuyRow");
  if (mod) mod.style.display = isOneHr ? "block" : "none";
  if (stdBenefits) stdBenefits.style.display = isOneHr ? "none" : "grid";
  if (stdBuyRow) stdBuyRow.style.display = isOneHr ? "none" : "flex";
  const addBtn = document.getElementById("addBtn");
  if (addBtn && !isOneHr) {
    addBtn.textContent = mode === "subscribe" ? "Subscribe — $17.50" : "Add to cart — $19.45";
  }
}
function pdpCheck() {
  const a = document.getElementById("pdpAvail");
  if (a) a.style.display = "block";
}
let q = 1;
function qty(d) {
  q = Math.max(1, q + d);
  const el = document.getElementById("qtyVal");
  if (el) el.textContent = q;
}

// ---------- Checkout v2: shipping + plan + totals ----------
const CO = { subtotal: 58.35, tax: 4.81, ship: 7.0, shipLabel: "1-Hour delivery" };

function selectShip(el) {
  document.querySelectorAll("#shipOpts .co-opt").forEach(o => o.classList.remove("selected"));
  el.classList.add("selected");
  CO.ship = parseFloat(el.dataset.cost);
  CO.shipLabel = el.dataset.label || "Shipping";
  // show/hide the 1-hour routing note
  const note = document.getElementById("routeNote");
  if (note) note.style.display = el.classList.contains("onehr") ? "flex" : "none";
  updateCheckoutTotals();
}
function updateCheckoutTotals() {
  const total = CO.subtotal + CO.ship + CO.tax;
  const set = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  set("sumShipLabel", CO.shipLabel);
  set("sumShip", CO.ship === 0 ? "FREE" : "$" + CO.ship.toFixed(2));
  set("sumTotal", "$" + total.toFixed(2));
  const inst = (total / 4).toFixed(2);
  set("instAmt", "$" + inst);
  const pb = document.getElementById("placeBtn");
  if (pb) pb.textContent = "Place order · $" + total.toFixed(2);
}
function selectPlan(el) {
  document.querySelectorAll("#planOpts .co-opt").forEach(o => o.classList.remove("selected"));
  el.classList.add("selected");
}
function placeOrder() {
  const oneHr = document.querySelector("#shipOpts .co-opt.selected.onehr");
  toast(oneHr ? "Order placed. Routing to the nearest licensed store, arriving in ~52 min. Bring your 21+ ID."
              : "Order placed. Thanks, your Nicokick order is confirmed.");
}
document.addEventListener("DOMContentLoaded", updateCheckoutTotals);

// ---------- Slide-out cart drawer + rewards meter ----------
const CART = { name: "on! Wintergreen 8MG", line: "on!", img: "assets/on-wg.png", unit: 19.45, qty: 3, sub: false };
const TIERS = [
  { key: "ship", label: "Free Shipping", at: 2, pos: 16 },
  { key: "gift", label: "Free Can",     at: 3, pos: 58 },
  { key: "cart", label: "Rewards Bonus",   at: 4, pos: 100 },
];

function injectCartDrawer() {
  if (document.getElementById("cartDrawer")) return;
  const wrap = document.createElement("div");
  wrap.innerHTML = `
    <div class="cart-overlay" id="cartOverlay" onclick="closeCart()"></div>
    <aside class="cart-drawer" id="cartDrawer" aria-label="Your cart">
      <div class="cart-head">
        <h2>Your cart <span id="cartQtyHead">(3)</span></h2>
        <button class="cart-close" onclick="closeCart()" aria-label="Close cart">✕</button>
      </div>
      <div class="meter">
        <div class="meter-tiers" id="meterTiers"></div>
        <div class="meter-track"><div class="meter-fill" id="meterFill"></div><div id="meterNodes"></div></div>
        <div class="meter-msg" id="meterMsg"></div>
      </div>
      <div class="cart-eligible"><span>⚡</span> <span>This item is eligible for <b>1-hour delivery</b> in New York (21+, ID checked at the door).</span></div>
      <div class="cart-body" id="cartBody"></div>
      <div class="cart-foot">
        <div class="cart-sub-toggle">
          <label><input type="checkbox" id="cartSub" onchange="toggleSub()" /> Subscribe to your cart &amp; save.</label>
          <span class="save">Save 10%</span>
        </div>
        <button class="cart-checkout" onclick="location.href='checkout.html'" id="cartCheckoutBtn">Checkout — $78</button>
        <div class="cart-fineprint">Taxes, discounts and shipping calculated at checkout.</div>
      </div>
    </aside>`;
  document.body.appendChild(wrap);
  renderCart();
}

function renderCart() {
  const q = CART.qty;
  // tiers
  const tiers = document.getElementById("meterTiers");
  if (tiers) tiers.innerHTML = TIERS.map(t => `<div class="meter-tier ${q >= t.at ? "done" : ""}">${t.label}</div>`).join("");
  // nodes
  const nodes = document.getElementById("meterNodes");
  if (nodes) nodes.innerHTML = TIERS.map(t => {
    const state = q >= t.at ? (q === t.at ? "current" : "done") : "";
    return `<div class="meter-node ${state}" style="left:${t.pos}%"><span class="lbl">${t.at} Pack${t.at>1?"s":""}</span></div>`;
  }).join("");
  // fill
  const fill = document.getElementById("meterFill");
  if (fill) {
    let pct = 6;
    if (q >= 4) pct = 100; else if (q === 3) pct = 58; else if (q === 2) pct = 16; else pct = 6;
    fill.style.width = pct + "%";
  }
  // message
  const msg = document.getElementById("meterMsg");
  if (msg) {
    if (q >= 4) msg.innerHTML = `🎉 You've unlocked a <b>rewards bonus</b>!`;
    else if (q === 3) msg.innerHTML = `Add <b>1 more pack</b> to unlock a rewards bonus.`;
    else if (q === 2) msg.innerHTML = `<span class="bolt">✓</span> Free shipping unlocked, add 1 more for a <b>free can</b>.`;
    else msg.innerHTML = `Add <b>1 more pack</b> for free shipping.`;
  }
  // line item
  const body = document.getElementById("cartBody");
  if (body) body.innerHTML = `
    <div class="cart-line">
      <div class="im"><img src="${CART.img}" alt="" /></div>
      <div class="info">
        <div class="ln"><span class="dot"></span> ${CART.line}</div>
        <h3>${CART.name}</h3>
        <div class="pr">$${CART.unit.toFixed(2)}&nbsp; | &nbsp;5-can pack</div>
        <div class="sub-row"><span>Subscription:<br/>${CART.sub ? "Subscribe & Save 10%" : "One-Time Purchase"}</span><a href="#" onclick="event.preventDefault();toggleSubLink()">Edit</a></div>
        <div class="qty-row2">
          <div class="cart-stepper"><button onclick="cartQty(-1)">−</button><span id="cartLineQty">${CART.qty}</span><button onclick="cartQty(1)">+</button></div>
          <button class="rm" onclick="cartRemove()">Remove</button>
        </div>
      </div>
    </div>`;
  // header + checkout total
  const factor = CART.sub ? 0.9 : 1;
  const total = CART.qty * CART.unit * factor;
  const head = document.getElementById("cartQtyHead");
  if (head) head.textContent = `(${CART.qty})`;
  const btn = document.getElementById("cartCheckoutBtn");
  if (btn) btn.textContent = `Checkout — $${total.toFixed(total % 1 ? 2 : 0)}`;
  setCartCount(CART.qty);
}
function openCart() { injectCartDrawer(); requestAnimationFrame(() => { document.getElementById("cartOverlay").classList.add("open"); document.getElementById("cartDrawer").classList.add("open"); }); }
function closeCart() { const o=document.getElementById("cartOverlay"), d=document.getElementById("cartDrawer"); if(o)o.classList.remove("open"); if(d)d.classList.remove("open"); }
function cartQty(d) { CART.qty = Math.max(1, CART.qty + d); renderCart(); }
function cartRemove() { CART.qty = 1; renderCart(); }
function toggleSub() { CART.sub = document.getElementById("cartSub").checked; renderCart(); }
function toggleSubLink() { CART.sub = !CART.sub; const c=document.getElementById("cartSub"); if(c)c.checked=CART.sub; renderCart(); }

// ---------- Mobile hamburger menu ----------
function injectMobileMenu() {
  if (document.getElementById("mobileMenu")) return;
  const active = location.pathname.endsWith("nicokick-now.html") ? "nicokick-now" : "";
  const wrap = document.createElement("div");
  wrap.innerHTML = `
    <div class="menu-overlay" id="menuOverlay" onclick="closeMenu()"></div>
    <nav class="mobile-menu" id="mobileMenu" aria-label="Menu">
      <div class="mm-head">
        <img src="assets/logo.png" alt="Nicokick" />
        <button class="mm-close" onclick="closeMenu()" aria-label="Close menu">✕</button>
      </div>
      <div class="mm-links">
        <a href="index.html#shop">Nicotine Pouches</a>
        <a href="index.html#shop">Bestsellers</a>
        <a href="index.html#shop">New Arrivals</a>
        <a href="index.html#shop">Discounted Products</a>
        <a href="#">Nicokick Rewards</a>
        <a href="nicokick-now.html" class="${active === "nicokick-now" ? "active" : ""}">Nicokick Now</a>
      </div>
      <div class="mm-cta"><a href="nicokick-now.html" class="btn btn-white btn-block">⚡ Check your address</a></div>
      <div class="mm-sub">
        <a href="#">Refer a Friend</a>
        <a href="#">Help Center</a>
        <a href="checkout.html" onclick="event.preventDefault();closeMenu();openCart()">Cart</a>
      </div>
    </nav>`;
  document.body.appendChild(wrap);
}
function openMenu() { injectMobileMenu(); requestAnimationFrame(() => { document.getElementById("menuOverlay").classList.add("open"); document.getElementById("mobileMenu").classList.add("open"); }); }
function closeMenu() { const o = document.getElementById("menuOverlay"), m = document.getElementById("mobileMenu"); if (o) o.classList.remove("open"); if (m) m.classList.remove("open"); }

// ---------- tiny toast ----------
function toast(msg) {
  let t = document.getElementById("__toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "__toast";
    t.style.cssText = "position:fixed;left:50%;bottom:70px;transform:translateX(-50%);background:#222222;color:#fff;padding:13px 22px;font-family:Manrope,Arial,sans-serif;font-weight:600;font-size:13px;z-index:200;box-shadow:0 10px 30px rgba(0,0,0,.35);transition:opacity .25s ease;";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = "1";
  clearTimeout(t._h);
  t._h = setTimeout(() => { t.style.opacity = "0"; }, 2600);
}

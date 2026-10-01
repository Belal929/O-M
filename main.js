
(function () {
  const container = document.querySelector(".sparkle-container");
  if (!container) return;
  const positions = [
    { top: "-10%", left: "5%" },
    { top: "-8%", right: "5%" },
    { top: "20%", left: "-8%" },
    { top: "20%", right: "-8%" },
    { top: "50%", left: "-12%" },
    { top: "50%", right: "-12%" },
    { top: "80%", left: "-6%" },
    { top: "80%", right: "-6%" },
    { top: "105%", left: "15%" },
    { top: "105%", right: "15%" },
    { top: "-5%", left: "50%" },
    { top: "110%", left: "50%" },
  ];
  positions.forEach((pos, i) => {
    const s = document.createElement("div");
    s.className = "sparkle";
    const dur = 1.5 + Math.random() * 2;
    const delay = Math.random() * 3;
    s.style.cssText = `
top:${pos.top || "auto"};left:${pos.left || "auto"};right:${pos.right || "auto"};
--dur:${dur}s;--delay:${delay}s;
width:${3 + Math.random() * 5}px;height:${3 + Math.random() * 5}px;
`;
    container.appendChild(s);
  });
})();

/* ══ ROSES & HEARTS BACKGROUND ══ */
(function () {
  const container = document.getElementById("romantic-bg");
  const roseSVG = (color, size) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64"><g fill="${color}"><ellipse cx="32" cy="20" rx="9" ry="14" opacity="0.9"/><ellipse cx="32" cy="20" rx="9" ry="14" transform="rotate(60 32 32)" opacity="0.85"/><ellipse cx="32" cy="20" rx="9" ry="14" transform="rotate(120 32 32)" opacity="0.85"/><ellipse cx="32" cy="20" rx="9" ry="14" transform="rotate(180 32 32)" opacity="0.8"/><ellipse cx="32" cy="20" rx="9" ry="14" transform="rotate(240 32 32)" opacity="0.8"/><ellipse cx="32" cy="20" rx="9" ry="14" transform="rotate(300 32 32)" opacity="0.85"/><circle cx="32" cy="32" r="7" opacity="0.95"/><circle cx="32" cy="32" r="4" fill="${color === "#c9a84c" ? "#f5e199" : "#ffb3c6"}" opacity="0.8"/></g><line x1="32" y1="54" x2="32" y2="64" stroke="#7a9e6a" stroke-width="2" opacity="0.6"/><ellipse cx="26" cy="58" rx="6" ry="3" fill="#7a9e6a" transform="rotate(-30 26 58)" opacity="0.5"/></svg>`;
  const heartSVG = (color, size) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 32 30"><path d="M16 27 C16 27 2 18 2 9 C2 4.5 5.5 1 10 1 C12.5 1 14.8 2.2 16 4.1 C17.2 2.2 19.5 1 22 1 C26.5 1 30 4.5 30 9 C30 18 16 27 16 27Z" fill="${color}" opacity="0.9"/></svg>`;
  const roseColors = [
    "#d4587a",
    "#e8a0b4",
    "#c94060",
    "#f0c0d0",
    "#c9a84c",
    "#e8c97a",
  ];
  const heartColors = [
    "#d4587a",
    "#e8a0b4",
    "#c9a84c",
    "#f4b8c8",
    "#e07090",
  ];
  for (let i = 0; i < 14; i++) {
    const color =
      roseColors[Math.floor(Math.random() * roseColors.length)];
    const size = 28 + Math.random() * 36;
    const el = document.createElement("div");
    el.className = "float-elem";
    el.innerHTML = roseSVG(color, size);
    el.style.cssText = `left:${Math.random() * 100}%;--dur:${13 + Math.random() * 10}s;--delay:${Math.random() * 15}s;--drift:${(Math.random() - 0.5) * 120}px;--rot-start:${Math.random() * 360}deg;--rot-end:${Math.random() * 360 + Math.random() * 60}deg;--sc:${0.5 + Math.random() * 0.6};--max-op:${0.12 + Math.random() * 0.14}`;
    container.appendChild(el);
  }
  for (let i = 0; i < 12; i++) {
    const color =
      heartColors[Math.floor(Math.random() * heartColors.length)];
    const size = 16 + Math.random() * 24;
    const el = document.createElement("div");
    el.className = "float-elem";
    el.innerHTML = heartSVG(color, size);
    el.style.cssText = `left:${Math.random() * 100}%;--dur:${10 + Math.random() * 12}s;--delay:${Math.random() * 18}s;--drift:${(Math.random() - 0.5) * 80}px;--rot-start:${(Math.random() - 0.5) * 20}deg;--rot-end:${(Math.random() - 0.5) * 20}deg;--sc:${0.6 + Math.random() * 0.7};--max-op:${0.1 + Math.random() * 0.15}`;
    container.appendChild(el);
  }
})();

/* ══ PARTICLES ══ */
(function () {
  const c = document.getElementById("particles");
  for (let i = 0; i < 30; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.cssText = `left:${Math.random() * 100}%;--dur:${6 + Math.random() * 10}s;--delay:${Math.random() * 8}s;--drift:${(Math.random() - 0.5) * 80}px;width:${1 + Math.random() * 3}px;height:${1 + Math.random() * 3}px;opacity:0`;
    c.appendChild(p);
  }
})();

/* ══ FLOATING HEARTS ══ */
(function () {
  const layers = [
    { el: document.getElementById("hearts-back"), count: [9, 16] },
    { el: document.getElementById("hearts-fg"), count: [4, 8] },
  ].filter((l) => l.el);
  if (!layers.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  const palette = [
    "#d4587a",
    "#e07090",
    "#e8a0b4",
    "#f0b6c8",
    "#c9a84c",
    "#e8c97a",
  ];
  const rnd = (a, b) => a + Math.random() * (b - a);

  layers.forEach((layer) => {
    const total = isDesktop ? layer.count[1] : layer.count[0];
    const frag = document.createDocumentFragment();
    for (let i = 0; i < total; i++) {
      const h = document.createElement("i");
      h.className = "fx-heart";
      h.style.cssText = [
        `left:${rnd(-2, 98).toFixed(2)}%`,
        `--dur:${rnd(15, 27).toFixed(1)}s`,
        `--delay:${rnd(0, 20).toFixed(1)}s`,
        `--dx:${rnd(-7, 7).toFixed(2)}vw`,
        `--sw:${rnd(-2.2, 2.2).toFixed(2)}vw`,
        `--sc:${rnd(0.5, 1.25).toFixed(2)}`,
        `--rot:${rnd(-22, 22).toFixed(1)}deg`,
        `--op:${rnd(0.14, 0.34).toFixed(2)}`,
        `background:${palette[(Math.random() * palette.length) | 0]}`,
      ].join(";");
      frag.appendChild(h);
    }
    layer.el.appendChild(frag);
  });
})();

/* ══ TAP HEARTS ══ */
(function () {
  const layer = document.getElementById("tap-hearts");
  if (!layer) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const MAX_ALIVE = 24; /* hard cap: hearts can never pile up */
  const MIN_GAP = 80; /* ms between bursts, stops click-spam */
  const COLORS = ["#d4587a", "#e07090", "#e8a0b4", "#f0b6c8", "#c9a84c", "#e8c97a"];
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  const COUNT = isDesktop ? 7 : 5;
  const SIZE = isDesktop ? 15 : 11;
  const rnd = (a, b) => a + Math.random() * (b - a);
  let last = 0;

  function burst(x, y) {
    const now = performance.now();
    if (now - last < MIN_GAP) return;
    last = now;

    const frag = document.createDocumentFragment();
    for (let i = 0; i < COUNT; i++) {
      /* spread each heart around the pointer on a slightly flattened circle */
      const ang = (i / COUNT) * Math.PI * 2 + rnd(-0.45, 0.45);
      const rad = rnd(0, 26);
      const h = document.createElement("i");
      h.className = "tap-heart";
      h.style.cssText = [
        `left:${(x + Math.cos(ang) * rad).toFixed(1)}px`,
        `top:${(y + Math.sin(ang) * rad * 0.75).toFixed(1)}px`,
        `--w:${(SIZE * rnd(0.6, 1.45)).toFixed(1)}px`,
        `--tx:${(Math.cos(ang) * rnd(12, 48)).toFixed(1)}px`,
        `--ty:${(-rnd(58, 132)).toFixed(1)}px`,
        `--rot:${rnd(-38, 38).toFixed(1)}deg`,
        `--op:${rnd(0.55, 0.92).toFixed(2)}`,
        `--dur:${Math.round(rnd(950, 1550))}ms`,
        `--delay:${Math.round(rnd(0, 130))}ms`,
        `background:${COLORS[(Math.random() * COLORS.length) | 0]}`,
      ].join(";");
      h.addEventListener("animationend", () => h.remove());
      frag.appendChild(h);
    }
    layer.appendChild(frag);

    let extra = layer.childElementCount - MAX_ALIVE;
    while (extra-- > 0 && layer.firstElementChild) layer.firstElementChild.remove();
  }

  /* `click` unifies mouse + touch and is not emitted for scroll drags, so
     bursts stay out of the way of tapping, links, buttons and scrolling. */
  document.addEventListener(
    "click",
    (e) => {
      if (e.button && e.button !== 0) return;
      const gate = document.getElementById("envelope-screen");
      if (gate && !gate.classList.contains("hidden")) return; /* unlock screen */
      const t = e.target;
      if (t && t.closest && t.closest("#rsvp-modal, input, textarea")) return;
      burst(e.clientX, e.clientY);
    },
    { passive: true },
  );
})();

/* ══ OPENING HEARTS ══ */
/* One elegant wave of hearts drifting up from the bottom the first time the
   invitation is revealed. Lives in its own layer so it can never interfere
   with the ambient or tap-heart layers, and self-cleans when it finishes. */
(function () {
  const layer = document.getElementById("open-hearts");
  if (!layer) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const COLORS = ["#d4587a", "#e07090", "#e8a0b4", "#f0b6c8", "#c9a84c", "#e8c97a"];
  const rnd = (a, b) => a + Math.random() * (b - a);
  let done = false;

  function celebrate() {
    if (done) return;
    done = true;

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const narrow = vw < 768;
    const COUNT = narrow ? 14 : 26;
    const SIZE = narrow ? 11 : 16;
    const WAVE = narrow ? 2600 : 3400;

    const frag = document.createDocumentFragment();
    for (let i = 0; i < COUNT; i++) {
      /* spread origins across the width so the rise reads as a wide wave */
      const t = i / Math.max(1, COUNT - 1);
      const startX = rnd(-4, 100) * (vw / 100);
      const h = document.createElement("i");
      h.className = "open-heart";
      h.style.cssText = [
        `left:${Math.min(Math.max(startX, -12), vw - 6).toFixed(1)}px`,
        `--w:${(SIZE * rnd(0.55, 1.5)).toFixed(1)}px`,
        `--sx:${rnd(-26, 26).toFixed(1)}px`,
        `--ty:-${(vh * rnd(0.78, 1.05) + 40).toFixed(1)}px`,
        `--rot:${rnd(-30, 30).toFixed(1)}deg`,
        `--op:${rnd(0.45, 0.88).toFixed(2)}`,
        `--dur:${Math.round(rnd(WAVE * 0.82, WAVE * 1.18))}ms`,
        /* gentle left-to-right stagger, tighter on phones so it stays short */
        `--delay:${Math.round(t * (narrow ? 260 : 520) + rnd(0, 110))}ms`,
        `background:${COLORS[(Math.random() * COLORS.length) | 0]}`,
      ].join(";");
      h.addEventListener("animationend", () => h.remove());
      frag.appendChild(h);
    }
    layer.appendChild(frag);

    /* nothing should ever be left behind, whatever the animation does */
    setTimeout(() => {
      layer.innerHTML = "";
    }, WAVE * 1.2 + 1200);
  }

  /* fire as the invitation becomes visible, so the hearts land on the reveal */
  const inv = document.getElementById("invitation");
  if (inv && inv.classList.contains("visible")) {
    celebrate();
  } else if (inv) {
    const obs = new MutationObserver(() => {
      if (inv.classList.contains("visible")) {
        obs.disconnect();
        celebrate();
      }
    });
    obs.observe(inv, { attributes: true, attributeFilter: ["class"] });
  }

  window.addEventListener("pagehide", () => {
    layer.innerHTML = "";
  });
})();

/* ══ ENVELOPE & AUDIO ══ */
const bgAudio = document.getElementById("bg-audio");
let envelopeOpened = false,
  audioPrimed = false;

/* Warm the <audio> element inside the unlock click so later play() calls are
   allowed by browser autoplay policies. Stays silent while priming. */
function primeAudio() {
  if (!bgAudio || audioPrimed) return;
  const wasMuted = bgAudio.muted;
  bgAudio.muted = true;
  const restore = () => {
    bgAudio.pause();
    try {
      bgAudio.currentTime = 0;
    } catch (e) {}
    bgAudio.muted = wasMuted;
    audioPrimed = true;
  };
  const p = bgAudio.play();
  if (p && typeof p.then === "function") {
    p.then(restore).catch(() => {
      bgAudio.muted = wasMuted;
    });
  } else {
    restore();
  }
}

function syncAudioUI() {
  const playing = !!bgAudio && !bgAudio.paused && !bgAudio.ended;
  updateAudioButtonUI(playing);
}

if (bgAudio) {
  ["play", "pause", "ended", "error"].forEach((ev) =>
    bgAudio.addEventListener(ev, syncAudioUI),
  );
}

function openEnvelope() {
  if (envelopeOpened) return;
  envelopeOpened = true;
  primeAudio();
  document.getElementById("tap-prompt").classList.add("hidden");
  document.getElementById("env-scene").classList.add("opened");
  setTimeout(() => {
    document.getElementById("envelope-screen").classList.add("hidden");
    const inv = document.getElementById("invitation");
    inv.style.pointerEvents = "auto";
    inv.classList.add("visible");
    /* Music starts only once the unlock screen is fully skipped */
    if (bgAudio) {
      const p = bgAudio.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    }
    setTimeout(initReveal, 400);
  }, 2400);
}

function toggleAudio() {
  if (!bgAudio) return;
  if (bgAudio.paused) {
    const p = bgAudio.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  } else {
    bgAudio.pause();
  }
  syncAudioUI();
}

function updateAudioButtonUI(isPlaying) {
  const icon = document.getElementById("audio-icon");
  const label = document.getElementById("audio-label");
  if (label)
    label.textContent = isPlaying ? "🔊" : "🔇";
}

/* ══ SCROLL REVEAL ══ */
function initReveal() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("revealed");
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );
  document
    .querySelectorAll(
      ".card,.reveal,.notice-section,.footer,.reveal-left,.reveal-right,.reveal-scale",
    )
    .forEach((el) => obs.observe(el));
}

/* ══ PARALLAX HERO ══ */
window.addEventListener(
  "scroll",
  () => {
    const hero = document.querySelector(".hero");
    if (!hero) return;
    const scroll = window.scrollY;
    if (scroll < window.innerHeight) {
      hero.style.transform = `translateY(${scroll * 0.25}px)`;
      hero.style.opacity = 1 - scroll / 700;
    }
  },
  { passive: true },
);

/* ══ COUNTDOWN ══ */
function updateCountdown() {
  const target = new Date("2026-10-23T21:00:00");
  let diff = target - new Date();
  if (diff < 0) {
    document.getElementById("countdown").innerHTML =
      '<div style="font-family:Amiri,serif;font-size:24px;color:var(--gold-dark);text-align:center;padding:20px;direction:rtl;">🎊 مبروك اليوم المبارك! 🎊</div>';
    return;
  }
  const d = Math.floor(diff / 864e5),
    h = Math.floor((diff % 864e5) / 36e5),
    m = Math.floor((diff % 36e5) / 6e4),
    s = Math.floor((diff % 6e4) / 1e3);
  function set(id, val) {
    const el = document.getElementById(id);
    const str = String(val).padStart(2, "0");
    if (el && el.textContent !== str) {
      el.textContent = str;
      el.classList.remove("flash");
      void el.offsetWidth;
      el.classList.add("flash");
      setTimeout(() => el.classList.remove("flash"), 300);
    }
  }
  set("cd-days", d);
  set("cd-hours", h);
  set("cd-mins", m);
  set("cd-secs", s);
}
updateCountdown();
setInterval(updateCountdown, 1000);

/* ══ RSVP MODAL ══ */
function openModal() {
  document.getElementById("rsvp-modal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("rsvp-modal").classList.remove("active");
  document.body.style.overflow = "";
}

function closeModalOutside(e) {
  if (e.target === document.getElementById("rsvp-modal")) closeModal();
}

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

async function submitRSVP(e) {
  e.preventDefault();
  const form = e.target;
  const btn = document.getElementById("submit-btn");
  btn.textContent = "Sending... · جاري الإرسال";
  btn.disabled = true;

  try {
    const response = await fetch("https://formspree.io/f/xbdqwzpa", {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });
    if (response.ok) {
      form.style.display = "none";
      document.getElementById("form-success").style.display = "block";
    } else {
      throw new Error("Submission failed");
    }
  } catch (err) {
    btn.textContent = "Error · خطأ — Try Again";
    btn.disabled = false;
    setTimeout(() => {
      btn.textContent = "Send · إرسال";
    }, 2500);
  }
}
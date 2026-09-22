// Animates any element carrying data-count when it first scrolls into view.
// The element's own text is the source of truth: digits count up, everything
// else (₩, commas, "from", "/ 5", "min") is preserved exactly as authored.
(function () {
  if (window.__tonesCountUp) return;
  window.__tonesCountUp = true;

  var EASE = function (t) { return 1 - Math.pow(1 - t, 3); };

  function parse(el) {
    var text = el.getAttribute('data-count-text') || el.textContent;
    el.setAttribute('data-count-text', text);
    var parts = [];
    var re = /\d[\d,]*(?:\.\d+)?/g;
    var m, last = 0;
    while ((m = re.exec(text))) {
      if (m.index > last) parts.push({ lit: text.slice(last, m.index) });
      var raw = m[0];
      parts.push({
        to: parseFloat(raw.replace(/,/g, '')),
        grouped: raw.indexOf(',') > -1,
        decimals: (raw.split('.')[1] || '').length
      });
      last = m.index + raw.length;
    }
    if (last < text.length) parts.push({ lit: text.slice(last) });
    return parts;
  }

  function format(p, v) {
    var s = v.toFixed(p.decimals);
    if (!p.grouped) return s;
    var bits = s.split('.');
    bits[0] = bits[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return bits.join('.');
  }

  function run(el) {
    var parts = parse(el);
    if (!parts.some(function (p) { return p.to !== undefined; })) return;
    var dur = parseInt(el.getAttribute('data-count-duration') || '1100', 10);
    var start = null;
    function frame(ts) {
      if (start === null) start = ts;
      var t = Math.min(1, (ts - start) / dur);
      var e = EASE(t);
      el.textContent = parts.map(function (p) {
        return p.lit !== undefined ? p.lit : format(p, p.to * e);
      }).join('');
      if (t < 1) requestAnimationFrame(frame);
    }
    // hold at zero so the jump from blank to final never flashes
    el.textContent = parts.map(function (p) {
      return p.lit !== undefined ? p.lit : format(p, 0);
    }).join('');
    requestAnimationFrame(frame);
  }

  function observe() {
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var nodes = document.querySelectorAll('[data-count]:not([data-count-done])');
    if (!nodes.length) return;
    if (reduce || !('IntersectionObserver' in window)) {
      nodes.forEach(function (n) { n.setAttribute('data-count-done', ''); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        io.unobserve(el);
        el.setAttribute('data-count-done', '');
        run(el);
      });
    }, { threshold: 0.4, rootMargin: '0px 0px -8% 0px' });
    nodes.forEach(function (n) { io.observe(n); });
  }

  // the DC runtime paints after this script loads, so watch for late arrivals too
  function boot() {
    observe();
    if ('MutationObserver' in window) {
      var mo = new MutationObserver(function () { observe(); });
      mo.observe(document.body, { childList: true, subtree: true });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();

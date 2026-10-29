(function () {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.documentElement.classList.add('radar-fx');
  document.body.classList.add('radar-enter');

  var overlay = document.createElement('div');
  overlay.id = 'radar-fx-overlay';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML =
    '<div class="grid"></div>' +
    '<div class="scan"></div>' +
    '<div class="ring"></div>' +
    '<div class="beam"></div>' +
    '<div class="label">RADAR <b>SEMCITECI</b> · SINCRONIZANDO</div>';
  document.body.appendChild(overlay);

  function isInternalTab(a) {
    var href = a.getAttribute('href') || '';
    if (!href || href.charAt(0) === '#' || /^(mailto:|tel:|javascript:)/i.test(href)) return false;
    if (a.target && a.target.toLowerCase() === '_blank') return false;
    if (/^(https?:)?\/\//i.test(href) && href.indexOf(location.host) === -1) return false;
    // relative html in this site, or absolute github pages radar path
    if (/\.html($|\?|#)/i.test(href)) return true;
    if (/semciteci-campoverde\.github\.io\/radar/i.test(href)) return true;
    return false;
  }

  function go(href) {
    overlay.classList.add('on');
    setTimeout(function () { location.href = href; }, 780);
  }

  document.addEventListener('click', function (ev) {
    var a = ev.target.closest && ev.target.closest('a[href]');
    if (!a) return;
    if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey || ev.button !== 0) return;
    if (!isInternalTab(a)) return;
    var next = a.href.split('#')[0];
    var cur = location.href.split('#')[0];
    if (next === cur) return;
    ev.preventDefault();
    go(a.href);
  }, true);
})();

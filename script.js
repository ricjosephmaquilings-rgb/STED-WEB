(function () {
  // mobile menu
  var nav = document.getElementById('mainNav');
  var menuBtn = document.getElementById('menuBtn');
  if (nav && menuBtn) {
    menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
  }

  // program filter (academics.html)
  var fbtns = document.querySelectorAll('.filters button');
  fbtns.forEach(function (b) {
    b.addEventListener('click', function () {
      var f = b.dataset.filter;
      fbtns.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      document.querySelectorAll('.prog').forEach(function (c) { c.hidden = !(f === 'all' || c.dataset.level === f); });
    });
  });

  // news lightbox (news-events.html)
  var lb = document.getElementById('lb');
  var lbImg = document.getElementById('lbImg');
  if (lb) {
    document.querySelectorAll('[data-zoom]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var img = btn.querySelector('img');
        lbImg.src = img.src; lbImg.alt = img.alt;
        if (lb.showModal) lb.showModal();
      });
    });
    document.getElementById('lbClose').addEventListener('click', function () { lb.close(); });
    lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });
  }
})();

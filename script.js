(function () {
  var btn = document.getElementById('readable-toggle');
  function apply(on) {
    document.body.classList.toggle('readable', on);
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  }
  try { apply(localStorage.getItem('readable') === '1'); } catch (e) {}
  btn.addEventListener('click', function () {
    var on = btn.getAttribute('aria-pressed') !== 'true';
    apply(on);
    try { localStorage.setItem('readable', on ? '1' : '0'); } catch (e) {}
  });
})();

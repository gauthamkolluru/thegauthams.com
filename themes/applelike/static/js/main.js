(function() {
  document.querySelectorAll('a[href^="http"]').forEach(function(a) {
    if (a.getAttribute('href').indexOf(window.location.hostname) === -1) {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener');
    }
  });
})();

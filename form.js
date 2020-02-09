document.body.addEventListener('keyup', function(e) {
  if (e.which === 9) {
    document.documentElement.classList.remove('no-focus-outline');
  }
});
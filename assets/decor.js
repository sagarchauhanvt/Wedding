// Gently falling marigold & rose petals — decorative only, skipped for reduced-motion.
(function(){
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const colors = ['#C9993F', '#E8B93C', '#B87478', '#DDB0AC', '#1E4A38'];
  const field = document.createElement('div');
  field.className = 'petal-field';
  field.setAttribute('aria-hidden', 'true');
  document.body.appendChild(field);

  const count = window.innerWidth < 620 ? 9 : 16;
  for (let i = 0; i < count; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    const size = 9 + Math.random() * 9;
    const left = Math.random() * 100;
    const duration = 10 + Math.random() * 9;
    const delay = -Math.random() * duration;
    const drift = Math.round(Math.random() * 140 - 70) + 'px';
    const spin = Math.round(220 + Math.random() * 260) + 'deg';
    const color = colors[i % colors.length];

    petal.style.left = left + 'vw';
    petal.style.width = size + 'px';
    petal.style.setProperty('--drift', drift);
    petal.style.setProperty('--spin', spin);
    petal.style.animationDuration = duration + 's';
    petal.style.animationDelay = delay + 's';
    petal.innerHTML = '<svg width="' + size + '" height="' + size + '" viewBox="0 0 20 20">' +
      '<path d="M10 0C14 4 20 6 20 10c0 5-6 8-10 10C6 18 0 15 0 10 0 6 6 4 10 0z" fill="' + color + '" opacity=".82"/>' +
      '</svg>';
    field.appendChild(petal);
  }
})();

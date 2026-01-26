/* ===================================== */
/*             LENIS SCROLL              */
/* ===================================== */
const lenis = new Lenis({
  wrapper: window,
  content: document.documentElement,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
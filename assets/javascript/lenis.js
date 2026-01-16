/* ===================================== */
/*             LENIS SCROLL              */
/* ===================================== */
let lenis;

function initLenis() {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    // Prevent Lenis from affecting elements with data-lenis-prevent attribute
    prevent: (node) =>
      node.classList.contains("offcanvas") || node.closest(".offcanvas"),
  });

  function raf(time) {
    if (lenis) {
      lenis.raf(time);
    }
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

initLenis();
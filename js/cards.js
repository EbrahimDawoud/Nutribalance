document.addEventListener("DOMContentLoaded", function () {
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const cards = document.querySelectorAll(".stats-cards");
  if (!cards.length) return;

  const reveal = (el) => {
    if (prefersReduced) {
      el.classList.add("in-view");
      return;
    }
    el.classList.add("in-view");
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.35 },
  );

  cards.forEach((c) => observer.observe(c));
});

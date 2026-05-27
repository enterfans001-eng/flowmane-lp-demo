const header = document.querySelector("[data-elevate]");
const revealTargets = document.querySelectorAll(".reveal");

function updateHeader() {
  header?.classList.toggle("scrolled", window.scrollY > 12);
}

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    }
  },
  { threshold: 0.18 }
);

revealTargets.forEach((target, index) => {
  target.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
  observer.observe(target);
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

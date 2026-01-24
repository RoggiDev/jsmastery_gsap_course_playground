// ! Power Easing

// power1 (gentle)
// power2 (medium)
// power3 (strong)
// power4 (aggressive)

// ease: "power2.in"; // starts slow, ends fast
// ease: "power2.out"; // starts fast, ends slow
// ease: "power2.inOut"; // slow → fast → slow

import gsap from "gsap";

const btnPrimary = document.querySelector(".btn-primary");

btnPrimary.addEventListener("mouseenter", () => {
  gsap.to(btnPrimary, {
    scale: 1.1,
    duration: 0.3,
  });
});

btnPrimary.addEventListener("mouseleave", () => {
  gsap.to(btnPrimary, {
    scale: 1,
    duration: 0.3,
  });
});

gsap.from(btnPrimary, {
  y: 120,
  duration: 1.2,
  ease: "power4.out",
  opacity: 0,
});

gsap.from(".toast", {
  x: -300,
  duration: 1.2,
  ease: "power2.out",
  opacity: 0,
  delay: 1,
});

gsap.from(".card", {
  scale: 0.5,
  opacity: 0,
  duration: 1,
  ease: "power3.inOut",
  delay: 2,
});

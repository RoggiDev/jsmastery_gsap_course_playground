import gsap from "gsap";

const repeat = document.querySelector(".repeat");

const animation = gsap.from(".card", {
  y: 60,
  opacity: 0,
  scale: 0.95,
  duration: 0.6,
  delay: 0.2,
  ease: "power4.out",
  stagger: 0.3,
});

repeat.addEventListener("click", () => {
  animation.restart();
});

/* gsap.from(".card-1", {
  y: 60,
  opacity: 0,
  scale: 0.95,
  duration: 0.6,
  delay: 0.2,
  ease: "power4.out",
});

gsap.from(".card-2", {
  y: 60,
  opacity: 0,
  scale: 0.95,
  duration: 0.6,
  delay: 0.5,
  ease: "power4.out",
});

gsap.from(".card-3", {
  y: 60,
  opacity: 0,
  scale: 0.95,
  duration: 0.6,
  delay: 0.8,
  ease: "power4.out",
}); */

// ! Cheat Sheet
// gsap.from(".selector", {
//   x: 100,
//   opacity: 0,
//   scale: 0.5,
//   rotation: 45,
//   duration: 1,
//   delay: 0.3,
//   ease: "back.out(1.7)",
//   stagger: 0.2,
//   repeat: 1,
//   yoyo: true,
//   onComplete: () => console.log("Animation finished!"),
// });

import gsap from "gsap";

gsap.to(".box", {
  y: -50,
  //   opacity: 1,
  rotation: 360,
  background: "#ff6f61",
  borderRadius: "50%",
  scale: 1.25,
  duration: 2,
  delay: 0.5,
  ease: "bounce",
  repeat: -1,
  yoyo: true,
  repeatDelay: 1,
  //   paused: true,
  stagger: 1,
  boxShadow: "0 4px 10px #ff6f61",
});

import gsap from "gsap";

const showToastLoop = () => {
  gsap.to(".toast", {
    y: -120,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "power4.out",
    onComplete: () => {
      gsap.to(".toast", {
        delay: 2.5,
        y: 0,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: "power1.in",
        onComplete: () => {
          setTimeout(showToastLoop, 2500);
        },
      });
    },
  });
};

showToastLoop();

// gsap.to(".selector", {
//   x: 100, // Move horizontally
//   backgroundColor: "red", // Change color (camelCase!)
//   duration: 1, // How long the animation takes (seconds)
//   delay: 0.5, // Start after 0.5 seconds
//   ease: "power2.inOut", // Control the speed curve
//   stagger: 0.1, // Animate multiple elements with a delay between them
//   paused: true, // Start paused (you can play later!)
//   overwrite: "auto", // Manage conflicting animations
//   repeat: 2, // Repeat the animation 2 times (-1 = infinite)
//   repeatDelay: 1, // Wait 1 second between repeats
//   repeatRefresh: true, // Refresh values on each repeat
//   yoyo: true, // Reverse the animation (A-B-B-A)
//   yoyoEase: true, // Different ease when reversing
//   immediateRender: false, // Control when the animation starts calculating
//   onComplete: () => {
//     console.log("finished!");
//   },
//   // Other callbacks: onStart, onUpdate, onRepeat, onReverseComplete
// });

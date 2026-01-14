// ! Back Easing

// ease: "back.in"      // pulls backward first, then moves forward
// ease: "back.out"     // moves past the destination, then comes back
// ease: "back.inOut"   // combines both: pulls back, overshoots, settles

// You can also customize how much it should overshoot:
// ease: "back.out(2.5)" // higher number = more dramatic bounce

import gsap from "gsap";

const tabs = document.querySelectorAll(".tab");
const indicator = document.querySelector(".indicator");
const tabRow = document.querySelector(".tab-row");

const updateIndicator = (target) => {
  const tabBounds = target.getBoundingClientRect();
  const rowBounds = tabRow.getBoundingClientRect();

  const width = tabBounds.width;
  const offset = tabBounds.left - rowBounds.left;

  gsap.to(indicator, {
    x: offset,
    width: width,
    duration: 0.4,
    ease: "back.out(1.7)",
  });
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));

    tab.classList.add("active");

    updateIndicator(tab);
  });
});

updateIndicator(document.querySelector(".tab.active"));

// Alternative method
// const tabIndicator = document.querySelector(".indicator");
// const tabs = document.querySelectorAll(".tab");
// const activeTab = document.querySelector(".active");

// tabs.forEach((tab) => {
// 	tab.addEventListener("click", () => {
// 		activeTab.classList.remove("active");
// 		tab.classList.add("active");
// 		gsap.to(tabIndicator, {
// 			x: tab.offsetLeft,
// 			width: tab.offsetWidth,
// 			duration: 0.5,
// 			ease: "back.out",
// 		});
// 	});
// });

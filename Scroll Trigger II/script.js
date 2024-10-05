const hero = document.querySelector(".hero");
const image = document.querySelector(".hero >.heroImg > img");
const about = document.querySelector(".about");
const aboutImage = document.querySelector(".about > .aboutImg > img");
const allAnchors = document.querySelectorAll("a");

hero.addEventListener("mousemove", (event) => {
  gsap.to(image, {
    x: 1- event.x * 0.05,
    y: 1 - event.y * 0.05,
    duration: 0.3,
    ease: "power3.out",
  });
});

about.addEventListener("mousemove", (event) => {
  gsap.to(aboutImage, {
    x: 1- event.x * 0.05,
    y: 1 - event.y * 0.05,
    duration: 0.3,
    ease: "power3.out",
  });
});

// allAnchors.forEach((anchor) => {
//   anchor.addEventListener("mousemove", (event) => {
//     gsap.to(anchor,{
//       scale: 1.1,
//       duration: 0.3,
//       ease: "power3.out",
//       scrub: true
//     })
//   })
// })
const hero = document.querySelector(".hero");
const image = document.querySelector(".hero >.heroImg > img");

hero.addEventListener("mousemove", (event) => {
  gsap.to(image, {
    x: 1- event.x * 0.05,
    y: 1 - event.y * 0.05,
    duration: 0.3,
    ease: "power3.out",
  });
});
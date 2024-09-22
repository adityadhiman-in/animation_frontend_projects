document.querySelectorAll(".card").forEach(card =>{
    gsap.to(card,{
        scale: .7,
        opacity: 0,
        scrollTrigger: {
            trigger: card,
            start: "top 10%",
            end : "bottom 15%",
            scrub: true
        }
    });
})
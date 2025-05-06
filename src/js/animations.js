gsap.from(".hero h1", {duration: 1, y: -50, opacity: 0, delay: 0.5});
gsap.from(".hero p", {duration: 1, y: 50, opacity: 0, delay: 1});
gsap.from(".hero .btn", {duration: 1, scale: 0, delay: 1.5});
gsap.from(".navbar", {duration: 1, y: -100, opacity: 0, delay: 0.2});

gsap.from("footer", {
    duration: 1,
    opacity: 0,
    y: 50,
    delay: 1
});

gsap.utils.toArray(".container").forEach((section) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
    });
}); 
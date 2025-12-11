// ✅ Fade text on first page load
window.addEventListener("load", () => {
  gsap.to(".fade-text", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: "power2.out"
  });
});

barba.init({
  transitions: [
    {
      async leave(data) {
        // ✅ SLIDE PAGE LEFT
        await gsap.to(data.current.container, {
          x: "-100%",
          opacity: 0,
          duration: 0.7,
          ease: "power2.inOut"
        });
      },

      async enter(data) {
        // ✅ SLIDE PAGE FROM RIGHT
        await gsap.from(data.next.container, {
          x: "100%",
          opacity: 0,
          duration: 0.7,
          ease: "power2.inOut"
        });

        // ✅ FADE TEXT AFTER PAGE ENTER
        gsap.fromTo(
          data.next.container.querySelectorAll(".fade-text"),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out"
          }
        );
      }
    }
  ]
});

// ✅ Always scroll to top after transition
barba.hooks.afterEnter(() => {
  window.scrollTo(0, 0);
});

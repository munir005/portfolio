// when the page load then this code run
document.addEventListener("websiteLoaded", () => {
  gsap.registerPlugin(SplitText); // SplitText Plugin import
  const HeaderTl = gsap.timeline();
  HeaderTl.from(".logo", {
    y: -100,
    autoAlpha: 0,
    duration: 0.4,
  });
  HeaderTl.from("nav ul li", {
    y: -50,
    autoAlpha: 0,
    duration: 0.3,
    stagger: 0.1,
  });
  HeaderTl.from(".download-cv-btn.nav-btn", {
    y: -100,
    autoAlpha: 0,
    duration: 0.3,
  });
  HeaderTl.from(
    ".toggler",
    {
      x: 100,
      autoAlpha: 0,
      duration: 0.3,
    },
    "-=.3",
  );

  // hero animation here

  const HeroTl = gsap.timeline();
  let heroInfo = SplitText.create(".hero-info", { type: "chars" });
  gsap.from(heroInfo.chars, {
    duration: 0.6,
    y: -50,
    autoAlpha: 0,
    stagger: 0.05,
  });

  let heroPera = SplitText.create(".hero-pera", { type: "words" });
  gsap.from(heroPera.words, {
    scale: 0,
    transformOrigin: "50% 50% -160px",
    autoAlpha: 0,
    duration: 0.7,
    ease: "power3",
    autoAlpha: 0,
    stagger: 0.1,
  });

  HeroTl.from(".tag, .hero-heading,  .hero-btns", {
    x: -100,
    autoAlpha: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: "power4",
  });
  HeroTl.from(
    ".right-side-hero",
    {
      x: 100,
      autoAlpha: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power4",
    },
    "-=.4",
  );

  // about section animation
  gsap.from(".about-me-container  .about-left-side", {
    x: -100,
    duration: 0.6,
    opacity: 0,
    scrollTrigger: {
      trigger: ".about-me-container",
      start: "top 60%",
    },
  });

  gsap.from(".about-me-container  .about-right-side", {
    x: 100,
    duration: 0.6,
    opacity: 0,
    scrollTrigger: {
      trigger: ".about-me-container",
      start: "top 60%",
    },
  });

  let aboutPera1 = SplitText.create(".pera-1", { type: " words" });
  gsap.from(aboutPera1.words, {
    duration: 0.8,
    scale: 0.3,
    y: -50,
    autoAlpha: 0,
    stagger: 0.05,
    clearProps: "transform, opacity, visibility",
    scrollTrigger: {
      trigger: ".about-me-container",
      start: "top 60%",
    },
  });

  let aboutPera2 = SplitText.create(".pera-2", { type: "words" });
  gsap.from(aboutPera2.words, {
    duration: 0.8,
    y: 150,
    autoAlpha: 0,
    stagger: 0.05,
    scrollTrigger: {
      trigger: ".about-me-container",
      start: "top 60%",
    },
  });

  gsap.from(".about-tag", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
    clearProps: "all",
    scrollTrigger: {
      trigger: ".about-me-container",
      start: "top 60%",
    },
  });
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".experience-section",
      start: "top 70%",
    },
  });
  tl3.from(".experience-card", {
    scale: 0.4,
    stagger: 0.2,
    opacity: 0,
    clearProps: "all",
  });

  // about journey animation
  const JourneyTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".journey-item",
      start: "top 70%",
    },
  });
  JourneyTl.from(".journey-item", {
    x: 30,
    scale: 0.6,
    autoAlpha: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: "back.in(1.7)",
  });

  // skills sections

  gsap.from(".skills-div", {
    x: -100,
    duration: 0.6,
    opacity: 0,
    scrollTrigger: {
      trigger: ".skills-section",
      start: "top 60%",
    },
  });
  gsap.from(".tools-div", {
    x: 100,
    duration: 0.6,
    opacity: 0,
    scrollTrigger: {
      trigger: ".skills-section",

      start: "top 60%",
    },
  });

  // project section

  const tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".projects-section",
      start: "top 50%",
    },
  });
  tl5.from(".project-card", {
    scale: 0.4,
    autoAlpha: 0,
    duration: 0.6,
    stagger: 0.2,
  });

  // contact section

  gsap.from(".contact-left", {
    x: -100,
    duration: 0.6,
    opacity: 0,
    scrollTrigger: {
      trigger: ".contact-section",

      start: "top 60%",
    },
  });
  gsap.from(".contact-right", {
    x: 100,
    duration: 0.6,
    opacity: 0,
    scrollTrigger: {
      trigger: ".contact-section",

      start: "top 60%",
    },
  });

  let contactInfo = SplitText.create(".contact-info :last-child", {
    type: " chars",
  });

  gsap.from(contactInfo.chars, {
    duration: 0.3,
    scale: 0,
    autoAlpha: 0,
    stagger: 0.05,
    scrollTrigger: {
      trigger: ".contact-section",

      start: "top 30%",
    },
  });

  let text = SplitText.create(".jumpText", { type: " chars, words, lines" });

  const tl6 = gsap.timeline({
    repeat: -1,
    yoyo: true,
  });

  tl6
    .to(text.chars, {
      duration: 0.1,
      stagger: 0.06,
    })
    .to(text.chars, {
      y: -6,
      rotate: 360,
      duration: 0.1,
      stagger: 0.06,
      ease: "power2.out",
    });

  let footerLogoPera = SplitText.create(".footer-logo-pera", {
    type: " words",
  });
  gsap.from(footerLogoPera.words, {
    duration: 0.3,
    scale: 0.5,
    y: 50,
    autoAlpha: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".footer-section",
      start: "top 30%",
    },
  });
});

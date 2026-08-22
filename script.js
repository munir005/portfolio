// ----    all element selects
const header = document.querySelector("header");
const navbarContainer = document.querySelector(".nav-bar-container");
const navbar = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav ul li a");
const togglerBtn = document.querySelector(".toggler");
const linkedSection = document.querySelectorAll(".linked-section");
const BackToTopBtn = document.querySelector(".back-to-top");

//   ------     Move the dot with cursor
const mouseDot = document.querySelector(".mouse-dot");
document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  mouseDot.style.left = `${x}px`;
  mouseDot.style.top = `${y}px`;
  mouseDot.style.opacity = "1";
});

//  -----    navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.classList.add("scroll");
    navbarContainer.classList.add("scroll");
    navbar.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
    navbarContainer.classList.remove("scroll");
    navbar.classList.remove("scroll");
  }

  //   show the back to top button on scroll

  window.outerHeight < window.scrollY ? BackToTopBtn.classList.add("show") : BackToTopBtn.classList.remove("show");

  //   active the link according to the current section

  let currentSection = "";
  linkedSection.forEach((section) => {
    const sectionHeight = section.clientHeight;
    const sectionFromTop = section.offsetTop - 90;
    if (
      window.scrollY > sectionFromTop &&
      window.scrollY < sectionHeight + sectionFromTop
    ) {
      currentSection = section.getAttribute("id");
    }
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active");
      } else link.classList.remove("active");
    });
  });
});

//   ------    toggle navbar code
togglerBtn.addEventListener("click", () => {
  navbar.classList.toggle("show");
  if (navbar.classList.contains("show")) {
    togglerBtn.innerHTML = `<i class="ri-close-line"></i>`;
  } else {
    togglerBtn.innerHTML = `<i class="ri-menu-3-line"></i>`;
  }
});
// ----   hide the navbar clicking on the nav bar links
function hideNavbar() {
  navbar.classList.remove("show");
  togglerBtn.innerHTML = `<i class="ri-menu-3-line"></i>`;
}
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hideNavbar();
  });
});

const skillsCard = document.querySelectorAll(".skill-card");
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const bar = entry.target.querySelector(".skill-progress");
      if (entry.isIntersecting) {
        const width = bar.dataset.width;
        bar.style.width = width;
      } else {
        bar.style.width = "0";
      }
    });
  },
  {
    threshold: .5,
  },
);

skillsCard.forEach((skill) => {
  skillObserver.observe(skill);
});



// ---  Form valid code


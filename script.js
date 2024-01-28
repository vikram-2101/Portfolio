// Show Menu ===========
const navMenu = document.getElementById("nav-menu");
navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");

// menu show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

//  menu hidden
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

//  remove menu mobile
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // when we click on each nav__link we remove the show menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Add Blur to header
const blurHeader = () => {
  const header = document.getElementById("header");
  //when the scroll is greater than 50 viewpoert height, addt the scrol-header class
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};

window.addEventListener("scroll", blurHeader);

// Email js

const contactForm = document.getElementById("contact-form");
contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();
  // service-id template-id #form publickey
  emailjs
    .sendForm(
      "service_3awozvv",
      "template_4tc8mam",
      "#contact-form",
      "LioV5DnbRwqxW60b9"
    )
    .then(
      () => {
        contactMessage.textContent = "Message sent successfully ✅";

        // Remove message after 5 seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        // clear input fields
        contactForm.reset();
      },
      () => {
        // show error message
        contactMessage.textContent = "Message not sent (service_error) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

// Scrool up
const scrollUp = () => {
  const scrollUP = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// Scroll section active link

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

const sr = scrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(
  ".home__data, .home__social, .contact__container, .footer__container"
);
sr.reveal(".home__image", { origin: "bottom" });
sr.reveal(".about__data, .skills__data", { origin: "left" });
sr.reveal(".about__image", { origin: "right" });
sr.reveal(".services__card, .projects__card", { interval: 100 });

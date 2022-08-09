/*==================== SHOW MENU ====================*/
const headMiddle = document.getElementById("head-middle"),
  navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = headMiddle.getAttribute("data-visible");

  console.log(visibility);
  if (visibility == "false") {
    // ===== MENU SHOW =====
    headMiddle.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    navToggle.setAttribute("aria-label", "Close navigation");
  } else if (visibility == "true") {
    // ===== MENU CLOSE =====
    headMiddle.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    navToggle.setAttribute("aria-label", "Open navigation");
  }
});

// ===== ACCORDIONS =====
const faqs = document.querySelectorAll(".faqs li");
const faqsHeader = document.querySelectorAll(".faqs li h3 > button");

const openAndCloseAccordions = () => {
  faqsHeader.forEach((e) => {
    e.addEventListener("click", () => {
      const getAriaExpanded = e.getAttribute("aria-expanded");

      console.log(getAriaExpanded);

      getAriaExpanded == "false"
        ? e.setAttribute("aria-expanded", true)
        : e.setAttribute("aria-expanded", false);
    });
  });

  faqs.forEach((e) => {
    e.addEventListener("click", () => {
      e.classList.toggle("open");
    });
  });
};

openAndCloseAccordions();

// ===== END ACCORDIONS =====

// ======= Slider ======
const items = document.querySelectorAll(".client .box");
const nbSlide = items.length;
const suivant = document.querySelector(".right");
const precedent = document.querySelector(".left");
let count = 0;

suivant.addEventListener("click", () => {
  items[count].setAttribute("data-visible", false);
  count < nbSlide - 1 ? count++ : (count = 0),
    items[count].setAttribute("data-visible", true);
  // console.log(count);
});

precedent.addEventListener("click", () => {
  items[count].setAttribute("data-visible", false);
  0 < count ? count-- : (count = nbSlide - 1),
    items[count].setAttribute("data-visible", true);
  // console.log(count);
});

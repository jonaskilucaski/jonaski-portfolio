const root = document.documentElement;
root.classList.add("js");

const intro = document.querySelector("[data-intro]");
const skipIntro = document.querySelector("[data-skip-intro]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (intro && skipIntro && !sessionStorage.getItem("jonaski-intro-seen")) {
  intro.hidden = false;
  document.body.classList.add("intro-open");
  skipIntro.focus();

  const closeIntro = () => {
    sessionStorage.setItem("jonaski-intro-seen", "true");
    document.body.classList.remove("intro-open");
    intro.classList.add("intro-exit");
    window.setTimeout(() => {
      intro.hidden = true;
      document.querySelector(".hero h1")?.focus({ preventScroll: true });
    }, reduceMotion ? 0 : 360);
  };

  skipIntro.addEventListener("click", closeIntro);
  intro.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeIntro();
  });

  if (!reduceMotion) window.setTimeout(closeIntro, 4200);
}

const navToggle = document.querySelector("[data-nav-toggle]");
const navigation = document.querySelector("[data-navigation]");

if (navToggle && navigation) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navigation.classList.toggle("is-open", !expanded);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      navToggle.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    }
  });
}

if ("IntersectionObserver" in window) {
  const links = [...document.querySelectorAll("[data-nav-link]")];
  const sections = document.querySelectorAll("[data-section]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        link.toggleAttribute("aria-current", active);
      });
    });
  }, { rootMargin: "-30% 0px -60% 0px" });

  sections.forEach((section) => observer.observe(section));
}

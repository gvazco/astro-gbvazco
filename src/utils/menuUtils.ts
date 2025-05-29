export function setupMenuToggler() {
  // Espera a que el DOM esté listo
  document.addEventListener("DOMContentLoaded", () => {
    const menuToggler = document.querySelector<HTMLElement>(".menu-toggler");
    const topNav = document.querySelector<HTMLElement>(".top-nav");
    const navLinks =
      document.querySelectorAll<HTMLElement>(".top-nav .nav-link");
    const anchorLinks =
      document.querySelectorAll<HTMLAnchorElement>('nav a[href*="#"]');

    if (menuToggler && topNav) {
      menuToggler.addEventListener("click", () => {
        menuToggler.classList.toggle("open");
        topNav.classList.toggle("open");
      });
    }

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggler?.classList.remove("open");
        topNav?.classList.remove("open");
      });
    });

    anchorLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          const target = document.querySelector<HTMLElement>(href);
          if (target) {
            e.preventDefault();
            const offset =
              target.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({
              top: offset,
              behavior: "smooth",
            });
          }
        }
      });
    });
  });
}

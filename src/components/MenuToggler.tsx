import { useState, useRef, useEffect } from "react";

export const MenuToggler = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Cierra el menú al hacer click en un enlace
  useEffect(() => {
    const navLinks =
      navRef.current?.querySelectorAll<HTMLAnchorElement>(".nav-link");
    const handleLinkClick = () => setOpen(false);

    navLinks?.forEach((link) =>
      link.addEventListener("click", handleLinkClick),
    );
    return () => {
      navLinks?.forEach((link) =>
        link.removeEventListener("click", handleLinkClick),
      );
    };
  }, []);

  // Scroll suave para los enlaces internos
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#")) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          const offset = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: offset, behavior: "smooth" });
        }
      }
    };

    const navLinks =
      navRef.current?.querySelectorAll<HTMLAnchorElement>('a[href*="#"]');
    navLinks?.forEach((link) =>
      link.addEventListener("click", handleSmoothScroll),
    );
    return () => {
      navLinks?.forEach((link) =>
        link.removeEventListener("click", handleSmoothScroll),
      );
    };
  }, []);

  return (
    <header>
      <div
        className={`menu-toggler${open ? " open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <div className="bar bar-half start"></div>
        <div className="bar"></div>
        <div className="bar bar-half end"></div>
      </div>

      <nav className={`top-nav${open ? " open" : ""}`} ref={navRef}>
        <ul className="nav-list">
          <li>
            <a href="index.html" className="nav-link">
              Inicio
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              Blog
            </a>
          </li>
          <li>
            <a href="#services" className="nav-link">
              Servicios
            </a>
          </li>
          <li>
            <a href="#portfolio" className="nav-link">
              Portafolio
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

(() => {
  const header = document.getElementById("header");
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");
  const yearEl = document.getElementById("year");

  // Year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header scroll state
  const onScroll = () => {
    header?.classList.toggle("scrolled", window.scrollY > 20);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const open = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("open", !open);
      document.body.style.overflow = open ? "" : "hidden";
    });

    // Close on link click
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuBtn.setAttribute("aria-expanded", "false");
        nav.classList.remove("open");
        document.body.style.overflow = "";
      });
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        menuBtn.setAttribute("aria-expanded", "false");
        nav.classList.remove("open");
        document.body.style.overflow = "";
        menuBtn.focus();
      }
    });
  }
})();
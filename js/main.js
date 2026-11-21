document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 750,
    once: true,
    offset: 40,
    easing: "ease-out-cubic",
    disable: function () {
      return window.innerWidth < 768 && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    },
  });

  var nav = document.getElementById("mainNav");
  var menuBtn = document.getElementById("menuBtn");
  var mobileMenu = document.getElementById("mobileMenu");
  var menuIcon = document.getElementById("menuIcon");
  var closeIcon = document.getElementById("closeIcon");
  var mobileLinks = document.querySelectorAll(".mobile-link");

  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("open");
    if (menuIcon) menuIcon.classList.remove("hidden");
    if (closeIcon) closeIcon.classList.add("hidden");
  }

  function openMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add("open");
    if (menuIcon) menuIcon.classList.add("hidden");
    if (closeIcon) closeIcon.classList.remove("hidden");
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      if (mobileMenu.classList.contains("open")) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  mobileLinks.forEach(function (link) {
    link.addEventListener("click", closeMobileMenu);
  });

  var lastScrollY = window.scrollY;

  window.addEventListener(
    "scroll",
    function () {
      var currentY = window.scrollY;

      if (nav) {
        if (currentY > 16) {
          nav.classList.add("nav-scrolled");
        } else {
          nav.classList.remove("nav-scrolled");
        }
      }

      // Auto-close mobile nav on scroll
      if (Math.abs(currentY - lastScrollY) > 6) {
        closeMobileMenu();
      }

      lastScrollY = currentY;
    },
    { passive: true }
  );

  var waFloat = document.getElementById("whatsappFloat");
  if (waFloat) {
    waFloat.addEventListener("click", function (e) {
      e.preventDefault();
      var msg = "Query from website.";
      var url = "https://wa.me/919702053758?text=" + encodeURIComponent(msg);
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }
});

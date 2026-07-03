document.addEventListener("DOMContentLoaded", function () {
  // 1. Selector Navbar
  const navbar = document.querySelector(".navbar");

  // 2. Menu Navigasi Hamburger untuk Mobile (Pengganti Bootstrap JS)
  const toggler = document.querySelector(".navbar-toggler");
  const navCollapse = document.getElementById("mainNav");

  if (toggler && navCollapse) {
    toggler.addEventListener("click", function () {
      navCollapse.classList.toggle("show");
    });

    // Menutup menu jika mengklik di luar navbar saat menu terbuka
    document.addEventListener("click", function (event) {
      if (
        !navbar.contains(event.target) &&
        navCollapse.classList.contains("show")
      ) {
        navCollapse.classList.remove("show");
      }
    });
  }

  // 3. Tombol Kembali ke Atas (Back to Top)
  const toTop = document.getElementById("toTop");
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 4. Simulasi Submit Formulir Kontak
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = contactForm.elements.name.value.trim();
      const statusElement = contactForm.querySelector(".form-status");

      if (statusElement) {
        statusElement.textContent =
          "Terima kasih, " + name + "! Pesan Anda sudah terkirim.";
      }
      contactForm.reset();
    });
  }
});

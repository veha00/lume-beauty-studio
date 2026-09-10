/* =========================
   LUMÉ BEAUTY STUDIO
   JAVASCRIPT
========================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ================= MENU ================= */

  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });

  }


  /* ================= BOOKING ================= */

  const bookingBtn = document.getElementById("bookingBtn");
  const service = document.getElementById("service");
  const date = document.getElementById("date");

  const whatsappNumber = "917410574219";

  if (bookingBtn) {

    bookingBtn.addEventListener("click", () => {

      const selectedService = service.value;
      const selectedDate = date.value;

      if (!selectedService) {
        alert("Please select a service first.");
        return;
      }

      let message =
        "Hello LUMÉ Beauty Studio,%0A%0A" +
        "I would like to book an appointment.%0A%0A" +
        "Service: " + encodeURIComponent(selectedService);

      if (selectedDate) {
        message +=
          "%0APreferred Date: " +
          encodeURIComponent(selectedDate);
      }

      message +=
        "%0A%0APlease let me know the available time.";

      const whatsappURL =
        "https://api.whatsapp.com/send?phone=" +
        whatsappNumber +
        "&text=" +
        message;

      window.open(whatsappURL, "_blank");

    });

  }


  /* ================= SCROLL REVEAL ================= */

  const revealElements = document.querySelectorAll(
    ".service-card, .review-card, .contact-card, .about-content, .about-image, .gallery-item, .hours-box, .booking-card"
  );

  revealElements.forEach(element => {
    element.classList.add("reveal");
  });

  const revealObserver = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          revealObserver.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });


  /* ================= DATE LIMIT ================= */

  if (date) {

    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    date.min = `${year}-${month}-${day}`;

  }

});

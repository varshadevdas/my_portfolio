document.addEventListener("DOMContentLoaded", function () {
  // Smooth Scrolling for Navbar Links
  document.querySelectorAll(".nav-links a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute("href").substring(1);
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    });
  });

  // Hover effect on skill cards
  document.querySelectorAll(".skill-card").forEach(card => {
    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.1)";
      card.style.transition = "0.3s";
    });
    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)";
    });
  });
});
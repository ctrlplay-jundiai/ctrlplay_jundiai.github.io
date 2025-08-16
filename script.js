// Add smooth scrolling and interactive features
document.addEventListener("DOMContentLoaded", function () {
  // Add click tracking for analytics (optional)
  const links = document.querySelectorAll(".link-button");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Add a small delay to show the click effect
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);

      // Optional: Track clicks (you can integrate with Google Analytics here)
      console.log("Link clicked:", this.href);
    });
  });

  // Add profile image click effect
  const profileImage = document.getElementById("profile-pic");
  if (profileImage) {
    profileImage.addEventListener("click", function () {
      this.style.transform = "scale(1.1) rotate(5deg)";
      setTimeout(() => {
        this.style.transform = "";
      }, 300);
    });
  }

  // Add keyboard navigation
  document.addEventListener("keydown", function (e) {
    const links = document.querySelectorAll(".link-button");
    const currentIndex = Array.from(links).findIndex(
      (link) => link === document.activeElement
    );

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % links.length;
        links[nextIndex].focus();
        break;
      case "ArrowUp":
        e.preventDefault();
        const prevIndex =
          currentIndex <= 0 ? links.length - 1 : currentIndex - 1;
        links[prevIndex].focus();
        break;
      case "Enter":
      case " ":
        if (document.activeElement.classList.contains("link-button")) {
          e.preventDefault();
          document.activeElement.click();
        }
        break;
    }
  });

  // Add loading animation
  window.addEventListener("load", function () {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.5s ease-in";

    setTimeout(() => {
      document.body.style.opacity = "1";
    }, 100);
  });

  // Add touch feedback for mobile devices
  if ("ontouchstart" in window) {
    links.forEach((link) => {
      link.addEventListener("touchstart", function () {
        this.style.transform = "scale(0.98)";
      });

      link.addEventListener("touchend", function () {
        this.style.transform = "";
      });
    });
  }

  // Add copy to clipboard functionality for WhatsApp number
  const whatsappButton = document.querySelector(".whatsapp");
  if (whatsappButton) {
    whatsappButton.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      const whatsappNumber = this.href.replace("https://wa.me/", "");

      if (navigator.clipboard) {
        navigator.clipboard.writeText(whatsappNumber).then(() => {
          // Show a temporary message
          const originalText = this.querySelector("span").textContent;
          this.querySelector("span").textContent = "Number copied!";

          setTimeout(() => {
            this.querySelector("span").textContent = originalText;
          }, 2000);
        });
      }
    });
  }

  // Add parallax effect on mouse move
  document.addEventListener("mousemove", function (e) {
    const container = document.querySelector(".container");
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    container.style.transform = `translate(${x}px, ${y}px)`;
  });

  // Reset transform on mouse leave
  document.addEventListener("mouseleave", function () {
    const container = document.querySelector(".container");
    container.style.transform = "";
  });
});

export function initPopups() {
  const popups = document.querySelectorAll(".popup");

  document.querySelectorAll("[data-popup]").forEach(trigger => {
    trigger.addEventListener("click", () => {
      const target = trigger.getAttribute("data-popup");
      const popup = document.getElementById(target);

      if (popup) popup.classList.add("active");
    });
  });

  popups.forEach(popup => {
    const closeBtn = popup.querySelector(".popup-close");
    const overlay = popup.querySelector(".popup-overlay");

    closeBtn?.addEventListener("click", () => {
      popup.classList.remove("active");
    });

    overlay?.addEventListener("click", () => {
      popup.classList.remove("active");
    });
  });

  document.querySelectorAll("[data-close]").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-close");
      const popup = document.getElementById(target);

      if (popup) popup.classList.remove("active");
    });
  });
}
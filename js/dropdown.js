export function initDropdown() {
  const dropdowns = document.querySelectorAll(".custom-dropdown");

  dropdowns.forEach(dropdown => {
    const selected = dropdown.querySelector(".dropdown-selected");
    const options = dropdown.querySelectorAll(".option");
    const placeholder = dropdown.querySelector(".placeholder");

    // toggle
    selected.addEventListener("click", (e) => {
      e.stopPropagation();

      // close dropdown lain
      document.querySelectorAll(".custom-dropdown").forEach(d => {
        if (d !== dropdown) d.classList.remove("active");
      });

      dropdown.classList.toggle("active");
    });

    // pilih option
    options.forEach(option => {
      option.addEventListener("click", () => {
        placeholder.textContent = option.textContent;
        placeholder.style.color = "#333";
        dropdown.classList.remove("active");
      });
    });
  });

  // klik luar → close semua
  document.addEventListener("click", () => {
    document.querySelectorAll(".custom-dropdown")
      .forEach(d => d.classList.remove("active"));
  });
}
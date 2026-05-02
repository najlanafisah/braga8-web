import { initSidebar } from "../js/sidebar.js";
import { initPopups } from "../js/popup.js";
import { initChart } from "../js/chart.js";

document.addEventListener("DOMContentLoaded", () => {
  initSidebar();
  initPopups();
  initChart();

  // EDIT ACCOUNT FLOW
  const openEdit = document.getElementById("openEdit");

  openEdit?.addEventListener("click", () => {
    document.getElementById("detail-profile-popup").classList.remove("active");
    document.getElementById("edit-profile-popup").classList.add("active");
  });

});
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");

  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("sidebar-overlay").classList.remove("active");
}

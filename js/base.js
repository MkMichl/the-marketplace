(function () {
  const root = document.documentElement;
  const button = document.querySelector(".theme-toggle");
  const savedTheme = localStorage.getItem("theme");
  const preferred =
    savedTheme ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  const setTheme = (theme) => {
    root.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    if (!button) return;
    button.textContent = theme === "dark" ? "light_mode" : "dark_mode";
    button.setAttribute(
      "aria-label",
      `Switch to ${theme === "dark" ? "light" : "dark"} mode`,
    );
  };
  setTheme(preferred);
  if (button) {
    button.addEventListener("click", function () {
      setTheme(root.dataset.theme === "dark" ? "light" : "dark");
    });
  }
})();
function toggleMenu() {
  const navBody = document.querySelector(".nav-body.mini-close");
  const menuIcon = document.querySelector(".nav_controls .menu");
  // const closeIcon = document.querySelector(".nav_controls .close");
  if (navBody.style.visibility === "visible") {
    navBody.style.visibility = "hidden";
    navBody.style.opacity = "0";
    menuIcon.innerHTML = "menu";
  } else {
    navBody.style.visibility = "visible";
    navBody.style.opacity = "1";
    menuIcon.innerHTML = "close";
  }
}

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("scrolling-active", windowPosition);
});

function toggle_dark_theme(force_dark = false) {
  if (document.body.classList.contains("dark") == false || force_dark) {
    document.body.classList.add("dark");
    document.cookie = "dark=true";
  } else {
    document.body.classList.remove("dark");
    document.cookie = "dark=false";
  }
}

document
  .querySelector(".theme-toggle-button")
  .addEventListener("click", () => toggle_dark_theme());

function apply_dark_if_cookie() {
  var dark_active = false;
  var cookies = document.cookie.split(";");

  for (let x = 0; x < cookies.length; x++) {
    var [key, val] = cookies[0].split("=");
    if (key == "dark" && val == "true") dark_active = true;
  }

  if (dark_active) set_dark_theme(true);
}

function apply_cookie_settings() {
  apply_dark_if_cookie();
}

// Run at start

apply_cookie_settings();

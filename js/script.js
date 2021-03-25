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

  if (dark_active) toggle_dark_theme(true);
}

function apply_cookie_settings() {
  apply_dark_if_cookie();
}

// Run at start
apply_cookie_settings();

/**@param {HTMLElement} changed */
function filters_changed(changed) {
  // Set all to false
  for (let h1 of /** @type{HTMLElement[]} */ (document.querySelectorAll(
    ".filters>h1"
  ))) {
    h1.dataset.clicked = "false";
  }

  changed.dataset.clicked = "true";
  var search_class = changed.dataset.filter;
  var GG = document.querySelector(".gallerygrid");
  for (let pic of GG.children) {
    if (pic.classList.contains(search_class)) {
      pic.classList.remove("hider");
    } else {
      pic.classList.add("hider");
    }
  }
}

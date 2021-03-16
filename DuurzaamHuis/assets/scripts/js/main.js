//  *SIDE BAR & MENU ICON ---------------------------------------------------
const menuIconEl = $(".menu-icon");
const sidenavEl = $(".sidenav");
const sidenavCloseEl = $(".sidenav__close-icon");

// Add and remove provided class names
function toggleClassName(el, className) {
  if (el.hasClass(className)) {
    el.removeClass(className);
  } else {
    el.addClass(className);
  }
}

menuIconEl.on("click", function () {
  toggleClassName(sidenavEl, "active");
});

sidenavCloseEl.on("click", function () {
  toggleClassName(sidenavEl, "active");
});

// *DARKMODE BUTTON -----------------------------------------------------
var toggleDarkmode = document.querySelector(".toggle-btn input");

// console.log(toggleDarkmode);

toggleDarkmode.addEventListener("click", toggleDarkmodeAppearance);

function toggleDarkmodeAppearance() {
  if (toggleDarkmode.checked == true) {
    document.querySelector("body").classList.remove("lightmode");
  } else {
    document.querySelector("body").classList.add("lightmode");
  }
}

// *TIJD WIDGET --------------------------------------------------------
function TijdDatumLocatie() {
  setInterval(function () {
    let time = new Date();
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hr = time.getHours();
    let day = " AM";
    if (hr > 12) {
      day = " PM";
      hr = hr - 12;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (hr < 10) {
      hr = "0" + hr;
    }
    clockdisplay(hr, min, sec, day);
  }, 100);

  function clockdisplay(hr, min, sec, day) {
    let clock = document.getElementById("display");
    clock.innerHTML = hr + ":" + min + ":" + sec + "" + day;
  }

  var now = new Date();

  var days = new Array(
    "Zondag",
    "Maandag",
    "Dinsdag",
    "Woensdag",
    "Donderdag",
    "Vrijdag",
    "Zaterdag"
  );

  var months = new Array(
    "Januari",
    "Februari",
    "Maart",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Augustus",
    "September",
    "Oktober",
    "November",
    "December"
  );

  var date = (now.getDate() < 10 ? "0" : "") + now.getDate();

  function fourdigits(number) {
    return number < 1000 ? number + 1900 : number;
  }
  today =
    days[now.getDay()] +
    ", " +
    date +
    " " +
    months[now.getMonth()] +
    " " +
    fourdigits(now.getYear());

  console.log(date);
  var dag = document.getElementById("dagmaandjaar");
  dag.innerHTML = today;
  var place = Intl.DateTimeFormat().resolvedOptions().timeZone;
  plek = document.getElementById("places");
  plek.innerHTML = place;
}

window.addEventListener("DOMContentLoaded", TijdDatumLocatie);
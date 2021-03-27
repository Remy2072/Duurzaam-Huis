//  *SIDE BAR & MENU ICON ------------------------------------------------
const menuIconEl = $(".menu-icon");
const sidenavEl = $(".sidenav");
const sidenavCloseEl = $(".sidenav__close-icon");

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

toggleDarkmode.addEventListener("click", toggleDarkmodeAppearance);

function toggleDarkmodeAppearance() {
  if (toggleDarkmode.checked == true) {
    document.querySelector("body").classList.remove("lightmode");
  } else {
    document.querySelector("body").classList.add("lightmode");
  }
}

// *WEER WIDGET ---------------------------------------------------------
let weer = document.getElementById("city");
let weerdescription = document.getElementById("weatherdescription");
let temperatuur = document.getElementById("temperature");

if (navigator.geolocation) {
  window.onload = function () {
    navigator.geolocation.getCurrentPosition(getCurrentLocation);
  };
}

function getCurrentLocation(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;

  weer.innerHTML = "";
  weerdescription.innerHTML = "";
  temperatuur.innerHTML = "";

  $.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&APPID=b7aaa3a349294d5706002e82df3de1ea&units=metric",
    function (data) {
      $(".city")[0].append(data.name + " ");
      $(".temperature")[0].append(data.main.temp + "°C");
      $(".weatherdescription")[0].append(data.weather[0].description + " ");
    }
  );
}

// *TEMP BINNEN ---------------------------------------------------------
window.addEventListener("DOMContentLoaded", TijdDatumLocatie);

let temperatuur2 = 9;
const temperatuurUitvoer = document.getElementById("temperatuur2");
const cirkelBoog = document.getElementById("cirkelBoog");
const thermostaat = document.getElementById("thermostaat");

const uitvoeren = (temp) => {
  temperatuurUitvoer.innerHTML = temp;
  let boog = (temp * 100) / 30;
  cirkelBoog.style.strokeDasharray = `${boog} ${100 - boog}`;
};
const animeerUitvoer = (temp) => {
  let t = 0;
  const timer = setInterval(() => {
    if (t <= temp) {
      uitvoeren(t);

      t++;
    } else {
      clearInterval(timer);
    }
  }, 25);
};

animeerUitvoer(thermostaat.value);

thermostaat.addEventListener("change", () => {
  animeerUitvoer(thermostaat.value);
});

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

  var dag = document.getElementById("dagmaandjaar");
  dag.innerHTML = today;
  var place = Intl.DateTimeFormat().resolvedOptions().timeZone;
  plek = document.getElementById("places");
  plek.innerHTML = place;
}

// *TO DO LIST ----------------------------------------------------------
var todolim = 5;
$(".txtb").on("keyup", function (e) {
  //13  means enter button
  if (e.keyCode == 13 && $(".txtb").val() != "") {
    if (
      todolim == 5 ||
      todolim == 4 ||
      todolim == 3 ||
      todolim == 2 ||
      todolim == 1
    ) {
      var task = $("<div class='task'></div>").text($(".txtb").val());
    }

    if (
      todolim == 5 ||
      todolim == 4 ||
      todolim == 3 ||
      todolim == 2 ||
      todolim == 1
    ) {
      var del = $("<i class='fas fa-trash-alt'></i>").click(function () {
        var p = $(this).parent();
        p.fadeOut(function () {
          todolim += 1;
          p.remove();
        });
      });
    }

    if (
      todolim == 5 ||
      todolim == 4 ||
      todolim == 3 ||
      todolim == 2 ||
      todolim == 1
    ) {
      var check = $("<i class='fas fa-check'></i>").click(function () {
        var p = $(this).parent();
        p.fadeOut(function () {
          $(".comp").append(p);
          p.fadeIn();
        });
        $(this).remove();
      });
    }

    if (
      todolim == 5 ||
      todolim == 4 ||
      todolim == 3 ||
      todolim == 2 ||
      todolim == 1
    ) {
      todolim -= 1;
      task.append(del, check);
      $(".notcomp").append(task);
      $(".txtb").val("");
    }
  }
});

var mq = window.matchMedia("(min-width: 46.875em)");
if (mq.matches) {
  // *PC
} else {
  // *MOBILE
  let inputtodo = document.getElementById("todoinput");
  inputtodo.setAttribute("maxlength", "18");
}
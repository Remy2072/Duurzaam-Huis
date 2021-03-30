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

// *SPOTIFY ---------------------------------------------------------
document.getElementById("playAudio").addEventListener("click", function(){
	var audio = document.getElementById('testAudio');
  if(this.className == 'is-playing'){
    this.className = "";
    this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111.87 111.87"><defs><style>.cls-1{fill:#fff;}</style></defs><g id="Laag_2" data-name="Laag 2"><g id="Laag_1-2" data-name="Laag 1"><path class="cls-1" d="M55.94,0a55.94,55.94,0,1,0,55.93,55.94A55.93,55.93,0,0,0,55.94,0ZM75.71,57.51,44.87,75.34a1.82,1.82,0,0,1-2.73-1.58V38.11a1.82,1.82,0,0,1,2.73-1.58L75.71,54.36A1.82,1.82,0,0,1,75.71,57.51Z"></path></g></g></svg>'
    audio.pause();
  }else{
    this.className = "is-playing";
    this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111.87 111.87"><defs><style>.cls-1{fill:#fff;}</style></defs><g id="Laag_2" data-name="Laag 2"><g id="Laag_1-2" data-name="Laag 1"><path class="cls-1" d="M55.94,0a55.94,55.94,0,1,0,55.93,55.94A55.93,55.93,0,0,0,55.94,0ZM48.87,74.69a1.75,1.75,0,0,1-1.75,1.75h-6.6a1.75,1.75,0,0,1-1.75-1.75V37.92a1.75,1.75,0,0,1,1.75-1.75h6.6a1.75,1.75,0,0,1,1.75,1.75Zm24.23,0a1.75,1.75,0,0,1-1.75,1.75h-6.6A1.75,1.75,0,0,1,63,74.69V37.92a1.75,1.75,0,0,1,1.75-1.75h6.6a1.75,1.75,0,0,1,1.75,1.75Z"></path></g></g></svg>';
    audio.play();
  }
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


// *GRAFIEK ----------------------------------------------------------


var xmlhttp = new XMLHttpRequest();
var url = "assets/scripts/jsonData.json";
xmlhttp.open("GET",url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);

        var months = data.months_temperature.map(function(elem) {
            return elem.date;
        });
        
        var avg = data.months_temperature.map(function(elem) {
            return elem.avg;
        });
        var your = data.months_temperature.map(function(elem) {
            return elem.your;
        });

        
        var ctx = document.getElementById('canvas').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: months,
                datasets: [{
                    label: 'Gemiddeld watergebruik',
                    data: avg,
                    backgroundColor: 'transparent',
                    borderColor: '#fff',
                    borderWidth: 3
                },
                {
                    label: 'Jouw watergebruik',
                    data: your,
                    backgroundColor: 'transparent',
                    borderColor: '#17c9b7',
                    borderWidth: 3
                }]
            },
            options: {
              maintainAspectRatio: false,
              responsive: true,
                elements:{
                    line:{
                        tension:0
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

    }

}

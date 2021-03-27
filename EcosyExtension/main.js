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

function sendMessage() {
  chrome.runtime.sendMessage(
    { action: "getCurrentForecast" },
    function (response) {
      if (response == null) {
        setTimeout(sendMessage, 2000);
      } else {
        showResult(response);
      }
    }
  );
}

function showResult(response) {
  var statusDiv = document.getElementById("status");
  var temperatureDiv = document.getElementById("temperature");

  var place = Intl.DateTimeFormat().resolvedOptions().timeZone;

  statusDiv.textContent = place;

  temperatureDiv.style.display = "block";
  temperatureDiv.textContent =
    response.currently.temperature.toString().split(".")[0] + "˚C";
}

var imageAddr =
  "http://www.kenrockwell.com/contax/images/g2/examples/31120037-5mb.jpg";
var downloadSize = 4995374; //bytes

function ShowProgressMessage(msg) {
  if (console) {
    if (typeof msg == "string") {
      console.log(msg);
    } else {
      for (var i = 0; i < msg.length; i++) {
        console.log(msg[i]);
      }
    }
  }

  var oProgress = document.getElementById("progress");
  if (oProgress) {
    var actualHTML = typeof msg == "string" ? msg : msg.join("<br />");
    oProgress.innerHTML = actualHTML;
  }
}

function InitiateSpeedDetection() {
  ShowProgressMessage("Internet snelheid checken...");
  window.setTimeout(MeasureConnectionSpeed, 1);
}

if (window.addEventListener) {
  window.addEventListener("load", InitiateSpeedDetection, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", InitiateSpeedDetection);
}

function MeasureConnectionSpeed() {
  var startTime, endTime;
  var download = new Image();
  download.onload = function () {
    endTime = new Date().getTime();
    showResults();
  };

  download.onerror = function (err, msg) {
    ShowProgressMessage("De plaatje laad niet of kan niet worden geladen");
  };

  startTime = new Date().getTime();
  var cacheBuster = "?nnn=" + startTime;
  download.src = imageAddr + cacheBuster;

  function showResults() {
    var duration = (endTime - startTime) / 1000;
    var bitsLoaded = downloadSize * 8;
    var speedBps = (bitsLoaded / duration).toFixed(2);
    var speedKbps = (speedBps / 1024).toFixed(2);
    var speedMbps = (speedKbps / 1024).toFixed(2);
    ShowProgressMessage([
      "Je internet snelheid is:",
      speedBps + " bps",
      speedKbps + " kbps",
      speedMbps + " Mbps",
    ]);
  }
}

window.addEventListener("DOMContentLoaded", sendMessage);
window.addEventListener("DOMContentLoaded", TijdDatumLocatie);

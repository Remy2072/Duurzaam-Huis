<?php
include "pages/config.php";

// Check user login or not
if(!isset($_SESSION['ename'])){
    header('Location: index.php');
}

// logout
if(isset($_POST['but_logout'])){
  session_destroy();
  header('Location: pages/login.php');
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ecosy</title>
    <meta content="Ecosy" property="og:title" />
    <meta
      content="Bespaar nu energie met Ecosy, Snel en simple.<br>
    Ecosy is een duurzame oplossing voor het energie besparen in jouw huis, 
    tevens is Ecosy ook te gebruiken als app voor je smart hoop apparatuur.<br>
    Begin nu een duurzaam huis met Ecosy!"
      property="og:description"
    />
    <meta
      content="https://kaansecen.nl/Projects/DuurzaamHuis/pages/signup.html"
      property="og:url"
    />
    <meta content="https://i.imgur.com/TJVBH4d.jpg" property="og:image" />
    <meta content="#17c9b7" data-react-helmet="true" name="theme-color" />
    <link rel="icon" href="assets/images/EcosyIconWebsite.svg" />
    <link rel="stylesheet" href="assets/styles/style.css" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
      integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz"
      crossorigin="anonymous"
    />
  </head>

  <!-- *DARKMODE KNOP & HET GRID-->
  <body class="darkmode">
    <div class="grid-container">
      <div class="menu-icon">
        <i class="fas fa-bars header__menu"></i>
      </div>

      <!-- *HEADER & SEARCH BAR -->
      <header class="header">
        <form action="#">
          <input type="search" placeholder="Search.." />
          <button><i class="fas fa-search"></i></button>
        </form>
        <div class="toggle-btn" id="_1st-toggle-btn">
          <input type="checkbox" checked />
          <span></span>
        </div>
      </header>

      <!-- *SIDENAV -->
      <aside class="sidenav">
        <div class="sidenav__close-icon">
          <i class="fas fa-times sidenav__brand-close"></i>
        </div>
        <div class="title">
          <img
            class="logo"
            src="assets/images/EcosyLogo.svg"
            alt="logo van de site"
          />
        </div>
        <ul class="sidenav__list">
          <li class="sidenav__list-item">
            <a href="index.php"><i class="fas fa-home"></i> Home</a>
          </li>
          <li class="sidenav__list-item">
            <a href="#"><i class="fas fa-user"></i> Profiel</a>
          </li>
          <li class="sidenav__list-item">
            <a href="#"><i class="fas fa-cog"></i> Instellingen </a>
          </li>
          <li class="sidenav__list-item">
            <a href="#"><i class="fas fa-puzzle-piece"></i> Extensie </a>
          </li>
          <li class="sidenav__list-item">
            <form method="post" action="">
              <button class="logoutButton" type="submit" name="but_logout">
                <i class="fas fa-sign-out-alt fa-rotate-180"></i>
                Log out
              </button>
            </form>
          </li>
        </ul>
      </aside>

      <!-- *ITEMS IN HET GRID-->
      <main class="main">
        <div class="main-header">
          <div class="main-header__heading">
            Welkom,
            <span>
              <?php
              echo $_SESSION['name'];
            ?> </span
            ><br /><span style="font-size: 15px; color: #5288e5"
              >hoe gaat het vandaag?</span
            >
          </div>
          
          <div class="main-header__updates">
            Status: <span style="color: #21dc2d">Online</span
            ><br /><br />Bluetooth: <span style="color: #196ae4">On</span>
          </div>
        </div>
        
        <!-- *WEER WIDGET -->
        <div class="main-overview">
          <div class="weercard">
            <div class="overviewcard__icon">
              <div class="weatherbox">
                <div class="city" id="city">Het weer</div>
                <div class="temperature" id="temperature">
                  Accepteer Locatie
                </div>
                <div class="weatherdescription" id="weatherdescription">
                  Aan het wachten voor locatie..
                </div>
              </div>
            </div>
          </div>
          
          <!-- *TEMP WIDGET -->
          <div class="overviewcard">
            <span style="font-size: 16px">
              Temp. binnen:
              <input
                class="slider"
                type="range"
                min="1"
                max="30"
                step="1"
                value="21"
                id="thermostaat"
              />
            </span>
            <div class="overviewcard__icon">
              <svg width="95px" height="95px" viewbox="0 0 40 40">
                <circle
                  cx="20"
                  cy="21"
                  r="15.91549430918954"
                  fill="transparent"
                  stroke="rgba(200,200,200,0.5)"
                  stroke-width="1"
                ></circle>
                <circle
                  cx="20"
                  cy="21"
                  r="15.91549430918954"
                  fill="transparent"
                  stroke="#17C9B7"
                  stroke-width="1"
                  stroke-dasharray="75 25"
                  stroke-dashoffset="75"
                  id="cirkelBoog"
                ></circle>
                <g class="temp">
                  <text id="temperatuur2" x="30%" y="60%">21</text>
                  <text id="eenheid" x="54%" y="54%">&deg;C</text>
                </g>
              </svg>
            </div>
          </div>
          
          <!-- *SPOTIFY WIDGET -->
          <div class="overviewcard">
            <div class="overviewcard__icon">Spotify</div>
          </div>
          <div class="tijdcard">
            <div class="overviewcard__icon">
              <div class="tijd">
                <div id="dagmaandjaar"></div>
                <div class="clock">
                  <div id="display"></div>
                </div>
                <div id="places"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="main-cards">
          <!-- *TO DO LIST -->
          <div class="card">
            <div class="container">
              <input
                type="text"
                class="txtb"
                placeholder="Add a task"
                maxlength="35"
                id="todoinput"
              />
              <div class="notcomp">
                <h3>Not Completed</h3>
              </div>
              <div class="comp">
                <h3>Completed</h3>
              </div>
            </div>
          </div>

          <!-- *HUE LAMPEN -->
          <div class="card">Slider</div>

          <!-- *GRAFIEK -->
          <div class="card">Staaf grafiek</div>
        </div>
      </main>

      <footer class="footer">
        <div class="footer__copyright">
          Copyright © <span style="color: #17c9b7">2021</span> All rights
          reserved.
        </div>
      </footer>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="assets/scripts/main.js"></script>
  </body>
</html>
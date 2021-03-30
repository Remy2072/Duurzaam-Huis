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
    <link rel="icon" href="assets/images/EcosyIconWebsite.ico" />
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
            <div class="spotify">
              <img src="assets/images/Between-Us.jpeg" alt="Between-Us">
              <div>
                <p>Nowhere To Go</p>
                <h4>Hayden James</h4>
              </div>
            <audio id="testAudio" hidden src="assets/Songs/Hayden_James_-_Nowhere_To_Go.mp3" type="audio/mpeg"></audio>
            <svg viewbox="0 0 24 24"><path d="M1,4.5 L1,16.5 C1,17.05 1.45,17.5 2,17.5 L8.999,17.5 L8.999,16.5 L2,16.5 L2,4.5 L8.999,4.5 L8.999,3.5 L2,3.5 C1.45,3.5 1,3.95 1,4.5 Z M4.999,20 C4.999,20.275 5.224,20.5 5.499,20.5 L8.999,20.5 L8.999,19.5 L5.499,19.5 C5.224,19.5 4.999,19.725 4.999,20 Z M22,3.5 L13,3.5 C12.45,3.5 12,3.95 12,4.5 L12,19.5 C12,20.05 12.45,20.5 13,20.5 L22,20.5 C22.55,20.5 23,20.05 23,19.5 L23,4.5 C23,3.95 22.55,3.5 22,3.5 Z M13.016,19.5 L13,4.516 L21.984,4.516 L22,19.484 L13.016,19.5 Z M17.5,11.5 C15.843,11.5 14.5,12.843 14.5,14.5 C14.5,16.157 15.843,17.5 17.5,17.5 C19.157,17.5 20.5,16.157 20.5,14.5 C20.5,12.843 19.157,11.5 17.5,11.5 Z M17.5,16.5 C16.397,16.5 15.5,15.603 15.5,14.5 C15.5,13.397 16.397,12.5 17.5,12.5 C18.603,12.5 19.5,13.397 19.5,14.5 C19.5,15.603 18.603,16.5 17.5,16.5 Z M17.5,8.5 C18.052,8.5 18.5,8.052 18.5,7.5 C18.5,6.948 18.052,6.5 17.5,6.5 C16.948,6.5 16.5,6.948 16.5,7.5 C16.5,8.053 16.948,8.5 17.5,8.5 Z" fill="currentColor" fill-rule="evenodd"></path></svg>
            <button id="playAudio"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 111.87 111.87"><defs><style>.cls-1{fill:#fff;}</style></defs><g id="Laag_2" data-name="Laag 2"><g id="Laag_1-2" data-name="Laag 1"><path class="cls-1" d="M55.94,0a55.94,55.94,0,1,0,55.93,55.94A55.93,55.93,0,0,0,55.94,0ZM75.71,57.51,44.87,75.34a1.82,1.82,0,0,1-2.73-1.58V38.11a1.82,1.82,0,0,1,2.73-1.58L75.71,54.36A1.82,1.82,0,0,1,75.71,57.51Z"></path></g></g></svg></button>
            </div>
          </div>

           <!-- *TIJD WIDGET -->
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

        <!-- *TO DO LIST -->
        <div class="main-cards">
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
          <div class="card">
            <span style="margin-bottom: 20px;text-align: center;font-size: 30px;">HUE Lampen</span>
            <input type="range" min="1" max="100" value="1" id="myRange" class="slider1">
            <input type="range" min="1" max="100" value="1" id="myRange2" class="slider2">
          </div>

          <!-- *GRAFIEK -->
          <div class="card">
            <div class="container2">
              <canvas id="canvas" width="10" height="6"></canvas>
            </div>
          </div>
        </div>
      </main>

      <!-- *FOOTER -->
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
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"></script>
  </body>
</html>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <!-- TypeFace -->
        <link rel="preconnect" href="https://fonts.gstatic.com"> 
        <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Nosifer&display=swap" rel="stylesheet"><link href="./styles/stylesheet.css" rel="stylesheet" type="text/css">
        <!-- JavaScript files-->
        <script src="mixedmessagesV2.js"></script> 
    </head>
    <body>
        <div class="bg-img"><img src="./Styles/Images/tv_background.png">
        <div class="main-content">
            <header><h1>The Star killer</h1></header>
            <p></br>We are here for a fun game. Pull up the console
            and get ready to play <br> type in <strong> whodidit._guess.([name],[weapon]
            ,[location])</strong> and see what happens.</p>

            <div class="list-of-leads">
                <h3>Here is the list of leads we got from the police</h3>
                <p>Select one for each category</p>
            </div>
            
            <div class="leads">

                <div class="names">
                    <h4>Names</h4>
                    <ul>
                        <li><button id="adam">Adam</button></li>
                        <li><button id="bard">Bard</button></li>
                        <li><button id="biff">Biff</button></li>
                        <li><button id="hazel">Hazel</button></li>
                        <li><button id="ray">Ray</button></li>
                    </ul>
                </div>
                <div class="weapons">
                    <h4>Weapons</h4>
                    <ul>
                        <li><button id="gauntlet">Gauntlet</button></li>
                        <li><button id="claws">Claws</button></li>
                        <li><button id="lightSaber">LightSaber</button></li>
                        <li><button id="fork">Fork</button></li>
                        <li><button id="pistol">Pistol</button></li>
                    </ul>
                </div>
                <div class="locations">
                    <h4>Locations</h4>
                    <ul>
                        <li><button id="restaurant">Restaurant</button></li>
                        <li><button id="beachside">Beachside</button></li>
                        <li><button id="apartment101">Apartment 101</button></li>
                        <li><button id="queenJet">QueenJet</button></li>
                        <li><button id="car">Car</button></li>
                    </ul>
                </div>

            </div>
            <!--
                <p>
                names: ['adam', 'barb', 'biff', 'hazel', 'ray']<br>
                weapons: ['gauntlet', 'claws', 'lightSaber', 'fork', 'pistol']<br>
                location: ['restaurant', 'beachside', 'apartment101', 'queenJet', 'car']<br></p>
            
                <p>Name:  <input type="text" name="" id="nameIn"><br></p>
                <p>Name:  <input type="text" name="" id="weaponIn"><br></p>
                <p>Name:  <input type="text" name="" id="locationIn"><br></p>
            -->
            <button onclick="takeUserInput('adam', 'claws', 'car')"> Let's Play!</button>

            <div id="results"></div> 
        </div>
        <div class="vignette"></div>


        <!-- JavaScript Animation -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js" integrity="sha512-cdV6j5t5o24hkSciVrb8Ki6FveC2SgwGfLE31+ZQRHAeSRxYhAQskLkq3dLm8ZcWe1N3vBOEYmmbhzf7NTtFFQ==" crossorigin="anonymous"></script>
        <script src="./Styles/app.js"></script>
    </body>
</html>
 <!-- I just realized that the 'whodidit._guess' is one variable

let me just check with chrome
ahh I see got it
-->

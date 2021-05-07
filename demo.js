//setting up test object
const whodidit ={

  //these are arrays of info for the game  
    names: ["A","B","C","D"],
    weapons: ["guitar","chair","toothbrush","chainsaw"],
    location: ["mountain","narnia","parlor","bathroom"],
  //this array is generated on running the program
    gameInstance: [],
//set up array to hold user guesses
    userGuess:[],

  
//this method fills the game instance with the values for this game, this is done by randomly pulling values from arrays
// above and setting to gameInstance[]
    generateInstance(){
       this.gameInstance=[];
       this.gameInstance.push(this.names[Math.floor(Math.random()*this.names.length)])
       this.gameInstance.push(this.weapons[Math.floor(Math.random()*this.weapons.length)]);
       this.gameInstance.push(this.location[Math.floor(Math.random()*this.location.length)]);
        //        
    },
// this is the method that the user plays the game

   _guess(guessName,guessWeapon,guessLocation){
       this.generateInstance();
       //pull user guess from fiels
       this.userGuess[0]=document.getElementById("nameIn").value;
       this.userGuess[1]=document.getElementById("weaponIn").value;
       this.userGuess[2]=document.getElementById("locationIn").value;


       console.log("Thanks for playing");
       console.log(`you think that ${this.userGuess[0]} did it with a ${this.userGuess[1]} in the ${this.userGuess[2]}?`)
      //test if the user got their guess right
        if( guessName === this.gameInstance[0] && guessWeapon === this.gameInstance[1] && guessLocation === this.gameInstance[2]){
            console.log(" Wow")
            console.log(`how did you know that ${guessName} did it with a ${guessWeapon} in the ${guessLocation}`) 
        }else{
            //if the user did not get it right they end up in here
            console.log("Not even close")
            console.log(`how did you not know that ${this.gameInstance[0]} did it with a ${this.gameInstance[1]} in the ${this.gameInstance[2]}`) 
        }
        document.getElementById('results').innerHTML ="<h1> A" + this.userGuess[0]+", A " +this.userGuess[1]+" A " +this.userGuess[1]+"... come on <br>" + "How did you not know that "+ this.gameInstance[0] + " did it with a " + this.gameInstance[1] + " in the " + this.gameInstance[2] + "? </h1>";

   },
 // setting up method m that logs "in m" to the conosle
    m(){
    return console.log("in m")
    },
    l(a){
    // setting up metho m that logs user supplied to the conosle
    console.log(String.fromCharCode(a+97)); 
    },
    guess(name,weapon,location){

    },
}


// you can call these methods by entering testobj.m() or testobj.l(" what ever you want ") in the browser console
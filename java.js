
let img = 1;         //uiterlijk van planeet begint met plaatje 1.
let maxImage = 10;   //hoeveel variaties van planeet.
let minImage = 1;    //het minimale aantal plaatjes.
let vraag = 0;       //op welke vraag de gebruiker is.
let answer = false;  //kijken of de gebruiker het antwoord goed of fout heeft.
let planet = 0;      //hoe goed de gebruiker zijn planeet is.
let done = false;    //of de gebruiker klaar is.

//functie om de uitleg weg te halen.
function start() {
  document.getElementById("uitleg").style.visibility = "hidden";
}
//functie die de planeet beter maakt.
function planetGood() {
  if (img < maxImage) {

    img++;
    let thisImage = "image/" + img + ".png";
    document.getElementById("earth").src = thisImage;
  }
}
//functie die de planeet slechter maakt.
function planetBad() {
  if (img > minImage) {

    img--;
    let thisImage = "image/" + img + ".png";
    document.getElementById("earth").src = thisImage;
  }
}

//als de gebruiker op 1 van de 2 plaatjes drukt kijk welke vraag het moet zijn en verander de plaatjes bijpassend.
anwser.addEventListener("click", function() {

  vraag++;
  if (vraag == 1) {
    document.getElementById("a1").src = "image/cow_1.png";
    document.getElementById("a2").src = "image/sheep.png";
  };


  if (vraag == 2) {
    document.getElementById("a1").src = "image/radiator.png";
    document.getElementById("a2").src = "image/lamp.png";
  };

  if (vraag == 3) {
    document.getElementById("a1").src = "image/car.png";
    document.getElementById("a2").src = "image/bycicle.png";
  };

  if (vraag == 4) {
    document.getElementById("a1").src = "image/douchekoud.png";
    document.getElementById("a2").src = "image/douchewarm.png";
  };

  if (vraag == 5) {
    document.getElementById("a1").src = "image/cow_1.png";
    document.getElementById("a2").src = "image/fish.png";
  };

  if (vraag == 6) {
    document.getElementById("a1").src = "image/bag.png";
    document.getElementById("a2").src = "image/plastic-bag.png";
  };

  if (vraag == 7) {
    document.getElementById("a1").src = "image/recycle-bin.png";
    document.getElementById("a2").src = "image/garbage.png";
  };

  if (vraag == 8) {
    document.getElementById("a1").src = "image/dog.png";
    document.getElementById("a2").src = "image/cat.png";
  };

  if (vraag == 9) {
    document.getElementById("a1").src = "image/green-energy.png";
    document.getElementById("a2").src = "image/energy.png";
  };

  if (vraag == 10) {
    document.getElementById("a1").src = "image/wind-turbine.png";
    document.getElementById("a2").src = "image/solar-energy.png";
  };

//drukt gebruiker op plaatje 1 kijk of hij goed of fout is en verander "anwser" naar het antwoord.
  a1.addEventListener("click", function() {
      document.getElementById("uitleg").style.visibility = "hidden";
    if (done == false) {

      if (vraag == 1) {
        answer = true;
      };
      if (vraag == 2) {
        answer = false;
      };
      if (vraag == 3) {
        answer = false;
      };
      if (vraag == 4) {
        answer = true;
      };
      if (vraag == 5) {
        answer = false;
      };
      if (vraag == 6) {
        answer = true;
      };
      if (vraag == 7) {
        answer = true;
      };
      if (vraag == 8) {
        answer = false;
      };
      if (vraag == 9) {
        answer = true;
      };
      if (vraag == 10) {
        answer = false;
      };
    }
  });
  //drukt gebruiker op plaatje 2 kijk of hij goed of fout is en verander "anwser" naar het antwoord.
  a2.addEventListener("click", function() {
      document.getElementById("uitleg").style.visibility = "hidden";
    if (done == false) {

      if (vraag == 1) {
        answer = false;
      };
      if (vraag == 2) {
        answer = true;
      };
      if (vraag == 3) {
        answer = true;
      };
      if (vraag == 4) {
        answer = false;
      };
      if (vraag == 5) {
        answer = true;
      };
      if (vraag == 6) {
        answer = false;
      };
      if (vraag == 7) {
        answer = false;
      };
      if (vraag == 8) {
        answer = true;
      };
      if (vraag == 9) {
        answer = false;
      };
      if (vraag == 10) {
        answer = true;
      };
    }
  });
  if (answer == true) {
    if (done == false) {

//zorgt ervoor dat de gebruiker niet door kan klikken.
      planetGood();
      if (planet < 100) {
        planet = planet + 10;
      }
    }
  }
  if (answer == false) {
    if (done == false) {

      planetBad();
      if (planet > 0) {
        planet = planet - 10;
      }
    }
  }
  //verteld hoe goed de gebruiker het heeft gedaan.
  document.getElementById("thePlanet").innerHTML = "Jouw planeet voor " + planet + "% milieuvriendelijk!";
  if (vraag > 10) {
    done = true;
  }
  //laat de uitleg terug komen als de gebruiker klaar is.
  if (done == true) {
    document.getElementById("uitleg").style.visibility = "";
  }
});

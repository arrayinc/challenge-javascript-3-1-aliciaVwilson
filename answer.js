// *** YOUR ANSWER BELOW ***

"use strict;"

function beerSong(bottlesOfBeer){
  let song = "";
  let oneBeerDown = "";
  for (let i = bottlesOfBeer; i >= 0; i--){
    oneBeerDown = i - 1;
    song += i + " bottles of beer on the wall " + "\n" + i + " bottles of beer." + "\n" + "You take one down pass it around " + "\n" + oneBeerDown + " bottles of beer on the wall \n";
  }
  return song;
}

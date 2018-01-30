const cardMaker = {
    makeCover: function(front) {
      return `<h2>${front}</h2>`
    },
    makeMessage: function(back) {
        return `<h2>${back}</h2>`
      }
  }
  
//Refactor this to link this object to cardMaker
const birthdayCard = Object.create(cardMaker);
const jobCard = Object.create(cardMaker);
const christmasCard = Object.create(cardMaker);

// Each new object should represent a different type of greeting card, such as birthday or Valentine's Day, with its own unique properties. Output two messages, one from the front and one from the inside of the card, to the console.

birthdayCard.makeCover = "You're another year older...";
birthdayCard.makeMessage = "and that's about it.";
console.log("Birthday Card: " + birthdayCard.makeCover + " " + birthdayCard.makeMessage);

let fullBirth = birthdayCard.makeCover + birthdayCard.makeMessage;

jobCard.makeCover = "I'm so sorry for your loss...";
jobCard.makeMessage = "It's me. I'm retiring.";
console.log("Job Card: " + jobCard.makeCover + " " + jobCard.makeMessage);

let fullJob = jobCard.makeCover + jobCard.makeMessage;

christmasCard.makeCover = "Twas the night before Chistmas, and all through the condo...";
christmasCard.makeMessage = "No one could sleep; neighbors playing their bongo.";
console.log("Christmas Card; " + christmasCard.makeCover + " " + christmasCard.makeMessage);

let fullChrist = christmasCard.makeCover + christmasCard.makeMessage;

const adultBirth = Object.create(birthdayCard);
adultBirth.makeCover = "You want to stop counting these ";
adultBirth.makeMessage = "don't you...";

let fullAdult = adultBirth.makeCover + adultBirth.makeMessage;

document.getElementById("birthday").innerHTML = fullBirth;
document.getElementById("job").innerHTML = fullJob;
document.getElementById("christmas").innerHTML = fullChrist;
document.getElementById("grown").innerHTML = fullAdult;
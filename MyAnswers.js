// #### Episode 1

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// The code should log Miss Scarlett as the murderer, there anren't any scope issues in the above. -- CORRECT


// Episode 2

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// I think this will type error when line 24 attempts to run as it is attempting to change a global variable that was declared a constant. -- CORRECT

// #### Episode 3

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// 1st will return "First Verdict: The murderer is Mrs Peacock" 2nd will return "Second Verdict: The murderer is Professor Plum" -- CORRECT

// #### Episode 4


// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// line 67 logs "The suspects are Miss Scarlet, Professor Plum, Colonel Mustard." line 68 logs "Suspect three is Mrs Peacock." -- CORRECT

// #### Episode 5

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// line 90 will log "The weapon is the Revolver" -- CORRECT

// #### Episode 6


// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// line 115 will log "The murderer is Mrs White" -- CORRECT

// #### Episode 7

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// line 145 will log "The murderer is Miss Scarlet" -- WRONG, Mr Green. line 130 will find the local variable created on line 127 first and change that rather than the global.

// #### Episode 8

// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';

//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }

//     unexpectedOutcome('Colonel Mustard');
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// line 183 will log "The weapon is Candle Stick" -- CORRECT

// #### Episode 9


// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// line 202 will log "The murderer is Professor Plum" -- CORRECT


// EXTENSION

let murderer = 'Chris Redfield';

const pt1ChangeMurderer = function() {
  murderer = 'Frank West';

  const pt1PlotTwist = function() {
    murderer = 'Rick Grimes';

    const pt1UnexpectedOutcome = function() {
      let murderer = 'Norman Reedus';
    }

    pt1UnexpectedOutcome();
  }

  pt1PlotTwist();
}


const pt3ChangeMurderer = function() {
    murderer = 'Karl Pilkington';
    
    const pt3PlotTwist = function() {
        let murderer = 'Carl Jung';
        
        const pt3UnexpectedOutcome = function() {
            murderer = 'Karl Marx';
        }
        
        pt3UnexpectedOutcome();
    }
    
    pt3PlotTwist();
}

const pt2ChangeMurderer = function() {
    murderer = 'Gary Oak';
  
    const pt2PlotTwist = function() {
        murderer = 'Ash Ketchup';
  
      const pt2UnexpectedOutcome = function() {
        murderer = 'Brock the Dwayne Johnson';
      }
  
      pt2UnexpectedOutcome();
    }
  
    pt2PlotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

pt1ChangeMurderer();
pt3ChangeMurderer();
pt3ChangeMurderer();

if (murderer === 'Brock the Dwayne Johnson') {
    let murderer = 'Dwayne the Rock Johnson';
  } else if (murderer === 'Dwayne the Rock Johnson') {
    let murderer = 'Brock the Dwayne Johnson';
  }
  
if (murderer === 'Dwayne the Rock Johnson') {
    let murderer = 'Brock the Dwayne Johnson';
  } else if (murderer === 'Brock the Dwayne Johnson') {
    let murderer = 'Dwayne the Rock Johnson';
  }

const verdict = declareMurderer();
console.log(verdict);
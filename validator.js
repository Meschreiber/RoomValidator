const exampleTourGroup = require('./classDefs.js');

// ASSIGNMENT 1:
function validate(group) {
  // Loop through all of the rooms and check each for rooming rules, if any are untrue, return false for the entire group
  for (var i = 0; i < group.Rooms.length; i++) {
    const room = group.Rooms[i];
    // Only for 2 person rooms, check to see if genders match
    if (room.Occupants.length === 2) {
      if (room.Occupants[0].Gender !== room.Occupants[1].Gender) {
        return false;
      }
    }

    // Check if there are more than five occupants
    if (room.Occupants.length > 5) {
      return false;
    }

    // Create an array of occupant ages, sorted from least to greatest
    const occupantAges = room.Occupants.map(occupant => occupant.Age).sort();
    if (Math.max.apply(null, occupantAges) - Math.min.apply(null, occupantAges) > 10) {
      return false;
    }
  }
  return true;
}

// ASSIGNMENT 2:
class Rule {
  constructor(validatorFcn, failureMessage) {
    this.validatorFcn = validatorFcn; // a function which takes a room as an argument and returns a boolean
    this.failureMessage = failureMessage; // a string description of what is wrong
  }
}

const genderValidator = (room) => {
  if (room.Occupants.length === 2) {
    if (room.Occupants[0].Gender !== room.Occupants[1].Gender) {
      return false;
    }
  }
  return true;
}

const maxOccupancy = room => room.Occupants.length <= 5;
const ageValidator = room => {
  const occupantAges = room.Occupants.map(occupant => occupant.Age).sort();
  if (Math.max.apply(null, occupantAges) - Math.min.apply(null, occupantAges) > 10) {
    return false;
  }
  return true;
}


const genderRule = new Rule(genderValidator, "This is a two occupant room with occupants of different gender.")
const maxOccRule = new Rule(maxOccupancy, "This room has more than 5 occupants.")
const ageRule = new Rule(ageValidator, "The age difference between two or more more occupants is over ten years.")

// the modularValidate function takes a TourGroup object an array of Rule objects
function modularValidate(group, rules) {

  let roomIssues = {};
  // roomIssues is an object where:
  // keys are the room numbers of the tour group
  // values are either an array of string descriptors of issues, or the string 'No issues.'

  // loop though each room in the tourgroup
  for (let i = 0; i < group.Rooms.length; i++) {
    const room = group.Rooms[i];
    // initialize the value for each room to be an empty array
    roomIssues[room.RoomNumber] = [];

    // run each rule validator function on the room
    // if the validator function returns false, push the failureMessage to the roomIssues object
    rules.forEach(rule => {
      if (!rule.validatorFcn(room)) {
        roomIssues[room.RoomNumber].push(rule.failureMessage)
      }
    })

    // if the array is empty after running through tests, change it to the message, "No issues."
    if (!roomIssues[room.RoomNumber].length) {
      roomIssues[room.RoomNumber] = 'No issues.'
    }
  }
  return roomIssues;
}

console.log(modularValidate(exampleTourGroup, [genderRule, maxOccRule, ageRule]));

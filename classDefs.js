class TourGroup {
  constructor(groupId, rooms) {
    this.TourGroupId = groupId;
    this.Rooms = rooms;
  }
}

class Room {
  constructor(roomNumber, occupants) {
    this.RoomNumber = roomNumber;
    this.Occupants = occupants;
  }
}

class Traveler {
  constructor(name, age, gender) {
    this.Name = name;
    this.Age = age;
    this.Gender = gender;
  }
}

// Travelers
const johnA = new Traveler('John Appleseed', 15, 'M');
const jimM = new Traveler('Jim Mapleleaf', 16, 'M');
const jackO = new Traveler('Jack Oakenshield', 15, 'M');
const joakimN = new Traveler('Joakim Noah', 31, 'M');
const johnD = new Traveler('John Doe', 15, 'M');
const janeD = new Traveler('Jane Doe', 15, 'F');
const johnDe = new Traveler('John Dee', 16, 'M');
const jackD = new Traveler('Jack Dee', 17, 'M');
const robb = new Traveler('Robb Stark', 15, 'M');
const jon = new Traveler('Jon Snow', 14, 'M');
const sansa = new Traveler('Sansa Stark', 11, 'F');
const arya = new Traveler('Arya Stark', 9, 'F');
const brandon = new Traveler('Brandon Stark', 7, 'M');
const rickon = new Traveler('Rickon Stark', 3, 'M');

// Rooms
const room101 = new Room(101, [johnA, jimM, jackO, joakimN]);
const room102 = new Room(102, [johnD, janeD]);
const room103 = new Room(103, [johnDe, jackD]);
const winterfell = new Room(104, [robb, jon, sansa, arya, brandon, rickon]);

// Tour Group

const exampleTourGroup = new TourGroup(123456, [room101, room102, room103, winterfell]);

module.exports = exampleTourGroup;

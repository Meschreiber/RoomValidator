# RoomValidator

## ASSIGNMENT 1:
	complete the `validate` method below, using the existing style and patterns, which implement the following rooming rules

	ROOMING RULES:
		1. no two person room may have occupants of a different gender (implemented, mostly correctly)
		2. a room can have no more than 5 occupants (for you to do)
		3. the age difference between occupants in a room cannot exceed 10 years (for you to do)
    
> Other than changing '==' to '===' and '!=' to '!==', I did not make any changes to rule 1 because I didn't catch the issue there.

## ASSIGNMENT 2:
	rewrite the completed `validate` method into a brand new module in such a way that it best fulfills the following criteria:
		1. makes it as easy as possible to understand each rule.
		2. it should also be easy to add remove or modify rules.
		3. the return value should include some descriptive information about the validation issue (not just a boolean)
	feel free to use (or not to use) any ES6 features or external libraries
	please explain your design decisions.
  
  > - I wrote a second version of the validate method called `modularValidate` which takes an array of Rule objects in addition to a Tour Group object.
  > - Because the `modularValidate` takes an array of Rules, it is easy to add or remove them.
  > - Rule objects consist of a validator function and an error message.
  > - The validator function takes a room and returns a boolean.  Doing it this way makes the boolean easier to understand for me.  For example, 
  `const maxOccupancy = room => room.Occupants.length <= 5;` is a simple validator function which returns true if the number of occupants in a room is less than or equal to five.
  > - It is easy to modify rules by modifying either their validator function or error message properties.
  > - Rather than simply returning a value, the `modularValidate` function returns an object, where each key is a room number and its corresponding value is an array of an issues with the current room assignment.  For example:
  
  `{ 	'101': [ 'The age difference between two or more more occupants is over ten years.' ],
  	'102': [ 'This is a two occupant room with occupants of different gender.' ],
  	'103': 'No issues.',
  	'104': [ 'This room has more than 5 occupants.', 'The age difference between two or more more occupants is over ten 			years.' ]
   }
     `
  
### Other notes
- I spent approximately 1 hour and 45 minutes on this assignment, including writing the ReadMe and creating a TourGroup object to run the `validate` and `modularValidate` functions on.
- The `exampleTourGroup` object is similar to the example JSON originally provided in classDefs.js, except that I altered room 103 so that it would pass all tests, and added room 104 to test the max occupany rule.
  
  

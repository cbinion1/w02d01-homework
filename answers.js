//Datatypes:

//1. I would use a Boolean for the light switch as a Boolean is represented by "true" or "false", which 
//would correlate to a switch's on or off.
// 	let lightOn = true;
// //2. The datatype for an user's email adddres would be a string as it may contain letters and numbers
// 	let address = "sunsideup@noemail.com"
// //3.  The datatype for a spaceship would be an object, as different aspects of the ship would be 
// //elements such as lasers, turrets, and other parts of the ship that lend to the individual aspect of the 
// //ship.
// 	const ship = {
// 		lasers: 4,
// 		meson guns: 18,
// 		shields: true
// 	}
// //4. The datatype for a list of student names would be an array.  
// 	let students = ["johnny", "mary", "alf", "frankie"]
// //5. The datatype for a list of student names, each with a location would also be a nested array.
// 	const students1 =[
// 		name: "Maria",
// 		location: "Mars U"
// 	]
// 	[
// 		name: "Francoise"
// 		location: "Schenectady"
// 	]
// 	[
// 		name: "Aloishus"
// 		location: "Eureka"
// 	]
// //6. The datatype for a list of student names, each with a list of location and tv shows would be an array
// //of objects.
// 	const students2 = {
// 		[name: "Chucky",
// 		location: "Behind you",
// 		favoriteMovies: ["Bride of Chucky", "Child's Play", "Child's Play 2"]
// 		]
// 		[name: "Bruce",
// 		location: "Elk Grove",
// 		favoriteMovies: "Evil Dead", "Evil Dead 2", "Ash vs. The Army of Darkness"
// 		]
// 		[name: "Doc Brown",
// 		location: "Hill Valley",
// 		favoriteMovies: "Back to the Future", "Back to the Future 2", "Hill Valley Slasher"]

// 	}

// ///Take It Easy:

// 	let rainbow = ["red", "orange", "yellow", "green", "blue", "indigo" and "violet"];

// 	console.log(rainbow[4]);

// 	const captainAwesomePants = {
// 		favoriteFood: "Italian",
// 		hobby: "Leather working",
// 		location: "Broomfield",
// 		favoriteDataType: "arrays"
// 	}
// 		console.log(captainAwesomePants.hobby);



////Crazy Object:

const crazyObject = {
  taco: [{meat: 'steak', cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken', salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}	
	console.log(crazyObject.taco[1].salsa[5]);

	console.log(crazyObject.larry.quotes[0]);

	console.log(crazyObject.larry.characters[2].favourtieHobby);

	console.log(crazyObject.larry.nicknames[1]);

	console.log(crazyObject.larry.characters[1]);


////Object-Ception:


const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = "Null";

console.log(inception);
































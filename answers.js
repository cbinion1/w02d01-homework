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


////Bond Films:

const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];

let bondTitles = [];

for (let i in bondFilms){
	bondTitles[i] = bondFilms[i].title;
	console.log(bondTitles[i]);
}


let oddBonds = [];

for (let i in bondFilms){
	oddBonds[i] = bondFilms[i].year;
  if (oddBonds[i] % 2 != 0){
	console.log(oddBonds[i]);
  }
}

let totalGrossSum = 0;

for (let i = 0; i< bondFilms.length; i++){
  
  bondFilms[i].gross = bondFilms[i].gross.replace("$", "");
  
  thisString = bondFilms[i].gross.split(",");
  
  thisString2 = thisString.join("");
  
  totalGrossSum += parseInt(thisString2);
}

  console.log(totalGrossSum);






























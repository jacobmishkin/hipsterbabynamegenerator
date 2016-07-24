//Create a baby name generator using arrays, math.random(), the .each() method
'use strict';


//Arrays
var boyNames = ["Atticus", "Auden", "Axel", "Byron", "Castle", "Dexter", "Duke", "Elvis", "Johnny",
		"Gus", "Homer", "Hudson", "Hugo", "Ike", "Kai", "Kingston", "Lennon", "Leopold", "Levi", "Mordechai",
		"Artie", "Magnus", "Luca", "Milo", "Moses", "Nico", "Orson", "Otis", "Roscoe", "Rufus",
		"Sebastian", "Salinger", "Theo", "Stellan", "Waldo", "Edie", "Money", "Frankie", "Otto Von", "Colton",
		"Edison", "Ryder", "Dustin", "Matteo", "Ace", "Django", "Julian", "Kale", "Plum", "Fitzgerald",
		"Bolton", "West", "Austin", "Portland", "Silver Lake", "Watt", "Brooklyn", "Key", "Blaine",
		"Web", "Freedom", "DeGrasse", "Story", "Rage", "Arte", "Arete", "Poe", "Eone", "Data", "Riker",
		"Que", "Ceviche", "Thor", "Sprit", "Kool", "Brax", "Cobi", "Pitchfork", "Ascot", "Growler"
];

var middleNames = ["Polariod", "Suspenders", "Potato Sack", "Sparkles", "Loft", "Paradox", "Co-Op", "Castle", "Herb Garden",
		"burlap", "Meta", "NPR", "El Train", "Acoustic Lollipop", "Ascot", "5C", "Pitty the foo", "Soy Latte", "Middle Name", "Lwaxana", "Raven", "Walk Up", "Vinyl", "Trust Fund", "Food Truck",
];

var girlNames = ["Margo", "Sprit", "Breukyinne",  "Rain", "Apple", "Miri", "Adley", "Remedy", "Sun", "Elarose", "Rogue", "Amory",
		"Klynn", "Mishka", "Breah", "Saffron", "Bella", "Zoe", "Adi", "Shelly", "Osnat", "Anais",
		"Aubrey", "Beatrix", "Sage", "Blair", "Callie", "Clementine", "Siri", "Clover", "Daisy", "Delilah",
		"Ethel", "Etta", "Flora", "Iris", "Ilsa", "Margerine", "Adira", "Amable", "Anabelle", "Ambrosia",
		"Anouk", "Dolly", "Zohar", "Maybell", "Electra", "Finola", "Tal", "Valentine", "Paz", "Dot", "Tea", "Pitchfork",
		"PBR", "Marmalade", "Coachella",
];

//print function
function print(message) {
		var divOutput = document.getElementById("baby_name");
		divOutput.innerText = message;
}

//counter var for nameGenerator function
var count = -1;

//array function cycle through arrays and radio controls. 
function nameGenerator() {
				//var set 
				var lastName = document.getElementById('lastname').value;
				var radioBoy = document.getElementById('male');
				var radioGirl = document.getElementById('female');
				
				if (radioBoy.checked) {

					return	boyNames[++count % boyNames.length] + " " + middleNames[++count % middleNames.length] + " " + lastName;
				} else if (radioGirl.checked) {

					return girlNames[++count % girlNames.length] +  " "  + middleNames[++count % middleNames.length] +  " " + lastName;
				}else{
					return "Oh you Gender bending badass you!";
				}
}

//click function for button
$('#button').click(function() {
		print(nameGenerator());
});













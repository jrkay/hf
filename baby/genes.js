/*
EXTENSION:
EE - bay [Unused at this time until official testing]
Ee - bay
ee - chestnut / no black points

AGOUTI:
AA - bay / chestnut [Unused at this time until official testing]
Aa - bay / chestnut
aa - black

DUN:
DD - dun
Dd - dun
dd - non-dun

CREAM:
CrCr - double dilutes
CCr - single dilutes
CC - non-cream

CHAMPAGNE:
CHCH - champagne
Chch - champagne
chch - non-champagne

SILVER:
ZZ - silver dapple
Zz - silver dapple
zz - non-silver

PEARL:
Not used due to breed restrictions

GREY:
GG - grey
Gg - grey
gg - non-grey

palomino
buckskin
perlino
cremello
smokeyblack
smokeycream

*/
function formSubmit() {

var sireColor1 = document.getElementById('sire').value;
var damColor1 = document.getElementById('dam').value;

console.log("sire: " + sireColor1);
console.log("dam: " + damColor1);

sireGeno = parentGeno(sireColor1);
damGeno = parentGeno(damColor1);
coat = babyGeno(sireGeno,damGeno);

//var originalAgouti = ["AA", "Aa", "aa"];
//originalAgouti.splice(0, 1);
//console.log(originalAgouti);

console.log(damGeno);
console.log(sireGeno);
console.log(coat);


/*	// shuffle allele arrays
	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }
	  return array;
	} */

	// determine parent genotypes
	function parentGeno(color) {

		var defaultGeno = ['Ee', 'Aa', 'dd', 'chch', 'zz', 'CC']; // generic bay

		var extension = ["EE", "Ee", "ee"],
			agouti = ["AA", "Aa", "aa"],
			dun = ["DD", "Dd", "dd"];

		switch (color) {
			case "bay":
				extension.splice(2,1);
				agouti.splice(2,1);
				defaultGeno[0] = extension[Math.floor(Math.random() * extension.length)];
				defaultGeno[1] = agouti[Math.floor(Math.random() * agouti.length)]; 
				defaultGeno[2] = "dd"; 
			break;
			case "chestnut":
				defaultGeno[1] = agouti[Math.floor(Math.random() * agouti.length)]; 
				defaultGeno[0] = "ee"; 
				defaultGeno[2] = "dd"; 
			break;
			case "black":
				extension.splice(2,1);
				defaultGeno[0] = extension[Math.floor(Math.random() * extension.length)]; 
				defaultGeno[1] = "aa"; 
				defaultGeno[2] = "dd"; 	
			break;
			case "baydun":
				extension.splice(2,1);
				agouti.splice(2,1);
				dun.splice(2,1);
				defaultGeno[0] = extension[Math.floor(Math.random() * extension.length)]; 
				defaultGeno[1] = agouti[Math.floor(Math.random() * agouti.length)]; 
				defaultGeno[2] = dun[Math.floor(Math.random() * dun.length)]; 
			break;
			case "reddun":
				dun.splice(2,1);
				defaultGeno[0] = "ee";
				defaultGeno[1] = agouti[Math.floor(Math.random() * agouti.length)];  
				defaultGeno[2] = dun[Math.floor(Math.random() * dun.length)]; 
			break;
			case "grullo":
				extension.splice(2,1);
				dun.splice(2,1);
				defaultGeno[0] = extension[Math.floor(Math.random() * extension.length)]; 
				defaultGeno[1] = "aa"; 
				defaultGeno[2] = dun[Math.floor(Math.random() * dun.length)]; 
			break;
		}

		return defaultGeno;
	}

	// determine foal genotype
	function babyGeno(sire, dam) {

		var finalGeno = ['Ee', 'Aa', 'dd', 'chch', 'zz', 'CC']; // generic bay
		var extension = ["EE", "Ee", "ee"],
			agouti = ["AA", "Aa", "aa"],
			dun = ["DD", "Dd", "dd"];

		// E gene
		if (sire[0] == "ee" && dam[0] == "ee"){
			finalGeno[0] = "ee";
		} else if (sire[0] == "EE" && dam[0] == "EE"){
			finalGeno[0] = "EE";
		} else if ((sire[0] == "EE" || dam[0] == "EE") && (sire[0] == "ee" || dam[0] == "ee")){
			finalGeno[0] = "Ee";
		} else if (sire[0] == "EE" || dam[0] == "EE"){
			extension.splice(2,1);
			finalGeno[0] = extension[Math.floor(Math.random() * extension.length)];
		} else if (sire[0] == "ee" || dam[0] == "ee"){
			extension.splice(0,1);
			finalGeno[0] = extension[Math.floor(Math.random() * extension.length)];
		} else {
			finalGeno[0] = extension[Math.floor(Math.random() * extension.length)];
		}

		// A gene
		if (sire[1] == "aa" && dam[1] == "aa"){
			finalGeno[1] = "aa";
		} else if (sire[1] == "AA" && dam[1] == "AA"){
			finalGeno[1] = "AA";
		} else if ((sire[1] == "AA" || dam[1] == "AA") && (sire[1] == "aa" || dam[1] == "aa")){
			finalGeno[1] = "Aa";
		} else if (sire[1] == "AA" || dam[1] == "AA"){
			agouti.splice(2,1);
			finalGeno[1] = agouti[Math.floor(Math.random() * agouti.length)];
		} else if (sire[1] == "aa" || dam[1] == "aa"){
			agouti.splice(0,1);
			finalGeno[1] = agouti[Math.floor(Math.random() * agouti.length)];
		} else {
			finalGeno[1] = agouti[Math.floor(Math.random() * agouti.length)];
		}
			
		// D gene
		if (sire[2] == "dd" && dam[1] == "dd"){
			finalGeno[2] = "dd";
		} else if (sire[2] == "DD" && dam[2] == "DD"){
			finalGeno[2] = "DD";
		} else if ((sire[2] == "DD" || dam[2] == "DD") && (sire[2] == "dd" || dam[2] == "dd")){
			finalGeno[2] = "Dd";
		} else if (sire[2] == "DD" || dam[2] == "DD"){
			dun.splice(2,1);
			finalGeno[2] = dun[Math.floor(Math.random() * dun.length)];
		} else if (sire[2] == "dd" || dam[1] == "dd"){
			dun.splice(0,1);
			finalGeno[2] = dun[Math.floor(Math.random() * dun.length)];
		} else {
			finalGeno[2] = dun[Math.floor(Math.random() * dun.length)];
		}

			return finalGeno;
	}

	// Text color from geno
	function babyCoat (genotype){
		// do something
	}

}

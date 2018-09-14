/*
2018 - Until genotypes are in IDHorse, no homozygous dominat used for most breeds

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

//TRY JUST RETURNING A RANDOMIZED VALUE???
// var rand = myArray[Math.floor(Math.random() * myArray.length)];

		var extension = ["EE", "Ee", "ee"],
			agouti = ["AA", "Aa", "aa"];

		switch (color) {
			case "bay":
				agouti.splice(2,1);
				extension.splice(2,1);
				defaultGeno[0] = extension[Math.floor(Math.random() * extension.length)];
				defaultGeno[1] = agouti[Math.floor(Math.random() * agouti.length)]; // we don't care about A
			break;
			case "chestnut":
				defaultGeno[1] = agouti[Math.floor(Math.random() * agouti.length)]; // we don't care about A
				defaultGeno[0] = "ee"; // jk, only one option
			break;
			case "black":
				extension.splice(2,1);
				defaultGeno[0] = extension[Math.floor(Math.random() * extension.length)]; // E needs to have one dominant
				defaultGeno[1] = "aa"; // jk, only one option
			break;
		}

		return defaultGeno;
	}

	// determine foal genotype
	function babyGeno(sire, dam) {

		var finalGeno = ['Ee', 'Aa', 'dd', 'chch', 'zz', 'CC']; // generic bay
		var extension = ["EE", "Ee", "ee"],
			agouti = ["AA", "Aa", "aa"];

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
			return finalGeno;
	}

}



//figure out how to return a changed array from above function! assign sire and dam variables? how to get 2 saved separetley?
// console.log(defaultGeno);
/*
			for (var i=agouti.length-1; i>=0; i--) {
			    if (agouti[i] === "aa") {
			        agouti.splice(i, 1);
			        break;
			    }
			}
			finalGeno[1] = shuffle(agouti)[1];

			*/
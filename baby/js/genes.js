/*
EXTENSION:
EE - bay
Ee - bay
ee - chestnut

AGOUTI:
AA - bay / chestnut
Aa - bay / chestnut
aa - black

DUN:
DD - dun
Dd - dun
dd - non-dun
* Dun + bay: Bay Dun
* Dun + black: Grullo
* Dun + chesntut: Red Dun

CREAM:
CrCr - double dilutes
CCr - single dilutes
CC - non-cream
palomino
buckskin
perlino
cremello
smokeyblack
smokeycream

CHAMPAGNE:
CHCH - champagne
Chch - champagne
chch - non-champagne
* Champagne + Bay: Amber
* Champagne + Black: Classic
* Champagne + Chestnut: Gold

SILVER: Only affects non-chestnut: Rare enough to not warrant time to add red carriers
ZZ - silver dapple
Zz - silver dapple
zz - non-silver

PEARL:
Unused currently due to breed restrictions/rarity

GREY:
GG - grey
Gg - grey
gg - non-grey

TODO: D interaction, Ch interaction, Z interaction
add G -??? babyCoat? make it an overlay and return 'grey (?? base coat)'
*/
function formSubmit() {

	var sireColor = document.getElementById('sire').value;
	var damColor = document.getElementById('dam').value;

	// Non-interfering
	var grey = ["GG", "Gg"];

	sireGeno = parentGeno(sireColor);
	if (document.getElementById("greySire").checked) sireGeno[6] = grey[Math.floor(Math.random() * grey.length)];

	damGeno = parentGeno(damColor);
	if (document.getElementById("greyDam").checked) damGeno[6] = grey[Math.floor(Math.random() * grey.length)];

	foalGeno = babyGeno(sireGeno,damGeno);
	foalCoat = babyCoat(foalGeno);

	console.log("Sire: " + sireColor + " - " + sireGeno);
	console.log("Dam: " + damColor + " - " + damGeno);
	console.log("Baby: " + foalCoat + " - " + foalGeno);

	// determine parent genotypes
	function parentGeno(color) {

		var defaultGeno = ['Ee', 'Aa', 'dd', 'chch', 'zz', 'CC', 'gg']; // 'Generic' bay

		var extension = ["EE", "Ee", "ee"], // Controls true black formation
			agouti = ["AA", "Aa", "aa"], // Controls true black expression
			dun = ["DD", "Dd", "dd"];
			champagne = ["ChCh", "Chch", "chch"];
			silver = ["ZZ", "Zz", "zz"];
			cream = ["CrCr", "CCr", "CC"];

		switch (color) {
			case "bay": // Must contain one dominant 'E' and 'A'
				extension.splice(2,1);
				defaultGeno[0] = extension[Math.floor(Math.random() * extension.length)];
				agouti.splice(2,1);
				defaultGeno[1] = agouti[Math.floor(Math.random() * agouti.length)];
				defaultGeno[2] = "dd";
				defaultGeno[3] = "chch";
				defaultGeno[4] = "zz";
				defaultGeno[5] = "CC";
			break;
			case "black": // Must contain 'aa' and one dominant 'E'
				extension.splice(2,1);
				defaultGeno[0] = extension[Math.floor(Math.random() * extension.length)];
				defaultGeno[1] = "aa";
				defaultGeno[2] = "dd";
				defaultGeno[3] = "chch";
				defaultGeno[4] = "zz";
				defaultGeno[5] = "CC";
			break;
			case "chestnut": // Must contain 'ee', 'A' does not matter
				defaultGeno[0] = "ee";
				defaultGeno[1] = agouti[Math.floor(Math.random() * agouti.length)];
				defaultGeno[2] = "dd";
				defaultGeno[3] = "chch";
				defaultGeno[4] = silver[Math.floor(Math.random() * silver.length)]; // Red-based can CARRY z but not express it
				defaultGeno[5] = "CC";
			break;

			case "baydun": // 'D' on bay
				extension.splice(2,1);
				defaultGeno[0] = extension[Math.floor(Math.random() * extension.length)];
				agouti.splice(2,1);
				defaultGeno[1] = agouti[Math.floor(Math.random() * agouti.length)];
				dun.splice(2,1);
				defaultGeno[2] = dun[Math.floor(Math.random() * dun.length)];
				defaultGeno[3] = "chch";
				defaultGeno[4] = "zz";
				defaultGeno[5] = "CC";
			break;
			case "grullo": // 'D' on black
				extension.splice(2,1);
				defaultGeno[0] = extension[Math.floor(Math.random() * extension.length)];
				defaultGeno[1] = "aa";
				dun.splice(2,1);
				defaultGeno[2] = dun[Math.floor(Math.random() * dun.length)];
				defaultGeno[3] = "chch";
				defaultGeno[4] = "zz";
				defaultGeno[5] = "CC";
			break;
			case "reddun": // 'D' on chestnut
				defaultGeno[0] = "ee";
				defaultGeno[1] = agouti[Math.floor(Math.random() * agouti.length)]; 
				dun.splice(2,1);
				defaultGeno[2] = dun[Math.floor(Math.random() * dun.length)];
				defaultGeno[3] = "chch";
				defaultGeno[4] = silver[Math.floor(Math.random() * silver.length)];
				defaultGeno[5] = "CC";
			break;

			case "amberchampagne": // 'Ch' on bay
				extension.splice(2,1);
				defaultGeno[0] = extension[Math.floor(Math.random() * extension.length)];
				agouti.splice(2,1);
				defaultGeno[1] = agouti[Math.floor(Math.random() * agouti.length)];
				defaultGeno[2] = "dd";
				champagne.splice(2,1);
				defaultGeno[3] = champagne[Math.floor(Math.random() * champagne.length)];
				defaultGeno[4] = "zz";
				defaultGeno[5] = "CC";
			break;
			case "classicchampagne": // 'Ch' on black
				extension.splice(2,1);
				defaultGeno[0] = extension[Math.floor(Math.random() * extension.length)];
				defaultGeno[1] = "aa";
				defaultGeno[2] = "dd";
				champagne.splice(2,1);
				defaultGeno[3] = champagne[Math.floor(Math.random() * champagne.length)];
				defaultGeno[4] = "zz";
				defaultGeno[5] = "CC";
			break;
			case "goldchampagne": // 'Ch' on chestnut
				defaultGeno[0] = "ee";
				defaultGeno[1] = agouti[Math.floor(Math.random() * agouti.length)]; 
				defaultGeno[2] = "dd";
				champagne.splice(2,1);
				defaultGeno[3] = champagne[Math.floor(Math.random() * champagne.length)];
				defaultGeno[4] = silver[Math.floor(Math.random() * silver.length)];
				defaultGeno[5] = "CC";
			break;

			case "baysilver": // 'Z' on bay
				extension.splice(2,1);
				defaultGeno[0] = extension[Math.floor(Math.random() * extension.length)];
				agouti.splice(2,1);
				defaultGeno[1] = agouti[Math.floor(Math.random() * agouti.length)];
				defaultGeno[2] = "dd";
				defaultGeno[3] = "chch";
				silver.splice(2,1);
				defaultGeno[4] = silver[Math.floor(Math.random() * silver.length)];
				defaultGeno[5] = "CC";
			break;
			case "blacksilver": // 'Z' on black
				extension.splice(2,1);
				defaultGeno[0] = extension[Math.floor(Math.random() * extension.length)];
				defaultGeno[1] = "aa";
				defaultGeno[2] = "dd";
				defaultGeno[3] = "chch";
				silver.splice(2,1);
				defaultGeno[4] = silver[Math.floor(Math.random() * silver.length)];
				defaultGeno[5] = "CC";
			break;

			case "buckskin": // 'Cr' on bay
				extension.splice(2,1);
				defaultGeno[0] = extension[Math.floor(Math.random() * extension.length)];
				agouti.splice(2,1);
				defaultGeno[1] = agouti[Math.floor(Math.random() * agouti.length)];
				defaultGeno[2] = "dd";
				defaultGeno[3] = "chch";
				defaultGeno[4] = "zz";
				defaultGeno[5] = "CCr";
			break;
			case "smokyblack": // 'Cr' on black
				extension.splice(2,1);
				defaultGeno[0] = extension[Math.floor(Math.random() * extension.length)];
				defaultGeno[1] = "aa";
				defaultGeno[2] = "dd";
				defaultGeno[3] = "chch";
				defaultGeno[4] = "zz";
				defaultGeno[5] = "CCr";
			break;
			case "palomino": // 'Cr' on chestnut
				defaultGeno[0] = "ee";
				defaultGeno[1] = agouti[Math.floor(Math.random() * agouti.length)];
				defaultGeno[2] = "dd";
				defaultGeno[3] = "chch";
				defaultGeno[4] = silver[Math.floor(Math.random() * silver.length)];
				defaultGeno[5] = "CCr";
			break;
			case "cremello": // Double dilute on bay
				extension.splice(2,1);
				defaultGeno[0] = extension[Math.floor(Math.random() * extension.length)];
				agouti.splice(2,1);
				defaultGeno[1] = agouti[Math.floor(Math.random() * agouti.length)];
				defaultGeno[2] = "dd";
				defaultGeno[3] = "chch";
				defaultGeno[4] = "zz";
				defaultGeno[5] = "CrCr";
			break;
			case "smokycream": // Double dilute on black
				extension.splice(2,1);
				defaultGeno[0] = extension[Math.floor(Math.random() * extension.length)];
				defaultGeno[1] = "aa";
				defaultGeno[2] = "dd";
				defaultGeno[3] = "chch";
				defaultGeno[4] = "zz";
				defaultGeno[5] = "CrCr";
			break;
			case "perlino": // Double dilute on chestnut
				defaultGeno[0] = "ee";
				defaultGeno[1] = agouti[Math.floor(Math.random() * agouti.length)];
				defaultGeno[2] = "dd";
				defaultGeno[3] = "chch";
				defaultGeno[4] = silver[Math.floor(Math.random() * silver.length)];
				defaultGeno[5] = "CrCr";
			break;
		}

		return defaultGeno;
	}

	// Determine foal genotype
	function babyGeno(sire, dam) {

		var finalGeno = ['Ee', 'Aa', 'dd', 'chch', 'zz', 'CC', 'gg']; // 'Generic' bay
		var extension = ["EE", "Ee", "ee"],
			agouti = ["AA", "Aa", "aa"],
			dun = ["DD", "Dd", "dd"];
			grey = ["GG", "Gg", "gg"];

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
		if (sire[2] == "dd" && dam[2] == "dd"){
			finalGeno[2] = "dd";
		} else if (sire[2] == "DD" && dam[2] == "DD"){
			finalGeno[2] = "DD";
		} else if ((sire[2] == "DD" || dam[2] == "DD") && (sire[2] == "dd" || dam[2] == "dd")){
			finalGeno[2] = "Dd";
		} else if (sire[2] == "DD" || dam[2] == "DD"){
			dun.splice(2,1);
			finalGeno[2] = dun[Math.floor(Math.random() * dun.length)];
		} else if (sire[2] == "dd" || dam[2] == "dd") {
			dun.splice(0,1);
			finalGeno[2] = dun[Math.floor(Math.random() * dun.length)];
		} else {
			finalGeno[2] = dun[Math.floor(Math.random() * dun.length)];
		}

		// Ch gene
		if (sire[3] == "chch" && dam[3] == "chch"){
			finalGeno[3] = "chch";
		} else if (sire[3] == "ChCh" && dam[3] == "ChCh"){
			finalGeno[3] = "ChCh";
		} else if ((sire[3] == "ChCh" || dam[3] == "ChCh") && (sire[3] == "chch" || dam[3] == "chch")){
			finalGeno[3] = "Dd";
		} else if (sire[3] == "ChCh" || dam[3] == "ChCh"){
			champagne.splice(2,1);
			finalGeno[3] = champagne[Math.floor(Math.random() * champagne.length)];
		} else if (sire[3] == "chch" || dam[3] == "chch") {
			champagne.splice(0,1);
			finalGeno[3] = champagne[Math.floor(Math.random() * champagne.length)];
		} else {
			finalGeno[3] = champagne[Math.floor(Math.random() * champagne.length)];
		}

		// Z gene
		if (sire[4] == "zz" && dam[4] == "zz"){
			finalGeno[4] = "zz";
		} else if (sire[4] == "ZZ" && dam[4] == "ZZ"){
			finalGeno[4] = "ZZ";
		} else if ((sire[4] == "ZZ" || dam[4] == "ZZ") && (sire[4] == "zz" || dam[4] == "zz")){
			finalGeno[4] = "Dd";
		} else if (sire[4] == "ZZ" || dam[4] == "ZZ"){
			silver.splice(2,1);
			finalGeno[4] = silver[Math.floor(Math.random() * silver.length)];
		} else if (sire[4] == "zz" || dam[4] == "zz") {
			silver.splice(0,1);
			finalGeno[4] = silver[Math.floor(Math.random() * silver.length)];
		} else {
			finalGeno[4] = silver[Math.floor(Math.random() * silver.length)];
		}

		// Single Cr gene
		if (sire[5] == "CC" && dam[5] == "CC"){
			finalGeno[5] = "CC";
		} else if (sire[5] == "CrCr" && dam[5] == "CrCr"){
			finalGeno[5] = "CrCr";
		} else if ((sire[5] == "CrCr" || dam[5] == "CrCr") && (sire[5] == "CC" || dam[5] == "CC")){
			finalGeno[5] = "CCr";
		} else if (sire[5] == "CrCr" || dam[5] == "CrCr"){
			cream.splice(2,1);
			finalGeno[5] = cream[Math.floor(Math.random() * cream.length)];
		} else if (sire[5] == "CC" || dam[5] == "CC") {
			cream.splice(0,1);
			finalGeno[5] = cream[Math.floor(Math.random() * cream.length)];
		} else {
			finalGeno[5] = cream[Math.floor(Math.random() * cream.length)];
		}

		// 'G' gene
		if (sire[6] == "gg" && dam[6] == "gg"){
			finalGeno[6] = "gg";
		} else if (sire[6] == "GG" && dam[6] == "GG"){
			finalGeno[6] = "GG";
		} else if ((sire[6] == "GG" || dam[6] == "GG") && (sire[6] == "gg" || dam[6] == "gg")){
			finalGeno[6] = "Gg";
		} else if (sire[6] == "GG" || dam[6] == "GG"){
			grey.splice(2,1);
			finalGeno[6] = grey[Math.floor(Math.random() * grey.length)];
		} else if (sire[6] == "gg" || dam[6] == "gg") {
			grey.splice(0,1);
			finalGeno[6] = grey[Math.floor(Math.random() * grey.length)];
		} else {
			finalGeno[6] = grey[Math.floor(Math.random() * grey.length)];
		}

		return finalGeno;
	}

	// Determine foal phenotype
	// Best way to compare?
	function babyCoat (genotype){
		var coat;

		switch (genotype.toString()){
			case 'Ee,Aa,dd,chch,zz,CC':
			case 'Ee,AA,dd,chch,zz,CC':
			case 'EE,Aa,dd,chch,zz,CC':
			case 'EE,AA,dd,chch,zz,CC':
				coat = "Bay";
				break;
			case 'Ee,aa,dd,chch,zz,CC':
			case 'EE,aa,dd,chch,zz,CC':
				coat = "Black";
				break;
			case 'ee,aa,dd,chch,zz,CC':
			case 'ee,Aa,dd,chch,zz,CC':
			case 'ee,AA,dd,chch,zz,CC':
				coat = "Chestnut";
				break;

			case 'Ee,Aa,DD,chch,zz,CC':
			case 'Ee,Aa,Dd,chch,zz,CC':
			case 'Ee,AA,DD,chch,zz,CC':
			case 'Ee,AA,Dd,chch,zz,CC':
			case 'EE,Aa,DD,chch,zz,CC':
			case 'EE,Aa,Dd,chch,zz,CC':
			case 'EE,AA,DD,chch,zz,CC':
			case 'EE,AA,Dd,chch,zz,CC':
				coat = "Bay Dun";
				break;
			case 'Ee,aa,DD,chch,zz,CC':
			case 'Ee,aa,Dd,chch,zz,CC':
			case 'EE,aa,DD,chch,zz,CC':
			case 'EE,aa,Dd,chch,zz,CC':
				coat = "Grullo";
				break;
			case 'ee,aa,DD,chch,zz,CC':
			case 'ee,aa,Dd,chch,zz,CC':
			case 'ee,Aa,DD,chch,zz,CC':
			case 'ee,Aa,Dd,chch,zz,CC':
			case 'ee,AA,DD,chch,zz,CC':
			case 'ee,AA,Dd,chch,zz,CC':
				coat = "Red Dun";
				break;

			case 'Ee,Aa,dd,ChCh,zz,CC':
			case 'Ee,Aa,dd,Chch,zz,CC':
			case 'Ee,AA,dd,ChCh,zz,CC':
			case 'Ee,AA,dd,Chch,zz,CC':
			case 'EE,Aa,dd,ChCh,zz,CC':
			case 'EE,Aa,dd,Chch,zz,CC':
			case 'EE,AA,dd,ChCh,zz,CC':
			case 'EE,AA,dd,Chch,zz,CC':
				coat = "Amber Champagne";
				break;
			case 'Ee,aa,dd,ChCh,zz,CC':
			case 'Ee,aa,dd,Chch,zz,CC':
			case 'EE,aa,dd,ChCh,zz,CC':
			case 'EE,aa,dd,Chch,zz,CC':
				coat = "Classic Champagne";
				break;
			case 'ee,aa,dd,ChCh,zz,CC':
			case 'ee,aa,dd,Chch,zz,CC':
			case 'ee,Aa,dd,ChCh,zz,CC':
			case 'ee,Aa,dd,Chch,zz,CC':
			case 'ee,AA,dd,ChCh,zz,CC':
			case 'ee,AA,dd,Chch,zz,CC':
				coat = "Gold Champagne";
				break;

			case 'Ee,Aa,dd,chch,ZZ,CC':
			case 'Ee,Aa,dd,chch,Zz,CC':
			case 'Ee,AA,dd,chch,ZZ,CC':
			case 'Ee,AA,dd,chch,Zz,CC':
			case 'EE,Aa,dd,chch,ZZ,CC':
			case 'EE,Aa,dd,chch,Zz,CC':
			case 'EE,AA,dd,chch,ZZ,CC':
			case 'EE,AA,dd,chch,Zz,CC':
				coat = "Bay Silver";
				break;
			case 'Ee,aa,dd,chch,ZZ,CC':
			case 'Ee,aa,dd,chch,Zz,CC':
			case 'EE,aa,dd,chch,ZZ,CC':
			case 'EE,aa,dd,chch,Zz,CC':
				coat = "Black Silver";
				break;

			case 'ee,aa,dd,chch,zz,CCr':
			case 'ee,Aa,dd,chch,zz,CCr':
			case 'ee,AA,dd,chch,zz,CCr':
				coat = "Palomino";
				break;
			case 'Ee,Aa,dd,chch,zz,CCr':
			case 'Ee,AA,dd,chch,zz,CCr':
			case 'EE,Aa,dd,chch,zz,CCr':
			case 'EE,AA,dd,chch,zz,CCr':
				coat = "Buckskin";
				break;
			case 'Ee,aa,dd,chch,zz,CCr':
			case 'EE,aa,dd,chch,zz,CCr':
				coat = "Smoky Black";
				break;
			case 'ee,aa,dd,chch,zz,CrCr':
			case 'ee,Aa,dd,chch,zz,CrCr':
			case 'ee,AA,dd,chch,zz,CrCr':
				coat = "Perlino";
				break;
			case 'Ee,Aa,dd,chch,zz,CrCr':
			case 'Ee,AA,dd,chch,zz,CrCr':
			case 'EE,Aa,dd,chch,zz,CrCr':
			case 'EE,AA,dd,chch,zz,CrCr':
				coat = "Cremello";
				break;
			case 'Ee,aa,dd,chch,zz,CrCr':
			case 'EE,aa,dd,chch,zz,CrCr':
				coat = "Smoky Cream";
				break;

			default:
				coat = "Who Knows";
		}
		if (genotype[6] == 'GG' || genotype[6] == 'Gg') coat = "Grey";

			return coat;
	}

	function addPattern(){
		// do stuff; Second drop-down on site (base color doesn't change)
	}
}

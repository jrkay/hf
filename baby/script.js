/*jslint browser: true */
function showDiv() {

    if (document.getElementById("sire").value === "0" || document.getElementById("dam").value === "0") {
        document.getElementById('errorDiv').style.display = "block";
    } else {
        document.getElementById('welcomeDiv').style.display = "block";
        document.getElementById('errorDiv').style.display = "none";
    }
}

function formSubmit() {
    var foalColor,
        foalGender,
        foalQuirk,
        sireColor = document.getElementById('sire').value,
        damColor = document.getElementById('dam').value,
        quirk = ['who loves to eat blankets',
            'who is best friends with a bunny',
            'who is afraid of hats',
            'who enjoys digging holes',
            'who is very good at faking a limp',
            'who would do anything for a treat',
            'who thinks tall horses look dumb',
            'who just wants to party',
            'who just wants to take a nap',
            "who can't really figure out how a hose works",
            'who loves peppermint',
            'who is terrified of squirrels',
            'who really likes the color purple',
            'who is a bit of a drama queen',
            'who hangs around mom too much',
            'who likes listening to Classical music on the radio',
            "who doesn't like the beeps cell phones make",
            'who is fascinated with their reflection',
            'who calls constantly to the others',
            'who is afraid of the dark',
            'who trips over branches',
            'who tries to be the stable clown',
            'who catches the eye of all the visitors',
            'who enjoys large mud puddles more than anything',
            'who thinks they can see ghosts',
            'who thinks they are a human-whisperer',
            'who is unusually good at bucking',
            'who insists their halter matches their mane',
            'who can drink out of a straw',
            'who tries to lick everything',
            'who is already skilled at pirouettes',
            'who pouts a lot',
            "who can't keep their front feet on the ground",
            'who is terrified of cats',
            "who doesn't have a good attention span",
            'who is a bit of a bully',
            'who has already tried to jump the fence',
            "who doesn't trust kids",
            'who is trying very hard to please mom',
            'who gets worried easily',
            "who can't concentrate very well",
            'who already figured out Algebra',
            "who acts like they're retired",
            'who is quite enthusiastic about jumping over water',
            'who would look good in a cape'
			];

// Solids
    var bayBay = ['Bay', 'Black', 'Chestnut'],
        blackBlack = ['Black', 'Chestnut'],
        chestnutChestnut = ['Chestnut'],
// Single Creams
        palominoPalomino = ['Palomino', 'Chestnut', 'Cremello'],
        palominoChestnut = ['Palomino', 'Chestnut'],
        palominoBay = ['Black', 'Bay', 'Smokey Black', 'Buckskin', 'Palomino', 'Chestnut'],
        smblBlack = ['Black', 'Chestnut', 'Smokey Black', 'Palomino'],
        singleDilutes = ['Black', 'Bay', 'Smokey Black', 'Buckskin', 'Palomino', 'Chestnut', 'Smokey Cream', 'Perlino', 'Cremello'],
// Double Creams
        doubleSmoke = ['Black', 'Chestnut', 'Smokey Black', 'Palomino', 'Smokey Cream', 'Cremello'],
        singleDouble = ['Perlino', 'Cremello', 'Palomino', 'Buckskin', 'Smokey Cream', 'Smokey Black'],
        palominoCremello = ['Palomino', 'Cremello'],
        smokeCream = ['Smokey Black', 'Palomino', 'Smokey Cream', 'Cremello'],
        doubleDilute = ['Smokey Cream', 'Perlino', 'Cremello'],
        cremCrem = ['Cremello'],
        screamScream = ['Smokey Cream', 'Cremello'],
        noneDouble = ['Smokey Black', 'Buckskin', 'Palomino'],
        blackSmokeC = ['Smokey Black', 'Palomino'],
        chestCrem = ['Palomino'];

    function mixColor(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function mixGender() {
        var randomNum;
        randomNum = !!Math.round(Math.random() * 1);
        if (!randomNum) {
            return 'Filly';
        }
        return 'Colt';
    }

/*
 Bay x Bay
 Bay x Black, Black x Bay
 Bay x Chestnut, Chestnut x  Bay
 Chestnut x Black, Black x Chestnut
 */
    if ((sireColor === 'bayS' && damColor === 'bayD') || (sireColor === 'blackS' && damColor === 'blackD') || (sireColor === 'bayS' && damColor === 'blackD') || (sireColor === 'blackS' && damColor === 'bayD') || (sireColor === 'bayS' && damColor === 'chestnutD') || (sireColor === 'chestnutS' && damColor === 'bayD') || (sireColor === 'chestnutS' && damColor === 'blackD') || (sireColor === 'blackS' && damColor === 'chestnutD')) {
        foalColor = mixColor(bayBay);
        foalGender = mixGender();
        foalQuirk = mixColor(quirk);
        document.getElementById("foalTwo").value = foalQuirk;
		document.getElementById("foal").value = foalColor + " " + foalGender;
// black x black
    } else if (sireColor === 'blackS' && damColor === 'blackD') {
        foalColor = mixColor(blackBlack);
        foalGender = mixGender();
        foalQuirk = mixColor(quirk);
        document.getElementById("foalTwo").value = foalQuirk;
		document.getElementById("foal").value = foalColor + " " + foalGender;
// chestnut x chestnut
    } else if (sireColor === 'chestnutS' && damColor === 'chestnutD') {
        foalColor = mixColor(chestnutChestnut);
        foalGender = mixGender();
        foalQuirk = mixColor(quirk);
        document.getElementById("foalTwo").value = foalQuirk;
		document.getElementById("foal").value = foalColor + " " + foalGender;
// palomino x chestnut
    } else if ((sireColor === 'chestnutS' && damColor === 'palominoD') || (sireColor === 'palominoS' && damColor === 'chestnutD')) {
        foalColor = mixColor(palominoChestnut);
        foalGender = mixGender();
        foalQuirk = mixColor(quirk);
        document.getElementById("foalTwo").value = foalQuirk;
		document.getElementById("foal").value = foalColor + " " + foalGender;
// palomino x palomino
    } else if (sireColor === 'palominoS' && damColor === 'palominoD') {
        foalColor = mixColor(palominoPalomino);
        foalGender = mixGender();
        foalQuirk = mixColor(quirk);
        document.getElementById("foalTwo").value = foalQuirk;
		document.getElementById("foal").value = foalColor + " " + foalGender;
/* 
 palomino x bay
 palomino x black
 buckskin x bay
 buckskin x black
 buckskin x chestnut
 smokey black x bay
 smokey black x chestnut
*/
    } else if ((sireColor === 'palominoS' && damColor === 'bayD') || (sireColor === 'bayS' && damColor === 'palominoD') || (sireColor === 'palominoS' && damColor === 'blackD') || (sireColor === 'blackS' && damColor === 'palominoD') || (sireColor === 'buckskinS' && damColor === 'bayD') || (sireColor === 'bayS' && damColor === 'buckskinD') || (sireColor === 'buckskinS' && damColor === 'blackD') || (sireColor === 'blackS' && damColor === 'buckskinD') || (sireColor === 'buckskinS' && damColor === 'chestnutD') || (sireColor === 'chestnutS' && damColor === 'buckskinD') || (sireColor === 'smokeyblackS' && damColor === 'bayD') || (sireColor === 'bayS' && damColor === 'smokeyblackD') || (sireColor === 'chestnutS' && damColor === 'smokeyblackD') || (sireColor === 'smokeyblackS' && damColor === 'chestnutD')) {
        foalColor = mixColor(palominoBay);
        foalGender = mixGender();
        foalQuirk = mixColor(quirk);
        document.getElementById("foalTwo").value = foalQuirk;
		document.getElementById("foal").value = foalColor + " " + foalGender;
// smokey black x black
    } else if ((sireColor === 'smokeyblackS' && damColor === 'blackD') || (sireColor === 'blackS' && damColor === 'smokeyblackD')) {
        foalColor = mixColor(smblBlack);
        foalGender = mixGender();
        foalQuirk = mixColor(quirk);
        document.getElementById("foalTwo").value = foalQuirk;
		document.getElementById("foal").value = foalColor + " " + foalGender;
/*
 bay x perlino
 bay x cremello
 bay x smokey cream
 chestnut x smokey cream
 black x perlino
 black x cremello
*/
    } else if ((sireColor === 'bayS' && damColor === 'perlinoD') || (sireColor === 'perlinoS' && damColor === 'bayD') || (sireColor === 'bayS' && damColor === 'cremelloD') || (sireColor === 'cremelloS' && damColor === 'bayD') || (sireColor === 'bayS' && damColor === 'smokeycreamD') || (sireColor === 'smokeycreamS' && damColor === 'bayD') || (sireColor === 'blackS' && damColor === 'perlinoD') || (sireColor === 'perlinoS' && damColor === 'blackD') || (sireColor === 'blackS' && damColor === 'cremelloD') || (sireColor === 'cremelloS' && damColor === 'blackD') || (sireColor === 'smokeycreamS' && damColor === 'chestnutD') || (sireColor === 'perlinoS' && damColor === 'chestnutD') || (sireColor === 'chestnutS' && damColor === 'perlinoD')) {
        foalColor = mixColor(noneDouble);
        foalGender = mixGender();
        foalQuirk = mixColor(quirk);
        document.getElementById("foalTwo").value = foalQuirk;
		document.getElementById("foal").value = foalColor + " " + foalGender;
// black x smokey cream
    } else if ((sireColor === 'smokeycreamS' && damColor === 'blackD') || (sireColor === 'blackS' && damColor === 'smokeycreamD')) {
        foalColor = mixColor(blackSmokeC);
        foalGender = mixGender();
        foalQuirk = mixColor(quirk);
        document.getElementById("foalTwo").value = foalQuirk;
		document.getElementById("foal").value = foalColor + " " + foalGender;
// chestnut x chestnut
    } else if ((sireColor === 'chestnutS' && damColor === 'cremelloD') || (sireColor === 'cremelloS' && damColor === 'chestnutD')) {
        foalColor = mixColor(chestCrem);
        foalGender = mixGender();
        foalQuirk = mixColor(quirk);
        document.getElementById("foalTwo").value = foalQuirk;
		document.getElementById("foal").value = foalColor + " " + foalGender;
 /*
buckskin x buckskin
buckskin x palomino
buckskin x smokey black
palomino x smokey black
*/
    } else if ((sireColor === 'buckskinS' && damColor === 'palominoD') || (sireColor === 'palominoS' && damColor === 'buckskinD') || (sireColor === 'buckskinS' && damColor === 'buckskinD') || (sireColor === 'smokeyblackS' && damColor === 'buckskinD') || (sireColor === 'buckskinS' && damColor === 'smokeyblackD') || (sireColor === 'smokeyblackS' && damColor === 'palominoD') || (sireColor === 'palominoS' && damColor === 'smokeyblackD')) {
        foalColor = mixColor(singleDilutes);
        foalGender = mixGender();
        foalQuirk = mixColor(quirk);
        document.getElementById("foalTwo").value = foalQuirk;
		document.getElementById("foal").value = foalColor + " " + foalGender;
// smokey black x smokey black
    } else if (sireColor === 'smokeyblackS' && damColor === 'smokeyblackD') {
        foalColor = mixColor(doubleSmoke);
        foalGender = mixGender();
        foalQuirk = mixColor(quirk);
        document.getElementById("foalTwo").value = foalQuirk;
		document.getElementById("foal").value = foalColor + " " + foalGender;
/*
 smokey black x perlino
 smokey black x cremello
 buckskin x perlino
 buckskin x cremello
 buckskin x smokey cream
 palomino x perlino
 palomino x smokey cream
*/
    } else if ((sireColor === 'smokeyblackS' && damColor === 'perlinoD') || (sireColor === 'perlinoS' && damColor === 'smokeyblackD') || (sireColor === 'smokeyblackS' && damColor === 'cremelloD') || (sireColor === 'cremelloS' && damColor === 'smokeyblackD') || (sireColor === 'buckskinS' && damColor === 'perlinoD') || (sireColor === 'perlinoS' && damColor === 'buckskinD') || (sireColor === 'buckskinS' && damColor === 'cremelloD') || (sireColor === 'cremelloS' && damColor === 'buckskinD') || (sireColor === 'palominoS' && damColor === 'perlinoD') || (sireColor === 'perlinoS' && damColor === 'palominoD') || (sireColor === 'smokeycreamS' && damColor === 'palominoD') || (sireColor === 'palominoS' && damColor === 'smokeycreamD') || (sireColor === 'buckskinS' && damColor === 'smokeycreamD') || (sireColor === 'smokeycreamS' && damColor === 'buckskinD')) {
        foalColor = mixColor(singleDouble);
        foalGender = mixGender();
        foalQuirk = mixColor(quirk);
        document.getElementById("foalTwo").value = foalQuirk;
		document.getElementById("foal").value = foalColor + " " + foalGender;
// palomino x cremello
    } else if ((sireColor === 'palominoS' && damColor === 'cremelloD') || (sireColor === 'cremelloS' && damColor === 'palominoD')) {
        foalColor = mixColor(palominoCremello);
        foalGender = mixGender();
        foalQuirk = mixColor(quirk);
        document.getElementById("foalTwo").value = foalQuirk;
		document.getElementById("foal").value = foalColor + " " + foalGender;
// smokey black x smokey cream
    } else if ((sireColor === 'smokeyblackS' && damColor === 'smokeycreamD') || (sireColor === 'smokeycreamS' && damColor === 'smokeyblackD')) {
        foalColor = mixColor(smokeCream);
        foalGender = mixGender();
        foalQuirk = mixColor(quirk);
        document.getElementById("foalTwo").value = foalQuirk;
		document.getElementById("foal").value = foalColor + " " + foalGender;
/*
 smokey cream x perlino
 smokey cream x cremello
 perlino x perlino
 perlino x cremello
*/
    } else if ((sireColor === 'smokeycreamS' && damColor === 'perlinoD') || (sireColor === 'perlinoS' && damColor === 'smokeycreamD') || (sireColor === 'smokeycreamS' && damColor === 'cremelloD') || (sireColor === 'cremelloS' && damColor === 'smokeycreamD') || (sireColor === 'perlinoS' && damColor === 'perlinoD') || (sireColor === 'perlinoS' && damColor === 'cremelloD') || (sireColor === 'cremelloS' && damColor === 'perlinoD')) {
        foalColor = mixColor(doubleDilute);
        foalGender = mixGender();
        foalQuirk = mixColor(quirk);
        document.getElementById("foalTwo").value = foalQuirk;
		document.getElementById("foal").value = foalColor + " " + foalGender;
// cremello x cremello
    } else if (sireColor === 'cremelloS' && damColor === 'cremelloD') {
        foalColor = mixColor(cremCrem);
        foalGender = mixGender();
        foalQuirk = mixColor(quirk);
        document.getElementById("foalTwo").value = foalQuirk;
		document.getElementById("foal").value = foalColor + " " + foalGender;
// smokey cream x smokey cream
    } else if (sireColor === 'smokeycreamS' && damColor === 'smokeycreamD') {
        foalColor = mixColor(screamScream);
        foalGender = mixGender();
        foalQuirk = mixColor(quirk);
        document.getElementById("foalTwo").value = foalQuirk;
		document.getElementById("foal").value = foalColor + " " + foalGender;
    }
    return false;
}
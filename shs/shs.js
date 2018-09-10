function results(){

if(document.getElementById('name').value =="")
{
alert("Please enter a name");
}else{
	
var horseName = document.getElementById('name').value;


var one = Math.floor((Math.random() * 10) + 1);
var two = Math.floor((Math.random() * 10) + 1);
var three = Math.floor((Math.random() * 8) + 1);
var four = Math.floor((Math.random() * 10) + 1);
var five = Math.floor((Math.random() * 8) + 1);
var six = Math.floor((Math.random() * 8) + 1);
var seven = Math.floor((Math.random() * 8) + 1);
var eight = Math.floor((Math.random() * 10) + 1);

var runningTotalSix = 0;
var runningTotalEight = 0;
var overall = one + two + three + four + five + six + seven + eight;

if(one >= 8){
	runningTotalEight++;
    runningTotalSix++;
}else if(one >= 6){
    runningTotalSix++;
}
if(two >= 8){
	runningTotalEight++;
    runningTotalSix++;
}else if(two >= 6){
    runningTotalSix++;
}
if(three >= 8){
	runningTotalEight++;
    runningTotalSix++;
}else if(three >= 6){
    runningTotalSix++;
}
if(four >= 8){
	runningTotalEight++;
    runningTotalSix++;
}else if(four >= 6){
    runningTotalSix++;
}
if(five >= 8){
	runningTotalEight++;
    runningTotalSix++;
}else if(five >= 6){
    runningTotalSix++;
}
if(six >= 8){
	runningTotalEight++;
    runningTotalSix++;
}else if(six >= 6){
    runningTotalSix++;
}
if(seven >= 8){
	runningTotalEight++;
    runningTotalSix++;
}else if(seven >= 6){
    runningTotalSix++;
}
if(eight >= 8){
	runningTotalEight++;
    runningTotalSix++;
}else if(eight >= 6){
    runningTotalSix++;
}

	
var note;
var noteTopConfo = ['Perfect','Ideal','Could not be any better', 'Textbook quality'];
var noteMidConfo = ['Very nice','Well put together','Looks better in photos'];
var noteLowConfo = ['Not the best','A little off'];
var noteBottomConfo = ['Whoops','Are we sure this is a horse?'];

var noteTopCommand = ['Excellent pattern'];
var noteMidCommand = ['A few mistakes'];
var noteLowCommand = ['More practice needed', 'It might help to memorize the pattern'];
var noteBottomCommand = ['Are you even trying?','Is that the pattern from last year?','Points deducted for running over judge','Please stay in the arena next time'];

var noteTopGroom = ['Excellent'];
var noteMidGroom = ['Not bad'];
var noteLowGroom = ['Good job...for a 6 year old groom','Is the clipping job supposed to have those angles?'];
var noteBottomGroom = ['Maybe try using a brush next time','The hoof polish was great, but \'mud\' isn\'t a color','The ribbons in the mane were a nice touch'];

var noteTopBehave = ['A true gentleman or lady','If horses could wear tophats and monicles...'];
var noteMidBehave = ['Good, but not when food is around'];
var noteLowBehave = ['Probably behaves like a saint around mom...and no one else'];
var noteBottomBehave = ['Better off living feral','Likely dresses as a devil every Halloween'];

function genNoteConfo(x) {
	if(x === 10){
		return note = noteTopConfo[Math.floor(Math.random() * noteTopConfo.length)];
	}else if(x === 7 || x === 8|| x === 9){
		 return note = noteMidConfo[Math.floor(Math.random() * noteMidConfo.length)];
	}else if(x === 4 ||x === 5|| x === 6){
		return note = noteLowConfo[Math.floor(Math.random() * noteLowConfo.length)];
	}else if(x <= 3){
		return note = noteBottomConfo[Math.floor(Math.random() * noteBottomConfo.length)];
	}
}

function genNoteCommand(x) {
	if(x === 8){
		return note = noteTopCommand[Math.floor(Math.random() * noteTopCommand.length)];
	}else if(x === 5 || x === 6|| x === 7){
		 return note = noteMidCommand[Math.floor(Math.random() * noteMidCommand.length)];
	}else if(x === 3|| x === 4){
		return note = noteLowCommand[Math.floor(Math.random() * noteLowCommand.length)];
	}else if(x <= 2){
		return note = noteBottomCommand[Math.floor(Math.random() * noteBottomCommand.length)];
	}
}

function genNoteGroom(x) {
	if(x === 8){
		return note = noteTopGroom[Math.floor(Math.random() * noteTopGroom.length)];
	}else if(x === 5 || x === 6|| x === 7){
		 return note = noteMidGroom[Math.floor(Math.random() * noteMidGroom.length)];
	}else if(x === 3|| x === 4){
		return note = noteLowGroom[Math.floor(Math.random() * noteLowGroom.length)];
	}else if(x <= 2){
		return note = noteBottomGroom[Math.floor(Math.random() * noteBottomGroom.length)];
	}
}

function genNoteBehave(x) {
	if(x === 8){
		return note = noteTopBehave[Math.floor(Math.random() * noteTopBehave.length)];
	}else if(x === 5 || x === 6|| x === 7){
		 return note = noteMidBehave[Math.floor(Math.random() * noteMidBehave.length)];
	}else if(x === 3|| x === 4){
		return note = noteLowBehave[Math.floor(Math.random() * noteLowBehave.length)];
	}else if(x <= 2){
		return note = noteBottomBehave[Math.floor(Math.random() * noteBottomBehave.length)];
	}
}

document.getElementById('shsResults').innerHTML = '<strong> ' + one + ' / 10</strong> Conformation to Breed Standard<br /><span class="comment">' + genNoteConfo(one) + '</span><br /><strong>' + two + ' / 10</strong> Conformation to Performance Standard<br /><span class="comment">' + genNoteConfo(two) + '</span><br /><strong>' + three + ' / 8</strong> Grooming and Conditioning<br /><span class="comment">' + genNoteGroom(three) + '</span><br /><strong>' + four + ' / 10</strong> Quality of Gait<br /><span class="comment">' + genNoteConfo(four) + '</span><br /><strong>' + five + ' / 8</strong> Command Pattern One<br /><span class="comment">' + genNoteCommand(five) + '</span><br /><strong>' + six + ' / 8</strong> Command Pattern Two<br /><span class="comment">' + genNoteCommand(six) + '</span><br /><strong>' + seven + ' / 8</strong> Behavior and Personality<br /><span class="comment">' + genNoteBehave(seven) + '</span><br /><strong>' + eight + ' / 10</strong> Leg Bone and Hoof Structure<br /><span class="comment">' + genNoteConfo(eight) + '</span>';

document.getElementById('shsOverall').innerHTML = '<p>Overall Score is ' + overall + '</p>';


if(runningTotalSix >= 6 && runningTotalEight >= 2 && overall >= 51){
	document.getElementById('shsApproved').innerHTML = '<span style="color:blue">Approved!</span>';
}else{
	document.getElementById('shsApproved').innerHTML = '<span style="color:red">Not Approved!</span>';
}

}
}
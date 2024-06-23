const team_1_firstqtr = document.getElementById('team_1_firstqtr');
const team_1_secqtr = document.getElementById('team_1_secqtr');
const team_1_thirdtqtr = document.getElementById('team_1_thirdtqtr');

const team_2_firstqtr = document.getElementById('team_2_firstqtr');
const team_2_secqtr = document.getElementById('team_2_secqtr');
const team_2_thirdqtr = document.getElementById('team_2_thirdqtr');

const pick_time_reg = document.getElementById('pick_time_reg');
const resulteam1 = document.getElementById('resultteam1');
const resulteam1fourth = document.getElementById('resultteam1fourth');
const resulteam2 = document.getElementById('resultteam2');
const resulteam2fourth = document.getElementById('resultteam2fourth');
const totalthird = document.getElementById('totalthird');
const possiblefourthreal = document.getElementById('possiblefourthreal');
const currentfourth = document.getElementById('currentfourth');
const fourthteam1 = document.getElementById('fourthteam1');
const fourthteam2 = document.getElementById('fourthteam2');
const team1timepermin4th = document.getElementById('team1timepermin4th');
const team2timepermin4th = document.getElementById('team2timepermin4th');
const thesecondpossiblereal = document.getElementById('thesecondpossiblereal');

let titlepage;

let newtimereg;
let computeteam1;

let team1first;
let team1second;
let team1third;

let team2first;
let team2second;
let team2third;
let computeteam2;
let compute1and2;
let possiblefourth;
let possiblefourth2;
let computeall;

let computefor4th;
let computeteam14th;
let computeteam24th;
let computewithremaining;
let timeremaining;
let computewithremaining2; 
let totalall4th;
let totalall4th2;
let totalreal4th;

function calculate(){
    team1first = Number(team_1_firstqtr.value)
    team1second = Number(team_1_secqtr.value)
    team1third = Number(team_1_thirdtqtr.value)

    team2first = Number(team_2_firstqtr.value)
    team2second = Number(team_2_secqtr.value)
    team2third = Number(team_2_thirdqtr.value)

    computeteam14th = 

    computeteam1 = (team1first + team1second + team1third) / Number(pick_time_reg.value)

    computeteam2 = (team2first + team2second + team2third) / Number(pick_time_reg.value)

    compute1and2 = team1first + team1second + team1third + team2first + team2second + team2third


    if (pick_time_reg.value == 30){
        newtimereg = 10
        possiblefourth = computeteam1 * newtimereg 
        possiblefourth2 = computeteam2 * newtimereg
        resulteam1fourth.textContent = `The team 1 is estimated to score ${possiblefourth} in the fourth`
        resulteam2fourth.textContent = `The team 2 is estimated to score ${possiblefourth2} in the fourth`
        computeall = compute1and2 + possiblefourth + possiblefourth2
        possiblefourthreal.textContent = `The possible final total score is ${computeall}`
        timeremaining = Number(currentfourth.value)
        computeteam14th = Number(fourthteam1.value) 
        computeteam24th = Number(fourthteam2.value)
        computewithremaining = computeteam14th / timeremaining
        computewithremaining2 = computeteam24th / timeremaining

        totalall4th = computewithremaining * newtimereg
        totalall4th2 = computewithremaining2 * newtimereg
        totalreal4th = totalall4th + totalall4th2
        secondpossibleis = totalreal4th + compute1and2

        team1timepermin4th.textContent = `The score per minute of team 1 (left) is ${computewithremaining}`
        team2timepermin4th.textContent = `The score per minute of team 2 (right) is ${computewithremaining2}`
        thesecondpossiblereal.textContent = `THE SECOND POSSIBLE FINAL SCORE IS ${secondpossibleis}`
    }
    else if (pick_time_reg.value == 36 ){
        newtimereg = 12
        possiblefourth = computeteam1 * newtimereg 
        possiblefourth2 = computeteam2 * newtimereg
        resulteam1fourth.textContent = `The team 1 is estimated to score ${possiblefourth} in the fourth`
        resulteam2fourth.textContent = `The team 2 is estimated to score ${possiblefourth2} in the fourth`
        computeall = compute1and2 + possiblefourth + possiblefourth2
        possiblefourthreal.textContent = `The possible final total score is ${computeall}`
        timeremaining = Number(currentfourth.value)
        computeteam14th = Number(fourthteam1.value) 
        computeteam24th = Number(fourthteam2.value)
        computewithremaining = computeteam14th / timeremaining
        computewithremaining2 = computeteam24th / timeremaining

        totalall4th = computewithremaining * newtimereg
        totalall4th2 = computewithremaining2 * newtimereg
        totalreal4th = totalall4th + totalall4th2
        secondpossibleis = totalreal4th + compute1and2

        team1timepermin4th.textContent = `The score per minute of team 1 (left) is ${computewithremaining}`
        team2timepermin4th.textContent = `The score per minute of team 2 (right) is ${computewithremaining2}`
        thesecondpossiblereal.textContent = `THE SECOND POSSIBLE FINAL SCORE IS ${secondpossibleis}`
    }
    else{
        alert("Please select only values between 30 and 36!")
    }

    resulteam1.textContent = `Calculating the scores from 1st to 3rd quarter, the team 1 (Left) scores ${computeteam1} per minute`
    resulteam2.textContent = `Calculating the scores from 1st to 3rd quarter, the team 2 (Right) scores ${computeteam2} per minute`
    totalthird.textContent = `The total combined score of Team 1(left) and Team 2(right) is ${compute1and2}`
}

document.getElementById('send').onclick = function(){
    titlepage = document.getElementById('title').value;
    document.getElementById('leaguename').textContent = `Leaguename: ${titlepage}`

}
/** 
 * Title: index.js
 * Author: Laurel Condon
 * Date: 11 June 2023
 * Description: index file for sports app
 */
"use strict";

const teamManager = require('./team-manager');

const { getTeams, getTeam, displayTeam } = teamManager;

//Displays Team array
const teams = getTeams();
console.log('-- DISPLAYING TEAMS --');
teams.forEach(team => {
    const viewTeam = displayTeam(team);
    console.log(viewTeam);
    console.log();
});

const team1 = getTeam('Atlanta Braves');
console.log('\n-- DISPLAYING SINGLE TEAM --');
console.log(displayTeam(team1));

const team2 = getTeam('Colorado Rockies');
console.log('\n-- DISPLAYING SINGLE TEAM --');
console.log(displayTeam(team2));
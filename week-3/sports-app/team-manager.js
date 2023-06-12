/** 
 * Title: team-manager.js
 * Author: Laurel Condon
 * Date: 11 June 2023
 * Description: team.js file
 */

"use strict";

// Team module imported
const Team = require('./team');

// Array for teams 
const teams = [
    new Team('Atlanta Braves', 'Blooper', "25"),
    new Team("Colorado Rockies", "Dinger", "25"),
    new Team("LA Dodgers", "n/a", "25"),
    new Team("Houston Astros", "Orbit", "25"),
    new Team("Miami Marlins", "Billy the Marlin", "25")
];

function getTeams() {
    return teams;
}

function getTeam(name) {
    return teams.find(team => team.name === name);
}

function displayTeam(team) {
    return 'Name: ' + team.name + '\nMascot: ' + team.mascot + '\nPlayer Count: ' +  team.playerCount;
}

module.exports = { 
    getTeams, 
    getTeam, 
    displayTeam 
};
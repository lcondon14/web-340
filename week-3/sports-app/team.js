/** 
 * Title: team.js
 * Author: Laurel Condon
 * Date: 11 June 2023
 * Description: team.js file
 */
"use strict";

// Class team
class Team {
    constructor(name, mascot, playerCount){
        this.name = name;
        this.mascot = mascot;
        this.playerCount = playerCount;
    }
}

// Export Team 
module.exports = Team;
//=>1.BUILDING THE PROJECT.
//HOME
function gameObject() {
    return{
       home: {
        "teamName": "Brooklyn Nets",
        "colors": ["Black, White"],
        "players": {
            "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 11,
          rebounds: 10,
          assists: 5,
          steals: 3,
          blocks: 1,
          slamDunks: 7
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 13,
          rebounds: 2,
          assists: 2,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        }
      }
    },
      away: {
        "teamName": "Charlotte Hornets",
        "colors": ["Turquoise", "Purple"],
        "players": {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
    }
  }
}   
console.log(gameObject());


//=>2.Building Functions &  Calling Functions Within Functions.

//HOME.
function hometeamName() {
  let object = gameObject();
  return object["home"]["teamName"];
}

console.log(hometeamName());

function homecolors() {
   let object = gameObject();
     return object["home"]["colors"]
}
console.log(homecolors());

function homeplayers(){
    let object= gameObject();
      return object[
          {
              "name": "Alan Anderson",
              "number": 0,
              "shoe": 16,
              "points": 22,
              "rebounds": 12,
              "assists": 12,
              "steals": 3,
              "blocks": 1,
              "slam_dunks": 1
          }],
           [{
              "name": "Reggie Evans",
              "number": 30,
              "shoe": 14,
              "points": 12,
              "rebounds": 12,
              "assists": 12,
              "steals": 12,
              "blocks": 12,
              "slam_dunks": 7
          }],
        
          [{
              "name": "Brook Lopez",
              "number": 11,
              "shoe": 17,
              "points": 17,
              "rebounds": 19,
              "assists": 10,
              "steals": 3,
              "blocks": 1,
              "slam_dunks": 15
          }],
        
          [{
              "name": "Mason Plumlee",
              "number": 1,
              "shoe": 19,
              "points": 26,
              "rebounds": 12,
              "assists": 6,
              "steals": 3,
              "blocks": 8,
              "slam_dunks": 5
          }],

          [{
              "name": "Jason Terry",
              "number": 31,
              "shoe": 15,
              "points": 19,
              "rebounds": 2,
              "assists": 2,
              "steals": 4,
              "blocks": 11,
              "slam_dunks": 1
          }]
    }
    console.log(homeplayers());
    

    //AWAY
    
    function awayteamName() {
      let object = gameObject();
      return object["away"]["teamName"];
    }
    
    console.log(awayteamName());


    function awaycolors() {
   let object = gameObject();
     return object["away"]["colors"]
}
console.log(awaycolors());

    
function awayplayers(){
  let object= gameObject();
    return object [ 
                {  "name": 'Jeff Adrien',
                   "number": 4, 
                   "shoe": 18, 
                   "points": 10, 
                   "rebounds": 1, 
                   "assists": 1, 
                   "steals": 2, 
                   "blocks": 7, 
                   "slamDunks": 2 }],
               [ { 
                "name": 'Bismak Biyombo',
                " number": 0, 
                 "shoe": 16, 
                 "points": 12,
                 "rebounds": 4,
                  "assists": 7, 
                  "steals": 7, 
                  "blocks": 15, 
                  "slamDunks": 10 }],
                [{
                   "name": 'DeSagna Diop', 
                   "number": 2, 
                   "shoe": 14, 
                   "points": 24, 
                   "rebounds": 12, 
                  " assists": 12, 
                   "steals": 4, 
                   "blocks": 5, 
                   "slamDunks": 5 }],
                [{ 
                  "name": 'Ben Gordon', 
                  "number": 8, 
                  "shoe": 15, 
                  "points": 33, 
                  "rebounds": 3, 
                  "assists": 2, 
                  "steals": 1, 
                  "blocks": 1, 
                  "slamDunks": 0 }],
                [{ 
                  "name": 'Brendan Haywood', 
                  "number": 33, 
                  "shoe": 15, 
                  "points": 6, 
                  "rebounds": 12, 
                  "assists": 12, 
                  "steals": 22, 
                  "blocks": 5, 
                  "slamDunks": 12 }]
        
        };
  console.log(awayplayers());
    
    




//=>3.Function Building.
//Build a function, numPointsScored that takes in an argument of a player's
 // name and returns the number of points scored for that player.
 // - Think about where in the object you will find a player's points. How can
// you iterate down into that level? Think about the return value of your function.

function numPointsScored(playerName){
const players = {
  'Alan Anderson': {
    points: 22,
  },
  'Reggie Evans': {
    points: 12,
  },
  'Brook Lopez': {
     points: 17,
  },
  'Mason Plumlee': {
    points: 26,
  },
  'Jason Terry': {
    points: 19,
  }, 
  'Jeff Adrien': {
    points:10,
  },
  'Bismak Biyombo': {
    points: 12,
  },
  'DeSagna Diop': {
    points: 24,
  },
  'Ben Gordon': {
    points: 33,
  },
  'Brendan Haywood': {
    points: 6,
  }
}
if  (players[playerName]) {
  return players[playerName].points;
}
}
console.log(numPointsScored('Alan Anderson'));
console.log(numPointsScored('Reggie Evans'));
console.log(numPointsScored('Brook Lopez'));
console.log(numPointsScored('Mason Plumlee'));
console.log(numPointsScored('Jason Terry'));
console.log(numPointsScored ('Jeff Adrien'));
console.log(numPointsScored('Bismak Biyombo'));
console.log(numPointsScored('DeSagna Diop'));
console.log(numPointsScored('Ben Gordon'));
console.log(numPointsScored('Brendan Haywood'));

//4.Build a function, `teamColors`, that takes in an argument of the team name and
//returns an array of that teams colors.
function teamColors(teams) {

  const team= {
    'Brooklyn Nets': {
      colors: ['Black','White']
    },
    'Charlotte Hornet': {
      colors: ['Turquoise','Purple']
    }
  }
if(team[teams]) {
  return team[teams].colors;
}
}
console.log(teamColors('Brooklyn Nets'));
console.log(teamColors('Charlotte Hornet'));

//Build a function, `teamNames`, that operates on the game object to return an
 // array of the team names.
 function teamNames(game) {
  if (Object.keys(game.teams).length === 0) {
    return []; // Edge case: no teams or invalid game object
  }

  return Object.keys(game.teams); // Return an array of team names
}

const game = {
  teams: {
    'Brooklyn Nets': {
      "colors": ['Black', 'White'],
      "players": {
         'Alan Anderson': { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
         'Reggie Evans': { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
        'Brook Lopez': { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
        'Mason Plumlee': { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
        'Jason Terry': { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 },
      },
    },
    'Charlotte Hornets': {
      colors: ['Turquoise', 'Purple'],
      players: {
        'Jeff Adrien': { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
        'Bismak Biyombo': { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
        'DeSagna Diop': { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
        'Ben Gordon': { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
        'Brendan Haywood': { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 },
      },
    },
  },
};

console.log(teamNames(game)); 
// Output: ['Brooklyn Nets', 'Charlotte Hornets']


//Build a function, `playerNumbers`, that takes in an argument of a team name
//and returns an array of the jersey numbers for that team.

//(the ! operator checks if game.teams[teamName] is falsy. If game.teams[teamName] is falsy, the condition evaluates to true, and the code inside the if block executes)

function playerNumbers(game, teamName) {
  if (!game.teams[teamName]) {
    return []; // Edge case: invalid game object or team not found
  }

  const team = game.teams[teamName];
  const jerseyNumbers = [];

  for (let playerName in team.players) {
    jerseyNumbers.push(team.players[playerName].number); // Add jersey number to the array
  }

  return jerseyNumbers;
}

const game1 = {
  teams: {
    'Brooklyn Nets': {
      colors: ['Black', 'White'],
      players: {
        'Alan Anderson': { number: 0 },
        'Reggie Evans': { number: 30 },
        'Brook Lopez': { number: 11 },
        'Mason Plumlee': { number: 1 },
        'Jason Terry': { number: 31 },
      },
    },
    'Charlotte Hornets': {
      colors: ['Turquoise', 'Purple'],
      players: {
        'Jeff Adrien': { number: 4 },
        'Bismak Biyombo': { number: 0 },
        'DeSagna Diop': { number: 2 },
        'Ben Gordon': { number: 8 },
        'Brendan Haywood': { number: 33 },
      },
    },
  },
};

console.log(playerNumbers(game1, 'Brooklyn Nets')); // Output: [0, 30, 11, 1, 31]
console.log(playerNumbers(game1, 'Charlotte Hornets')); // Output: [4, 0, 2, 8, 33]


//Build a function, `playerStats`, that takes in an argument of a player's name
//and returns an object of that player's stats. Check out the following example
//of the expected return value of the `playerStats` function:

function playerStats(game, playerName) {
  if (!game.teams) {
    return false; 
  }

  // Iterate through all teams
  for (let teamName in game.teams) {
    const team = game.teams[teamName];
    if (team.players && team.players[playerName]) {
      return team.players[playerName]; // Return the player's stats
    }
  }
}

const game2 = {
  teams: {
    'Brooklyn Nets': {
      colors: ['Black', 'White'],
      players: {
        'Alan Anderson': { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
        'Reggie Evans': { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
        'Brook Lopez': { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
        'Mason Plumlee': { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
        'Jason Terry': { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 },
      },
    },
    'Charlotte Hornets': {
      colors: ['Turquoise', 'Purple'],
      players: {
        'Jeff Adrien': { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
        'Bismak Biyombo': { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
        'DeSagna Diop': { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
        'Ben Gordon': { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
        'Brendan Haywood': { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 },
      },
    },
  },
};
//Brooklyn Nets.
console.log(playerStats(game2, 'Alan Anderson'));

console.log(playerStats(game2,'Reggie Evans'));

console.log(playerStats(game2,'Brook Lopez'));

console.log(playerStats(game2,'Mason Plumlee'));

console.log(playerStats(game2,'Jason Terry'));

//Charlotte Hornets
console.log(playerStats(game2,'Jeff Adrien'));

console.log(playerStats(game2, 'Bismak Biyombo'));

console.log(playerStats(game2,'DeSagna Diop' )); 

console.log(playerStats(game2,'Ben Gordon'));

console.log(playerStats(game2,'Brendan Haywood'));
















//Bonus Questions

//Define functions to return the answer to the following questions:

//1. Which player has the most points? Call the function `mostPointsScored`.

function mostPointsScored(players){
  if (Object.keys(players).length === 0) return null; // Edge case: no players

  let topScorer = '';
  let maxPoints = "";

  for (let name in players) {
    const points = players[name].points || 0; // Default to 0 if points are missing
    if (points > maxPoints) {
      maxPoints = points;
      topScorer = name;
    }
  }

  return topScorer;
}

const bplayers = {
  'Alan Anderson': { team: 'Brooklyn Nets', points: 22 },
  'Reggie Evans': { team: 'Brooklyn Nets', points: 12 },
  'Brook Lopez': { team: 'Brooklyn Nets', points: 17 },
  'Mason Plumlee': { team: 'Brooklyn Nets', points: 26 },
  'Jason Terry': { team: 'Brooklyn Nets', points: 19 },
  'Jeff Adrien': { team: 'Charlotte Hornets', points: 10 },
  'Bismak Biyombo': { team: 'Charlotte Hornets', points: 12 },
  'DeSagna Diop': { team: 'Charlotte Hornets', points: 24 },
  'Ben Gordon': { team: 'Charlotte Hornets', points: 33 },
  'Brendan Haywood': { team: 'Charlotte Hornets', points: 6 },
};

console.log(mostPointsScored(bplayers)); 
// Output: 'Ben Gordon'


//Which team has the most points? Call the function `winningTeam`.

function winningTeam(players) {
  if (Object.keys(players).length === 0) return false; 

  const teamPoints = {};

  // Calculate total points for each team
  for (let name in players) {
    const team = players[name].team;
    const points = players[name].points;

    if (!teamPoints[team]) {
      teamPoints[team] = 0; // Initialize team if it doesn't exist
    }
    teamPoints[team] += points; // Add points to the team's total
  }

  // Find the team with the most points
  let winningTeamName = '';
  let maxPoints = "";

  for (let team in teamPoints) {
    if (teamPoints[team] > maxPoints) {
      maxPoints = teamPoints[team];
      winningTeamName = team;
    }
  }

  return winningTeamName;
}

const aplayers = {
  'Alan Anderson': { team: 'Brooklyn Nets', points: 22 },
  'Reggie Evans': { team: 'Brooklyn Nets', points: 12 },
  'Brook Lopez': { team: 'Brooklyn Nets', points: 17 },
  'Mason Plumlee': { team: 'Brooklyn Nets', points: 26 },
  'Jason Terry': { team: 'Brooklyn Nets', points: 19 },
  'Jeff Adrien': { team: 'Charlotte Hornets', points: 10 },
  'Bismak Biyombo': { team: 'Charlotte Hornets', points: 12 },
  'DeSagna Diop': { team: 'Charlotte Hornets', points: 24 },
  'Ben Gordon': { team: 'Charlotte Hornets', points: 33 },
  'Brendan Haywood': { team: 'Charlotte Hornets', points: 6 },
};

console.log(winningTeam(aplayers));

//Which player has the longest name? Call the function `playerWithLongestName`.

function playerWithLongestName(players) {
  if (Object.keys(players).length === 0) return null; // Edge case: no players

  let longestName = '';
  for (let name in players) {
    if (name.length > longestName.length) {
      longestName = name;
    }
  }

  return longestName;
}

const fplayers = {
  'Alan Anderson': { steals: 3 },
  'Reggie Evans': { steals: 12 },
  'Brook Lopez': { steals: 3 },
  'Mason Plumlee': { steals: 3 },
  'Jason Terry': { steals: 4 },
  'Jeff Adrien': { steals: 2 },
  'Bismak Biyombo': { steals: 7 },
  'DeSagna Diop': { steals: 4 },
  'Ben Gordon': { steals: 1 },
  'Brendan Haywood': { steals: 22 },
};
console.log(playerWithLongestName(fplayers));

//Super Bonus

//1. Write a function that returns true if the player with the longest name had
//the most steals. Call the function `doesLongNameStealATon`.

function doesLongNameStealATon(players) {
  if (Object.keys(players).length === 0) return false; 

  // Find the player with the longest name, ''=empty string
  let longNamePlayer = { name: '', steals: 30 };
  for (let name in players) {
    if (name.length > longNamePlayer.name.length) {
      longNamePlayer = { name, steals: players[name].steals };
    }
  }

  // Check if the player with the longest name has the most steals
  for (let name in players) {
    if (players[name].steals > longNamePlayer.steals) {
      return false;
    }
  }

  return true;
}

const players = {
  'Alan Anderson': { steals: 3 },
  'Reggie Evans': { steals: 12 },
  'Brook Lopez': { steals: 3 },
  'Mason Plumlee': { steals: 3 },
  'Jason Terry': { steals: 4 },
  'Jeff Adrien': { steals: 2 },
  'Bismak Biyombo': { steals: 7 },
  'DeSagna Diop': { steals: 4 },
  'Ben Gordon': { steals: 1 },
  'Brendan Haywood': { steals: 22 },
};

console.log(doesLongNameStealATon(players)); 
//Brandon Haywood has the most steals so the expected output should be true.

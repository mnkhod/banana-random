import RandomEngine from './RandomEngine.js'

const chance = 0.3
const engine = new RandomEngine(chance)

let wins = 0;
let loses = 0;
let draws = 0;
let simulationLength = 500;

for (let i = 0; i < simulationLength; i++) {
  switch (engine.calculateRockPaperScissors()) {
    case "DRAW":
      draws++;
      break;
    case "WIN":
      wins++;
      break;
    case "LOSE":
      loses++;
      break;
  }
}

let chancePercentage = chance * 100;
console.log("-------------------------------------------------")
console.log(`Win ${chancePercentage}% -- Lose ${100 - chancePercentage}%`)
console.log("-------------------------------------------------")
console.log("Simulation -- ", simulationLength)
console.log("-------------------------------------------------")
console.log("wins - ", wins, "/", simulationLength)
console.log("loses - ", loses, "/", simulationLength)
console.log("draws - ", draws, "/", simulationLength)
console.log("-------------------------------------------------")

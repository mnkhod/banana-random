import RandomEngine from './RandomEngine.js'

const chance = 0.3
const engine = new RandomEngine(chance)

let wins = 0;
let loses = 0;
let simulationLength = 100;

for (let i = 0; i < simulationLength; i++) {
  let lottery = engine.calculateWin()
  if (lottery) {
    wins++
  } else {
    loses++;
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
console.log("-------------------------------------------------")

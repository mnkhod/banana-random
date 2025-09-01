export default class RandomEngine {
  // Default Win Rate - 30%
  constructor(winRate = 0.3) {
    this.winRate = winRate;

    this.generateSeed()
  }

  calculateWin() {
    this.generateSeed()

    return this.range <= this.winRate ? true : false;
  }

  generateSeed() {
    let array = new Uint32Array(1);

    // OS-Level CSPRNG ( Cryptograpically Secure Pseudo-Random Number Generator )
    //  Calculates based on these sources
    //    - CPU Timing Jitter
    //    - Mouse Movements, Network Timings
    //    - OS Randomness Pools
    // Non-Deterministic.
    // Designed to resist prediction.
    crypto.getRandomValues(array) // Format - 3765924854
    let range = array[0] / 0xffffffff // Float between 0 and 1

    this.seed = array[0]
    this.range = range

    return range
  }
}

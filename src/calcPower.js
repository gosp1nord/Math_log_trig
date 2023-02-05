export default class CalcPower {
  constructor() {
    this.stoned = 0;
  }

  getStoned(distance) {
    this.mod = Math.log2(distance) * 5;
    return this.mod;
  }

  setStoned() {
    this.stoned = 1;
  }

  setAttack(distance) {
    return this.attackPower
    - (this.attackPower * (distance - 1) * 0.1) - (this.stoned * this.getStoned(distance));
  }
}

import CalcPower from './calcPower';

export default class Magician extends CalcPower {
  constructor(attackPower) {
    super();
    this.attackPower = attackPower;
  }

  getAttack(distance) {
    return this.setAttack(distance);
  }
}

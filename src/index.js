import Magician from './magician';
import Daemon from './daemon';

const player1 = new Magician(100);
const player2 = new Daemon(100);

player1.setStoned();
player2.getAttack(3);

import Magician from '../magician';
import Daemon from '../daemon';

test('create Daemon', () => {
  const player1 = new Daemon(100);
  expect(player1).toEqual({
    attackPower: 100,
    stoned: 0,
  });
});

test('create Magician', () => {
  const player2 = new Magician(120);
  expect(player2).toEqual({
    attackPower: 120,
    stoned: 0,
  });
});

test('create attack Magician', () => {
  const player2 = new Magician(120);
  const result = player2.getAttack(4);
  expect(result).toBe(84);
});

test('attack stoned Daemon', () => {
  const player1 = new Daemon(100);
  player1.setStoned();
  const result = player1.getAttack(4);
  expect(result).toBe(60);
});

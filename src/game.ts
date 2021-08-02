import 'phaser';
import { Tetromino } from './Tetromino';

const BLOCK_SIZE = 24;
class Demo extends Phaser.Scene {
  constructor() {
    super('demo');
  }

  preload() {
    this.load.image('block_red', 'assets/block_red.svg');
  }

  create() {
    const tBlock = new Tetromino(this);
    this.time.addEvent({ delay: 500, loop: true, callback: () => tBlock.move() });
  }
}

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#333',
  width: 10 * BLOCK_SIZE,
  height: 20 * BLOCK_SIZE,
  scene: Demo,
};

export const game = new Phaser.Game(config);

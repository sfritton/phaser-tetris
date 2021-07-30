import 'phaser';


const BLOCK_SIZE = 24;
class Demo extends Phaser.Scene {
  constructor() {
    super('demo');
  }

  preload() {
    this.load.image('block_red', 'assets/block_red.svg')
  }

  create() {
    this.add.image(5 * BLOCK_SIZE, 10 * BLOCK_SIZE, 'block_red')

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

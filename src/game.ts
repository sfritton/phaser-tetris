import 'phaser';
import { Grid, BLOCK_SIZE } from './Grid';
class Demo extends Phaser.Scene {
  grid: Grid;

  constructor() {
    super('demo');
    this.grid = new Grid(this);
  }

  preload() {
    this.load.image('block_blue', 'assets/block_blue.svg');
    this.load.image('block_cyan', 'assets/block_cyan.svg');
    this.load.image('block_green', 'assets/block_green.svg');
    this.load.image('block_magenta', 'assets/block_magenta.svg');
    this.load.image('block_orange', 'assets/block_orange.svg');
    this.load.image('block_red', 'assets/block_red.svg');
    this.load.image('block_yellow', 'assets/block_yellow.svg');
  }

  create() {
    this.grid.addBlock(0, 5, 'red');
    this.grid.addBlock(0, 4, 'red');
    this.grid.addBlock(0, 6, 'red');
    this.grid.addBlock(1, 5, 'red');
    this.grid.render();
    this.time.addEvent({
      delay: 500,
      loop: true,
      callback: () => {
        this.grid.render();
        this.grid.update();
      },
    });
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

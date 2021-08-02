import { GameObjects, Scene } from 'phaser';

export const BLOCK_SIZE = 24;

export class Tetromino {
  scene: Scene;
  shape: 'T';
  tetromino: GameObjects.Group;

  constructor(scene: Scene) {
    this.scene = scene;
    this.tetromino = this.scene.add.group();

    this.tetromino.create(0 * BLOCK_SIZE, 0 * BLOCK_SIZE, 'block_red');
    this.tetromino.create(1 * BLOCK_SIZE, 0 * BLOCK_SIZE, 'block_red');
    this.tetromino.create(2 * BLOCK_SIZE, 0 * BLOCK_SIZE, 'block_red');
    this.tetromino.create(1 * BLOCK_SIZE, 1 * BLOCK_SIZE, 'block_red');

    // Align to the grid
    this.tetromino.setOrigin(0, 0);
  }

  move() {
    // @ts-expect-error
    const isAtBottom = this.tetromino.getChildren().some((block) => block.y >= 19 * BLOCK_SIZE);

    if (isAtBottom) return;

    this.tetromino.incY(BLOCK_SIZE);
  }
}

import { GameObjects, Scene } from 'phaser';
import { Cell, BlockColor } from './types';

export const BLOCK_SIZE = 24;

export class Grid {
  rows = 20;
  columns = 10;
  grid: Cell[][];
  scene: Scene;
  gameObject!: GameObjects.Group;

  constructor(scene: Scene) {
    this.scene = scene;

    // Create an empty 20x10 grid
    this.grid = [...new Array(this.rows)].map(() =>
      new Array(this.columns).fill({ status: 'empty' }),
    );
  }

  init(): void {
    this.gameObject = this.scene.add.group();
  }

  /** Add a new active block at the specified location */
  addBlock(row: number, column: number, color: BlockColor): void {
    this.grid[row][column] = { status: 'active', color };
  }

  addFilledBlock(row: number, column: number, color: BlockColor): void {
    this.grid[row][column] = { status: 'filled', color };
  }

  render(): void {
    // Clear the previous frame
    this.gameObject.clear(true, true);

    // Draw the new frame
    this.grid.forEach((row, r) =>
      row.forEach((cell, c) => {
        if (cell.status === 'empty') return;

        this.gameObject
          .create(c * BLOCK_SIZE, r * BLOCK_SIZE, `block_${cell.color}`)
          .setOrigin(0, 0);
      }),
    );
  }

  update(): void {
    const activeCoordinates: { r: number; c: number }[] = [];

    this.grid.forEach((row, r) =>
      row.forEach((cell, c) => {
        if (cell.status !== 'active') return;

        activeCoordinates.push({ r, c });
      }),
    );

    const newActiveCells = activeCoordinates.map<Cell | undefined>(({ r, c }) =>
      r + 1 < this.rows ? this.grid[r + 1][c] : undefined,
    );

    // The block is already at the bottom if:
    // - There is no cell below it
    // - The cell below it is already filled
    const isAtBottom = newActiveCells.some((cell) => !cell || cell.status === 'filled');

    // If any block is at the bottom, set all of them to filled, and start a new tetromino
    if (isAtBottom) {
      activeCoordinates.forEach(({ r, c }) => {
        this.grid[r][c].status = 'filled';
      });

      // TODO: start a new tetromino

      return;
    }

    // Store the blocks' data
    const tempCells = activeCoordinates.map(({ r, c }) => ({ ...this.grid[r][c] }));

    // Clear the old cells
    activeCoordinates.forEach(({ r, c }) => (this.grid[r][c] = { status: 'empty' }));

    // Place the new blocks
    activeCoordinates.forEach(({ r, c }, index) => (this.grid[r + 1][c] = tempCells[index]));
  }
}

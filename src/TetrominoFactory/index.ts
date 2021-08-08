import { Grid } from '../Grid';
import { BlockShape } from './types';

const shapes: BlockShape[] = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];

export class TetrominoFactory {
  grid: Grid;

  constructor(grid: Grid) {
    this.grid = grid;
    this.grid.setStartNewBlock(() => this.startBlock());
  }

  startBlock(): void {
    const randIndex = Math.floor(Math.random() * shapes.length);
    const shape = shapes[randIndex];

    this[`start${shape}Block`]?.();
  }

  startIBlock(): void {
    this.grid.addBlock(0, 3, 'cyan');
    this.grid.addBlock(0, 4, 'cyan');
    this.grid.addBlock(0, 5, 'cyan');
    this.grid.addBlock(0, 6, 'cyan');
  }

  startJBlock(): void {
    this.grid.addBlock(0, 3, 'blue');
    this.grid.addBlock(0, 4, 'blue');
    this.grid.addBlock(0, 5, 'blue');
    this.grid.addBlock(1, 5, 'blue');
  }

  startLBlock(): void {
    this.grid.addBlock(0, 3, 'orange');
    this.grid.addBlock(0, 4, 'orange');
    this.grid.addBlock(0, 5, 'orange');
    this.grid.addBlock(1, 3, 'orange');
  }

  startOBlock(): void {
    this.grid.addBlock(0, 5, 'yellow');
    this.grid.addBlock(0, 4, 'yellow');
    this.grid.addBlock(1, 4, 'yellow');
    this.grid.addBlock(1, 5, 'yellow');
  }

  startSBlock(): void {
    this.grid.addBlock(0, 5, 'green');
    this.grid.addBlock(0, 6, 'green');
    this.grid.addBlock(1, 4, 'green');
    this.grid.addBlock(1, 5, 'green');
  }

  startTBlock(): void {
    this.grid.addBlock(0, 5, 'magenta');
    this.grid.addBlock(0, 4, 'magenta');
    this.grid.addBlock(0, 6, 'magenta');
    this.grid.addBlock(1, 5, 'magenta');
  }

  startZBlock(): void {
    this.grid.addBlock(0, 5, 'red');
    this.grid.addBlock(0, 4, 'red');
    this.grid.addBlock(1, 6, 'red');
    this.grid.addBlock(1, 5, 'red');
  }
}

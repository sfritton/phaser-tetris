export type BlockColor = 'blue' | 'cyan' | 'green' | 'magenta' | 'orange' | 'red' | 'yellow';

interface CellEmpty {
  status: 'empty';
}

interface CellFilledActive {
  status: 'filled' | 'active';
  color: BlockColor;
}

export type Cell = CellEmpty | CellFilledActive;

export interface Cell {
  id?:         number;
  live?:       boolean;
  futureLive?: boolean;
  listOfNeighbors?: number[];
}

export interface Poem {
  id: number,
  title: string,
  lines: Line[]
}

interface Line {
  text: string;
  duration: number; // duration of line to read in millisecond
}
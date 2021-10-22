export interface ISolution {
  id: number;
  title: string;
  hint: string;
  desc: string;
  code: string;
  packs: {
    name: string;
    url: string;
  }[];
  solutionUrl: string;
}

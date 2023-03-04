export interface Project {
  textColor: string;
  desc: string;
  stack: string[];
  title: string;
  img: string;
  length: string;
  to: string;
  sector: string;
  year: string;
  liveLink?: string;
  wip: boolean;
}

export interface IProjectOb {
  [key: string]: Project;
}

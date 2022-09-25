import {Course} from "./Course";

export interface SubCategory {
  id: number;
  title: string;
  courses: Array<Course>;
}

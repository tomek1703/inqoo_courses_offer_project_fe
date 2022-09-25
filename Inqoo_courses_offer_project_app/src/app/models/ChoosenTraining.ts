import {Trainer} from "./Trainer";

export interface ChoosenTraining {
  name: string;
  course_uuid: string;
  price: number;
  duration: number;
  description: string;
  trainers: Trainer[];
}

import { ClassC } from "../../folder1/file2";

export class ClassE {
  private c: ClassC;

  constructor() {
    this.c = new ClassC();
  }
  
  doWork() {
    const done = true;
  } 
}

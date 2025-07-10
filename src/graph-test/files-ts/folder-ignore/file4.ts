import { ClassC } from "../folder1/file2";

export class ClassIgnored {
  private c: ClassC;

  constructor() {
    this.c = new ClassC();
  }
  
}

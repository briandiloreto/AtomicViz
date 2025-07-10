import { ClassC } from "../folder1/file2";

export class ClassD {
  private c: ClassC;

  constructor() {
    this.c = new ClassC();
  }
  
  doWork() {
    const done = true;
  } 

  callChain() {
    this.c.callChain();
  }

  notCalled() {
    const done = true;
  }
}

const functionVariable = async (req: Request, res: Response) => {
  const c = new ClassC();
  c.doWork();
}
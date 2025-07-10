import { ClassD } from "../folder2/file3";
import { ClassA, ClassB } from "./file1";

function functionA() {
  const a = new ClassA();
  a.doWorkA();
}

function functionB() {
  const b = new ClassB();
  b.doWork();
}

function functionInternal() {
  const x = 42;
}

export class ClassC {
  private b: ClassB;
  private d: ClassD;

  constructor() {
    this.b = new ClassB();
    this.d = new ClassD();
  }
  
  doWork() {
    const done = true;
  }
  
  callD() {
    this.d.doWork();
  }

  callChain() {
    this.b.callChain();
  }
}


export let variableA = 1;

export class ClassA {
  public x: number;

  constructor() {
    this.x = 1;
  }

  doWork() {
    const work = 1;
    variableA = 2;
  }
}

export class ClassB {
  private a: ClassA;

  constructor() {
    this.a = new ClassA();
    this.a.x = 2;
  }
}

function functionA() {
    const a = new ClassA();
    a.doWork();
  }
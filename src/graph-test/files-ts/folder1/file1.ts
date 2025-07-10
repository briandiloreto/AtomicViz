import { ClassC } from './file2';
import { ClassD } from '../folder2/file3';

let globalA = 'AtomicViz';
let globalB = 'visualization';

function functionX() { return 7;}
const x = functionX();

interface InterfaceX {
  interfaceProp: number;
  interfaceFunction(): number;
}

class ClassBase {
  public baseProp: number;

  constructor() {
    this.baseProp = 1;
  }
}

export class ClassA extends ClassBase implements InterfaceX {
  public interfaceProp: number;
  private b: ClassB;
  private d: ClassD;
  private _propertyA: number;

  get propertyA(): number {
    return this._propertyA;
  }

  set propertyA(value: number) {
    if (this.checkValue(value)) {
        this._propertyA = value;
    } else {
        throw new Error("_propertyA cannot be negative.");
    }
  }

  constructor() {
    super();

    this.interfaceProp = 3;
    this.b = new ClassB();
    this.d = new ClassD();
    this._propertyA = 11; 

    this.init();
  }
  
  checkValue(value: number): boolean {
    if (value >= 0) {
      return true;
    }
    return false;
  }

  init() {
    globalA = 'init';
  }

  interfaceFunction() {
    return 5;
  }

  doWorkA() {
    this._propertyA = 7;
    this._propertyA = 11; // 2nd variable reference
    const x = functionX();

    const localOnly = 3
    const localTest = localOnly + 1;
  }

  doWorkAInternal() {
    this._propertyA = 13;
  }

  callChain() {
    this.doWorkA();
    this.doWorkAInternal();
  }

  callB() {
    this.b.doWork();
  }

  callD() {
    this.d.doWork();
  }
}

export class ClassB extends ClassBase implements InterfaceX {
  public interfaceProp: number;
  private a: ClassA;
  private c: ClassC;
  private items: number[];

  constructor() {
    super();
    
    this.interfaceProp = 7;
    this.a = new ClassA();
    this.c = new ClassC();
    this.items = [1,2,3];
  }
  
  interfaceFunction() {
    return 11;
  }

  doWork() {
    const done = true;
  }

  callChain() {
    this.a.callChain();
  }

  callC() {
    this.c.doWork() 
  }

  loopItems_ForEach() {
    this.items.forEach((item) => {
      this.a.doWorkA();
    });
  }

  loopItems_Map() {
    this.items.map((item) => {
      this.a.doWorkA();
    });
  }
}

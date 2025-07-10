
interface InterfaceA {
  a: number;
  b: number;
}

class ClassA {
  private b: ClassB;
  private d: ClassD;

  constructor() {
    this.b = new ClassB();
    this.d = new ClassD();

    this.init();
  }
  
  init() {
    const here = 1;
  }

  doWork() {
    const here = 1;
  }

  callB() {
    this.b.doWork();
  }

  callD() {
    this.d.doWork();
  }

  callChain() {
    const here = 1;
  }

  handleItem() {
    const here = 1;
  }
}

class ClassB {
  private a: ClassA;
  private c: ClassC;
  private items: number[];

  constructor() {
    this.a = new ClassA();
    this.c = new ClassC();
    this.items = [1,2,3];
  }
  
  doWork() {
    const here = 1;
  }

  callC() {
    this.c.doWork() 
  }

  callChain() {
    this.a.callChain();
  }

  loopItems_ForEach() {
    this.items.forEach((item) => {
      this.a.handleItem();
    });
  }

  loopItems_Map() {
    this.items.map((item) => {
      this.a.handleItem();
    });
  }
}

interface InterfaceB {
  a: number;
  b: number;
}

interface InterfaceC {
  a: number;
  b: number;
}

function function_A() {
  const a = new ClassA();
  a.init();
}

function function_B() {
  const b = new ClassB();
  b.callC();
}

class ClassC {
  private b: ClassB;
  private d: ClassD;

  constructor() {
    this.b = new ClassB();
    this.d = new ClassD();
  }
  
  doWork() {
    const here = 1;
  }
  
  callD() {
    this.d.doWork();
  }

  callChain() {
    this.b.callChain();
  }
}

class ClassD {
  private c: ClassC;

  constructor() {
    this.c = new ClassC();
  }
  
  doWork() {
    const here = 1;
  }
  
  notCalled() {
    const here = 1;
  }

  callC() {
    this.c.doWork() 
  }

  callChain() {
    this.c.callChain();
  }
}

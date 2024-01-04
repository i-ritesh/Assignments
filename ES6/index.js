function CustomArray() {
  this.size = arguments.length;

  for (let i = 0; i < arguments.length; i++) {
    this[i] = arguments[i];
  }
}

CustomArray.prototype = {
  push: function (element) {
    this[this.size++] = element;
  },

  pop: function () {
    if (this.size > 0) {
      const poppedElement = this[--this.size];
      delete this[this.size];
      return poppedElement;
    } else {
      return undefined;
    }
  },

  top: function () {
    if (this.size > 0) {
      return this[this.size - 1];
    } else {
      return undefined;
    }
  },

  print: function () {
    const elements = [];
    for (let i = 0; i < this.size; i++) {
      elements.push(this[i]);
    }
    console.log(`[${elements.join(",")}]`);
  },

  printReverse: function () {
    const elements = [];
    for (let i = this.size - 1; i >= 0; i--) {
      elements.push(this[i]);
    }
    console.log(`[${elements.join(",")}]`);
  },
};

const stack = new CustomArray(1, 2, 3, 4);
stack.print();          
stack.push(5);
stack.print();          
stack.pop();
stack.print();          
console.log(stack.top());  
stack.printReverse();   
console.log(stack.size);   

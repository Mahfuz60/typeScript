"use strict";
class Counter {
    constructor(count) {
        this.count = count;
    }
    increment() {
        return (this.count = this.count + 1);
    }
    decrement() {
        return (this.count = this.count - 1);
    }
}
const instance1 = new Counter(0);
const instance2 = new Counter(1);
// console.log(instance1.increment());
// console.log(instance2.increment());
//Used Static
class Counter2 {
    static increment2() {
        return (Counter2.counter = Counter2.counter + 1);
    }
    static decrement2() {
        return (Counter2.counter = Counter2.counter - 1);
    }
}
Counter2.counter = 0;
console.log(Counter2.increment2()); //0-1
console.log(Counter2.increment2()); //1-2
console.log('decrement:' + Counter2.decrement2()); //2-1=1

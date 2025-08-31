// console.log(3 + 2 + "7");//57

// const a = 1 < 2 < 3;//true
// const b = 1 > 2 > 3;//false
// console.log(a, b)

// const p = { k: 1, l: 2 };
// const q = { k: 1, l: 2 };
// let isEqual = p == q;
// let isStartEqual = p === q;
// console.log(isEqual, isStartEqual);//false ,false


// console.log(2 + 2);//4
// console.log("2" + "2");//22
// console.log(2 + 2 - 2);//2
// console.log("2" + "2" - "2");//22-2=20
// console.log(4 + "2" + 2 + 4 + "25" + 2 + 2);//42242522

// let a = 'jscafe'
// a[0] = 'c'
// console.log(a);//jscafe


// var x = 10;
// function foo() {
//     var x = 5;
//     console.log(x);;//5
// }
// foo();
// console.log(x);//10


console.log("Start");
setTimeout(() => {
    console.log("Timeout");
});
Promise.resolve().then(() => console.log("Promise"));
console.log("End");


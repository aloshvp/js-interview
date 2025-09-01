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


// console.log("Start");
// setTimeout(() => {
//     console.log("Timeout");
// });
// Promise.resolve().then(() => console.log("Promise"));
// console.log("End");
// start, End, Promise, Timeout


// function x() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000)
//     }
// }
// x();


// function x() {
//     let a = 10;
//     function d() {
//         console.log(a);
//     }
//     a = 500;
//     return d;
// }
// var z = x();
// z();
//500

// getData1();
// getData();
// function getData1() {
//     console.log("getData11")
// }
// let getData = () => {
//     console.log("Hello")
// }


// function func() {
//     try {
//         console.log(1)
//         return
//     } catch (e) {
//         console.log(2)
//     } finally {
//         console.log(3)
//     }
//     console.log(4)
// }
// func();//1,3


// const nums = [1, 2, 3, 4, 5, 6, 7];
// nums.forEach((n) => {
//     if (n % 2 === 0) {
//         break;//works with for,while,do..while
//     }
//     console.log(n);
// });//syntax error


// let a = true;
// setTimeout(() => {
//     a = false;
// }, 2000)
// while (a) {
//     console.log(' -- inside whilee -- ');
// }
//infinite loop -- inside whilee --


// setTimeout(() => console.log(1), 0);
// console.log(2);
// new Promise(res => {
//     console.log(3)
//     res();
// }).then(() => console.log(4));
// console.log(5);//2,3,5,4,1


// async function foo() {
//     console.log("A");
//     await Promise.resolve();
//     console.log("B");
//     await new Promise(resolve => setTimeout(resolve, 0));
//     console.log("C");
// }
// console.log("D");
// foo();
// console.log("E")
//D,A,,E,B,C

// let output = (function (x) {
//     delete x;
//     return x;
// })(3);
// console.log(output);//3

// for (var i = 0; i < 3; i++) {
//     setTimeout(function () {
//         console.log(i);//3 3 3
//     }, 1000 + i);
// }

// for (let i = 0; i < 3; i++) {
//     setTimeout(function () {
//         console.log(i);//0 1 2
//     }, 1000 + i);
// }

// let output = (function (x) {
//     delete x;
//     return x;
// })(3);
// console.log(output);//3

// let c = 0;
// let id = setInterval(() => {
//     console.log(c++)
// }, 10)
// setTimeout(() => {
//     clearInterval(id)
// }, 2000)


// function getName1() {
//     console.log(this.name);
// }
// Object.prototype.getName2 = () => {
//     console.log(this.name)
// }
// let personObj = {
//     name: "Tony",
//     print: getName1
// }
// personObj.print();
// personObj.getName2();


// function test() {
//     console.log(a);
//     console.log(foo());
//     var a = 1;
//     function foo() {
//         return 2;
//     }
// }
// test();//undeined,2



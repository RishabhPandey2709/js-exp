//01
// function User(name){
//     this.sayHi=function(){
//         console.log(name);
//     }
// };
// let user = new User('john');
// user.sayHi();


//02
// class User{
//     constructor(name){
//         this.name=name;
//     }
//     sayHi (){
//         console.log(this.name);
//     }
// }
// let user = new User('john');
// user.sayHi();
// console.log(User=== User.prototype.constructor)
// console.log(Object.getOwnPropertyNames(User.prototype));


// class User{
//     constructor(){}
// }
// console.log(typeof User);
//User(); -- can't invoked without new



// class User{
//     constructor(name){
//         this.name=name;
//     }
//     get name(){
//         return this._name;
//     }
//     set name(value){
//         if(value.length<4){
//             console.log("name is too short");
//         }
//         return this._name=value;
//     }
// }
//let user = new User("john");
// let user = new User("");
// console.log(user.name);

// class User { }
// User.prototype.test = 5;

// class User {
//     get test(){
//         return 5;
//     }
// }
// console.log(new User().test);

// let rectangle = class {
//     constructor(height,width){
//         this.height=height;
//         this.width=width;
//     }
// }
// console.log(rectangle.name);

// let rectangle = class rectangle2{
//     constructor(height,width){
//                  this.height=height;
//                  this.width=width;
//              }
// }
// console.log(rectangle.name );


// class Rectangle{
//     constructor(height, width){
//         this.height=height;
//         this.width=width;
//     };
//     get area(){
//         return this.calcArea();

//     }
//     calcArea(){
//         return this.height*this.width;
//     }
// }
// const square = new Rectangle(20,30);
// console.log(square.area);

//-----static method

// class Point {
//     constructor(x,y){
//         this.x=x;
//         this.y=y;
//     }
//     static distance(a,b){
//         const dx = a.x-b.x;
//         const dy = a.y-b.y;

//         return Math.hypot(dx,dy)
//     }
// }
// const p1 = new Point(6,5);
// const p2 = new Point(8,10);

// console.log(Point.distance(p1,p2));

// class Animal {
//     speak(){
//         return this;
//     }
//     static eat (){
//         return this;
//     }
// }
// let p = new Animal();
// console.log(p.speak());

//-------------calbacks

// let alluserData = [];
// function log(userData){
//     if(typeof userData ==="string" ){
//         console.log(userData);
//     }else if(typeof userData ==="object"){
//         for(let item in userData){
//             console.log(`${item}: ${userData[item]}`);
//         }
//     }

// }

//let lastName = "adam";
// function getInput(option, callback){
//     alluserData.push(option);
//     if (typeof  callback==="function"){
//         callback(option);
//     }
// }
// getInput({name:"abc",age:50},log);


// function shouldGoFirst(calback){
//     setTimeout(()=>{console.log("i should always go first")
//           calback();
//           }
//          ,1000);
    
// }
// function shouldGoSecond(){
//     console.log("i should always go second");
// }
// shouldGoFirst(shouldGoSecond);

//  function sum(num1,num2,cb){
//      let summedValue;
//    setTimeout(()=>{
//      summedValue = num1+num2;
//      cb(summedValue);
//    },1000)
// }
//  function logSum(summedValue){
//      console.log(`the sum total is: ${summedValue}`);
//  }
//  sum(4,4,logSum);


//  //callback function
//  function sayWhenDone(Count){
//      console.log(`looped ${Count} times capitalised`)
//  }
// //parent function
// function looper(arr,cb){
//     let i = 0;
//     for(i;i<arr.length;i++){
//     const name = arr[i];
//     const capitalisedName = name.charAt(0).toUpperCase() + name.slice(1);
//     arr[i]=capitalisedName;
//     }
//     cb(i);
// }
// const myNames = ["ram","jack","adam","did"];

// looper(myNames,sayWhenDone);
// console.log(myNames);


//---promises

const test = new Promise((resolve,reject)=>{
    if(Math.random>0.5){
        reject("promise reject");
    }
    setTimeout(()=>{
        resolve("promise ok!");
    })
});
// test.then((resolveMessage)=>{
//    console.log(`look like ${resolveMessage}`);
// }).then(()=>{
//     console.log("sjai<bowurg");
// }).catch((rejectMessage)=>{
//    console.log(`look like ${rejectMessage}`);
// })


// function numAdder (n1,n2){
//    return new Promise((resolve,reject)=>{
//        const add = n1+n2;
//        resolve(add);
//    });
// }
// function numSquarer(num){{
//     return new Promise((resolve,reject)=>{
//         resolve(num*num);
//     })
// }}
// numAdder(10,10).then((data)=>{
//     return numSquarer(data);
// }).then((result)=>console.log(result));

let p1 =  new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('a');
    },1000)
});
let p2 = Promise.resolve('b');
let p3 =  Promise.reject('c');
Promise.all([p1,p2,p3])
.then((data)=>console.log(data))
.catch((err)=>console.log(err));

console.log('hey');

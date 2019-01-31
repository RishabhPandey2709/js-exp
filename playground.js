// let i =0;
// while(i<3){
//     console.log(i);
//     i++;
// }

// let i =3;
// //while(i!=0)
// while(i){
//  console.log(i);
//  i--;
// }

// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<3);


// for(i=0;i<3;i++){
//     console.log(i);
// }
// console.log(i);

// for(i=0;i<10;i++){
//     setTimeout(function(){
//         console.log(i);
//     });
// }

// for(let i=0;i<=10;i++){  
//     if(i===2){
//         console.log('no. 2 is my favorite ');
//         continue;
//     }
//     if(i===5){
//         console.log('stop the loop');
//         break;
//     }
//     console.log(i);
// }
// loop through array
//const cars =['honda', 'audi','toyoto','toyoto'];
// for(let i=0;i<cars.length;i++){
//     console.log(cars[i]);
// }
//through foreach
// cars.forEach(function(car,index,array){
//     console.log(`{index} : {car}`);
//     console.log(array);
// })

// Map
// const users = [
//     {id:1 ,name:"ram"},
//     {id:2 ,name:"ra"},
//     {id:3 ,name:"am"},
//     {id:4 ,name:"m"},
// ];
// const ids =  users.map(function(user){
//     return user.name;
// });
// console.log(ids);

//For in

// const user = {
//     firstNmae : 'rahul',
//     secondName : 'yadav',
//     age : 40
// };
// for(let x in user){
//     console.log(`${x}: ${user[x]}`);
// }

// let obj = {
//     30 : "children",
//     200:"child"
// };
// console.log(obj['30']);
// let person = "kobe";
// let anotherPerson = person;
// person = 'jack';

// console.log(person);
// console.log(anotherPerson);

// let person = {name:"kobe"};
// let anotherPerson = person;
// person.name='jack';
// console.log(person);
// console.log(anotherPerson);

//object creation 
// let obj = {};
//OR
// let obj01 = {
//     color : "",
//     shape:"",
//     sweetness:"",
//     howSweetAmI = function(){
//         console.log('hmm hmm good');
//     }
// };

// //object constructor
// let mango = new Object();
// mango.color="";
// mango.sweetness= "";
// mango.shape="";
// mango.howSweetAmI=function(){
//     console.log('hmm hmm good');
// }


// let fruit = {
//     fruitName:"Mango",
//     color : "yellow",
//     sweetness:"8",
//     nativeLand : ["india","japan"],
//     showName : function(){
//         console.log("this is " + this.fruitName);
//     },
//     nativeTo : function(){
//         this.nativeLand.forEach(function(country){
//           console.log(" grown in :" + country);
//         });
//     }
// };
// console.log(fruit.showName());

//constructor pattern
// function fruit(fruitName,color,sweetness,nativeLand,showName,nativeTo){
//     this.fruitName = fruitName;
//     this.color=color;
//     this.sweetness=sweetness;
//     this.nativeLand = nativeLand;
//     this.showName=function(){
//     console.log("this is " + this.fruitName);
//      };
//      this.nativeTo=function(){
//          this.nativeLand.forEach(function(country){
//              console.log("grown in :" + country);
//          })
//      }
// };

// let mangoFruit = new fruit ("Mango","yellow",8,["india","africa","america"]);
// // console.log(mangoFruit.showName());
// // console.log(mangoFruit.nativeTo());
// let pineappleFruit = new fruit("pineapple","brown",4,["abc",'irei',"jfjf"]);
// console.log(pineappleFruit.showName());

//function Fruit(){
//     Fruit.prototype.color = "Yellow";
//     Fruit.prototype.sweetness = 8;
//     Fruit.prototype.name="mango";
//     Fruit.prototype.nativeLand = "ABC";
//     Fruit.prototype.showName = function(){
//         console.log("this is " + this.name);
//     }
//     Fruit.prototype.nativeTo = function(){
//         console.log("grown in :" + this.nativeLand);
//     }
// }
// let mangoFruit = new Fruit();
// console.log(mangoFruit.nativeTo());

// let book = {title:"ways to go ",pages:280,bookmark1:"page 20"};
// console.log(book.title);
// console.log(book["title"]);
// console.log(book.bookmark1);
// console.log(book["bookmark"+1]);

// let school = {schoolName:"abcd"};
// console.log("schoolName" in school);
// console.log("schoooltype" in school);
// console.log("toString" in school);
// console.log(school.hasOwnProperty("schoolName"));
// console.log(school.hasOwnProperty("toString"));

// let school = {schoolName:"MIT", schoolAccredited: true, schoolLocation:"Massachusetts"};
// for(let item in school){
//     console.log(`${item}: ${school[item]}`);
// }

function HighLearning(){
    this.educationLevel = "university";
}
 let school = new HighLearning();
 school.schoolName="MIT";
 school.schoolAccredited=true;
 school.schoolLocation="ABC";

 for(let item in school){
     console.log(`${item}: ${school[item]}`);
 }
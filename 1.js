//arrays,objects,apis call,json

let age = 12;
let ages = [12,3,4];
// collection of data 
let names = ["samad", "tahoor", "arham"];
let names2 = ["nandss", 12, {name:"Samad"}];

//printng valuess
names.push("salim");
console.log(names)
names.pop();
console.log(names);
// unshift, shift
names.unshift("amaaan");
console.log(names)
names.shift()
console.log(names);


//map. filter, reduce   : method jo sirf arrays work krti hai

let numbers = [1,2,3,4,5];

// const ans = numbers.map((elem)=>{
//       return elem+2;
// })
// console.log(ans);

// const ans2 = numbers.filter((elem)=>{
//         return elem >=3;
// })

// console.log(ans2);


// const ans3 = numbers.reduce((acc,cval)=>{
//     return acc+cval;
// }, acc = 0)

// console.log(ans3);


// arrays, methodofarray(map,filter,reduce),callback fucnction, client-server architecture, objects


let obj = {};
obj.name = "arham";
obj.age = 22;
obj.profession  = "Btech";
obj.behaviour = ()=>{
    console.log("Arham rozz hilataa haiiii")
}

console.log(obj["name"]) 
console.log(obj.name);
console.log(obj.behaviour());


// for(let key in obj){
//     console.log({property:key, value:obj[key]})
// }











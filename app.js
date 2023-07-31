
// let data = `{
//     "name" : "Hilal Ahmad",
//     "Age" : 22,
//     "passport no" : "1242623",
//     "P-lang" : ["c" , "c++" , "java" , "js"],
//     "address": {
//         "country" : "india",
//         "state" : "kashmir",
//         "district" : "kupwara",
//         "pin-code" : "193222"

//     }
// }`;

// let DataObj = JSON.parse(data);
// console.log(DataObj['name']);
// console.log(DataObj['Age']);
// console.log(DataObj['passport no']);
// console.log(DataObj['P-lang'][3]);

// console.log(DataObj['address']['country']);
// console.log(DataObj['address']['state']);
// console.log(DataObj['address']['district']);
// console.log(DataObj['address']['pin-code']);



let data = {
    name : "hilal",
    age : 22,
    address : "kalaroos",
    district : "kupwara"
}

let jsonStr = JSON.stringify(data);
console.log(jsonStr);

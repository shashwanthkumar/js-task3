// //objects- it is a collection of key-value pairs
// //denoted with {}
// let obj={key:"value", name:"sethu"}
// console.log(obj)
// //access the object with key

// console.log(obj["key"])

// let details={
//     name:"shashi",
//     age:20,
//     city:"HYD",
//     address:{
//         dr_no:30,
//         street:"thaiwan",
//     },
//     work:"s/w"
// }
// console.log(details)
// console.log(details.address)
// console.log(details.address.street)

// details.pincode=500036
// details["state"]="Telangana"
// console.log(details)

// //for in - loop

// //for(variablename in objectname){
// //}

// for(key in details){
//     console.log(details[key])
//     console.log(key)
// }


// //object.keys()
// //object.values()
// //object.entries()
// //object.assign()
// //object.seal()
// //object.freeze()

// console.log(Object.keys(details))
// console.log(Object.values(details))
// console.log(Object.entries(details))


// Object.seal(details) // no entry, no deletion, no modify of elements from object
// details.gender="M"
// console.log(details)

// Object.freeze(details)

// =======================TASK=============================


let clas = {
    boys: 30,
    girls: 20,
    total: [30, 20],
    marks: {
        st1: "shashi",
        rank: 49,
    },
    pincode: 535558
}
let cls2 = {
    gender: "male",
}

// method-1:-

for (i in clas) {
    count = 0
    for (j in cls2 ) {
        if (i === j) {
            count++
        }
    }
    if (count == 0) {
        console.log(i, "is not present");
        clas[j] = cls2[j]
    }
}
console.log(clas)

//Method-2:-

console.log(Object.keys(clas))
console.log(Object.keys(clas).includes("boys"))
let st = { staf: 10 }
console.log(Object.assign(clas, st))

//method-3:-

let values = Object.keys(clas);
console.log(values);
let x=(Object.keys(clas).includes("boys"))
if(x==true){
    console.log("valid")
    let add={staf:10}
    console.log(Object.assign(clas,add))
}
else{
    console.log("Not valid")
}


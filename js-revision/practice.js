// const numbers=[1,3,5,7,9]
// let even=[]
// for(num of numbers){
//     if(num%2==1){
//         num=num+1
//         even.push(num)
//     }
// }
// console.log(even)

const numbers=[1,3,5,7,9]

const even=numbers.map(num => num+=1)

console.log(even)

const array=[33,50,78,79,90,101,30]

const divisible=array.filter(num =>num%10==0)

console.log(divisible)

const constructor=[
    {name:'akil',age:26,position:'senior'},
    {name:'akifs',age:26,position:'junior'},
    {name:'asif',age:26,position:'senior'}
]
let newConstructor=[]

for(cons of constructor){
    if(cons.position=='senior'){
        newConstructor.push(cons)
    }
}
console.log(newConstructor)
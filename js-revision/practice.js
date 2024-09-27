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
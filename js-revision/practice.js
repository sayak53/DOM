// const numbers=[1,3,5,7,9]
// let even=[]
// for(num of numbers){
//     if(num%2==1){
//         num=num+1
//         even.push(num)
//     }
// }
console.log(even)

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
const pos=constructor.filter(cons => cons.position == 'senior')
console.log(pos)

const names=[
    {name:'akil',age:26,},
    {name:'akifs',age:29,},
    {name:'asif',age:35,}
]
let age=0
for(const name of names){
    age += name.age
}
console.log(age)

function greetings(greet,name){
    return greet + ' ' + name
}

const res = greetings('Good Morning','Sayak')
console.log(res)

function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32));

const sum =(p, q)=> {
     return p + q;
   }
   const result = sum(2, 3);
   console.log(result);
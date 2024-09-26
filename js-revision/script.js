function add(num1,num2){
    return num1+num2
}
const sum =add(10,8)
console.log(sum)

const mul=(x,y) => x*y

console.log(mul(8,5))

const doMath=(a,b,c,d)=>{
    const sum=a+b
    const diff=c-d
    const result=sum*diff
    return result
}

const res=console.log(doMath(10,5,25,5))

const obj={
    name:"Batman",
    profession:"The dark knight",
    age:32,
    income:5000000
}
console.log(Object.values(obj))

// understanding map

const numbers=[12,4,7,5,4,6575,5754]

const square=numbers.map(number => number*2)
console.log(square)

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);

const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);
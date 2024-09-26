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
    income:12879456987
}
console.log(Object.values(obj))
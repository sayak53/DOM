const even=[]
const FindEven=(array) => {
    for(arr of array){
        if(arr.length%2==0){
          even.push(arr)
        }
    }
    return even
}

const friends=['sayak','rakib','rajesh','tornov','rohit']

const result=FindEven(friends)
console.log(result)

const firstArray=[34,65,78,32,12,35]
const secondArray=[31,34,2,165,98,65,34]

const add=firstArray.concat(secondArray)
console.log(add)

console.log(Math.max(...add))

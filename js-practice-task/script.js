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
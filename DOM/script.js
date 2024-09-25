// let ul = document.querySelector("ul")
// console.log(ul)

// let li = document.createElement("li")
// li.innerText="nom"

// ul.append(li)

document.getElementById('update').addEventListener('click',function(e){
    e.preventDefault()
    const inputField=document.getElementById('input-field')
    const inputText = inputField.value

    const p = document.getElementById('text')
    p.innerText = inputText
    inputField.value = ""
})

document.getElementById('post-btn').addEventListener('click',function(){
    const comment=document.getElementById('comment-box').value
    const p=document.createElement('p')
    p.innerText=comment

    document.getElementById('comment-container').appendChild(p)
    
    document.getElementById('comment-box').value=""
})
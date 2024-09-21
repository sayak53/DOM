// let ul = document.querySelector("ul")
// console.log(ul)

// let li = document.createElement("li")
// li.innerText="nom"

// ul.append(li)

document.getElementById('update').addEventListener('click',function(){
    const inputField=document.getElementById('input-field')
    const inputText = inputField.value

    const p = document.getElementById('text')
    p.innerText = inputText
    inputField.value = " "
})

document.getElementById('post-btn').addEventListener('click',function(){
    const comment=document.getElementById('comment-box').value
    const box=document.getElementById('comment-container')
    box.appendChild(comment)
})
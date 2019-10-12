var botao1 = document.querySelector("#botao1")
const lista4 = document.querySelectorAll('ul')
var nodeDoing = document.querySelector('#doing')
var nodeDone = document.querySelector('#done')


var lista = document.querySelector('#todo1')
//var itens1 = document.getElementsByTagName('li')




const insertTodo = () =>{
    var elementol1 = document.createElement('li')
    var inputTodo = document.querySelector(".input").value

    var button1 = document.createElement('button')
    var buttonImg = document.createElement('i')
    buttonImg.setAttribute('class','fas fa-chevron-circle-right')
    button1.setAttribute('class','botao2')
    button1.appendChild(buttonImg)
    
    
    var textoTodo = document.createTextNode(`${inputTodo} `)

    elementol1.appendChild(textoTodo)
    elementol1.appendChild(button1)
    lista.appendChild(elementol1)
    button1.onclick = ()=> insertDoing(elementol1,textoTodo,button1) 
    
}


const insertDoing = (item, texto, botao) =>{
    

    var nodeTodo = document.querySelector('#todo1 li')
    var elementol2 = document.createElement('li')
    elementol2.appendChild(texto)
    elementol2.appendChild(botao)
    nodeDoing.appendChild(elementol2)
    

    if(nodeTodo.parentNode){
        nodeTodo.parentNode.removeChild(item)
    }

    botao.onclick = () => insertDone(elementol2,texto,botao)
   
}

const insertDone = (item,texto,botao)=>{
    var nodeDoing2 = document.querySelector('#doing li')
    var elementol3 = document.createElement('li')
    

    elementol3.appendChild(texto)
    elementol3.appendChild(botao)
    nodeDone.appendChild(elementol3)

    if(nodeDoing2.parentNode){
        nodeDoing2.parentNode.removeChild(item)
    }

    botao.onclick = () => removeDone(elementol3)
    
}

const removeDone = (item) => {
    var nodeDone2 = document.querySelector('#done li')
    if(nodeDone2.parentNode){
        nodeDone2.parentNode.removeChild(item)
    }
}


botao1.onclick = () => insertTodo()


var botao1 = document.querySelector("#teste")


var lista = document.querySelector('#todo1')
var itens = document.getElementsByTagName('li')
botao1.addEventListener("click", insereTodo)
function insereTodo(){
    var elementol1 = document.createElement('li')
    var inputTodo = document.querySelector(".input").value

    var button1 = document.createElement('button')
    var buttonImg = document.createElement('i')

    buttonImg.setAttribute('class','fas fa-chevron-circle-right')

    button1.appendChild(buttonImg)
    
    
   
    var textoTodo = document.createTextNode(`${inputTodo} `)

    elementol1.appendChild(textoTodo)
    elementol1.appendChild(button1)
    lista.appendChild(elementol1)
    
}



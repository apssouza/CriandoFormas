var forma = document.getElementById('forma')

function quadrado(){
    document.getElementById('forma').className= 'quadrado'
}

// outra forma
function retangulo(){
    forma.className = 'retangulo'
}

function losango(){
    forma.className = 'losango'
}

function circulo(){
    forma.className = 'circulo'
}

function reset(){
    forma.className = ' '
    forma.innerHTML = ' '
}

function mover(){
    
}
const boton = document.querySelector('#buscar')


function cargarEventListeners(){
    boton.addEventListener('click', minMax)
}


const minMax =  (e) =>{
    
    console.log('Entramos a la función')

    let min = document.querySelector('#min').value
    let max = document.querySelector('#max').value

    if (min > max){
        e.preventDefault()
        window.alert("El precio mínimo debe ser mayor al precio máximo")
        
    }

    console.log(min)
    console.log(max)
    
    
}
cargarEventListeners();
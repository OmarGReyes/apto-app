const boton = document.querySelector('#buscar')
function cargarEventListeners(){
    boton.addEventListener('click', minMax)
}
const minMax =  (e) =>{
    
    console.log('Entramos a la función')

    let min = document.querySelector('#min').value
    let max = document.querySelector('#max').value
    console.log(min)
    console.log(max)  
    
    if (max != 0){
        if (min > max){
            e.preventDefault()
            window.alert("El precio mínimo debe ser menor al precio máximo")        
        }
    }

      
}
cargarEventListeners();
let siguiente = document.getElementById('siguiente')
let anterior = document.getElementById('anterior')




siguiente.addEventListener('click', siguientePag)
anterior.addEventListener('click', anteriorPag)


function siguientePag(e){
    e.preventDefault()
    let actual = new URLSearchParams(window.location.search)
    console.log(actual);
    let page = Number(actual.get('page'))+1
    const min = actual.get('min')
    const max = actual.get('max')
    const hab = actual.get('hab')
    window.location.replace(`https://thawing-ravine-09830.herokuapp.com/aptos/filter?min=${min}&max=${max}&hab=${hab}&page=${page}`)
    console.log(myParam);    
}

function anteriorPag(e){
    e.preventDefault()
    let actual = new URLSearchParams(window.location.search)
    let page = Number(actual.get('page'))-1
    const min = actual.get('min')
    const max = actual.get('max')
    const hab = actual.get('hab')
    if (page ===0){
        return
    }
    window.location.replace(`https://thawing-ravine-09830.herokuapp.com/aptos/filter?min=${min}&max=${max}&hab=${hab}&page=${page}`)
}
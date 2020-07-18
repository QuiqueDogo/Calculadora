document.addEventListener("DOMContentLoaded",() =>{
    var buttonCal = document.querySelector('.calcular')
    buttonCal.addEventListener("click", calcular);

})

let arregloBodega = [
    ["0.6","1.1", "0.99"],
    ["0.8","1.3", "1.01"],
    ["1","1.5", "1.03"],
    ["1.2","1.7", "1.05"],
    ["1.3","1.9", "1.07"],
]



calcular = () => {
    var largo = document.querySelector('#largo').value
    var ancho = document.querySelector('#ancho').value
    var alto = document.querySelector('#alto').value

    console.log(largo,ancho,alto)

   arregloBodega.forEach(element => {
       
       console.log(element)
   });
    console.log("hola")
}
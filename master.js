document.addEventListener("DOMContentLoaded",() =>{
    var buttonCal = document.querySelector('.calcular')
    buttonCal.addEventListener("click", calcular);

})
//arreglo de las bodegas 1.-largo 2- ancho 3-Alto
let arregloBodega = [
    ["1.7","1.1", "1.08"],
    ["1.6","1.3", "1.01"],
    ["1","1.5", "1.03"],
    ["1.2","1.7", "1.05"],
    ["1.3","1.9", "1.07"],
]

deleteChild = (data) =>{
    while (data.firstChild) {
        data.removeChild(data.lastChild);
      }
}

calcular = () => {
    var largo = document.querySelector('#largo').value
    var ancho = document.querySelector('#ancho').value
    var alto = document.querySelector('#alto').value
    //obtenemos valores
    if(largo == "" || ancho == "" || alto == ""){
        alert("No dejes campos vacios")
    }else{
        console.log(largo,ancho,alto)
        arregloBodega.forEach((element,index) => {
            if(largo > element[0] || ancho > element[1] || alto > element[2]){
                var bodega = document.querySelector(`.bodega${index+1}`)
                deleteChild(bodega);
                // console.log(`No cabe en la bodega ${index+1}`)
                var pbodega = document.createElement('p')
                pbodega.innerHTML = `No cabe en la bodega ${index+1}`
                bodega.appendChild(pbodega)
            }else{
                var unidades = calcularUnidades(element[0],element[1],element[2],largo,ancho,alto )
                var bodega = document.querySelector(`.bodega${index+1}`);
                deleteChild(bodega);
                var pbodega = document.createElement('p')
                pbodega.innerHTML = `Cabe en la bodega ${index+1} -> ${unidades}`
                bodega.appendChild(pbodega)
                let ele = parseFloat(element[0])-parseFloat(largo)
                let num = ele.toFixed(2)
                console.log(num == 0)
            }
        });
    }
}


calcularUnidades = (cajax, cajay, cajaz, dimx, dimy, dimz) =>  {
    console.log(cajax, cajay, cajaz, dimx, dimy, dimz)
    var opc1 = Math.floor(cajax / dimx) * Math.floor(cajay / dimy) * Math.floor(cajaz / dimz); 
    var opc2 = Math.floor(cajax / dimx) * Math.floor(cajay / dimz) * Math.floor(cajaz / dimy);
     numc = Math.max(opc1, opc2); 
   
return num;
}
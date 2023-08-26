const carro = {
    marca:'Renault',
    modelo:'2005',
    color:'gris',
    nombre:'stepway',
    obtenerOdometro: (tipo)=>{
        const kilometros = 15000
        return tipo ==='millas' ? kilometros/1.62 : kilometros
    }
}
console.log(carro.marca)
console.log(carro.obtenerOdometro('millas'))
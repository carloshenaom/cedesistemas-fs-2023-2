const nombres = ['luis', 'maria', 'pedro', 'alex','javier']

//agregar en la co9la
nombres.push('sara')

//buscar
const personaEncontrada = nombres.find(item => item === 'pedro')
console.log(personaEncontrada)

//filtrar y crea ubn nuevo arreglo
const nuevoNombre = nombres.filter(item => item !== 'pedro')
console.log(nuevoNombre)

const empiezapoM = nombres.filter(item => item.charAt(0) === 'm')
console.log(empiezapoM)

//recorrer
nombres.map(item => console.log('item', item))

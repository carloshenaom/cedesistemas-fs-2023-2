let edad = 18

// condicionales simples
if (edad >= 18){
    console.log('mayor de edad')
}

// condicional compuesto
if (edad >= 18){
    console.log('mayor de edad')
} else {
    console.log('no es mayor de edad')
}

if (edad > 18){
    console.log('mayor de 18')
}else if(edad === 18){
    console.log('edad de 18')
}else{
    console.log('no es mayor de edad')
}

// condiciones ternarias
let mensaje = edad >= 18 ? 'Bienvenido' : 'No hay acceso'
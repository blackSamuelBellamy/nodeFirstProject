const fs = require('fs')
const citas = require('./citas.json')


const registrar = (nombreAnimal, edad, tipoAnimal, colorAnimal, enfermedad) => {

    citas.push({
        "Nombre del animal": nombreAnimal,
        "Edad": edad,
        "Tipo de animal": tipoAnimal,
        "Color del animal": colorAnimal,
        "Enfermedad": enfermedad
    })

    fs.writeFileSync('citas.json', JSON.stringify(citas))
}

const leer = () => {

    const desplegar = fs.readFileSync('citas.json', 'UTF-8')
    const horas = JSON.parse(desplegar)
    console.log('\n')

    horas.map(cita => {
        for(let i = 0; i < Object.keys(horas[0]).length; i ++) {
            console.log(Object.keys(cita)[i] + ': ', Object.values(cita)[i])
        }
        console.log('\n')
    })

    if(horas.length === 0) 
    console.log('No tienes citas, Ingresa al menos una cita para poder visualizar\n')

    if(horas.length > 0)
    console.log(`En total hay ${horas.length} ${horas.length === 1 ? 'cita': 'citas'}\n`)

}

module.exports = { registrar, leer }
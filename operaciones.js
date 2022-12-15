const fs = require('fs')
const citas = require('./citas.json')


const registrar = (nombreAnimal, edad, tipoAnimal, colorAnimal, enfermedad) => {

    citas.push({
        "Nombre del animal": nombreAnimal.toLowerCase(),
        "Edad": edad + ' años',
        "Tipo de animal": tipoAnimal.toLowerCase(),
        "Color del animal": colorAnimal.toLowerCase(),
        "Enfermedad": enfermedad.toLowerCase()
    })

    try {
        fs.writeFileSync('citas.json', JSON.stringify(citas))
    } catch (e) {
        console.log(e)
        console.log('Hubo un error, intentalo nuevamente en un momento')
    }
}

const leer = () => {

    const desplegar = fs.readFileSync('citas.json', 'UTF-8')
    const horas = JSON.parse(desplegar)
    console.log('\n')

    if (horas.length === 0) {
        console.log('No tienes citas, Ingresa al menos una cita para poder visualizar\n')
    }
    else {

        horas.map(cita => {
            for (let i = 0; i < Object.keys(horas[0]).length; i++) {
                console.log(Object.keys(cita)[i]  + ': ' , Object.values(cita)[i])
            }
            console.log('\n')
        })

        console.log(`En total hay ${horas.length} ${horas.length === 1 ? 'cita' : 'citas'}\n`)

    }

}

module.exports = { registrar, leer }
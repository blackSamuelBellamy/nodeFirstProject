const { registrar, leer } = require('./operaciones')
const arguments = process.argv.slice(2)

const nombre = arguments[1]
const edad = arguments[2]
const tipo = arguments[3]
const color = arguments[4]
const enfermedad = arguments[5]

if (arguments[0].toLowerCase() === 'registrar' && arguments.length === 6) {

    registrar(nombre, edad, tipo, color, enfermedad)
    console.log('\nCita agendada satisfactoriamente!\n')

} else if (arguments[0].toLowerCase() === 'registrar' && arguments.length < 6) {
    console.log('\nAsegurate de ingresar todos los datos necesarios,')
    console.log('estos son el nombre, la edad, el tipo de animal, el color y la enfermedad\n')
}

else if (arguments[0].toLowerCase() === 'registrar' && arguments.length > 6) {

    registrar(nombre, edad, tipo, color, enfermedad)
    console.log('\nNo necesitamos tantos datos, solo el nombre, edad, tipo de animal, color y la enfermedad')
    setTimeout(() => {
        console.log('Favor ingresa solo lo solicitado en una nueva oportunidad...')
    }, 3000)
    setTimeout(() => {
        console.log('\nCita agendada satisfactoriamente!\n')
    }, 5000)
}

else if (arguments[0].toLowerCase() === 'leer' && arguments.length > 1) {

    console.log('\nSolo es necesario escribir el comando leer')
    setTimeout(() => {
        console.log('accediendo al archivo de citas...')
    }, 2000)
    setTimeout(() => {
        leer()
    }, 4000)
}
else if (arguments[0].toLowerCase() === 'leer') {
    leer()
}

else {
    console.log('Hubo un problema al ingresar los datos, intenta hacerlo correctamente')
}

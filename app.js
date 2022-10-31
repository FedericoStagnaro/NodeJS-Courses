const fs = require('fs')
const { EventEmitter } = require('events');
const emiter = new EventEmitter()


// lectura sincronica
var contenidoSync = fs.readFileSync('./data.txt', 'utf-8') 


// lectura asincronica
var contenidoAsync = fs.readFile('./data.txt', 'utf-8', (error, data) => {
    return data
})

console.log(contenidoSync + ' - sincronico') // hola mundo!! - sincronico
console.log(contenidoAsync + ' - asincronico') // undefined + - asincronico'

// lectura con error
fs.readFile('./data_no_exist.txt', 'utf-8', (error, datos) => {
    if (error) {
        emiter.emit('error', error)
    }
})

// lectura de carpeta
fs.readdir('.', { withFileTypes: true }, (error, items) => {
    console.log(items)
})

// escritura con fs
fs.writeFile('./txtFile.txt', 'Escribiendo un archivo a traves de nodeJS', (error) => {
    if (error) {
        console.log(error)
        return
    }
    console.log('Escritura de archivo exitosa')
})

// copiasr archivos con fs
fs.copyFile('./data.txt', './archivoCopia.txt', (error) => {
    if (error) {
        console.log(error)
        return
    }
    console.log('Copia de archivo exitosa')
})

// eliminar archivos
fs.writeFile('./fileToDelete.txt', 'Me van a eliminar!!', (error)=>{
    fs.unlink('./fileToDelete.txt', (error)=>{
        if(error){
            console.log(error)
            return
        }
        console.log('Archivo eliminado exitosamente...')
    })
})

// leer archivos json
const librosRequire = require('./libros.json')
console.log(librosRequire)

// leer archivos json asincronicamente
const librosFsAsync = fs.readFile('./libros.json', (error, datos)=>{
    if(error) {
        console.log(error)
    }else {
        console.log('Archivoi Crudo::', datos)
        var parsed = JSON.parse(datos)
        console.log(parsed)
        return parsed
    }
})


emiter.on('error', (error) => {
    switch (error.code) {
        case 'ENOENT':
            console.log('In error handler!!')
            console.log('Error:', JSON.stringify(error))
            console.log('Error:', error)
            break;
    }
})
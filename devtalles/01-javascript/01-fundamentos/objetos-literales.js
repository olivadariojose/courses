
let personaje ={
    nombre:'Tony stark',
    codeName:'Iron Man',
    vivo:false,
    edad:40,
    coords:{
        lat:34.034,
        lng:-118.70
    },
    trajes:['Mark 1', 'Mark 5', 'HulkBuster'],
    direcciones:{
        zip:'6546054, 640654',
        ubicacion:'Malibu, California'
    }
}

console.log(personaje['direcciones'].zip)
console.log(personaje['trajes'].length)



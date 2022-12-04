const fs = require('fs')

let data = require('./landings')

data.forEach((item) => {
    item.mass = +item.mass
    item.year = new Date(item.year).getFullYear()
    item.id = +item.id
    item.reclat = +item.reclat
    item.reclong = +item.reclong
   
    if(!item.geolocation) return

    item.geolocation.latitude = +item.geolocation.latitude
    item.geolocation.longitude = +item.geolocation.longitude
     
})

data = JSON.stringify(data, null, 4)

fs.writeFile('landings2.json', data, () => {
    console.log("Json Corregido")
})

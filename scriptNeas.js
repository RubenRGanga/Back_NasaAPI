const fs = require('fs')

let data = require('./neas.json')

data.forEach((item) => {
    item.h_mag = +item.h_mag
    item.moid_au = +item.moid_au
    item.q_au_1 = +item.q_au_1
    item.q_au_2 = +item.q_au_2
    item.period_yr = +item.period_yr
    item.i_deg = +item.i_deg

    
     
})

data = JSON.stringify(data, null, 4)

fs.writeFile('neasCorrejido.json', data, () => {
    console.log("Nuevo Json Corregido")
})

//SCHEMA - LANDINGS

const landingsSchema = new mongoose.Schema({
    name: String,
    id: String,
    nametype: String,
    recclass: String,
    mass: String,
    fall: String,
    year: String, 
    reclat: String,
    reclong: String,
    geolocation: { "latitude": String, "longitude": String }

});

const Landings = mongoose.model('Landings', landingsSchema)

//FUNCIÓN CONNECTION

async function connection() {
    try {
       await mongoose.connect ('mongodb://127.0.0.1:27017/nasa_DB')
       console.log("Hemos conectado con la BD");
       }catch (err){
           console.log("ERROR", err);
       }
   }
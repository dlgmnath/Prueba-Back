import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/cuponesDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(bd => console.log("db conectada"))
    .catch(error => console.log(error))
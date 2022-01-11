const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()
const path = require('path')
const cors = require('cors')


dotenv.config()
//connect to DB
mongoose.connect("mongodb+srv://mern-stack:mern-stack@cluster0.cjnmu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log('connected to mongoDB')
}).catch((err) => {
     console.error(err)
})

//app.use(cors())
app.use(express.json())
app.use(cors())


//api routes
app.use('/auth', require('./routes/userRoutes'))
//...

// setup build
if(process.env.NODE_ENV === 'production'){
    app.use('/', express.static('client/build'))

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
    })
}


const port = process.env.PORT || 5000
app.listen(port, (req, res) => {
    console.log('server is running on port 5000')
})
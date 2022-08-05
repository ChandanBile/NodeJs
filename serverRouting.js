import express from 'express'
import bodyParser from 'body-parser'
import dbconnect from './configuration/firstdb.js'
import loginpg from './routes/login.js'
import homepg from './routes/home.js'
import registerpg from './routes/register.js'


const app = express()
const port = 6060

app.use(bodyParser.json())            //middleware
app.use(bodyParser.urlencoded({extended: true}))

dbconnect()

// app.use('/login', loginpg)
// app.use('/home', homepg)
app.use('/register' , registerpg)

app.listen(port, (error) =>{
    if(error){
        console.log(error)
    }else{
        console.log(`server is running at http://localhost:${port}/`)
    }
})
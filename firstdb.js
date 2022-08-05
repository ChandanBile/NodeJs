import mongoose from 'mongoose'

const uri = "mongodb+srv://Chandan:chandan100@firstmdb.tiwzegi.mongodb.net/?retryWrites=true&w=majority";

const dbconnect = async () =>{
    try {
        await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, () =>{
            console.log('DB connected')
        })
    } catch (error) {
        console.log(error)
    }
}
export default dbconnect
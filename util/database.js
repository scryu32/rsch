import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://scryu32:qweaaa121@dpcm.ywnz9oe.mongodb.net/?retryWrites=true&w=majority&appName=dpcm'
const options = {  }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }
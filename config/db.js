const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    })

    console.log(`Mongo DB Connected: ${conn.connection.host.blue}`)
  } catch (err) {
    console.error(err)
    // Exit with failure
    process.exit(1)
  }
}

module.exports = connectDB

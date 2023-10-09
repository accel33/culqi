import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

export class MongoDbService {
  private mongoUrl = process.env.MONGO_URI

  async connect(): Promise<void> {
    try {
      await mongoose.connect(this.mongoUrl)
    } catch (err) {
      console.log(err)
    }
  }
}

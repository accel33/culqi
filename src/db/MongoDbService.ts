import mongoose from 'mongoose'

export class MongoDbService {
  private mongoUrl = process.env.MONGO_URI

  async connect(): Promise<void> {
    try {
      await mongoose.connect(process.env.DATABASE_URI2)
    } catch (err) {
      console.log(err)
    }
  }
}

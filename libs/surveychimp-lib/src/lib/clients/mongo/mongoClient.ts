
import mongoose from 'mongoose';

export const connect = async (): Promise<typeof mongoose> => {;
    if (!process.env.MONGO_CONNECTION_STRING) { throw new Error ('MONGO_CONNECTION_STRING is not set'); }
    return mongoose.connect(process.env.MONGO_CONNECTION_STRING);
}
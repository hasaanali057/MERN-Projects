// Importing Mongoose module
import mongoose from 'mongoose';

// Importing Winston Logger
import Logger from'../Utils/Debugger';

const dbConnection = async () => {
  try {
    await mongoose.connect((String)(process.env.URI));
    Logger.info('DB Connection Successful');
  } catch (error) {
    Logger.error('DB Connection Error' + error);
  }
};

export default dbConnection;


import mongoose from "mongoose";
import { envs } from "../../../config";
import { MongoDatabase } from "../mongo-database";
import { HourlyRateSeed } from "./hourly-reate.seed";

export class SeedersMongoDB{

    static async seed(){
        try {
            
            await MongoDatabase.connect({
                mongoUrl: envs.MONGO_URL,
                dbName: envs.MONGO_DB_NAME,
            });
    
            // load seeders
            // hourly-rate
            await HourlyRateSeed.seedHourlyRates();

            // close connections
            mongoose.connection.close();
        } catch (error) {
            console.log('Error seeding data:', error);
            mongoose.connection.close();

        }


    }

}
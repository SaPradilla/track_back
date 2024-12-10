import mongoose from 'mongoose';
import { HourlyRateModel } from '../models/hourly-rate.model';



export class HourlyRateSeed{

    static async seedHourlyRates(){

        const rate = 9000;

        try {
            await HourlyRateModel.deleteMany({});
            await HourlyRateModel.create({rate:rate});
            console.log('Hourly rates seeded successfully');
        } catch (error) {
            throw error;
        }
    }
}
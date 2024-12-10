import mongoose,{Schema} from "mongoose";

const hourlyRateSchema = new Schema({

    rate:{
        type:Number,
        required:[true,'Rate is required']
    }

});

export const HourlyRateModel = mongoose.model('HourlyRate',hourlyRateSchema);

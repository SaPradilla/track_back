import { SeedersMongoDB } from "./data/mongodb/seed";


export class Seeder{

    static async seed(){
        try {
          
            // run seeders database
            await SeedersMongoDB.seed();

        } catch (error) {
            console.log('Error seeding data:', error);
        }
    }

}

(async() => {
    await Seeder.seed();
})()
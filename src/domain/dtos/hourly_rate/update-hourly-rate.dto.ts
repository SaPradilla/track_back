
export class UpdateHourlyRateDto{

    private constructor(
        public rate: number,
    ){}

    static update(objectBody : {[key: string] : any},objectParams : {[key: string] : any}):  [string?, UpdateHourlyRateDto?,string?] {

        const { rate } = objectBody;
        const {id } = objectParams;


        if(!rate) return ['Missing rate'];
        if(!id) return ['Missing id'];

        return [
            undefined,
            new UpdateHourlyRateDto(objectBody.rate),
            objectParams.id
        ]

    }
}
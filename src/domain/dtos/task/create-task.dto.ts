
export class CreateTaskDto{

    private constructor(
        public userId:string,
        public title:string,
        public description: string,
        public startDate: Date,
        public endDate: Date | null,
        public hoursWorked: number,
        public hourlyRateId: string,
        public status: 'pending' | 'in progress' | 'completed',
    ){}
    
    static create(object : {[key: string] : any}):  [string?, CreateTaskDto?] {
    
        const {
            userId,
            title,
            description,
            startDate,
            endDate,
            hoursWorked,
            hourlyRateId,
            status
        } = object;

        if(!userId) return ['Missing user ID']
        // Validación de `title`
        if (!title || typeof title !== 'string' || title.trim().length === 0) {
            return ['Invalid or missing title'];
        }

        // Validación de `description` (opcional)
        if (description !== undefined && typeof description !== 'string') {
            return ['Invalid description'];
        }

        // Validación de `startDate`
        if (!startDate || isNaN(new Date(startDate).getTime())) {
            return ['Invalid or missing start date'];
        }

        // Validación de `endDate` 
        if (endDate !== undefined && isNaN(new Date(endDate).getTime())) {
            return ['Invalid end date'];
        }

        // Validación de `hoursWorked`
        if (!hoursWorked || hoursWorked < 0) {
            return ['Invalid or missing hours worked'];
        }

        // Validación de `hourlyRate`
        if (!hourlyRateId) {
            return ['Invalid or missing hourly rate id'];
        }

        // Validación de `status`
        if (!status) {
            return ['Invalid or missing status'];
        }

        return [
            undefined,
            new CreateTaskDto(
                userId,
                title,
                description,
                startDate,
                endDate,
                hoursWorked,
                hourlyRateId,
                status,
            )
        ]
    }
}
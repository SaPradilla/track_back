export class TaskEntity {
    constructor(
        public id: string,
        public userId: string,
        public title: string,
        public description: string,
        public startDate: Date,
        public endDate: Date | null,
        public hoursWorked: number,
        public hourlyRateId: string,
        public status: 'pending' | 'in progress' | 'completed',
    ){}
}
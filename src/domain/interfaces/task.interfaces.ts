export interface ITaskCreated{
    msg:string
    task:ITask
}

export interface ITask {
    id: string;
    userId: string;
    title: string; 
    description: string;
    startDate: Date;
    endDate: Date | null;
    hoursWorked: number;
    hourlyRateId: string;
    status: 'pending' | 'in progress' | 'completed';
}
export interface ITaskList{
    msg:string,
    tasks:ITask[]
}
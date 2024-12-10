import mongoose, { Schema } from "mongoose";

// Esquema de Tareas
const taskSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    description: {
        type: String,
        default: ''
    },
    startDate: {
        type: Date,
        required: [true, 'Start date is required']
    },
    endDate: {
        type: Date, // Fecha de finalización opcional
    },
    hoursWorked: {
        type: Number,
        required: [true, 'Hours worked is required'],
        default: 0,
        min: [0, 'Hours worked cannot be negative']
    },
    hourlyRateId: {
        type: Schema.Types.ObjectId,
        ref: 'HourlyRate',
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'in progress', 'completed'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

export const TaskModel = mongoose.model('Task', taskSchema);

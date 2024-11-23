import mongoose, { Schema, Document } from "mongoose";

export interface IAttendance extends Document {
    date: string;
    month: string,
    men: number;
    women: number;
    children: number;
    total: number;
}

const AttendanceSchema: Schema = new Schema({
    date: { type: String, required: true},
    month: { type: String, required: true},
    men: { type: Number, default: 0},
    women: { type: Number, default: 0 },
    children: { type: Number, default: 0 },
    total: { type: Number, default: 0 }
});

export default mongoose.model<IAttendance>("Attendance", AttendanceSchema)
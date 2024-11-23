import mongoose, { Schema, Document } from "mongoose";

export interface IAttendance extends Document {
    men: number;
    women: number;
    children: number;
    total: number;
}

const AttendanceSchema: Schema = new Schema({
    men: { type: Number, default: 0},
    women: { type: Number, default: 0 },
    children: { typr: Number, default: 0 },
    total: { type: Number, default: 0 }
});

export default mongoose.model<IAttendance>("Attendance", AttendanceSchema)
import mongoose, { Schema, Document } from "mongoose";

export interface IReport extends Document {
    date: string;
    month: string;
    year: string;
    attendance: {
        sunday: number;
        midweek: {
            Tuesday: number;
            Thursday: number;
        }
    }
} 

const ReportSchema: Schema = new Schema({
    date: { type: String, required: true},
    month: { type: String, required: true },
    year: { type: String, required: true },
    attendance: {
        sunday: { type: String, default: 0 },
        midweek: {
            Tuesday: { type: Number, default: 0},
            Thursday: { type: Number, default: 0}
        },
    },
});

export default mongoose.model<IReport>("Report", ReportSchema)
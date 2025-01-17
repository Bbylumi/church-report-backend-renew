import mongoose, { Schema, Document } from "mongoose";
import { dayDetailsPreSaveMiddleware } from "../middlewares/report.middlewares";

 
export interface IAttendance {
  men: number;
  women: number;
  children: number;
  total: number;
  preacher: string;
  month: string;
  day: string;
  year: string;
}

export interface ISundayAttendance extends IAttendance {
  newConverts?: number; 
  newGuests?: number;
  sundaySchoolAttendance?: number; 
  houseFellowshipAttendance?: number; 
}
 

export interface ImonetaryContribution {
  type: string;
  levels: {
    percentage: number;
    amount: number;
  }[];
}

 
export interface IDayDetails {
  day: string;
  attendance: IAttendance | ISundayAttendance;
  monetary?: ImonetaryContribution[]; 
}


export interface IweeklyReport {
  week: string;
  days: IDayDetails[];
}


export interface IsummaryAttendance {
  day: string;
  men: number;
  women: number;
  children: number;
  total: number;
}

export interface IweeklySummary {
  attendanceSummary: IsummaryAttendance[];
}


export interface IReport extends Document {
  week: string;
  days: IDayDetails[];
  summary: IweeklySummary;
}


const AttendanceSchema = new Schema({
  men: { type: Number, required: true },
  women: { type: Number, required: true },
  children: { type: Number, required: true },
  preacher: { type: String, required: true },
  newConverts: { type: Number },  
  newGuests: { type: Number },  
  sundaySchoolAttendance: { type: Number },  
  houseFellowshipAttendance: { type: Number },  
});


const MonetaryContributionSchema = new Schema({
  type: { type: String, required: true },
  levels: [
    {
      percentage: { type: Number, required: true },
      amount: { type: Number, required: true },
    },
  ],
});


const DayDetailSchema = new Schema({
  day: { type: String, required: true },
  attendance: { type: AttendanceSchema, required: true }, 
  monetary: { type: [MonetaryContributionSchema], required: false }, 
});


const WeeklySummarySchema = new Schema({
  attendanceSummary: [
    {
      day: { type: String, required: true },
      men: { type: Number, required: true },
      women: { type: Number, required: true },
      children: { type: Number, required: true },
      total: { type: Number, required: true },
    },
  ],
});


const ReportSchema = new Schema<IReport>({
  week: { type: String, required: false },
  days: { type: [DayDetailSchema], required: true }, 
  summary: { type: WeeklySummarySchema, required: false },
});


DayDetailSchema.pre("save", dayDetailsPreSaveMiddleware)

export default mongoose.model<IReport>("Report", ReportSchema);

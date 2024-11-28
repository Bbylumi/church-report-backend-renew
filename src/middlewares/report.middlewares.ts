import { Document } from "mongoose";

interface Attendance {
  newConverts?: number;
  newGuests?: number;
  sundaySchoolAttendance?: number;
  houseFellowshipAttendance?: number;
}

interface DayDetailsDocument extends Document {
  day: string;
  attendance: Attendance;
}

// Middleware function for cleaning up non-Sunday fields
export const dayDetailsPreSaveMiddleware = function (this: DayDetailsDocument, next: any) {
  if (this.day !== "Sunday") {
    delete this.attendance.newConverts;
    delete this.attendance.newGuests;
    delete this.attendance.sundaySchoolAttendance;
    delete this.attendance.houseFellowshipAttendance;
  }
  next();
};
 
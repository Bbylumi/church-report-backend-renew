import Attendence, { IAttendance } from "../models/attendance.model"

export class AttendanceRepository {

    async create(attendanceData: Partial<IAttendance>): Promise <IAttendance> {
        const attendance = new Attendence(  attendanceData );
        return await attendance.save();
    }

    async findAll(): Promise<IAttendance[]> {
        return await Attendence.find();
    }

    async findById( AttendanceId: string ): Promise<IAttendance | null >{ 
        return await Attendence.findById(AttendanceId);
    }

    async update( AttendanceId: string, updateData: Partial<IAttendance>): Promise<IAttendance | null >{
        return await Attendence.findByIdAndUpdate(AttendanceId, updateData, { new: true});
    }

    async delete(AttendanceId: string): Promise<IAttendance | null >{
        return await Attendence.findByIdAndDelete(AttendanceId)
    }
}
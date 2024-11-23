import Attendance, { IAttendance } from "../models/attendance.model";
import { createAttendanceDTO, updateAttendanceDTO } from "../dtos/attendance.dtos";

class AttendanceService {
  async createAttendance(data: createAttendanceDTO): Promise<IAttendance> {
    const attendance = new Attendance(data);
    return await attendance.save();
  }

  async getAttendance(): Promise<IAttendance[]> {
    return await Attendance.find();
  }

  async getAttendanceById(id: string): Promise<IAttendance | null> {
    return await Attendance.findById(id);
  }

  async updateAttendance(id: string, data: updateAttendanceDTO): Promise<IAttendance | null> {
    return await Attendance.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteAttendance(id: string): Promise<IAttendance | null> {
    return await Attendance.findByIdAndDelete(id);
  }
}

export default new AttendanceService();

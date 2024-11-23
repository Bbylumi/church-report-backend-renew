import { Request, Response } from "express"; 
import AttendanceService from "../services/attendance.service";

class AttendanceController {
  async createAttendance(req: Request, res: Response): Promise<void> {
    try {
      const attendance = await AttendanceService.createAttendance(req.body);
      res.status(201).json(attendance);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        res.status(500).json({ message: "An error occurred while creating attendance." });
      }
    }
  }

  async getAttendance(_req: Request, res: Response): Promise<void> {
    try {
      const attendance = await AttendanceService.getAttendance();
      res.json(attendance);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred while fetching attendance records." });
    }
  }

  async getAttendanceById(req: Request, res: Response): Promise<void> {
    try {
      const attendance = await AttendanceService.getAttendanceById(req.params.id);
      if (attendance) {
        res.json(attendance);
      } else {
        res.status(404).json({ message: "Attendance not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred while fetching the attendance record." });
    }
  }

  async updateAttendance(req: Request, res: Response): Promise<void> {
    try {
      const attendance = await AttendanceService.updateAttendance(req.params.id, req.body);
      if (attendance) {
        res.json({ message: "Attendance updated successfully", data: attendance });
      } else {
        res.status(404).json({ message: "Attendance not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred while updating the attendance record." });
    }
  }

  async deleteAttendance(req: Request, res: Response): Promise<void> {
    try {
      const attendance = await AttendanceService.deleteAttendance(req.params.id);
      if (attendance) {
        res.json({ message: "Attendance deleted successfully", data: attendance });
      } else {
        res.status(404).json({ message: "Attendance not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred while deleting the attendance record." });
    }
  }
}

export default new AttendanceController();

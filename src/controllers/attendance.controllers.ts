import { Request, Response } from "express";
import AttendanceService from "../services/attendance.service";

class AttendanceController {
    async createAttendance(res: Response, req: Request): Promise<void> {
        try{
            const Attendance = await AttendanceService.createAttendance(req.body);
            res.status(201).json(Attendance);
        } catch (error) {
            if (error instanceof Error){
                console.error(error.message)
                console.error("An error Occurred");
            }
        }
    }
}
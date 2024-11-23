import { Router } from "express";
import attendanceControllers from "../controllers/attendance.controllers";

const router = Router()

router.post('/', attendanceControllers.createAttendance);
router.get('/', attendanceControllers.getAttendance);
router.get('/:id', attendanceControllers.getAttendanceById);
router.put('/:id', attendanceControllers.updateAttendance);
router.delete('/:id', attendanceControllers.deleteAttendance)

export default router;
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const attendance_service_1 = __importDefault(require("../services/attendance.service"));
class AttendanceController {
    createAttendance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const attendance = yield attendance_service_1.default.createAttendance(req.body);
                res.status(201).json(attendance);
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                    res.status(500).json({ message: "An error occurred while creating attendance." });
                }
            }
        });
    }
    getAttendance(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const attendance = yield attendance_service_1.default.getAttendance();
                res.json(attendance);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: "An error occurred while fetching attendance records." });
            }
        });
    }
    getAttendanceById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const attendance = yield attendance_service_1.default.getAttendanceById(req.params.id);
                if (attendance) {
                    res.json(attendance);
                }
                else {
                    res.status(404).json({ message: "Attendance not found" });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: "An error occurred while fetching the attendance record." });
            }
        });
    }
    updateAttendance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const attendance = yield attendance_service_1.default.updateAttendance(req.params.id, req.body);
                if (attendance) {
                    res.json({ message: "Attendance updated successfully", data: attendance });
                }
                else {
                    res.status(404).json({ message: "Attendance not found" });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: "An error occurred while updating the attendance record." });
            }
        });
    }
    deleteAttendance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const attendance = yield attendance_service_1.default.deleteAttendance(req.params.id);
                if (attendance) {
                    res.json({ message: "Attendance deleted successfully", data: attendance });
                }
                else {
                    res.status(404).json({ message: "Attendance not found" });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: "An error occurred while deleting the attendance record." });
            }
        });
    }
}
exports.default = new AttendanceController();

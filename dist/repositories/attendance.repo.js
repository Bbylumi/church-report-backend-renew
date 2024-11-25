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
exports.AttendanceRepository = void 0;
const attendance_model_1 = __importDefault(require("../models/attendance.model"));
class AttendanceRepository {
    create(attendanceData) {
        return __awaiter(this, void 0, void 0, function* () {
            const attendance = new attendance_model_1.default(attendanceData);
            return yield attendance.save();
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield attendance_model_1.default.find();
        });
    }
    findById(AttendanceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield attendance_model_1.default.findById(AttendanceId);
        });
    }
    update(AttendanceId, updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield attendance_model_1.default.findByIdAndUpdate(AttendanceId, updateData, { new: true });
        });
    }
    delete(AttendanceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield attendance_model_1.default.findByIdAndDelete(AttendanceId);
        });
    }
}
exports.AttendanceRepository = AttendanceRepository;

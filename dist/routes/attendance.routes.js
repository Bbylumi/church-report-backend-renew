"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const attendance_controllers_1 = __importDefault(require("../controllers/attendance.controllers"));
const router = (0, express_1.Router)();
router.post('/', attendance_controllers_1.default.createAttendance);
router.get('/', attendance_controllers_1.default.getAttendance);
router.get('/:id', attendance_controllers_1.default.getAttendanceById);
router.put('/:id', attendance_controllers_1.default.updateAttendance);
router.delete('/:id', attendance_controllers_1.default.deleteAttendance);
exports.default = router;

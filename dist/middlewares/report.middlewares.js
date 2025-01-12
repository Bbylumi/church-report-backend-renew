"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dayDetailsPreSaveMiddleware = void 0;
// Middleware function for cleaning up non-Sunday fields
const dayDetailsPreSaveMiddleware = function (next) {
    if (this.day !== "Sunday") {
        delete this.attendance.newConverts;
        delete this.attendance.newGuests;
        delete this.attendance.sundaySchoolAttendance;
        delete this.attendance.houseFellowshipAttendance;
    }
    next();
};
exports.dayDetailsPreSaveMiddleware = dayDetailsPreSaveMiddleware;

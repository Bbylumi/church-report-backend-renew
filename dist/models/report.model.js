"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const report_middlewares_1 = require("../middlewares/report.middlewares");
const AttendanceSchema = new mongoose_1.Schema({
    men: { type: Number, required: true },
    women: { type: Number, required: true },
    children: { type: Number, required: true },
    preacher: { type: String, required: true },
    newConverts: { type: Number },
    newGuests: { type: Number },
    sundaySchoolAttendance: { type: Number },
    houseFellowshipAttendance: { type: Number },
});
const MonetaryContributionSchema = new mongoose_1.Schema({
    type: { type: String, required: true },
    levels: [
        {
            percentage: { type: Number, required: true },
            amount: { type: Number, required: true },
        },
    ],
});
const DayDetailSchema = new mongoose_1.Schema({
    day: { type: String, required: true },
    attendance: { type: AttendanceSchema, required: true },
    monetary: { type: [MonetaryContributionSchema], required: false },
});
const WeeklySummarySchema = new mongoose_1.Schema({
    attendanceSummary: [
        {
            day: { type: String, required: true },
            men: { type: Number, required: true },
            women: { type: Number, required: true },
            children: { type: Number, required: true },
            total: { type: Number, required: true },
        },
    ],
});
const ReportSchema = new mongoose_1.Schema({
    week: { type: String, required: true },
    days: { type: [DayDetailSchema], required: true },
    summary: { type: WeeklySummarySchema, required: true },
});
DayDetailSchema.pre("save", report_middlewares_1.dayDetailsPreSaveMiddleware);
exports.default = mongoose_1.default.model("Report", ReportSchema);

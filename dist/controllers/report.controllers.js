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
const report_service_1 = __importDefault(require("../services/report.service"));
class ReportController {
    createReport(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const report = yield report_service_1.default.createReport(req.body);
                res.status(201).json(report);
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                    console.error("An Unknow error occurred");
                }
            }
        });
    }
    getReports(_req, _res) {
        return __awaiter(this, void 0, void 0, function* () {
            const report = yield report_service_1.default.getReports();
            _res.json(report);
        });
    }
    getReportById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const report = yield report_service_1.default.getReportById(req.params.id);
            if (!report) {
                res.json(report);
            }
            else {
                res.status(404).json({ message: "Report not Found" });
            }
        });
    }
    updateReport(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const report = yield report_service_1.default.updateReport(req.params.id, req.body);
            if (report) {
                res.json(report);
            }
            else {
                res.status(404).json({ message: "Report not Found" });
            }
        });
    }
    deleteReport(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const report = yield report_service_1.default.deleteReport(req.params.id);
            if (report) {
                res.json({ message: "Report Deleted Successfully" });
            }
            else {
                res.status(404).json({ message: "Report not Found" });
            }
        });
    }
}
exports.default = new ReportController();

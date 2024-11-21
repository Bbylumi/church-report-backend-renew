"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const report_controllers_1 = __importDefault(require("../controllers/report.controllers"));
const router = (0, express_1.Router)();
router.post('/', report_controllers_1.default.createReport);
router.get('/', report_controllers_1.default.getReports);
router.get('/:id', report_controllers_1.default.getReportById);
router.put('/:id', report_controllers_1.default.updateReport);
router.delete('/:id', report_controllers_1.default.deleteReport);
exports.default = router;

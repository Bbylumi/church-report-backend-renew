"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const report_routes_1 = __importDefault(require("./routes/report.routes"));
const monetary_routes_1 = __importDefault(require("./routes/monetary.routes"));
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json()); // For parsing JSON requests
app.use('/reports', report_routes_1.default);
app.use('/monetary', monetary_routes_1.default);
app.get("/", (_req, res) => {
    res.send("Welcome to the Church Report API, God bless you!");
});
exports.default = app;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = require("./database");
const PORT = process.env.PORT || 3000;
(0, database_1.connectToDatabase)().then(() => {
    app_1.default.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});

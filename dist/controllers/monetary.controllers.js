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
const monetary_service_1 = __importDefault(require("../services/monetary.service"));
class MonetaryController {
    createMonetary(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const monetary = yield monetary_service_1.default.createMonetary(req.body);
                res.status(201).json(monetary);
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                    res.status(500).json({ message: "An error occur while Creating Monetary Report" });
                }
            }
        });
    }
    getMonetary(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const monetary = yield monetary_service_1.default.getMonetary();
                res.json(monetary);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ messgae: "AN error occured while Fecthing the Monetary Report" });
            }
        });
    }
    getMonetaryById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const monetary = yield monetary_service_1.default.getMonetaryById(req.params.id);
                if (monetary) {
                    res.json(monetary);
                }
                else {
                    res.status(404).json({ meassage: "Monetary Report not Found" });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: "An error occured while fecthing the data" });
            }
        });
    }
    updateMonetary(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const monetary = yield monetary_service_1.default.updateMonetary(req.params.id, req.body);
                if (monetary) {
                    res.json({ message: "Monetary Report updated Successfully", data: monetary });
                }
                else {
                    res.status(404).json({ message: "Monetary Not Found" });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ messgae: "An error Occured while trying to Update the data" });
            }
        });
    }
    deleteMonetary(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const monetary = yield monetary_service_1.default.deleteMonetary(req.params.id);
                if (monetary) {
                    res.json({ message: "Monetary Report Deleted Successfully", data: monetary });
                }
                else {
                    res.status(404).json({ message: "Monetary Report not Found" });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: "An error occured while trying to delete the data" });
            }
        });
    }
}
exports.default = new MonetaryController();

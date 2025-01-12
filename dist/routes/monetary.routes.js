"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const monetary_controllers_1 = __importDefault(require("../controllers/monetary.controllers"));
const router = (0, express_1.Router)();
router.post("/", monetary_controllers_1.default.createMonetary);
router.get("/", monetary_controllers_1.default.getMonetary);
router.get("/:id", monetary_controllers_1.default.getMonetaryById);
router.put("/:id", monetary_controllers_1.default.updateMonetary);
router.delete("/:id", monetary_controllers_1.default.deleteMonetary);
exports.default = router;

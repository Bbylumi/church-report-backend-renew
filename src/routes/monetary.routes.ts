import { Router } from "express";
import monetaryControllers from "../controllers/monetary.controllers";

const router = Router()

router.post("/", monetaryControllers.createMonetary);
router.get("/", monetaryControllers.getMonetary);
router.get("/:id", monetaryControllers.getMonetaryById);
router.put("/:id", monetaryControllers.updateMonetary);
router.delete("/:id", monetaryControllers.deleteMonetary)


export default router;
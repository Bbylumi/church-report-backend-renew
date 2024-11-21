 import { Router } from "express";
 import reportControllers from "../controllers/report.controllers";


 const router = Router();

 router.post('/', reportControllers.createReport);
 router.get('/', reportControllers.getReports);
 router.get('/:id', reportControllers.getReportById);
 router.put('/:id', reportControllers.updateReport);
 router.delete('/:id', reportControllers.deleteReport)

 export default router;
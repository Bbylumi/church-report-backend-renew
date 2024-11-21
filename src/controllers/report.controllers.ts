import { Request, Response } from "express";
import reportService from "../services/report.service";

class ReportController {
  async createReport(req: Request, res: Response): Promise<void> {
    try {
      const report = await reportService.createReport(req.body);
      res.status(201).json(report);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);

        console.error("An Unknow error occurred");
      }
    }
  }

  async getReports(_req: Request, _res: Response): Promise<void> {
    const report = await reportService.getReports();
    _res.json(report);
  }

  async getReportById(req: Request, res: Response): Promise<void> {
    const report = await reportService.getReportById(req.params.id);
    if (report) {
      res.json(report);
    } else {
      res.status(404).json({ message: "Report not Found" });
    }
  }

  async updateReport(req: Request, res: Response): Promise<void> {
    const report = await reportService.updateReport(req.params.id, req.body);
    if (report) {
      res.json(report);
    } else {
      res.status(404).json({ message: "Report not Found" });
    }
  }

  async deleteReport(req: Request, res: Response): Promise<void> {
    const report = await reportService.deleteReport(req.params.id);
    if (report) {
      res.json({ message: "Report Deleted Successfully" });
    } else{
        res.status(404).json({ message: "Report not Found" });
    }
  }
}

export default new ReportController();

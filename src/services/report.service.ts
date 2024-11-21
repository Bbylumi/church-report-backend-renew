import Report, { IReport } from "../models/report.model";
import { CreateReportDTO, UpdateReportDTO } from "../dtos/report.dto";



class ReportService{
    async createReport(data: CreateReportDTO): Promise<IReport> {
        const report = new Report(data);
        return await report.save();
    }

    async getReports(): Promise<IReport[]> {
        return await Report.find();
    }

    async getReportById(id: string): Promise <IReport | null> {
        return await Report.findById(id);
    }

    async updateReport(id: string, data: UpdateReportDTO): Promise<IReport | null> {
        return await Report.findByIdAndUpdate(id, data, {new: true });
    }

    async deleteReport(id: string): Promise <IReport | null>{
        return await Report.findByIdAndDelete(id);
    }
}

export default new ReportService      
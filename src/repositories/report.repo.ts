import Report, { IReport } from "../models/report.model";

export class ReportRepository {
 
  async create(reportData: Partial<IReport>): Promise<IReport> {
    const report = new Report(reportData);
    return await report.save();
  }

   
  async findAll(): Promise<IReport[]> {
    return await Report.find();
  }

  
  async findById(reportId: string): Promise<IReport | null> {
    return await Report.findById(reportId);
  }

   
  async update(reportId: string, updateData: Partial<IReport>): Promise<IReport | null> {
    return await Report.findByIdAndUpdate(reportId, updateData, { new: true });
  }

 
  async delete(reportId: string): Promise<IReport | null> {
    return await Report.findByIdAndDelete(reportId);
  }
}

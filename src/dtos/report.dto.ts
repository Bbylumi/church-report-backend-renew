import { CreateDayDetailsDto, UpdateDayDetailsDto } from "./day-details.dtos";
import { createWeeklySummaryDTO, updateweeklySummaryDto } from "./weekly-summary.dtos";

export interface CreateReportDTO {
    week: string;
    days: CreateDayDetailsDto[];
    summary: createWeeklySummaryDTO;
  }
  
  export interface UpdateReportDTO {
    week?: string;
    days?: UpdateDayDetailsDto[];
    summary: updateweeklySummaryDto;
  }
  
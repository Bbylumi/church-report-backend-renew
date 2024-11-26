import { CreateDayDetailsDto, UpdateDayDetailsDto } from "./day-details.dtos";
import { createWeeklySummaryDTO, updateweeklySummaryDto } from "./weekly-summary.dtos";

export interface CreateReportDTO {
    weekNumber: number;
    days: CreateDayDetailsDto[];
    summary: createWeeklySummaryDTO;
  }
  
  export interface UpdateReportDTO {
    weekNumber?: number;
    days?: UpdateDayDetailsDto[];
    summary: updateweeklySummaryDto;
  }
  
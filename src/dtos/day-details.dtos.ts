import { CreateAttendanceDto, UpdateAttendanceDto } from './attendance.dtos';
import {  createMonetaryContributionDTO, updateMonetaryContributionDTO } from "./monetary-contribution.dtos"


export class CreateDayDetailsDto {
  day!: string;
  attendance!: CreateAttendanceDto | CreateAttendanceDto;
  monetary?: createMonetaryContributionDTO[];
}
 
export class UpdateDayDetailsDto {
  day?: string;
  attendance?: UpdateAttendanceDto | UpdateAttendanceDto;
  monetary?: updateMonetaryContributionDTO[];
}

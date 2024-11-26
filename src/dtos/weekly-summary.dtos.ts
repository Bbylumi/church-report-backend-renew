export interface createSummaryAttendanceDTO{
    day: string;
    men: number;
    women: number;
    children: number;
    total: number;
}


export interface updateSummaryAttendanceDTO{
    day?: number;
    men?: number;
    women?: number
    children?: number;
    total?: number;
}

export interface createWeeklySummaryDTO{
    attendanceSummary: createSummaryAttendanceDTO[];
}

export interface updateweeklySummaryDto{
    attendanceSummary?: updateSummaryAttendanceDTO[];
}
export interface CreateReportDTO {
    month: string;
    date: string;
    year: number;
    attendance: {
      sunday: number;
      midweek:{
        Tuesday: number,
        Thursday: number
      }
    };
  }
  
  export interface UpdateReportDTO {
    month?: string;
    year?: number;
    date?: string;
    attendance?: {
      sunday?: number;
      midweek?: {
        Tuesday?: number;
        Thursday?: number;
      }
    };
  }
  
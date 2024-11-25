export interface CreateReportDTO {
    month: string;
    date: string;
    preacher: string;
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
    preacher?: String;
    date?: string;
    attendance?: {
      sunday?: number;
      midweek?: {
        Tuesday?: number;
        Thursday?: number;
      }
    };
  }
  
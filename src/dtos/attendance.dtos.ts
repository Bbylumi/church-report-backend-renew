export interface createAttendanceDTO {
  date: String;
  month: String;
  men: number;
  women: number;
  children: number;
  total: number;
}

export interface updateAttendanceDTO {
  date?: String;
  month?: String;
  men?: number;
  women?: number;
  children?: number;
  total?: number;
}

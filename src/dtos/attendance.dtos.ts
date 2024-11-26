
export interface CreateAttendanceDto {
  men: number;
  women: number;
  children: number;
  preacher: string;
  total: number;
}

export interface UpdateAttendanceDto {
  men?: number;
  women?: number;
  children?: number;
  preacher?: string;
  total?: number;
}


//for sunday attendaneDTO


 export interface CreateSundayAttendanceDto extends CreateAttendanceDto {
  newConverts?: number;
  newGuests?: number;
  sundaySchoolAttendance?: number;
  houseFellowshipAttendance?: number;
}

export interface UpdateSundayAttendanceDto extends UpdateAttendanceDto {
  newConverts?: number;
  newGuests?: number;
  sundaySchoolAttendance?: number;
  houseFellowshipAttendance?: number;
}

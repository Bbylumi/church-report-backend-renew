 export interface createAttendanceDTO{
    men: number;
    women: number;
    children: number;
    total: number;
 }

 export interface updateAttendanceDTO{
    men?: number;
    women?: number;
    children?: number;
    total?: number;
 }
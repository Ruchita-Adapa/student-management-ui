import { StudentService } from "../services/StudentService";
import { Student } from "../types";

export class CreateAction {

    static createStudentAction = (payload: Student) => async (dispatch: any, getState: any) => {
        await StudentService.createStudent(payload)
    }

    static updateStudentAction = (payload: Student, id: string) => async (dispatch: any, getState: any) => {
        await StudentService.updateStudent(payload, id)
    }

}
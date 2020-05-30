import { Action } from '@ngrx/store'

export enum EnumUserAction {
    GetAllUsers = '[User] GetAllUsers',
    LoadAllUserSuccess = '[User] LoadAllUsers',
    GetUserById = '[User] GetUserById',
    GetUserByIdSuccess = '[User] GetUserByIdSuccess',    
}

export class GetAllUserAction implements Action {
    type = EnumUserAction.GetAllUsers;
    constructor(public payload = null) { }
}

export class GetAllUserActionSuccess implements Action {
    type = EnumUserAction.LoadAllUserSuccess;
    constructor(public payload: any) { }
}

export class GetUserByIdAction implements Action {
    type = EnumUserAction.GetUserById;
    constructor(public payload: any) { }
}

export class GetUserByIdActionSuccess implements Action {
    type = EnumUserAction.GetUserByIdSuccess;
    constructor(public payload: any) { }
}

export type UserActions = GetAllUserAction | GetUserByIdAction;
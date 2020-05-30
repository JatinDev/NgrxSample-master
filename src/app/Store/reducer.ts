import { AppState, UserState, ToDosState } from './AppState';
import { EnumUserAction, UserActions } from './Action';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

const initialUserState: UserState = {
    Users: null,
    SelectedUser: null
}

export const userReducers = (state = initialUserState, action: UserActions): UserState => {
    switch (action.type) {
        case EnumUserAction.LoadAllUserSuccess:
            return {
                ...state,
                Users: action.payload
            };
        case EnumUserAction.GetUserByIdSuccess:            
            return {
                ...state,
                SelectedUser: action.payload
            };
        default:
            return state;
    }
}

export const appReducer: ActionReducerMap<AppState> = {
    Users: userReducers,
    ToDos: null
}

export const selectUser = (state: AppState) => state.Users.Users;

export const selectedUser = (state: AppState) => state.Users.SelectedUser;

export const selectToDos = (state: AppState) => state.ToDos.ToDos;

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
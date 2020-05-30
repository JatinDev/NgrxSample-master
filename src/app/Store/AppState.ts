import { IUser } from '../modals/user';
import { ToDos } from '../modals/ToDos';

export interface AppState {
    Users: UserState;
    ToDos: ToDosState;
}

export interface UserState {
    Users: IUser[];
    SelectedUser : IUser
}

export interface ToDosState {
    ToDos: ToDos[];
}
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CommonService } from '../services/service.service';
import { EnumUserAction, GetAllUserActionSuccess, GetUserByIdActionSuccess } from './Action';
import { map, mergeMap, switchMap } from 'rxjs/operators';

@Injectable()
export class UserEffects {

  @Effect()
  loadUsers$ = this.actions$
    .pipe(
      ofType(EnumUserAction.GetAllUsers),
      mergeMap((action) => this.commonService.getAllUsers()
        .pipe(
          map(data => {            
            return (new GetAllUserActionSuccess(data));
          })
        ))
    );

  @Effect()
  getUserById = this.actions$
    .pipe(
      ofType(EnumUserAction.GetUserById),
      switchMap((action: any) => {        
        return this.commonService.getUserById(action.payload).pipe(
          map(data => {            
            return (new GetUserByIdActionSuccess(data));
          })
        );
      }),
    );

  constructor(private actions$: Actions, private commonService: CommonService) { }

}

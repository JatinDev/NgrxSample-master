import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/service.service';
import { Router } from '@angular/router';
import { AppState } from 'src/app/Store/AppState';
import { Store, select } from '@ngrx/store';
import { selectUser } from 'src/app/Store/reducer';
import { GetAllUserAction } from 'src/app/Store/Action';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor(private router: Router, private store: Store<AppState>) { }
  allUser$: any;

  ngOnInit(): void {
    this.allUser$ = this.store.pipe(select(selectUser));
    this.allUser$.subscribe(data => {
      if (!data)
        this.store.dispatch(new GetAllUserAction());
    });
  }

  GoToDetails(id: number) {
    this.router.navigate(['child', id]);
  }

}

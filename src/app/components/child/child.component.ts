import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/Store/AppState';
import { selectedUser } from 'src/app/Store/reducer';
import { GetUserByIdAction } from 'src/app/Store/Action';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnDestroy {

  constructor(private router: ActivatedRoute, private store: Store<AppState>) { }

  userData: any;
  idFromParam: number;
  allSubs: Subscription = new Subscription();

  ngOnInit(): void {
    this.allSubs.add(this.router.params.subscribe((param) => {
      this.idFromParam = Number(param.id);
    }));

    this.allSubs.add(this.store.pipe(select(selectedUser)).subscribe(data => {
      if (data && data.id === this.idFromParam) {
        console.log(data);
        this.userData = data;
      }
      else
        this.store.dispatch(new GetUserByIdAction(Number(this.idFromParam)));
    }));
    // this.service.getUserById(Number(this.router.snapshot.paramMap.get('id'))).subscribe(res => {
    //   this.userData = res;
    // })
  }

  ngOnDestroy(): void {
    this.allSubs.unsubscribe();
  }


}

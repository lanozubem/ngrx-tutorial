import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { decrementaContador, IAppState, incrementaContador } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  counter$ = this.store
    .select('app')
    .pipe(
      map(e => e.counter)
    );

  title = 'ngrx-tutorial';

  constructor(private store: Store<{ app: IAppState }>) { }

  _incrementaContador() {
    this.store.dispatch(incrementaContador())
  }

  _decrementaContador() {
    this.store.dispatch(decrementaContador())
  }
}

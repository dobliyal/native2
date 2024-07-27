import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import { incrementByTwo } from '../slices/firstPageSlice';
import { Action } from 'redux';
import { Observable } from 'rxjs';

export const firstPageEpic = (action$:Observable<Action>) =>
  action$.pipe(
    ofType(incrementByTwo.type),
    map((action) => {
      return {type:'NO_OP'}
    })
  );

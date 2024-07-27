import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import { incrementByThree } from '../slices/secondPageSlice';
import { Action } from 'redux';
import { Observable } from 'rxjs';
export const secondPageEpic = (action$:Observable<Action>) =>
  action$.pipe(
    ofType(incrementByThree.type),
    map((action) => {
      return {type:'NO_OP'}
    })
  );

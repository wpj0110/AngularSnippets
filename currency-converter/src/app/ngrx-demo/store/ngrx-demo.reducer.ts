/*
import * as NgrxDemoActions from './ngrx-demo.actions';

import { Book } from '../../shared/book.model';

const initialState = { //this is the default value here...
  books: [
    new Book('LOTR', 'ABC12345', 'Billy Jenkins'),
    new Book('Goats', 'XYZ12345', 'Bob Marley'),
  ]
};

export function ngrxDemoReducer(state = initialState, action: NgrxDemoActions.NgrxDemoActions) {
  switch (action.type) {
    case NgrxDemoActions.ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload]
      };
    case NgrxDemoActions.ADD_BOOKS:
      return {
        ...state,
        books: [...state.books, ...action.payload]
      };
    default:
      return {
        ...state
      }
  }
}
*/

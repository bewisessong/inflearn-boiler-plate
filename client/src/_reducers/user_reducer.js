import {
  LOGIN_USER
} from '../_actions/types';

export default function (state={}, action) {
  switch(action.type) {
    case LOGIN_USER:
      // ...state : spread operator = 변수를 똑같이 가져옴
      return { ...state, loginSuccess: action.payload }
      break;
    default:
      return state;
  }
}
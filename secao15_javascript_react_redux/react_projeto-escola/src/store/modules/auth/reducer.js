import PropTypes from 'prop-types';
import * as types from '../types';

const initialState = {
  isLoggedId: false,
  token: false,
  user: {},
  isLoading: false,
};

// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      console.log('REDUCER', action.payload);
      return state;
    }
    default: {
      return state;
    }
  }
}

import { FILTER } from '../actionTypes';

const initialState = {
  potholes: [],
  title: 'Title',
  isLoading: false,
  searchTerm: '',
}

export default function(state=initialState, action) {
  switch(action.type) {
    case FILTER: 
      return state;
    default: 
      return state;
  }
}
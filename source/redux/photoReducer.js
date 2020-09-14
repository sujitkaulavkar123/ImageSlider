import { FETCH_PHOTOS_SUCCESS, FETCH_PHOTOS_FAILURE } from "./action";

const initialState = {
    photos: []
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_SUCCESS: 
      return { ...state, photos: action.photos };
      case FETCH_PHOTOS_FAILURE: 
      return { ...state, photoFailure: action.error };
    default:
      return state;
  }
};

export default photoReducer;

export const fetchPhotoSuccess = (photos) => {
  return { type: FETCH_PHOTOS_SUCCESS, photos };
};

export const fetchPhotoFailure = () => {
  return { type: FETCH_PHOTOS_FAILURE };
};

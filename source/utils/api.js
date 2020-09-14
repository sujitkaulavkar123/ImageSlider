import axios from 'axios';
import { showLoader, hideLoader } from '../redux/loaderReducer';
import { fetchPhotoSuccess, fetchPhotoFailure } from '../redux/photoReducer';

export const fetchPhotos = () => {
    return dispatch => {
        dispatch(showLoader());
        axios.get('https://picsum.photos/list').then(res => {
            dispatch(hideLoader());
            dispatch(fetchPhotoSuccess(res.data));
        }).catch(err => {
            dispatch(fetchPhotoFailure(err))
            dispatch(hideLoader())
        });
    }
}

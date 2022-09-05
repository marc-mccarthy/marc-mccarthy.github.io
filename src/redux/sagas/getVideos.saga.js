import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getVideosSaga() {
	yield takeLatest('GET_VIDEOS_SAGA', getVideos);
}

// worker Saga: will be fired on "GET_VIDEOS_SAGA" actions
function* getVideos(action) {
  try {
    // get all videos
    const videos = yield axios.get('/videos');
    // send videos to reducer
    yield put({ type: 'GET_VIDEOS', payload: videos.data });
  } catch (error) {
    console.log('Error with getVideosSaga:', error);
  }
}

export default getVideosSaga;

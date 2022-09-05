import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getResumeSaga() {
	yield takeLatest('GET_RESUME_SAGA', getResume);
}

// worker Saga: will be fired on "GET_RESUME_SAGA" actions
function* getResume(action) {
  try {
    // get all resume
    const resume = yield axios.get('/resume');
    // send resume to reducer
    yield put({ type: 'GET_RESUME', payload: resume.data });
  } catch (error) {
    console.log('Error with getResumeSaga:', error);
  }
}

export default getResumeSaga;

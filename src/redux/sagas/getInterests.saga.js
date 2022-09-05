import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getInterestsSaga() {
	yield takeLatest('GET_INTERESTS_SAGA', getInterests);
}

// worker Saga: will be fired on "GET_INTERESTS_SAGA" actions
function* getInterests(action) {
  try {
    // get all interests
    const interests = yield axios.get('/interests');
    // send interests to reducer
    yield put({ type: 'GET_INTERESTS', payload: interests.data });
  } catch (error) {
    console.log('Error with getInterestsSaga:', error);
  }
}

export default getInterestsSaga;

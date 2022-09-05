import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getTechnologiesSaga() {
	yield takeLatest('GET_TECHNOLOGIES_SAGA', getTechnologies);
}

// worker Saga: will be fired on "GET_TECHNOLOGIES_SAGA" actions
function* getTechnologies(action) {
  try {
    // get all technologies
    const technologies = yield axios.get('/technologies');
    // send technologies to reducer
    yield put({ type: 'GET_TECHNOLOGIES', payload: technologies.data });
  } catch (error) {
    console.log('Error with getTechnologiesSaga:', error);
  }
}

export default getTechnologiesSaga;

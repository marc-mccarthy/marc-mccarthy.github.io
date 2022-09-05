import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getServicesSaga() {
	yield takeLatest('GET_SERVICES_SAGA', getServices);
}

// worker Saga: will be fired on "GET_SERVICES_SAGA" actions
function* getServices(action) {
  try {
    // get all services
    const services = yield axios.get('/services');
    // send services to reducer
    yield put({ type: 'GET_SERVICES', payload: services.data });
  } catch (error) {
    console.log('Error with getInterestsSaga:', error);
  }
}

export default getServicesSaga;

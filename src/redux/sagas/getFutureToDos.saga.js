import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getFutureToDosSaga() {
	yield takeLatest('GET_FUTURETODOS_SAGA', getFutureToDos);
}

// worker Saga: will be fired on "GET_FUTURETODOS_SAGA" actions
function* getFutureToDos(action) {
  try {
    // get all future to dos
    const futureToDos = yield axios.get('/futuretodos');
    // send future to dos to reducer
    yield put({ type: 'GET_FUTURETODOS', payload: futureToDos.data });
  } catch (error) {
    console.log('Error with getFutureToDosSaga:', error);
  }
}

export default getFutureToDosSaga;

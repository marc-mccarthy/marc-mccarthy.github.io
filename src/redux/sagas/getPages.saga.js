import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getPagesSaga() {
	yield takeLatest('GET_PAGES_SAGA', getPages);
}

// worker Saga: will be fired on "GET_PAGES_SAGA" actions
function* getPages(action) {
  try {
    // get all pages
    const pages = yield axios.get('/pages');
    // send pages to reducer
    yield put({ type: 'GET_PAGES', payload: pages.data });
  } catch (error) {
    console.log('Error with getPagesSaga:', error);
  }
}

export default getPagesSaga;

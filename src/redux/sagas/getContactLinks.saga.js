import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getContactLinksSaga() {
	yield takeLatest('GET_CONTACT_LINKS_SAGA', getContactLinks);
}

// worker Saga: will be fired on "GET_CONTACT_LINKS_SAGA" actions
function* getContactLinks(action) {
  try {
    // get all services
    const contactLinks = yield axios.get('/contactLinks');
    // send services to reducer
    yield put({ type: 'GET_CONTACT_LINKS', payload: contactLinks.data });
  } catch (error) {
    console.log('Error with getContactLinksSaga:', error);
  }
}

export default getContactLinksSaga;

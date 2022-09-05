import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addContactSaga() {
	yield takeLatest('ADD_CONTACT_SAGA', addContact);
}

// worker Saga: will be fired on "ADD_CONTACT_SAGA" actions
function* addContact(action) {
  try {
    // checks the payload
    console.log(action.payload);
    // send new contact to the server
    yield axios.post('/contact', action.payload)
  } catch (error) {
    console.log('Error with contactSaga:', error);
  }
}

export default addContactSaga;

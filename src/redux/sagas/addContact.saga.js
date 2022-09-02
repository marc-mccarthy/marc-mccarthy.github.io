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
    const addContact = yield axios.post('/contact', action.payload)
    console.log(addContact.data)
  } catch (error) {
    console.log('Error with contactSaga:', error);
  }
}

export default addContactSaga;

import { takeLatest } from "redux-saga/effects";
import axios from "axios";

function* addContactSaga() {
	yield takeLatest("ADD_CONTACT_SAGA", addContact);
}

function* addContact(action) {
	try {
		yield axios.post("/contact", action.payload);
	} catch (error) {
		console.log("Error with contactSaga:", error);
	}
}

export default addContactSaga;

import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getContactLinksSaga() {
	yield takeLatest("GET_CONTACT_LINKS_SAGA", getContactLinks);
}

function* getContactLinks() {
	try {
		const contactLinks = yield axios.get("/contactLinks");
		yield put({ type: "GET_CONTACT_LINKS", payload: contactLinks.data });
	} catch (error) {
		console.log("Error with getContactLinksSaga:", error);
	}
}

export default getContactLinksSaga;

import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getPagesSaga() {
	yield takeLatest("GET_PAGES_SAGA", getPages);
}

function* getPages() {
	try {
		const pages = yield axios.get("/pages");
		yield put({ type: "GET_PAGES", payload: pages.data });
	} catch (error) {
		console.log("Error with getPagesSaga:", error);
	}
}

export default getPagesSaga;

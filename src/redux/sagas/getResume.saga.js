import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getResumeSaga() {
	yield takeLatest("GET_RESUME_SAGA", getResume);
}

function* getResume() {
	try {
		const resume = yield axios.get("/resume");
		yield put({ type: "GET_RESUME", payload: resume.data });
	} catch (error) {
		console.log("Error with getResumeSaga:", error);
	}
}

export default getResumeSaga;

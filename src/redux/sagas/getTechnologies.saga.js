import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getTechnologiesSaga() {
	yield takeLatest("GET_TECHNOLOGIES_SAGA", getTechnologies);
}

function* getTechnologies() {
	try {
		const technologies = yield axios.get("/technologies");
		yield put({ type: "GET_TECHNOLOGIES", payload: technologies.data });
	} catch (error) {
		console.log("Error with getTechnologiesSaga:", error);
	}
}

export default getTechnologiesSaga;

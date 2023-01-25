import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getInterestsSaga() {
	yield takeLatest("GET_INTERESTS_SAGA", getInterests);
}

function* getInterests() {
	try {
		const interests = yield axios.get("/interests");
		yield put({ type: "GET_INTERESTS", payload: interests.data });
	} catch (error) {
		console.log("Error with getInterestsSaga:", error);
	}
}

export default getInterestsSaga;

import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getServicesSaga() {
	yield takeLatest("GET_SERVICES_SAGA", getServices);
}

function* getServices() {
	try {
		const services = yield axios.get("/services");
		yield put({ type: "GET_SERVICES", payload: services.data });
	} catch (error) {
		console.log("Error with getInterestsSaga:", error);
	}
}

export default getServicesSaga;

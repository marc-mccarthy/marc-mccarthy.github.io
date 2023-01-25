import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getFutureToDosSaga() {
	yield takeLatest("GET_FUTURETODOS_SAGA", getFutureToDos);
}

function* getFutureToDos() {
	try {
		const futureToDos = yield axios.get("/futuretodos");
		yield put({ type: "GET_FUTURETODOS", payload: futureToDos.data });
	} catch (error) {
		console.log("Error with getFutureToDosSaga:", error);
	}
}

export default getFutureToDosSaga;

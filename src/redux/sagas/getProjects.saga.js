import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getProjectsSaga() {
	yield takeLatest("GET_PROJECTS_SAGA", getProjects);
}

function* getProjects() {
	try {
		const projects = yield axios.get("/projects");
		yield put({ type: "GET_PROJECTS", payload: projects.data });
	} catch (error) {
		console.log("Error with getProjectsSaga:", error);
	}
}

export default getProjectsSaga;

import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getVideosSaga() {
	yield takeLatest("GET_VIDEOS_SAGA", getVideos);
}

function* getVideos() {
	try {
		const videos = yield axios.get("/videos");
		yield put({ type: "GET_VIDEOS", payload: videos.data });
	} catch (error) {
		console.log("Error with getVideosSaga:", error);
	}
}

export default getVideosSaga;

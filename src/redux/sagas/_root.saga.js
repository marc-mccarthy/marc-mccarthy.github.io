import { all } from "redux-saga/effects";
import addContactSaga from "./addContact.saga";
import getFutureToDosSaga from "./getFutureToDos.saga";
import getInterestsSaga from "./getInterests.saga";
import getPagesSaga from "./getPages.saga";
import getProjectsSaga from "./getProjects.saga";
import getResumeSaga from "./getResume.saga";
import getServicesSaga from "./getServices.saga";
import getTechnologiesSaga from "./getTechnologies.saga";
import getVideosSaga from "./getVideos.saga";
import getContactLinksSaga from "./getContactLinks.saga";

export default function* rootSaga() {
	yield all([
		addContactSaga(),
		getFutureToDosSaga(),
		getInterestsSaga(),
		getPagesSaga(),
		getProjectsSaga(),
		getResumeSaga(),
		getServicesSaga(),
		getTechnologiesSaga(),
		getVideosSaga(),
		getContactLinksSaga(),
	]);
}

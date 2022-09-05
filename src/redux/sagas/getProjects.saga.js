import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getProjectsSaga() {
	yield takeLatest('GET_PROJECTS_SAGA', getProjects);
}

// worker Saga: will be fired on "GET_PROJECTS_SAGA" actions
function* getProjects(action) {
  try {
    // get all projects
    const projects = yield axios.get('/projects');
    // send projects to reducer
    yield put({ type: 'GET_PROJECTS', payload: projects.data });
  } catch (error) {
    console.log('Error with getProjectsSaga:', error);
  }
}

export default getProjectsSaga;

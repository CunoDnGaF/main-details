import { serviceLoading, serviceSuccess, serviceError } from "../slice/serviceSlice"
import { serviceListLoading, serviceListSuccess, serviceListError } from "../slice/serviceListSlice"
import { take, put, spawn, takeLatest, call } from 'redux-saga/effects';

async function getData(id) {
  const response = await fetch(`http://localhost:7070/api/services/${id ? id : ''}`);
  
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

function* handleLoadingSaga(actions, action) {
  try {
    const data = yield call(getData, action.payload);
    yield put(actions.success(data));
  } catch (error) {
    yield put(actions.error(error.message));
  }
}

function* watchLoadingSaga(actions) {
  while(true) {
    const actionType = actions.req.type;
    yield take(actionType);
    yield takeLatest(actionType, handleLoadingSaga, actions)
  }
}

export default function* saga() {
  yield spawn(watchLoadingSaga, {
    req: serviceLoading, 
    success: serviceSuccess, 
    error: serviceError
  })
  yield spawn(watchLoadingSaga, {
    req: serviceListLoading, 
    success: serviceListSuccess, 
    error: serviceListError
  })
}
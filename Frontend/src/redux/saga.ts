import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import axios from 'axios';
import { Song } from '../types/song';

const API_BASE = process.env.API_URL;

// Fetch Songs Saga
function* fetchSongsSaga(action: ReturnType<typeof actions.fetchSongsRequest>) {
  try {
    const genre = action.payload;
    const url = genre ? `${API_BASE}/songs?genre=${genre}` : `${API_BASE}/songs`;
    const { data } = yield call(axios.get, url);
    yield put(actions.fetchSongsSuccess(data));
  } catch (error: any) {
    yield put(actions.requestFailed(error.message));
  }
}

// Fetch Statistics Saga
function* fetchStatsSaga() {
  try {
    const { data } = yield call(axios.get, `${API_BASE}/stats`);
    yield put(actions.fetchStatsSuccess(data));
  } catch (error: any) {
    yield put(actions.requestFailed(error.message));
  }
}

// Create Song Saga
function* createSongSaga(action: ReturnType<typeof actions.createSongRequest>) {
  try {
    const { data } = yield call(axios.post, `${API_BASE}/songs`, action.payload);
    yield put(actions.fetchSongsRequest(null)); // Refresh the list
    yield put(actions.fetchStatsRequest()); // Refresh stats
  } catch (error: any) {
    yield put(actions.requestFailed(error.message));
  }
}

// Update Song Saga
function* updateSongSaga(action: ReturnType<typeof actions.updateSongRequest>) {
  try {
    const { _id, ...rest } = action.payload;
    const { data } = yield call(axios.put, `${API_BASE}/songs/${_id}`, rest);
    yield put(actions.fetchSongsRequest(null)); // Refresh the list
    yield put(actions.fetchStatsRequest()); // Refresh stats
  } catch (error: any) {
    yield put(actions.requestFailed(error.message));
  }
}

// Delete Song Saga
function* deleteSongSaga(action: ReturnType<typeof actions.deleteSongRequest>) {
  try {
    yield call(axios.delete, `${API_BASE}/songs/${action.payload}`);
    yield put(actions.fetchSongsRequest(null)); // Refresh the list
    yield put(actions.fetchStatsRequest()); // Refresh stats
  } catch (error: any) {
    yield put(actions.requestFailed(error.message));
  }
}

// Root Saga
export default function* rootSaga() {
  yield takeLatest(actions.fetchSongsRequest.type, fetchSongsSaga);
  yield takeLatest(actions.fetchStatsRequest.type, fetchStatsSaga);
  yield takeLatest(actions.createSongRequest.type, createSongSaga);
  yield takeLatest(actions.updateSongRequest.type, updateSongSaga);
  yield takeLatest(actions.deleteSongRequest.type, deleteSongSaga);
}
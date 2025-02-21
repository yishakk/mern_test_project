import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Song, Stats } from '../types/song';

interface SongState {
  songs: Song[];
  stats: Stats | null;
  loading: boolean;
  error: string | null;
  filterGenre: string | null;
}

const initialState: SongState = {
  songs: [],
  stats: null,
  loading: false,
  error: null,
  filterGenre: null,
};

const songSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    fetchSongsRequest: (state, action: PayloadAction<string | null>) => {
      state.loading = true;
      state.filterGenre = action.payload;
    },
    fetchSongsSuccess: (state, action: PayloadAction<Song[]>) => {
      state.songs = action.payload;
      state.loading = false;
    },
    fetchStatsRequest: (state) => {
      state.loading = true;
    },
    fetchStatsSuccess: (state, action: PayloadAction<Stats>) => {
      state.stats = action.payload;
      state.loading = false;
    },
    createSongRequest: (state, _action: PayloadAction<Omit<Song, '_id'>>) => {
      state.loading = true;
    },
    updateSongRequest: (state, action: PayloadAction<Song>) => {
      state.loading = true;
    },
    updateSongSuccess: (state, action: PayloadAction<Song>) => {
      state.loading = false;
      const index = state.songs.findIndex((song) => song._id === action.payload._id);
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
    },
    deleteSongRequest: (state, _action: PayloadAction<string>) => {
      state.loading = true;
    },
    requestFailed: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions, reducer } = songSlice;

export default songSlice.reducer;
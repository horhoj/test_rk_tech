import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { makeRequestExtraReducer, makeRequestStateProperty, RequestList, RequestStateProperty } from '~/store/helpers';
import { fetchRandomCat } from '~/api/cats.api';
import { FetchRandomCatResponseItem } from '~/api/cats.api.types';

const SLICE_NAME = 'randomCat';

interface IS {
  fetchRandomCatRequest: RequestStateProperty<FetchRandomCatResponseItem, string>;
}

const initialState: IS = {
  fetchRandomCatRequest: makeRequestStateProperty(),
};

const { actions, reducer, selectors } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    clear: () => initialState,
  },
  extraReducers: (builder) => {
    makeRequestExtraReducer<RequestList<IS>>(builder, fetchRandomCatThunk, 'fetchRandomCatRequest');
  },
});

const fetchRandomCatThunk = createAsyncThunk(`SLICE_NAME/fetchCommentsThunk`, async (_, store) => {
  try {
    const res = await fetchRandomCat();
    return store.fulfillWithValue(res);
  } catch (e: unknown) {
    const error = e instanceof Error ? e.message : 'неизвестная ошибка';
    return store.rejectWithValue(error);
  }
});

export const randomCatSlice = { actions, selectors, thunks: { fetchRandomCatThunk } } as const;

export const randomCatReducer = reducer;

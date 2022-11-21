import { createSlice } from '@reduxjs/toolkit'

import { extraReducers } from './Post.ExReducers'
import { initialState } from './Post.Init'
import { reducers } from './Post.Reducers'

const slice = createSlice({
	name: 'Post',
	initialState,
	reducers,
	extraReducers
})

export const { reducerExample } = slice.actions

export const Post = slice.reducer


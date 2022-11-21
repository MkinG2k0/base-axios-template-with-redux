import { Error } from '@ReduxHelper'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Post } from 'Api/services/Post'

export const fetchPosts = createAsyncThunk<R_Post.Base[], undefined>(
	'fetch/post',
	async function (_, { rejectWithValue }) {
		let data = await Post.GetAll()

		return data.data
	}
)

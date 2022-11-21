import { setStatus } from '@ReduxHelper'
import { PayloadAction } from '@reduxjs/toolkit'

import { PostModel } from './Post.Model'
import { fetchPosts } from './Post.Thunk'

export const extraReducers = {
	[fetchPosts.pending.type]: (state: PostModel, action) => {
		// any
	},

	[fetchPosts.rejected.type]: (
		state: PostModel,
		action: PayloadAction<string>
	) => {
		state.error = 'error'
	},

	[fetchPosts.fulfilled.type]: (
		state: PostModel,
		action: PayloadAction<R_Post.Base[]>
	) => {
		state.allPosts = action.payload
	}
}

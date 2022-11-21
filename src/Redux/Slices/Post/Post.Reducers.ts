import { PayloadAction } from '@reduxjs/toolkit'

import { PostModel } from './Post.Model'

export const reducers = {
	reducerExample(state: PostModel, action: PayloadAction<string>) {}
}

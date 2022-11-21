import { Req } from 'Interface/Axios'

import { http } from '../http'

const path_posts = 'todos'

const GetAll = (): Req<R_Post.Base[]> => {
	return http.get(path_posts)
}

const Create = (data): Req<R_Post.Base[]> => {
	return http.post(path_posts, data)
}

export const Post = {
	GetAll,
	Create
}

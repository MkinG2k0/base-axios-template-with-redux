import { Post } from 'Api/services/Post'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { GetPost } from 'Redux/Slices/Post/Post.Get'
import { fetchPosts } from 'Redux/Slices/Post/Post.Thunk'
import { store } from 'Redux/Store/store'
import { ROUTES } from 'Routes/Routes'

function Main() {
	const { allPosts } = GetPost()

	const createPost = () => {
		Post.Create({ title: 'Title', competed: false })
	}

	useEffect(() => {
		store.dispatch(fetchPosts())
	}, [])

	return (
		<div>
			Main Page <NavLink to={ROUTES.ANY}>Nav Any page</NavLink>
			<button onClick={createPost}>create</button>
			<div>
				{allPosts.map((post) => (
					<div key={post.id}>{post.title}</div>
				))}
			</div>
		</div>
	)
}

export default Main

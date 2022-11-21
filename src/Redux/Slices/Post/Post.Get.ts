import { useStore } from 'Redux/Store/Redux.hooks'

export const GetPost = () => useStore(({ Post }) => Post)

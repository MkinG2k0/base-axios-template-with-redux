import { useStore } from 'Redux/Store/Redux.hooks'

export const GetData = () => useStore(({_persist}) => _persist)


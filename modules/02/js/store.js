import { createStore } from './redux/index.js'
import reducer from './reducers/index.js'

const initialState = {
  burn: 0,
  click: 1360563
}

const store = createStore(reducer, initialState)

export default store
// store.dispatch()
// store.getState()
// store.subscribe()

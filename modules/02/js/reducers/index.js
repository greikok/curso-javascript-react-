import { BURN } from '../actions/index.js'

const reducer = (state, action) => {
  switch (action.type) {
    case BURN:
      state.burn += action.payload
      state.click > 0 ? state.click -= 1 : state.click = 0
      return state
    default:
      return state
  }
}

export default reducer
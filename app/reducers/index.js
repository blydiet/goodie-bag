
import axios from 'axios'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const ALL_CANDIES = 'ALL_CANDIES'

export const allCandies = (candies) => ({ type: ALL_CANDIES, candies })

const initialState = {
  candies: []
}

export const getCandies = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/api/candies')
      const data = res.data
      const action = allCandies(data)
      dispatch(action)
    } catch (error) {
      console.log('Error fetching workouts', error)
    }

  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_CANDIES:
      return { ...state, candies: action.candies }
    default:
      return state
  }
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, createLogger({ collapsed: true }))
  )
)
export default rootReducer

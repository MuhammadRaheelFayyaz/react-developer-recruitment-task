import * as actions from '../types'

export const initialState = {
  graphData: [],
  loading: false,
  hasErrors: false,
}

export default function GraphReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_GRAPH_DATA:
      return {...state, loading: true}
    case actions.GET_GRAPH_DATA_SUCCESS:
      return {graphData: action.payload, loading: false, hasErrors: false}
    case actions.GET_GRAPH_DATA_FAILURE:
      return {...state, loading: false, hasErrors: true}
    default:
      return state
  }
}
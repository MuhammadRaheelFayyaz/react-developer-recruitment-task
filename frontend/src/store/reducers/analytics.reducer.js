import * as actions from '../types'

export const initialState = {
  analyticsData: [],
  loading: false,
  hasErrors: false,
}

export default function AnalyticsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ANALYTICS_DATA:
      return {...state, loading: true}
    case actions.GET_ANALYTICS_SUCCESS:
      return {analyticsData: action.payload, loading: false, hasErrors: false}
    case actions.GET_ANALYTICS_FAILURE:
      return {...state, loading: false, hasErrors: true}
    default:
      return state
  }
}
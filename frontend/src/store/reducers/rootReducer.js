import {combineReducers} from 'redux';
import GraphReducer from './graph.reduser'
import AnalyticsReducer from './analytics.reducer'

export default combineReducers({
GraphReducer,
AnalyticsReducer
})

import * as actions from '../types'
import axios from 'axios'

export const mapStateToProps=state=>({
        graphData:state.GraphReducer.graphData,
        garphLoading:state.GraphReducer.loading,
        graphHasErrors:state.GraphReducer.hasErrors,

        analyticsData:state.AnalyticsReducer.analyticsData,
        analyticsLoading:state.AnalyticsReducer.loading,
        analyticsHasErrors:state.AnalyticsReducer.hasErrors,
})

export const mapDispatchToProps=dispatch=>{
    return{
        getGraphData:async()=>{
          try{
            dispatch({type:actions.GET_GRAPH_DATA})
            let res=await  axios.get('http://localhost:8080/graph-data')
            dispatch({type:actions.GET_GRAPH_DATA_SUCCESS,payload:res.data.data})
        }catch(error){
          console.log("🚀 ~ file: graph.action.js ~ line 20 ~ getGraphData:async ~ error", error)
              dispatch({type:actions.GET_GRAPH_DATA_FAILURE})
          }
        },
        getAnalyticsData:async()=>{
            try{
              dispatch({type:actions.GET_ANALYTICS_DATA})
              let res=await  axios.get('http://localhost:8080/graph-analytics')
              dispatch({type:actions.GET_ANALYTICS_SUCCESS,payload:res.data.data})
          }catch(error){
                console.log("🚀 ~ file: graph.action.js ~ line 35 ~ getAnalyticsData:async ~ error", error)
                dispatch({type:actions.GET_ANALYTICS_FAILURE})
            }
          }
    }
}
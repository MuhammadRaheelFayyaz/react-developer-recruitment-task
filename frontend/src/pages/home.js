import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux' 
import CustomChart from '../components/customeChart'
import Analytics from '../components/analytics'
import { mapDispatchToProps, mapStateToProps } from '../store/actions/graph.action';
import HistoryCard from '../components/history-card'
const HomePage=({getGraphData, garphLoading,graphData,getAnalyticsData,analyticsLoading,analyticsData   })=>{
    
useEffect(()=>{
    getGraphData()
    getAnalyticsData()
},[])

    
 return <div className="container">
        <div className="custom-card">
            <div className="home-page-heading">Analytics  </div>
           <div className="row">
                {!analyticsLoading && <Analytics data={analyticsData} />}
                {!garphLoading &&   <CustomChart data={graphData} />}
           </div>
        </div>
        <div className="row">
            <HistoryCard /> 
            <HistoryCard />    
        </div>   
    </div>
    
}


export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
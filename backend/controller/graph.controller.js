const graphData=require('../containers/graphData.json') 
const graphAnalytics=require('../containers/graphAnalytics.json')


exports.getGraphData=(req,res)=>{
    res.status(200).json({
        success:true,
        data:graphData
    })
}


exports.getGraphAnalytics=(req,res)=>{
    res.status(200).json({
        success:true,
        data:graphAnalytics
    })
}
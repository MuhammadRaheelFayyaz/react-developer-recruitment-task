import React,{useEffect,useState} from 'react';



const Analytics=({data})=>{

useEffect(()=>{
},[data])
    if(data.length===0) return null
    else return <div className="analytics">
        <div className="anylitics-heading">Growth</div>
        <div className="anylitics-value">{`${data[0].growth_value/1000}K`}</div>
        <div className="anylitics-percent">{`${data[0].growth_percent}%`}</div>

        <div className="anylitics-heading">Profit</div>
        <div className="anylitics-value">{`${data[0].profit_value}`}</div>
        <div className="anylitics-percent" style={{color:'#da1010'}}>{`${data[0].profit_percent}%`}</div>
        <div className="anylitics-heading">Loss</div>
        <div className="anylitics-value">{`${data[0].loss_value}`}</div>
        <div className="anylitics-percent">{`${data[0].loss_percent}%`}</div>

    </div>
}


export default Analytics;

import React from 'react'


const HistoryCard=()=>{

    return <div className="history-card">
        <div className="home-page-heading">Last 6 Months</div>
        <div className="row" style={{justifyContent:'space-around'}}>
            <div className="analytics">
                <div className="anylitics-heading">Growth</div>
                <div className="anylitics-value">0</div>
                <div className="anylitics-percent" style={{color:'#da1010'}}>0.00%</div>

                <div className="anylitics-heading">Profit</div>
                <div className="anylitics-value">$0</div>
                <div className="anylitics-percent" >50%</div>
                <div className="anylitics-heading">Loss</div>
                <div className="anylitics-value">$0</div>
                <div className="anylitics-percent" style={{color:'#da1010'}}>0.00%</div>
            </div>
            <div className="analytics">
                <div className="anylitics-heading">health</div>
                <div className="anylitics-value">0.00%</div>
                <div className="anylitics-percent" style={{color:'#da1010'}}>0.00%</div>

                <div className="anylitics-heading">Purchase</div>
                <div className="anylitics-value">$0</div>
                <div className="anylitics-percent" style={{color:'#da1010'}}>0.00%</div>
                <div className="anylitics-heading">Stack</div>
                <div className="anylitics-value">$0</div>
                <div className="anylitics-percent" style={{color:'#da1010'}}>0.00%</div>
            </div>
        </div>
    </div>

}


export default HistoryCard;
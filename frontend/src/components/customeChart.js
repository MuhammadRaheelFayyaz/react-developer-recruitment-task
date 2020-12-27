import React,{useEffect,useState} from 'react';
import Chart from 'react-c3-component';
import 'c3/c3.css';
import moment from 'moment'

const CustomChart=({data})=>{

    const [profit,setProfit]=useState([]);
    const [loss,setLoss]=useState([]);
    const [growth,setGrowth]=useState([])
    const [dates,setDates]=useState([])


    useEffect(()=>{
        let profitArray=[],lossArray=[],growthArray=[],dateArray=[];
        data.forEach(item=>{
            profitArray.push(parseFloat(item.profit))
            lossArray.push(parseFloat(item.loss))
            growthArray.push(parseFloat(item.growth))
            dateArray.push(item.date_key)
        })
        setProfit(profitArray)
        setLoss(lossArray)
        setGrowth(growthArray)
        setDates(dateArray)
    },[data])

    return <Chart
    config={{
        size: {
            height: 380,
            width: 980
        },
      data: {
          x:'x',
        columns: [
          ['Growth', ...growth],
          ['Profit', ...profit],
          ['Loss',...loss],
          ['x',...dates]
        ],
        axes: {
            Profit: 'y2'
          },
          types: {
            Profit: 'bar'
          },
          colors:{
              Profit:'#40c0d4',
              Growth:'#48d493',
              Loss:'#61357a'
          }
      },
      legend: {
            position: 'inset',
        inset: {
            anchor: 'top-left',
            x: 50,
            y: 0,
            step: 1
        }
    },
      axis: {
        y: {
          label: {
            text: 'Growth/Loss',
            position: 'outer-middle'
          },
          tick: {
            format:function(x){
                return `${x}k`
            }
          }
          
        },
        y2: {
          show: true,
          label: {
            text: 'Profit',
            position: 'outer-middle'
          },
          tick: {
            format: function(x){
                return `${x}m`
            } // ADD
          }
        },
        x:{
            type:'timeseries',
            tick: {
                format: function(x){
                    return moment(x).format('MMM DD YYYY');
                },
                rotate:-30,
            },
            height: 120

        }
      }
    }}
  />
}

export default CustomChart
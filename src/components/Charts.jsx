import React from 'react';
import ReactECharts from 'echarts-for-react';
import myData from "../data/myData.json"

const Charts = () => {

  
  // BAR CHART

  const option = {
    xAxis : [
      {
        data: myData.map(p => p.Alcohol),
        type : 'category',
        name: 'Alcohol',
        nameLocation: 'middle',
        nameGap: 30
      }
    ],
    yAxis : [
      {
        type : 'value',
        name: 'Malic Acid',
        nameLocation: 'middle',
        nameGap: 20
      }
    ],
    series: [
      {
        data:myData.map(p => p['Malic Acid']),
        type: 'bar',
      itemStyle: {
          color: 'blue'
      },
     
      }
    ]
  };



  // SCATTER PLOT CHART



  const scatter = {
   
    xAxis : [
      {
        data: myData.map(p => p['Color intensity']),
        type : 'category',
        name: 'Color Intensity',
        nameLocation: 'middle',
        nameGap: 30
      }
    ],
    
    yAxis : [
      {
        type : 'value',
        name: 'Hue',
        nameLocation: 'middle',
        nameGap: 25
      }
    ],
    series: [
      {
        symbolSize: 20,
        data: myData.map(p => p.Hue),
        type: 'scatter',
       
       
        barWidth: 50,
        itemStyle: {
            color: 'red'
        }
      }
    ]
  };


  return (
   <div style={{
     width:"100%",
     height:"auto",
     }}>

    <div className="bar"
     style={{
       display:"flex",
       alignItems:"center",
       justifyContent:"center",
       margin:"5%",
       fontWeight:500
       }}>BAR CHART</div>

       <ReactECharts option={option} />
      
       <div className="scatter"
     style={{
       display:"flex",
       alignItems:"center",
       justifyContent:"center",
       margin:"5%",
       fontWeight:500
       }}>SCATTER PLOT CHART</div>
       <ReactECharts option={scatter} />
   </div>
  )
}

export default Charts
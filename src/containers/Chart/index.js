import React from "react";

import { Chart } from "react-charts";

import useDemoConfig from "./useDemoConfig";
import useLagRadar from "./useLagRadar";
import ResizableBox from "./ResizableBox";

import CanvasJSReact from "../../assets/canvasjs.react";
import "./style.css";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const CChart = () => {
  // const options = {
  //     animationEnabled: true,
  //     exportEnabled: true,
  //     theme: "light1", // "light1", "dark1", "dark2"
  //     title:{
  //         text: "DooFilm by Week of Year"
  //     },
  //     axisY: {
  //         title: "Bounce Rate",
  //         includeZero: false,
  //         margin: 10,
  //         suffix: "%"
  //     },
  //     axisX: {
  //         title: "Week of Year",
  //         prefix: "W",
  //         interval: 2
  //     },
  //     width:1000,
  //     data: [{
  //         type: "line",
  //         toolTipContent: "Week {x}: {y}%",
  //         dataPoints: [
  //             { x: 1, y: 0 },
  //             { x: 2, y: 61 },
  //             { x: 3, y: 64 },
  //             { x: 4, y: 62 },
  //             { x: 5, y: 64 },
  //             { x: 6, y: 60 },
  //             { x: 7, y: 58 },
  //             { x: 8, y: 59 },
  //             { x: 9, y: 53 },
  //             { x: 10, y: 54 },
  //             { x: 11, y: 61 },
  //             { x: 12, y: 60 },
  //             { x: 13, y: 55 },
  //             { x: 14, y: 60 },
  //             { x: 15, y: 56 },
  //             { x: 16, y: 60 },
  //             { x: 17, y: 59.5 },
  //             { x: 18, y: 63 },
  //             { x: 19, y: 58 },
  //             { x: 20, y: 54 },
  //             { x: 21, y: 59 },
  //             { x: 22, y: 64 },
  //             { x: 23, y: 59 }
  //         ]
  //     }]
  // }
  useLagRadar();

  const { data, randomizeData } = useDemoConfig({
    dataType: "linear",
    series: 10,
    useR: true,
  });

  const series = React.useMemo(
    () => ({
      type: "bubble",
      showPoints: false,
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );
  return (
    <div style = {{boxShadow:'0px 6px 14px 1px', padding:'25px'}}  className="chart">
      <div >
        {/* <h1 style = {{width:'100%'}}>DOOFILM</h1>
			<CanvasJSChart options = {options} 		
			/> */}
        <button onClick={randomizeData}>Randomize Data</button>
        <br />
        <br />
        <ResizableBox>
          <Chart
            data={data}
            series={series}
            axes={axes}
            grouping="single"
            tooltip
          />
        </ResizableBox>
      </div>
    </div>
  );
};
export default CChart;

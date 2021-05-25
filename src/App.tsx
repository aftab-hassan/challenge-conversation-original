import React, {useState} from "react";
// import "./styles.css";

import { Line } from "react-chartjs-2";

import Lightbox from "react-image-lightbox";

import LifeEvent from './LifeEvent';
import LightBoxWrapper from "./LightBoxWrapper";

import './App.css';

const images = [
  "//placekitten.com/1500/500",
  "//placekitten.com/4000/3000",
  "//placekitten.com/800/1200",
  "//placekitten.com/1500/1500"
];


const data = {
  labels: ["School", "Undergrad-1st year", "Undergrad-foll years", "UW", "End of UW", "Job offers", "Azure", "Now", "Now 2"],
  datasets: [
    {
      label: "First dataset",
      // data: [10, -10, -5, 10, -10, 10],
      data: [1, -1, -0.5, 1, 0, 1, -1, 0, 0],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      lineTension: 0.1,
      // backgroundColor: "rgba(75,192,192,0.4)",
      // borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 10,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 10,
      pointRadius: 10,
      pointHitRadius: 100
    }
  ]
};

export default function App() {
  const [showLightBox, setShowLightBox] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  function setSetShowLightBoxToFalse () {
    setShowLightBox(false);
  }

  const lineOptions = {
    animation: {
      duration: 0
    },
    onClick: (e, element) => {
      if (element.length > 0) {
        var ind = element[0]._index;
        // alert("helo" + ind);
        // return (
        //   <Lightbox
        //     mainSrc={"http://placekitten.com/4000/3000"}
        //     onCloseRequest={() => {}}
        //   />
        // );
        setShowLightBox(true);
      }
    },
    legend: {
      display: false
    },
    tooltips: {
      enabled: false,
      displayColors: true
    },
    // pointRadius: 1,
    // pointHitRadius: 10,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true
          },
          ticks: {
            display: false
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: true
          },
          ticks: {
            // display: false
          }
        }
      ]
    }
  };
  
  return (
    <>
      <div className="title">
        My Life
      </div>

      <div className="App">
        <Line options={lineOptions} data={data} />
      </div>

      {/* {showLightBox && <Lightbox
        mainSrc={"http://placekitten.com/4000/3000"}
        onCloseRequest={() => {setShowLightBox(false)}}
      />} */}
      
      {showLightBox && <LightBoxWrapper
        images={images}
        setSetShowLightBoxToFalse={setSetShowLightBoxToFalse}
        // onCloseRequest={() => {setShowLightBox(false)}}
      />}

      <div style={{position: "fixed", top: 50, left: 50}}>
        <LifeEvent title="School"/>
      </div>
      <div style={{position: "fixed", top: 900, left: 160}}>
        <LifeEvent title="Undergrad - First year"/>
      </div>
      <div style={{position: "fixed", top: 700, left: 350}}>
        <LifeEvent title="Undergrad - Following years"/>
      </div>
      <div style={{position: "fixed", top: 50, left: 500}}>
        <LifeEvent title="University of Washington"/>
      </div>
      <div style={{position: "fixed", top: 490, left: 700}}>
        <LifeEvent title="University of Washington - Tailend"/>
      </div>
      <div style={{position: "fixed", top: 50, left: 930}}>
        <LifeEvent title="Starting at Microsoft"/>
      </div>
      <div style={{position: "fixed", top: 900, left: 1250}}>
        <LifeEvent title="Azure - IoT"/>
      </div>
      <div style={{position: "fixed", top: 500, left: 1450}}>
        <LifeEvent title="Now"/>
      </div>
    </>
  );
}

// useState cannot be called at the top level: duh! cuz, it has to inside a function
// import React, {useState} from 'react'
// const [name, setName] = useState('aftab')

// export default function, not export function
// function() not function
// props in a functional component : export default function LightBoxWrapper(props: ILightBoxWrapperProps) {

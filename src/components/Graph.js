import React,{useEffect,useState} from 'react';
import { Line } from 'react-chartjs-2';



const Graph = () => {
const [data1,setData]=useState([])
let [numOfCases,setNumOFCases]=useState([])
let [numOfDeaths,setNumOFDeath]=useState([])
let [numOfRecovered,setNumOFRecovered]=useState([])

useEffect(()=>{  
    let Date=[]
    let cases=[]
    let death=[]
    let recovered=[]
    async function Api(){
      const response =await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all");
      var data = await response.json();
  
      for (let key in data.cases ){
        cases.push(data.cases[key])
        Date.push(key)        
        
    }

    for (let key in data.deaths ){
      death.push(data.deaths[key])
  }
  for (let key in data.recovered ){
    recovered.push(data.recovered[key])
}
    setData(Date)
    setNumOFCases(cases)
    setNumOFDeath(death)
    setNumOFRecovered(recovered)

    }
    Api();
   },[])
   const data = {
    labels:data1,
      datasets: [{
        label: 'Cases',
        data: numOfCases,
        fill: false,
        borderColor: 'rgb(240, 186, 50)',
        tension: 0.1
      },
      {
        label: 'Deaths',
        data: numOfDeaths,
        fill: false,
        borderColor: 'rgb(250,5,48)',
        tension: 0.1
      },
      {
        label: 'Recovered',
        data: numOfRecovered,
        fill: false,
        borderColor: 'rgb(47,224,1)',
        tension: 0.1
      }
   
   

    ]
  };


  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
   return(
    <><div className='header'>
  <h1 className='title'></h1>

</div><Line data={data} />
</>
);
   }

export default Graph;
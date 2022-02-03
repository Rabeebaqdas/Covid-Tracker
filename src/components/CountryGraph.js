import React,{useEffect,useState} from 'react';
import { Line } from 'react-chartjs-2';


const CountryGraph = ({search}) => {
const [data1,setData] = useState([]);
const[numOfCases,setNumOFCases]=useState([])
const [numOfDeaths,setNumOFDeath]=useState([])
const [numOfRecovered,setNumOFRecovered]=useState([])
useEffect(()=>{
    let date=[]
    let cases=[]
    let death=[]
    let recovered=[]
async function getApi(){
    const response = await fetch(`https://disease.sh/v3/covid-19/historical/${search}?lastdays=all`);

    const data = await response.json();
    for(let key in data.timeline.cases){
        cases.push(data.timeline.cases[key]);
        date.push(key);
    }
    for(let key in data.timeline.deaths){
        death.push(data.timeline.deaths[key]);
    }
    for(let key in data.timeline.recovered){
        recovered.push(data.timeline.recovered[key]);
    }
    setData(date);
    setNumOFCases(cases);
    setNumOFDeath(death);
    setNumOFRecovered(recovered);

}
getApi();
},[search])

const data = {
    labels: data1,
    datasets: [
      {
        label: 'Cases',
        data: numOfCases,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(240, 186, 50)',
      },
      {
        label: 'Deaths',
        data: numOfDeaths,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(250,5,48)',
      },
      {
        label: 'Recovered',
        data: numOfRecovered,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(47,224,1)',
      },
    ],
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
  <>
    <div className='header'>
    </div>
    <Line data={data} options={options} height={60} />
  </>
    )
};

export default CountryGraph;
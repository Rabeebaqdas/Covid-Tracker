import * as React from 'react';
import {useEffect,useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CountryGraph from './CountryGraph';


const Item = styled(Paper)(({ theme }) => ({
  
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    paddingTop:'90px',
    height:'200px',
    color: theme.palette.text.secondary,
    margin:'20px'
  }));

function Countries(){
    let [getApi,setApi] = useState({});
    let[country,setcountry] = useState('');
    let[search,setsearch] = useState('Afghanistan');
    useEffect(()=>{
        async function getdata(){
            const response = await fetch (`https://disease.sh/v3/covid-19/countries/${search}`);
            const data = await response.json();
            console.log(data);
            setApi(data);
        } 
        getdata();
    },[search])
    function handleChange(){
        setsearch(country);
        setcountry('');
    }
    return(
<div>
    <input type='text' placeholder="Enter country name" value={country} onChange={(e)=>setcountry(e.target.value)} />
    <button onClick={handleChange} >Click here </button>
<Box sx={{ flexGrow: 1 }}>
<h1 style={{color:'Purple'}}>{getApi.country}</h1>
      <Grid container spacing={2}>
      <Grid item xs={6} md={3}>
        <Item><h1 style={{color:'blue'}}>Total Cases</h1><h2 style={{color:'blue'}}>{getApi.cases}</h2></Item>
      </Grid>
      <Grid item xs={6} md={3}>
        <Item><h1 style={{color:'red'}}>Total Deaths</h1><h2 style={{color:'red'}}>{getApi.deaths}</h2></Item>
      </Grid>
      <Grid item xs={6} md={3}>
        <Item><h1 style={{color:'green'}}>Total Recovered</h1><h2 style={{color:'green'}}>{getApi.recovered}</h2></Item>
      </Grid>
      <Grid item xs={6} md={3}>
        <Item><h1 style={{color:'orange'}}>Active Cases</h1><h2 style={{color:'orange'}}>{getApi.active}</h2></Item>
      </Grid>
      </Grid>
    </Box>
  <CountryGraph search={search}/>
</div>

    );
}

export default Countries;
import * as React from 'react';
import {useEffect,useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Graph from './Graph';

const Item = styled(Paper)(({ theme }) => ({
  
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  paddingTop:'90px',
  height:'200px',
  color: theme.palette.text.secondary,
  margin:'20px'
}));
export default function Global() {
  let [getApi,setApi] = useState({});
  useEffect(()=>{
    async function Api(){
      const response =await fetch("https://disease.sh/v3/covid-19/all");
      let data = await response.json();

      setApi(data);
    }
    Api();
   },[])
  return (
 
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <Item><h1 style={{ color: 'blue' }}>Total Cases</h1><h2 style={{ color: 'blue' }}>{getApi.updated}</h2></Item>
        </Grid>
        <Grid item xs={6} md={3}>
          <Item><h1 style={{ color: 'red' }}>Total Deaths</h1><h2 style={{ color: 'red' }}>{getApi.deaths}</h2></Item>
        </Grid>
        <Grid item xs={6} md={"3"}>
          <Item><h1 style={{ color: 'green' }}>Total Recovered</h1><h2 style={{ color: 'green' }}>{getApi.recovered}</h2></Item>
        </Grid>
        <Grid item xs={6} md={3}>
          <Item><h1 style={{ color: 'orange' }}>Active Cases</h1><h2 style={{ color: 'orange' }}>{getApi.active}</h2></Item>
        </Grid>
      </Grid>
    </Box>
    <Graph/>
    </div>
  );
}

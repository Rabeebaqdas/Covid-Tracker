import React from 'react';
import Global from './Global';
import Countries from './Countries';

export default function Allgrids({currentScreen}) {
 if (currentScreen == 0){
  <h1 style={{color:'Brown'}}>Covid-19 Global Information</h1>
   return <Global />
 }
 if (currentScreen == 1){
  <h1 style={{color:'Brown'}}>Covid-19 Countries Information</h1>
  return <Countries />
}
else{
  return <Global />
}
}

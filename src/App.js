import './App.css';
import Header from './components/Header';
import Allgrids from './components/Allgrids';
import Bottom from './components/Bottom';
import {useState} from 'react';
function App() {
  let screenConfig = useState(0);
  
  return (
    <div className="App">
<Header />
{screenConfig[0]==0?<h1 style={{color:'Brown'}}>Covid-19 Global Information</h1>:<h1 style={{color:'Brown'}}>Covid-19 Country Information</h1>}
<Allgrids currentScreen={screenConfig[0]}/>
<Bottom screenConfig={screenConfig}/>
    </div>
  );
}

export default App;

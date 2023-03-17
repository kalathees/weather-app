import styled from 'styled-components';
import Header from './components/Header';
import Dashboard from './components/Dashboard'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
const Container=styled.div`
    width:100%;
    max-width:1200px;
    margin-inline:auto;
    border-radius:12px;
    margin-top:10px;
    margin-bottom:10px;
`

function App() {


  const [weather, setWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any>(null);
  const [units,setUnits]=useState("metrics")
  const apiKey=process.env.WEATHER_API_KEY;
  const apiKey2="97d401c1043dd009f86abccbbaf7f69a"
  const handleSearch=async(city: string)=>{debugger

    try {
      const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey2}`)
      const currentWeather=await response.json();
      const responseTwo=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey2}`)
      const forecast=await responseTwo.json();
      setWeather(currentWeather)
      setForecast(forecast)
      console.log(currentWeather)
    } catch (error){
      toast.error('An error occurred. Please try again later.');
    }


    }





  return (
    <>
    <ToastContainer />
    <Container>
      <Header handleSearch={handleSearch}/>
      {weather && forecast && <Dashboard weather={weather} forecast={forecast}/> }
    </Container >
    </>

  );
}

export default App;

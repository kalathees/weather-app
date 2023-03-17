import styled from 'styled-components';
import CurrentWeather from './CurrentWeather';
import WeeklyWeather from './WeeklyWeather';


interface Props {
  weather: any;
  forecast: any;
}

export default function Dashboard({ weather,forecast }: Props) {


  const Container=styled.div`
  width:100%;
  display:grid;
  grid-template-columns:1fr 2fr;
  grid-column-gap:5px;
  background: rgba( 255, 255, 255, 0.1 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 20px );
  -webkit-backdrop-filter: blur( 20px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  margin-top:34px;

`

    return (
    <Container>
          <CurrentWeather weather={weather}/>
          <WeeklyWeather forecast={forecast}/>
    </Container>
  )
}

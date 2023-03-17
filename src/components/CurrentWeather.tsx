import styled from 'styled-components';



const Container=styled.div`
  /* border:1px solid grey; */
  margin:34px;
  padding:24px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius:12px;
  display:flex;
  gap:23px;

`


const CityName=styled.div`
  /* border:1px solid grey; */
  font-size:14px;
`

const Temp=styled.div`
  /* border:1px solid grey; */
  font-size:24px;
`


const Status=styled.div`
  /* border:1px solid grey; */
  font-size:18px;
`


const OtherDetails=styled.div`
  /* border:1px solid grey; */
  font-size:14px;
  margin-bottom:5px;
`
const Icon=styled.img`


`

interface Props {
  weather: any;
}



export default function CurrentWeather({weather}:Props) {

console.log(weather)





  return (
    <Container>

      <div>
          <CityName>{weather.name}</CityName>
          <Temp>{weather.main.temp}</Temp>
        <OtherDetails>{weather.weather[0].main}</OtherDetails>
        <Status>{weather.weather[0].description}</Status>
      </div>
      <div>
        <Icon src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="Weather icon" />
      </div>
</Container>
  )
}

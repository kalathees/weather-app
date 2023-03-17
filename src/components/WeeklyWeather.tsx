import styled from 'styled-components';
import Weekly from './Weekly';




const Container=styled.div`
  /* border:1px solid grey; */
  margin:34px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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



interface Props {
  forecast: any;
}


export default function WeeklyWeather({forecast}:Props) {

  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
console.log(forecast)



  return (
    <Container>
        {forecast.list.slice(0,5).map((items:any,index:any)=>{
          return <>
              <Weekly
                dayOfWeek={weekdays[index]}
                climate={items.weather[0].description}
                icon={items.weather[0].icon}
        />
          </>
        })}
    </Container>
  )
}


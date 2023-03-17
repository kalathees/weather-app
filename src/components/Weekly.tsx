import styled from 'styled-components';

const Container = styled.div`
  /* margin: 34px; */
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 24px;
  border-radius: 12px;
  display: grid;
  grid-template-columns:repeat(5,1fr)
  gap: 0px;
`;

const DayOfWeek = styled.div`
  font-size: 14px;
`;

const Temp = styled.div`
  font-size: 24px;
`;

const Status = styled.div`
  font-size: 18px;
`;

const Icon = styled.img`
  height: 50px;
`;

interface Props {
    climate:string
  dayOfWeek: string;
  icon: string;
}

export default function WeeklyWeather({
  dayOfWeek,
  climate,
  icon,

}: Props) {
  return (
    <Container>
      <div>
        <DayOfWeek>{dayOfWeek}</DayOfWeek>

        <div>Feels like: {climate}</div>
      </div>
      <div>
        <Icon src={`http://openweathermap.org/img/w/${icon}.png`} />
      </div>
    </Container>
  );
}
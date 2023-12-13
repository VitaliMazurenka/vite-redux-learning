import styled from "styled-components";
import  WeatherImage  from "../assets/weather.png";

export const Homework29Wrapper=styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-image: url(${WeatherImage});
  background-repeat: no-repeat;
  background-size: cover;
`;


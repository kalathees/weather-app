import styled from 'styled-components';
import { useState } from 'react';

const Container=styled.div`
    width:100%;


`
const SearchBtn=styled.button`
    background-color:#060606;
    color:white;
    border-radius:12px;
    cursor:pointer;
    border:none;
    padding:6px 12px;

`
const SearchInput=styled.input`
    outline:none;
    border-radius:12px;
    border:1px solid #dfd9d9;
    padding:6px;
`
const SearchBar=styled.div`
    /* width:60%; */
    display:grid;
    grid-template-columns:1fr 6fr 1fr ;
    justify-content:center;
    grid-column-gap:10px;
    /* border:1px solid black; */
    border-radius:8px;
    /* padding:3px; */

`

const City=styled.div`
    text-align:left;
    font-size:18px;
    color:black;
    background-color:white;
    border-radius:12px;

`










export default function SearchResults(props: { handleSearch: Function }) {



    const [city, setCity] = useState('');
    const handleClick = (city:string) => {
        props.handleSearch(city);
      };



return (
    <Container>
        <SearchBar>
            <City>
                City
            </City>
            <SearchInput onChange={(e)=>setCity(e.target.value)}  value={city} placeholder="search-city"></SearchInput>
            <SearchBtn onClick={()=>handleClick(city)}>Search</SearchBtn>
        </SearchBar>
    </Container>
  )
}

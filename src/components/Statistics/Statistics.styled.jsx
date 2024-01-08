import styled from 'styled-components'

export const Heading = styled.h2`
    text-transform: uppercase;
    text-align: center;
    color: #222222;
    font-size: 20px;
    margin-bottom: 8px;
    margin-top: 8px;
`

export const Container = styled.section`
border: 2px solid #3852d2;
margin-top: 10px;
margin-left: auto;
margin-right: auto;
/* padding-top: 10px; */
width: 240px;
`

export const StatList = styled.ul`
    display: flex;
    padding: 0;
    margin-top: 8px;
    margin-bottom: 0;
`

export const ListItem = styled.li`
    text-align: center;
    width: 48px;
    padding: 3px;
`

export const StatType = styled.span`
display: block;
 font-size: 10px;
 color: white;
 margin-bottom: 3px;
`

export const StatData = styled.span`
  font-size: 16px;  
  color: white;
  text-align: center;
`
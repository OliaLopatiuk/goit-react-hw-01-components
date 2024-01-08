import styled from 'styled-components'

export const Container = styled.div`
border: 2px solid #3852d2;
margin-top: 10px;
margin-left: auto;
margin-right: auto;
padding-top: 10px;
width: 240px;`

export const Photo = styled.img`
display: block;
width: 140px;
margin-left: auto;
margin-right: auto;
border-radius: 50%;
`
export const UserName = styled.p`
font-weight: bold;
font-size: 18px;
text-align: center;
margin-bottom: 10px;
`
export const Info = styled.p`
color: #404040;
text-align: center;
margin-top: 10px;
margin-bottom: 10px;
`
export const StatsList = styled.ul`
    display: flex;
    padding: 0;
    background-color: #3852d246;
    margin: 0;
`
export const StatsListItem = styled.li`
padding: 4px;
    width: 80px;
    border: 1px solid white;
`

export const StatLabel = styled.span`
    display: block;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
`
export const StatData = styled.span`
    display: block;
    text-align: center;
    font-size: 12px;
`

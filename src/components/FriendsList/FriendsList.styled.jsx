import styled from 'styled-components'

export const FriendList = styled.ul`
/* border: 2px solid rgb(56, 82, 210); */
margin-top: 10px;
margin-left: auto;
margin-right: auto;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 0;
width: 240px;
`

export const ListItem = styled.li`
display: flex;
margin-bottom: 10px;
border: 1px solid rgb(56, 82, 210);
box-shadow: 3px 4px 4px #b5b5b57c;
padding: 5px
`

export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    margin-left: 10px;
    margin-right: 10px;
`

export const Online = styled.span`
    background-color: green;
    width: 15px;
    height: 15px;
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 50%;
    margin-left: 10px;

`
export const NotOnline = styled.span`
   background-color: red; 
   width: 15px;
    height: 15px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 10px;
    border-radius: 50%;
`    

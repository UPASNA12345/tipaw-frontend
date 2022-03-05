import styled from '@emotion/styled'

export const Card = styled.div `
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
background: white;
width: 43%;
border-radius: 14px;
margin: 30px auto;
padding: 10px 17px;
h1{
  color:#5acee8;
  margin:5px 8px 15px 5px;
}
.p-color{
  color: #5acee8;
  font-weight: bold;
  
}
.sub-font{
  color: gray;
  font-weight:500;
  font-size:20px;
  margin: 6px;
 
}
&:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  @media screen and (max-width: 700px) {
      width: 95%;
      margin-top: 0;
  } 
`
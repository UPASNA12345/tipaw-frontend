import styled, { css } from 'styled-components'

export const Button = styled.button`
background: transparent;
  border-radius: 15px;
  border: 2px solid gray;
  margin: 0 1em;
  width:100%;
  cursor: pointer;
  font-weight: bold;
  color:gray;
  margin: 8px 1px;
  font-size:16px;
  padding: 12px 30px;
  ${props =>
    props.primary &&
    css`
      background: #ffcc01;
      color: white;
      border: 2px solid #ffcc01;
    `}
  ${props =>
    props.facebookButton &&
    css`
      background: #4f6aa3;
      color: white;
      border: 2px solid #4f6aa3;
    `};


`
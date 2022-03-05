import styled, { css } from 'styled-components'

export const FormStyles = styled.div`
  input[type=text],input[type=password], select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    &:focus{
      border-color: #719ECE;
    }
  }
 
  label {
    padding: 12px 12px 12px 0;
    display: inline-block;
    fornt-weight: bold;
    color: gray;
  }
  .text-center{
    text-align:center;
  }
  .col-90 {
    width: 100%;
    margin-top: 1px;
  }
  
 .error-text{
   color: red;
   margin:0px;
 }
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  
.password-icon{
    margin-top: 11px;
    background: transparent;
    border: 0px;
    position: absolute;
    margin-left: -30px;
    font-size:20px;
    font-weight: bolde;
    color: gray;
}


  @media screen and (max-width: 700px) {
    .col-90, button[type=submit] {
      width: 100%;
      margin-top: 0;
    }
  }
  `
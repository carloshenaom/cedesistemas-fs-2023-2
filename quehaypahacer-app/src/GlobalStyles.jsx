import styled, { createGlobalStyle } from 'styled-components'


export const COLORS = {
  primary:'#095256',
  secondary:'#087F8C',
  success: '#198753',
  error: '#DC3444',
  info:'#BB9F06'
}

export const GlobalStyles = createGlobalStyle`

  *, ::after, ::before {
    box-sizing: border-box;
  }

  body{
    margin:0;
    padding: 0;
    font-family: 'Poppins';

  }
  a{
    text-decoration: none;
  }

  a:hover{
    text-decoration: none;
  }
`

export const Button = styled.button`
  border: none;
  width: 100%;
  background-color: ${props => props.color || COLORS.primary };
  color:#fff;
  font-size: 1em;
  text-align: center;
  padding: 6px 0;
  cursor: pointer;
  opacity: 0.9;
  text-transform: uppercase;
  font-weight: 700;

  &:hover{
    opacity:1;

  }

`
export const FormContainer = styled.section `
  //border: 1px solid red;

`

export const FormControl = styled.div `

  margin: 12px 0;

  input{
    width:100%;
    font-family: "Montserat";
    font-size: 1.1em;
    border: 2px solid ${COLORS.secondary};
    border-radius: 6px;
    padding: 8px 10px;
    outline:none;

  }

  label {
    font-size: ${props => props.fontSize || '1.0em' };
  }

  span {
    font-size:0.7em;
    color: ${COLORS.error}
  }
`

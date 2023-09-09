import styled, { createGlobalStyle } from 'styled-components'


export const COLORS = {
  primary:'#095256',
  secondary:'#087F8C',
  success: '#198753',
  error: '#DC3444',
  info:'#BB9F06'
}

export const GlobalStyles = createGlobalStyle`
  body{
    margin:0;
    padding: 0;
    font-family: 'Poppins';

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

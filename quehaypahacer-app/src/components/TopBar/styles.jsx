import styled from 'styled-components'
import { COLORS } from '../../GlobalStyles'

export const TopbarContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;
  border: 1px solid ${COLORS.primary};
  top: 0;
  left:0;
  background-color: ${COLORS.primary};

  h5 {
    color:#fff;
    text-align:center;
    font-size: 1.2em;
    line-height:0;

  }
`

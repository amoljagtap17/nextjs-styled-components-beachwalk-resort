import styled from 'styled-components'
import { setFlex, setBackground } from '../../utils/styles'

const Hero = styled.header`
  min-height: 100vh;
  ${props =>
    setBackground({
      img: `/static/images/${props.img}`,
      color: 'rgba(0,0,0,0)'
    })};
  ${setFlex()};
`

export default Hero

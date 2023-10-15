import React from 'react'
import Maincomponent from '../Components/Maincomponent'
import Prouct from '../Components/Prouct'
import Jorden from '../Components/Jorden'
import styled from 'styled-components'
const Landingpage = () => {
  return (
    <Cover>
        <Maincomponent/>
        <Prouct/>
        <Jorden/>
    </Cover>
  )
}

export default Landingpage

const Cover = styled.div`
    display: flex;
    flex-direction: column;
    gap:8rem
`
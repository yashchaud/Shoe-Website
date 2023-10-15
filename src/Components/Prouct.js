import React from 'react'
import Shoecomp from './Shoessection'
import styled from 'styled-components'
import  p1 from '../Images/[removal.ai]p1.png'
import  p2 from '../Images/[removal.ai]_p2.png'
const Prouct = () => {
  return (
    <Cover>
        <Shoecomp p1={p1} p2={p2}/>
        <Shoecomp p1={p1} p2={p2}/>
        <Shoecomp p1={p1} p2={p2}/>
        <Shoecomp p1={p1} p2={p2}/>
         
    </Cover>
  )
}

export default Prouct

const Cover = styled.div`
    display:flex;
    width: 100vw;
    height: 30vw;
    justify-content: space-evenly;
    align-items: center;
`
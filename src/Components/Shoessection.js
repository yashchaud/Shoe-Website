import React,{useRef , useState, useEffect, useCallback} from 'react'
 
import styled from 'styled-components'
import gsap from 'gsap'
const Shoessection = ({p1, p2}) => {
    const uniqueIdRef = useRef(`svgMask-${Math.random().toString(36).substr(2, 9)}`);
    const circle1Id = useRef(`circle1-${Math.random().toString(36).substr(2, 9)}`);
    const circle2Id = useRef(`circle2-${Math.random().toString(36).substr(2, 9)}`);
    const circle3Id = useRef(`circle3-${Math.random().toString(36).substr(2, 9)}`);
    const Image1 = useRef(`first-${Math.random().toString(36).substr(2, 9)}`);

    const circlehover = useRef();
    useEffect(() => {
        const element1 = circlehover.current;
        
        const timeline = gsap.timeline({paused: true})
            .to(`#${Image1.current}`, {opacity: 0, duration: .2, ease: 'Power1.easeInOut' })
            .to(`#${circle1Id.current}`, { attr: { r: "60%" }, duration: .4, ease: 'Power1.easeInOut' }, "<")
            .to(`#${circle2Id.current}`, { attr: { r: "60%" }, duration: .3, ease: 'Power1.easeInOut' }, "<")
            .to(`#${circle3Id.current}`, { attr: { r: "160%" }, duration: .4, ease: 'Power1.easeInOut' }, "<");
        
        const enterHandler = () => timeline.play();
        const leaveHandler = () => timeline.reverse();
    
        element1.addEventListener("mouseenter", enterHandler);
        element1.addEventListener("mouseleave", leaveHandler);
    
        return () => {
          element1.removeEventListener("mouseenter", enterHandler);
          element1.removeEventListener("mouseleave", leaveHandler);
        };
    }, []);    
  return (
    <Cover>
        <Imagediv  ref={circlehover} clipPathId={uniqueIdRef.current}>
            <img  id={Image1.current} src={p1} alt="" />
            <img className='Second' src={p2} alt="" />
        </Imagediv>
        <p className='Colorred'>Just In</p>
        <h3>Air Jordan 1 Low SE</h3>
        <p>Men's Shoes</p>
        <h3>MRP: $1000</h3>
        <Svgoffscr>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <clipPath id={uniqueIdRef.current}>
            <circle id={circle1Id.current} cx="20%" cy="150%" r="0%" />
            <circle id={circle2Id.current} cx="90%" cy="100%" r="0%" />
            <circle id={circle3Id.current} cx="105%" cy="170%" r="0%" />
        </clipPath>
    </defs>
</svg>

      </Svgoffscr>
    </Cover>
  )
}

export default Shoessection


const Cover = styled.div`
    width: 28rem;
     display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    gap: .5rem;

    position:relative;
    p{
        font-size: 1.3rem;
        font-weight: 500;
        margin-block-start: 0em;
    margin-block-end: 0em;
    letter-spacing: 1px;
}
.Colorred{
    color:red;
    font-weight: 600;

}
h3{
    margin-block-start: 0em;
    margin-block-end: 0em;
    letter-spacing: 1px;
}
`

const Imagediv = styled.div`
    position: relative;
    background-color: #fff7f7;
    .Second{

        width: 100%;
            height:100%;
            z-index: 1;
        top:0;
        left: 0;
        position: absolute;
        clip-path: url(${props => `#${props.clipPathId}`});
        transform: translateX(-20px)

    }
`
const Svgoffscr = styled.div`
position: absolute;
width: 0;
height: 0;
overflow: hidden;
 pointer-events: none;
`;

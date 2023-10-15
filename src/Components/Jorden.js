import React,{useEffect,useRef} from 'react'
import Jordan from '../Images/nike-just-do-it (1).jpg'
import styled from 'styled-components'
import Gym from '../Images/Gym.jpg'
import gsap from 'gsap'

const Jorden = () => {
    const imageDivRefs = [useRef(null), useRef(null)];
    
    useEffect(() => {
        gsap.set(imageDivRefs.map(ref => ref.current.querySelectorAll('h1')), { autoAlpha: 0 });
    
        imageDivRefs.forEach((ref) => {
          const div = ref.current;
          const image = div.querySelector('img');
          const headings = div.querySelectorAll('h1');
    
          div.addEventListener('mouseenter', () => {
            gsap.to(image, { duration: 0.5, scale: .5 ,ease: "power1.out"}); // Scale the image up on hover
            gsap.to(headings, { duration: 0.5, autoAlpha: 1, stagger: 0.1 ,ease: "power1.out"}); // Fade in the h1 elements
          });
    
          div.addEventListener('mouseleave', () => {
            gsap.to(image, { duration: 0.5, scale: 1.0 ,ease: "power1.out"}); // Reset the image scale
            gsap.to(headings, { duration: 0.5, autoAlpha: 0, stagger: 0.1 ,ease: "power1.out"}); // Fade out the h1 elements
          });
        });
    }, []);
    
    
    
  return (
    <Cover >
        <Imagediv ref={imageDivRefs[0]}>
            <img src={Jordan} alt="" />
            <h1>Jordan</h1>
            <h1 className='Collec'>Collection</h1>
        </Imagediv>
        <Imagediv ref={imageDivRefs[1]}>
            <img src={Gym} alt="" />
            <h1>Training</h1>
            <h1 className='Colleca'>Gym</h1>
        </Imagediv>
    </Cover>
  )
}

export default Jorden
 
const Cover = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
`
const Imagediv= styled.div`
    width: 50%;
    height: 100%;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    h1{
        opacity: 0;
        position: absolute;
        top:25%;
        left: 38%;
        color: white;
        font-size: 5rem;
        letter-spacing: 2px;
    }
    .Collec{
        top:60%;
        left: 32%;
    }
    .Colleca{
        top:55%;

        left: 45%
    }
`
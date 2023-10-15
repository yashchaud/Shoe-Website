import React,{useEffect,useState, useRef} from 'react'
import Eclipse from '../Images/air-max-plus-iii-shoes-Qw64gh_upscaled.png'
import Jorden1 from '../Images/defy-all-day-training-shoe-LtD2G1 (1) (1).png'
import jmpman from '../Images/[removal.ai]_ae1e65f8-180c-47a1-947f-4e785539dca3-jordan-one-take-4-pf-shoes-v5trdl_upscaled-1 (1) (1).png'
import styled from 'styled-components'
import gsap from 'gsap'
import _ from 'lodash'; 


const Maincomponent = () => {
    const Imageref = useRef();
    const [bgColor, setBgColor] = useState("rgba(111, 94, 177, 0.59)"); // Default color

  const [currentImage, setCurrentImage] = useState(Eclipse); 

  const handleButtonClick = _.debounce((newImage, color) => { 
    gsap.to(Imageref.current.children[0], { opacity: 0, duration: 0.5, onComplete: () => {
      setCurrentImage(newImage);
      setBgColor(color); // Set the background color
      gsap.fromTo(Imageref.current.children[0], { opacity: 0 }, { opacity: 1, duration: 0.5 });
    }});
  }, 500);


  useEffect(() => {
    gsap.set(Imageref.current.children[0], { rotate: -50 , opacity: 1});
    var t1 = gsap.timeline({ duration: 1 });
    t1.to(Imageref.current.children[0], { translateX: -20, rotate: -40, ease: "back.out(1)", duration: .5  });
    return () => {
        gsap.set(Imageref.current.children[0], { rotate: 0, translateX: 1290}); // Reset transformations
      }
}, [currentImage]);
    
  return (
    <Cover>
        <Firstdiv>
            <div className='Text'>
                <h1>NIKE</h1>
                <h1>AIRRUNS</h1>
            </div>
            <h1 className='PRice'>$376</h1>
            <button>BUY NOW</button>
        </Firstdiv>
        <Seconddiv>
          <Imagediv ref={Imageref} color={bgColor}>
              <img  src={currentImage} alt="" />
          </Imagediv>
      </Seconddiv>


        <Thirddiv color={bgColor} > 
        <div  className='Button' onClick={() => handleButtonClick(Eclipse, "rgba(111, 94, 177, 0.59)")}> 
        <img src={Eclipse} alt="" />
      </div>
      <div  className='Button' onClick={() => handleButtonClick(Jorden1, "rgba(255, 126, 126, 0.59)")}>
        <img src={Jorden1} alt="" />
      </div>
      <div className='Button' onClick={() => handleButtonClick(jmpman, "rgba(138, 255, 97, 0.59)")}>
        <img src={jmpman} alt="" />
      </div>

      </Thirddiv>
    </Cover>
   )
}

export default Maincomponent

const Cover = styled.div`   
width: 100vw;
height: 100vh;
overflow: hidden;
display: flex;
align-items: center;
font-family: 'Lato', sans-serif;
justify-content: space-evenly;
@media (max-width: 756px) {
         flex-direction: column;
     }
 `

 const Firstdiv = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    .Text{
        margin: 0;
        h1{
            font-size: clamp(1rem, -4.1892rem + 10.8108vw, 5rem);
                        color:hsla(0, 0%, 0%, 0.7);
            font-weight: 900;
            margin-block-start: 0em;
    margin-block-end: 0em;
        }
    }

    .PRice{
        color:#ffd60a;
        font-weight: 700;

    }
    button{
        padding:1rem;
        padding-inline: 2.5rem;
        border-radius: 2rem;
        border: none;
        cursor: pointer;
        background-color: #ffc300;
    }
 `
 const Seconddiv = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
 `
 const  Imagediv = styled.div`
    min-width: 35rem;
    min-height: 35rem;
    /* background-color: rgba(111, 94, 177, 0.59); */
    background-color: ${props => props.color ? props.color : "rgba(111, 94, 177, 0.59)"};

     border: 2px solid ${props => props.color ? props.color : "rgba(111, 94, 177, 0.59)"};
    border-radius: 100%;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        transform: translate(1200px, -38px);
     }
     @media (max-width: 1424px) {
        min-width: 30rem;
        min-height: 30rem;
     }
     @media (max-width: 1004px) {
        min-width: 20rem;
        min-height: 20rem;
     }
     
 `

const Thirddiv = styled.div`
min-width: 15%;
height: 58%;

display: flex;
    gap:1rem;
    align-items: flex-end;
    justify-content: flex-end;
    @media (max-width: 756px) {
        height: 10%;
     }

.Button{
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    background-color: ${props => props.color ? props.color : "rgba(111, 94, 177, 0.59)"};
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        max-width: 100%;
        max-height: 100%;
     }
}
`
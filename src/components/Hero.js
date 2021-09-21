import React, {useState, useRef, useEffect} from 'react'
import styled, {css} from 'styled-components/macro'
import { Buttton } from './Button'
import {IoMdArrowRoundForward} from 'react-icons/io'
import {IoArrowBack, IoArrowForward} from 'react-icons/io5'

const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`
const HeroWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`
const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    padding-top: 20%;
    padding-left: 10%;

    &::before {
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.6) 100%);
    }
`
const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`
const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% -100px);
    color: #FFF;

    h1 {
        /* font-size: clamp(1rem, 8vw, 1.5rem); */
        /* font-weight: 400; */
        text-transform: uppercase;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
        text-align: left;
        margin-bottom: 0.8rem;
        font-family: 'Lora', serif;
    }

    p {
        margin-bottom: 1.2rem;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
        font-family: 'Lora', serif;
    }
`
const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`

const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10;
`

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #FFF8DC;
    cursor: pointer;
    background: #D2B48C;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover {
        background: #cd583F;
        transform: scale(1.05);
    }
`
const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`

const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`

const Hero = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length-1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 2000)

        return function(){
            if(timeout.current){
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])

    const nextSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }

        setCurrent(current === length-1 ? 0 : current + 1)
        console.log(current)
    }

    const prevSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }

        setCurrent(current === 0 ? length - 1 : current - 1)
        console.log(current)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <HeroSection>
            <HeroWrapper>
               { slides.map((slide, index) => {
                   return (
                       <HeroSlide key={index}>
                           {current === index && (
                           <HeroSlider>
                               <HeroImage src={slide.images} alt={slide.alt}/>
                                <HeroContent>
                                    <h1 className="text-xl font-extrabold md:text-3xl">{slide.title}</h1>
                                    <p className="text-base font-extrabold md:text-xl">{slide.prices}</p>
                                    <Buttton to={slide.path} className="px-3 py-2 rounded-lg shadow-md opacity-75 w-min h-1/3 bg-gray-50" css={`max-width: 160px`}>
                                        {slide.label}
                                        <Arrow/>
                                    </Buttton>
                                </HeroContent>
                           </HeroSlider>
                        )}
                       </HeroSlide>
                   )
               })
               }
                <SliderButtons>
                <PrevArrow onClick={prevSlide}/>
                <NextArrow onClick={nextSlide}/>
               </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero

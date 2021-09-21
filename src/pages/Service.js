import React from 'react'
import styled, { css } from "styled-components/macro";
import event2 from '../images/event2.jpeg'
import event3 from '../images/event3.jpg'
import event4 from '../images/event4.jpg'
import event5 from '../images/event5.jpg'
import brand1 from '../images/brand1.jpg'
import brand2 from '../images/brand2.png'
import brand3 from '../images/brand3.png'
import brand4 from '../images/brand4.png'
import brand5 from '../images/brand5.png'
import brand6 from '../images/brand6.png'

const Head = styled.h1`
  font-family: 'Parisienne', cursive;
  font-size:50px;
`;

const Header = styled.div`
  background-color: #FAEBD7;
`
const Header1 = styled.div`
  background-color: rgb(0, 92, 121);
`

const Header2 = styled.div`
  background-color: rgb(0, 92, 121);
`
const Paragraph = styled.p`
  font-family: 'Martel', serif;
  font-size: medium;
`

const Button = styled.button`
  background-color: rgb(191, 55, 101);
  /* font-family: 'Martel', serif; */
`

const Service = () => {
  return (
    <div className="bg-gray-50">


  <div className="flex flex-col w-full mb-5 text-center pt-28">
    <h2 className="mb-1 text-xs font-medium tracking-widest text-indigo-500 title-font">ROOF PARTY POLAROID</h2>
    <Head className="pt-2 pb-8 mb-4 text-4xl font-medium text-gray-500 sm:text-3xl">We Are Luvis</Head>
    <Paragraph className="mx-auto text-base leading-relaxed lg:w-2/3">Brilliant Event Planning is an award-winning, luxury wedding and event planning company for fun-loving, busy couples that value creativity and quality. We draw our inspiration from YOU and your story to create one-of-a-kind weddings and events. We work collaboratively to ensure your event is cohesive and thoughtful and believe that even the smallest details can have a huge impact. We pride ourselves on our comprehensive event management so that you can have a flawless and stress-free planning experience! </Paragraph>
    <Button className="flex px-6 py-4 mx-auto mt-10 text-xs font-semibold leading-3 text-white bg-pink-600 border-0 rounded focus:outline-none hover:bg-pink-500">SEE US IN ACTION</Button>
  </div>

    
<section className="overflow-hidden text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
    <Header className="flex flex-wrap mx-auto lg:w-10/12">
      <div className="w-full mb-6 lg:w-1/3 lg:pr-0.5 lg:py-6 lg:mb-0">
  
        <Head className="px-8 pt-6 mb-4 text-4xl font-extrabold text-center text-gray-400 title-font">Effortless Elegance</Head>
       
        <Paragraph className="px-8 mt-12 mb-4 leading-relaxed">We create bespoke weddings and events that are inspired by our clients. We work collaboratively to ensure your event is cohesive and thoughtful. At Brilliant Event Planning, we believe that even the smallest details can have a huge impact.</Paragraph>
       
        <Button className="flex justify-center px-6 py-4 mx-auto mt-10 text-xs font-semibold leading-3 text-center text-white bg-pink-600 border-0 rounded focus:outline-none hover:bg-pink-500">WEDDING PORTFOLIO</Button>
      </div>
      <img alt="ecommerce" className="order-first object-cover object-center w-full h-64 rounded lg:w-2/3 lg:h-auto lg:order-last" src={event2} />
    </Header>
  </div>
</section>

<section className="overflow-hidden text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
    <Header1 className="flex flex-wrap mx-auto lg:w-10/12 bg-blend-darken bg-">
    <img alt="ecommerce" className="object-cover object-center w-full h-64 rounded lg:w-2/3 lg:h-auto" src={event3} />
      <div className="w-full mb-6 lg:w-1/3 lg:pr-0.5 lg:py-6 lg:mb-0">
  
        <Head className="px-8 pt-6 mb-4 text-4xl font-extrabold text-center text-white">Award Winning Team</Head>
       
        <Paragraph className="px-8 mt-12 mb-4 leading-relaxed text-white">We are type-A creatives backed by experienced teams in both our Boston and NYC locations. We take on a limited number of events per year to ensure each client receives the highest level of service and attention. At Brilliant Event Planning, we’re dedicated to producing not only a spectacular event, but the foundation for memories that will last a lifetime.</Paragraph>
       
        <Button className="flex px-6 py-4 mx-auto mt-10 mb-4 text-xs font-semibold leading-3 text-center text-white bg-pink-600 border-0 rounded focus:outline-none hover:bg-pink-500">MEET TEAM US</Button>
      </div>
    
    </Header1>
  </div>
</section>

<section className="overflow-hidden text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
    <Header className="flex flex-wrap mx-auto lg:w-10/12">
      <div className="w-full mb-6 lg:w-1/3 lg:pr-0.5 lg:py-6 lg:mb-0">
  
        <Head className="px-8 pt-6 mb-4 text-4xl font-extrabold text-center text-gray-400 title-font">Personal touches</Head>
       
        <Paragraph className="px-8 mt-12 mb-4 leading-relaxed">You don’t only want a beautiful event, you want it to be YOUR beautiful event. We believe that behind every event is a story. So, whether it’s a bespoke escort card display or creative ways to make each guest feel included, we’re here to help you tell your story. Are you looking for inspiration to add some personal, fun and unique touches to your wedding? We’ve got some ideas for you!</Paragraph>
       
        <Button className="flex px-6 py-4 mx-auto mt-10 text-xs font-semibold leading-3 text-center text-white bg-pink-600 border-0 rounded focus:outline-none hover:bg-pink-500">OUR SERVICES</Button>
      </div>
      <img alt="ecommerce" className="order-first object-cover object-center w-full h-64 -mb-12 rounded lg:w-2/3 lg:h-screen lg:order-last" src={event4} />
    </Header>
  </div>
</section>

<section className="overflow-hidden text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
    <Header1 className="flex flex-wrap mx-auto lg:w-10/12 bg-blend-darken">
    <img alt="ecommerce" className="object-cover object-center w-full h-64 rounded lg:w-2/3 lg:h-auto" src={event5} />
      <div className="w-full mb-6 lg:w-1/3 lg:pr-0.5 lg:py-6 lg:mb-0">
  
        <Head className="px-8 pt-6 mb-4 text-4xl font-bold text-center text-white">Flawless Execution</Head>
       
        <Paragraph className="px-8 mt-12 mb-4 leading-relaxed text-white">We specialize in planning and designing weddings and events in private homes and raw spaces. We pride ourselves on flawless execution with high level touches. Weekend affairs, multiple days of tent installation, ferries and travel logistics are a typical day at the office.</Paragraph>
       
        <Button className="flex px-6 py-4 mx-auto mt-10 mb-4 text-xs font-semibold leading-3 text-center text-white bg-pink-600 border-0 rounded focus:outline-none hover:bg-pink-500">WHAT CLIENTS ARE SAYING</Button>
      </div>
    
    </Header1>
  </div>
</section>

<div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <img src={brand1} className="w-full"/>
      </div>
      
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
      <img src={brand2}/>
      </div>
      
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
      <img src={brand3}/>
      </div>
      
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
      <img src={brand4}/>
      </div>
      
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
      <img src={brand5}/>
      </div>
      
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
      <img src={brand6}/>
      </div>
      
    </div>
  </div>
  
    </div>
  )
}

export default Service


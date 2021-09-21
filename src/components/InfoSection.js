import React from 'react'
import Image from '../images/copy_80368585.png'
import Image3 from '../images/icons8-wedding-gift-64.png'
import Image4 from '../images/bouquot.png'
import Image5 from '../images/icons8-wedding-dress-60.png'
import Blog1 from '../images/blog1.jpg'
import Blog2 from '../images/ring.jpg'
import Blog3 from '../images/boque.jpg'
import styled from 'styled-components'

const Head = styled.h1`
  font-family: 'Lora', serif;
`

const InfoSection = () => {
    return (
        <>
        <section className="pb-6 text-gray-600 bg-gray-300 shadow-lg bg-opacity-60">
        <div className="container flex flex-col items-center px-20 mx-auto pt-14 md:flex-row">
          <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <Head className="mb-4 text-4xl font-medium text-gray-800 title-font">
              Let us handle with your the best day 
              <br className="hidden lg:inline-block" />
            </Head>
            <p className="mb-8 leading-relaxed">
            To help you get a start, we dug into what full-service wedding planning really means by talking to some top wedding planners in the industry.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-2 rounded-md focus:outline-none hover:bg-indigo-200 hover:text-indigo-500">
                Get Started
              </button>
            </div>
          </div>
          <div className="order-first w-5/6 lg:max-w-lg lg:w-full md:w-1/2 md:order-last">
            <img 
              className="object-cover object-center rounded"
              alt=""
              src={Image}
            />
          </div>
          </div>
      </section>

      <section className="text-gray-600 shadow-lg body-font bg-gray-50">
  <div className="container px-5 py-24 mx-auto">
    <div className="mb-20 text-center">
      <Head className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">Raw Denim Heirloom Man Braid</Head>
      <p className="mx-auto text-base leading-relaxed xl:w-2/4 lg:w-3/4 text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
      <div className="flex justify-center mt-6">
        <div className="inline-flex w-16 h-1 bg-indigo-500 rounded-full"></div>
      </div>
    </div>
    <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 space-y-6 sm:-m-4 md:space-y-0">
      <div className="flex flex-col items-center p-4 text-center md:w-1/3">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 text-indigo-500 bg-indigo-100 rounded-full">
        <img src={Image5}/>
        </div>
        <div className="flex-grow">
          <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">Shooting Stars</h2>
          <p className="text-base leading-relaxed">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 text-center md:w-1/3">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 text-indigo-500 bg-indigo-100 rounded-full">
          <img src={Image4}/>
        </div>
        <div className="flex-grow">
          <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">The Catalyzer</h2>
          <p className="text-base leading-relaxed">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 text-center md:w-1/3">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 text-indigo-500 bg-indigo-100 rounded-full">
        <img src={Image3}/>
        </div>
        <div className="flex-grow">
          <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">Neptune</h2>
          <p className="text-base leading-relaxed">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
        </div>
      </div>
    </div>
    <button className="flex px-8 py-2 mx-auto mt-16 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-200 hover:text-indigo-500">Read More</button>
  </div>
  {/* ******************blog************************* */}
  <section className="text-gray-600 bg-gray-300 bg-opacity-60 body-font">
  
  <div className="container py-24 mx-auto">
  <Head className="justify-center pb-2 text-2xl font-semibold text-center text-gray-600 uppercase lg:text-3xl">Wedding Blog</Head>
    <div className="justify-center pt-2 text-base font-medium text-center text-gray-600 md:text-lg pb-14">BLISS | Ideas & Inspiration From Perfect Wedding Guide</div>
   
   <div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-300 lg:w-3/5 sm:flex-row">
     
      <div className="inline-flex items-center justify-center flex-shrink-0 text-indigo-500 bg-indigo-100 rounded-lg sm:w-52 sm:h-52 h-36 w-36 sm:mr-14">
     
        <img src={Blog1} className="inset-0 object-cover w-full h-full transition duration-300 transform rounded-md cursor-pointer hover:scale-75" alt="" />
        
      </div>
      
      <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
        <h2 className="mb-2 text-xl font-medium text-gray-900 title-font">Wedding Guest Dresses</h2>
        <p className="text-sm leading-relaxed text-gray-700 ">The best dress to wear to a wedding is the one YOU choose! No matter what your style, find your perfect wedding guest dress for any personality and any budget. Discover the hundreds of possibilities for wedding guest dresses available to you today, here at David's Bridal.</p>
        <a className="inline-flex items-center mt-3 text-indigo-500">Read More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    <div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-300 lg:w-3/5 sm:flex-row">
      <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
        <h2 className="mb-2 text-xl font-medium text-gray-900 title-font">Engagement Ring Designs</h2>
        <p className="text-sm leading-relaxed text-gray-700">Choose from our engagement ring designs below or create your own unique design. All the designs in the gallery can be personalised to suit your individual style and preferences.</p>
        <a className="inline-flex items-center mt-3 text-indigo-500">Read More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="inline-flex items-center justify-center flex-shrink-0 order-first text-indigo-500 bg-indigo-100 rounded-lg sm:w-52 sm:order-none sm:h-52 h-52 w-36 sm:ml-10">
        <img src={Blog2} className="inset-0 object-cover w-full h-full transition duration-300 transform rounded-md shadow-xl cursor-pointer hover:-translate-x-10" alt="" />
      </div>
    </div>
    <div className="flex flex-col items-center mx-auto lg:w-3/5 sm:flex-row">
    <div className="inline-flex items-center justify-center flex-shrink-0 text-indigo-500 bg-indigo-100 rounded-lg sm:w-52 sm:h-52 h-36 w-36 sm:mr-14">
        <img src={Blog3} className="inset-0 object-cover w-full h-full transition duration-300 transform rounded-md shadow-xl cursor-pointer hover:rotate-45" alt="" />
      </div>
      <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
        <h2 className="mb-2 text-xl font-medium text-gray-900 title-font">Fresh and Playful Poppy Wedding Bouquets</h2>
        <p className="text-sm leading-relaxed text-gray-700">Bright and colorful, this poppy infused bouquet exudes enchantment. Coupled with mini daisies, known as bellium, poppies create an elevated wildflower arrangement.

</p>
        <a className="inline-flex items-center mt-3 text-indigo-500">Read More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  
  </div>
</section>
</section>
      </>
    )
}

export default InfoSection

import React from 'react'
import Image from '../images/copy_80368585.png'
import Image3 from '../images/icons8-wedding-gift-64.png'
import Image4 from '../images/bouquot.png'
import Image5 from '../images/icons8-wedding-dress-60.png'
import Blog1 from '../images/blog1.jpg'
import Blog2 from '../images/ring.jpg'
import Blog3 from '../images/boque.jpg'

const InfoSection = () => {
    return (
        <>
        <section className="pb-6 text-gray-600 bg-gray-200 shadow-lg bg-opacity-70">
        <div className="container flex flex-col items-center px-20 mx-auto pt-14 md:flex-row">
          <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="mb-4 text-4xl font-medium text-gray-900 title-font">
              Let us handle with your the best day 
              <br className="hidden lg:inline-block" />
            </h1>
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

      <section class="text-gray-600 body-font bg-gray-50 shadow-lg">
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Raw Denim Heirloom Man Braid</h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
        <img src={Image5}/>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <img src={Image4}/>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
        <img src={Image3}/>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
        </div>
      </div>
    </div>
    <button class="flex mx-auto mt-16 text-white border-0 py-2 px-8 bg-indigo-500 focus:outline-none hover:bg-indigo-200 hover:text-indigo-500 rounded text-lg">Read More</button>
  </div>
  {/* ******************blog************************* */}
  <section class="text-gray-600 body-font bg-gray-200 bg-opacity-70">
  
  <div class="container py-24 mx-auto">
  <div className="justify-center text-lg font-semibold text-center text-gray-600 uppercase lg:text-3xl ">Wedding Blog</div>
    <div className="justify-center pt-2 text-lg font-medium text-center text-gray-400 pb-14">BLISS | Ideas & Inspiration From Perfect Wedding Guide</div>
   
   <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-300 sm:flex-row flex-col">
     
      <div class="sm:w-52 sm:h-52 h-36 w-36 sm:mr-14 inline-flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-500 flex-shrink-0">
     
        <img src={Blog1} className="inset-0 object-cover w-full h-full transition duration-300 transform rounded-md cursor-pointer hover:scale-75" alt="" />
        
      </div>
      
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-700 text-xl title-font font-medium mb-2">Wedding Guest Dresses</h2>
        <p class=" text-gray-500 text-sm leading-relaxed">The best dress to wear to a wedding is the one YOU choose! No matter what your style, find your perfect wedding guest dress for any personality and any budget. Discover the hundreds of possibilities for wedding guest dresses available to you today, here at David's Bridal.</p>
        <a class="mt-3 text-indigo-500 inline-flex items-center">Read More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-300 sm:flex-row flex-col">
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-700 text-xl title-font font-medium mb-2">Engagement Ring Designs</h2>
        <p class="text-gray-500 text-sm leading-relaxed">Choose from our engagement ring designs below or create your own unique design. All the designs in the gallery can be personalised to suit your individual style and preferences.</p>
        <a class="mt-3 text-indigo-500 inline-flex items-center">Read More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="sm:w-52 sm:order-none order-first sm:h-52 h-52 w-36 sm:ml-10 inline-flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-500 flex-shrink-0">
        <img src={Blog2} className="inset-0 object-cover w-full h-full transition duration-300 transform rounded-md cursor-pointer hover:-translate-x-10" alt="" />
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
    <div class="sm:w-52 sm:h-52 h-36 w-36 sm:mr-14 inline-flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-500 flex-shrink-0">
        <img src={Blog3} className="inset-0 object-cover w-full h-full transition duration-300 transform rounded-md cursor-pointer hover:rotate-45" alt="" />
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-700 text-xl title-font font-medium mb-2">Fresh and Playful Poppy Wedding Bouquets</h2>
        <p class="leading-relaxed text-gray-500 text-sm">Bright and colorful, this poppy infused bouquet exudes enchantment. Coupled with mini daisies, known as bellium, poppies create an elevated wildflower arrangement.

</p>
        <a class="mt-3 text-indigo-500 inline-flex items-center">Read More
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

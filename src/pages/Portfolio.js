import React from "react";
import styled from "styled-components";
import portPicture from "../images/Featured-Image-Blog.jpg";
import port1 from "../images/port1.jpg";
import port2 from "../images/port2.jpg";
import port3 from "../images/port7.jpg";
import port4 from "../images/port4.jpg";
import port5 from "../images/port5.jpg";
import port6 from "../images/port6.jpg";

const PortSection = styled.section`
  /* height: 100vh;
    max-height: 1100px; */
  position: relative;
  overflow: hidden;
`;
const PortWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Head = styled.h1`
  font-family: 'Lora', serif;
`

const Portfolio = () => {
  return (
    <div className="bg-gray-100"> 
      {/* <section className="mb-4 text-gray-600 ">
        <div className="container flex flex-col items-center px-5 pt-20 mx-auto md:flex-row">
          <div className="flex flex-col items-center order-last pt-3 text-center lg:mb-16 lg:pt-20 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="pt-6 mb-2 text-xl font-semibold text-indigo-300 md:mt-16 lg:mb-10 lg:text-5xl title-font md:text-2xl">
              Here are some of our past work.
            </h1>
            <p className="mb-8 text-sm leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
          </div>
          <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={portPicture}
            />
          </div>
        </div>
      </section> */}

      <PortSection>
        <PortWrapper>
          <img
            className="object-cover w-full rounded-lg shadow-2xl lg:w-10/12 lg:h-screen lg:pt-14"
            src={portPicture}
          />
        </PortWrapper>
      </PortSection>

      <section class="text-gray-600 body-font">
        <div class="container px-11 py-8 mx-auto md:px-2 lg:px-16">
          {/* <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div> */}
          <div className="flex flex-wrap -m-4 text-center">
            <div className="w-full p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 bg-indigo-200 border-2 border-gray-200 rounded-lg bg-opacity-60 hover:bg-gray-50">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
                <h2 className="text-3xl font-medium text-gray-900 title-font">
                  2.7K
                </h2>
                <p className="leading-relaxed">Downloads</p>
              </div>
            </div>
            <div className="w-full p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 bg-gray-200 border-2 border-gray-200 rounded-lg hover:bg-indigo-50">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 className="text-3xl font-medium text-gray-900 title-font">
                  1.3K
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>
            </div>
            <div className="w-full p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 bg-indigo-200 border-2 border-gray-200 rounded-lg bg-opacity-60 hover:bg-gray-50">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                </svg>
                <h2 className="text-3xl font-medium text-gray-900 title-font">
                  74
                </h2>
                <p className="leading-relaxed">Files</p>
              </div>
            </div>
            <div className="w-full p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 bg-gray-200 border-2 border-gray-200 rounded-lg hover:bg-indigo-50">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h2 className="text-3xl font-medium text-gray-900 title-font">
                  46
                </h2>
                <p className="leading-relaxed">Places</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container flex flex-wrap px-5 py-8 mx-auto lg:py-8">
        <div class="text-center mb-10 container mx-auto">
      <Head className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">Raw Denim Heirloom Man Braid</Head>
      <p className="mx-auto text-base leading-relaxed xl:w-2/4 lg:w-3/4 text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
      <div className="flex justify-center mt-6">
        <div className="inline-flex w-16 h-1 bg-indigo-500 rounded-full"></div>
      </div>
    </div>
          <div className="flex flex-wrap -m-1 overflow-y-hidden md:-m-2">
            <div className="flex flex-wrap md:w-1/2">
              <div className="p-1.5 lg:w-1/2 md:p-2">
                <div className="relative flex">
                  <img
                    alt="gallery"
                    className="absolute inset-0 block object-cover object-center w-full h-full rounded-lg"
                    src={port1}
                  />
                  <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 rounded-lg opacity-0 hover:opacity-100">
                    <h2 className="mb-1 text-sm font-medium tracking-widest text-indigo-500 title-font">
                      THE SUBTITLE
                    </h2>
                    <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                      Alper Kamu
                    </h1>
                    <p className="leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-1.5 lg:w-1/2 md:p-2">
                <div className="relative flex">
                  <img
                    alt="gallery"
                    className="absolute inset-0 block object-cover object-center w-full h-full rounded-lg"
                    src={port5}
                  />
                  <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 rounded-lg opacity-0 hover:opacity-100">
                    <h2 className="mb-1 text-sm font-medium tracking-widest text-indigo-500 title-font">
                      THE SUBTITLE
                    </h2>
                    <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                      Alper Kamu
                    </h1>
                    <p className="leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-1.5 lg:w-full md:p-2">
                <div className="relative flex">
                  <img
                    alt="gallery"
                    className="absolute inset-0 block object-cover object-center w-full h-full rounded-lg"
                    src={port3}
                  />
                  <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 rounded-lg opacity-0 hover:opacity-100">
                    <h2 className="mb-1 text-sm font-medium tracking-widest text-indigo-500 title-font">
                      THE SUBTITLE
                    </h2>
                    <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                      Alper Kamu
                    </h1>
                    <p className="leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap md:w-1/2">
              <div className="p-1.5 lg:w-full md:p-2">
                <div className="relative flex">
                  <img
                    alt="gallery"
                    className="absolute inset-0 block object-cover object-center w-full h-full rounded-lg"
                    src={port4}
                  />
                  <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 rounded-lg opacity-0 hover:opacity-100">
                    <h2 className="mb-1 text-sm font-medium tracking-widest text-indigo-500 title-font">
                      THE SUBTITLE
                    </h2>
                    <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                      Alper Kamu
                    </h1>
                    <p className="leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-1.5 lg:w-1/2 md:p-2">
                <div className="relative flex">
                  <img
                    alt="gallery"
                    className="absolute inset-0 block object-cover object-center w-full h-full rounded-lg"
                    src={port2}
                  />
                  <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 rounded-lg opacity-0 hover:opacity-100">
                    <h2 className="mb-1 text-sm font-medium tracking-widest text-indigo-500 title-font">
                      THE SUBTITLE
                    </h2>
                    <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                      Alper Kamu
                    </h1>
                    <p className="leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-1.5 lg:w-1/2 md:p-2">
                <div className="relative flex">
                  <img
                    alt="gallery"
                    className="absolute inset-0 block object-cover object-center w-full h-full rounded-lg"
                    src={port6}
                  />
                  <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 rounded-lg opacity-0 hover:opacity-100">
                    <h2 className="mb-1 text-sm font-medium tracking-widest text-indigo-500 title-font">
                      THE SUBTITLE
                    </h2>
                    <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                      Alper Kamu
                    </h1>
                    <p className="leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

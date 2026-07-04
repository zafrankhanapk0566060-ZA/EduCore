import React from 'react'
import HERO from '../../assets/HeroSectionImage.png'
import Pricing from '../Pricing/Pricing'
import logo1 from '../../assets/logo (1).png'
import logo2 from '../../assets/logo (2).png'
import logo3 from '../../assets/logo (3).png'
import logo4 from '../../assets/logo (4).png'
import logo5 from '../../assets/logo (5).png'
import logo6 from '../../assets/logo (6).png'
import logo7 from '../../assets/logo (7).png'
import section from '../../assets/section.png'
import cardone from '../../assets/cardimage.png'
import cardone2 from '../../assets/cardimage2.png'
import cardone3 from '../../assets/cardimage3.png'
import designcard from '../../assets/carddesignimage.png'
import FAQ from '../FAQ/FAQ'
import Offer from '../Offer/Offer'
import OfferContent from '../Offer/OfferContent'
import Footer from '../Footer/Footer'




const Hero = () => {
  return (
    <div className="">
      <section className='lg:h-[75vh] h-auto flex flex-col lg:flex-row justify-between  bg-[#0f6ae9]'>
        <div className="px-5 md:px-10 w-full mt-4 lg:w-1/2">
          <div className="flex items-center gap-1"><h1 className='text-white font-bold text-2xl'>EduCore</h1> <span className='text-[12px] font-bold bg-white text-[#0056D2] px-1.5 mt-2 rounded-[2px]'>PLUS</span></div>

          <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            Learn without limits. <br />
            <span className="text-white">Crack any exam.</span>
          </h1><p className="text-base md:text-lg lg:text-base flex flex-wrap text-white  leading-relaxed">
            Find the best Notes, PDFs, MCQs, and Test Preparation Material for PAF, Army, ISSB, FPSC, NTS, MDCAT, and more. Join 100,000+ successful candidates.
            Find the best Notes, PDFs, MCQs, and Test Preparation Material for PAF, Army, ISSB, FPSC, NTS, more.
          </p>
          <div className="mt-3 text-base text-gray-200 mb-8">
            <p> MDCAT, and more. Join 100,000+ successful candidates.</p>
          </div>

          <div className=" flex flex-col sm:flex-row items-center gap-5"><button className='bg-white text-gray-500 px-12 rounded-sm  py-3 text-[15px] font-medium shadow-gray-100 shadow-sm'>Get 40% off</button><span className='text-white font-semibold'>off $20/month after 7-days free trail</span></div>

          <div className=" py-5 text-white"><p>offer end july 2026, see our <a href="#" className='text-white'>Offer terms</a></p></div>

        </div>

        <div className="h-full w-full lg:w-1/2 flex items-center justify-center">
          <img className='w-full max-w-md lg:max-w-xl' src={HERO} alt="" />
        </div>

      </section>

      <section className=''>
        <div className="pl-10 pt-5  font-semibold text-2xl"><h1>Learn from 150+ universities and companies</h1></div>
        <div className="pl-10 pt-20 gap-5 md:gap-8 flex flex-row justify-center lg:justify-start flex-wrap">
          <div className="flex flex-row items-center justify-center gap-2"><img src={logo1} className='h-12 w-16 ' /></div>

          <div className="flex flex-row items-center justify-center gap-2"><img src={logo2} className='h-12 w-16 ' /></div>


          <div className="flex flex-row items-center justify-center gap-2"><img src={logo3} className='h-12 w-16 ' /></div>

          <div className="flex flex-row items-center justify-center gap-2"><img src={logo4} className='h-12 w-16 ' /></div>


          <div className="flex flex-row items-center justify-center gap-2"><img src={logo5} className='h-12 w-16 ' /></div>


          <div className="flex flex-row items-center justify-center gap-2"><img src={logo6} className='h-12 w-16 ' /></div>


          <div className="flex flex-row items-center justify-center gap-2"><img src={logo7} className='h-12 w-16' /></div>
        </div>
      </section>

      <section className="bg-sky-50  mt-20 pb-10">
        <div className="pl-7 pt-6 text-xl font-semibold">Invest in your career</div>


        <div className="pl-10 pt-8 gap-10 flex flex-row flex-wrap">
          <div className="">
            <div className=" flex flex-col gap-1">
              <div className="">🎯</div>
              <h1 className='font-semibold'>Explore new skills</h1>
              <p className='text-gray-700'>Access 10,000 courses in AI, busniss, tecnology, and more.</p>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col gap-1">
              <div className="">🏛️</div>
              <h1 className='font-semibold'>Earn valuable credentials</h1>
              <div className="mr-0 p-0 gap-0 flex flex-col">
                <p className='text-gray-700'>Access 10,000 courses in AI, busniss, tecnology, more. <br /> Opportunity come courses in AI, busniss, tecnology, and more<br />const. </p>
              </div>
            </div>
          </div>


          <div className="">
            <div className="flex flex-col gap-1">
              <div className="">⚙️</div>
              <h1 className='font-semibold'>Learn from the best</h1>
              <div className="">
                <p className='text-gray-700'>Access 10,000 courses in AI, busniss, tecnology, more. <br /> Access 10,000 courses.</p>              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="flex flex-col-reverse  lg:flex-row pt-10 items-center justify-between flex-wrap px-30 ">
        <div className="flex flex-col gap-12 ">
          <h1 className='font-semibold text-3xl '>Join 90% of Learnes who achieved a <br /> positive career outcome, like new job <br /> Opportunity, increase knowledge, and <br /> improve performance to work.</h1>
          <button className='text-blue-500 w-35 h-12 border-[1px] font-semibold border-blue-700 px-4 rounded py-2 hover:text-blue-600 hover:border-blue-800 cursor-pointer'>Get 40% off</button>
        </div>

        <div className="">
          <img src={section} className='h-100 w-130 sm:h-50%' alt="" />
        </div>

      </section>

      {/* section 3 */}
      <section className='h-auto min-h-[90vh] flex items-center justify-center w-full  bg-white'>
        <div className=" bg-gray-100  rounded rounded-xl p-10 sm:p-5 flex flex-row flex-wrap items-start justify-center gap-2 md:gap-3 lg:gap-5">


          <div className="w-[280px] flex flex-col items-start h-[280px] justify-center gap-4">
            <h1 className='font-bold text-base md:text-lg xl:text-2xl'>Career skill that work</h1>
            <button className='py-2 px-4 w-1/2 rounded border text-blue-500 border-blue-500'>Get 40% off</button>
          </div>


          {/* card 1 */}
          <div className="flex flex-col">

            <div className="w-[96%] bg-white rounded-[10px] border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg p-2 duration-300 cursor-pointer">

              <img
                src={cardone}
                alt="Course"
                className="w-full h-40 object-cover rounded-[10px]"
              />

              <div className="p-4">

                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <div className="w-6 h-6 border rounded flex items-center justify-center text-[10px] font-semibold">
                    SU
                  </div>

                  <span>Stanford University</span>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mt-3">
                  AI in Healthcare
                </h2>

                <p className="text-gray-500 mt-4 text-sm">
                  Beginner Specialization
                </p>

              </div>


            </div>

            <button className="mt-3 ml-2 w-fit px-5 py-2 border border-blue-600 text-blue-600 rounded-lg">
              Show 8 more
            </button>

          </div>

          {/* card 2 */}
          <div className="">

            <div className="w-[280px] bg-white rounded-[10px] border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg p-2 duration-300 cursor-pointer">

              <img
                src={cardone2}
                alt="Course"
                className="w-full h-40 object-cover rounded-[10px]"
              />

              <div className="p-4">

                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <div className="w-6 h-6 border rounded flex items-center justify-center text-[10px] font-semibold">
                    SU
                  </div>

                  <span>Stanford University</span>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mt-3">
                  Python For Everydays
                </h2>

                <p className="text-gray-500 mt-4 text-sm">
                  Beginner Specialization
                </p>

              </div>
            </div>


          </div>

          {/* card 3 */}
          <div className="">

            <div className="w-[280px] bg-white rounded-[10px] border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg p-2 duration-300 cursor-pointer">

              <img
                src={cardone3}
                alt="Course"
                className="w-full h-40 object-cover rounded-[10px]"
              />

              <div className="p-4">

                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <div className="w-6 h-6 border rounded flex items-center justify-center text-[10px] font-semibold">
                    SU
                  </div>

                  <span>Stanford University</span>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mt-3">
                  Prompt Engineering
                </h2>

                <p className="text-gray-500 mt-4 text-sm">
                  Beginner Specialization
                </p>

              </div>
            </div>


          </div>


        </div>

      </section>

      {/* section 4 */}

      <section className='min-h-[90vh]  bg-white'>

        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className='text-3xl font-semibold'>Search 10,000+ learning programs</h1>

          <div className="w-full max-w-6xl relative">
            <input
              type="text"
              placeholder='e.g Machine learning'
              className='w-full h-14 border border-gray-300 rounded-xl pl-12 pr-4 focus:outline-none foucus:-ring-2 focus:ring-blue-600'
            />
          </div>


          <div className="flex flex-row flex-wrap gap-5 text-gray-700">
            <button className="px-4 py-2 cursor-pointer rounded-md bg-gray-100 hover:bg-gray-200 text-sm transition">Poplur</button>
            <button className='px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm transition cursor-pointer'>Business</button>
            <button className='px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm transition cursor-pointer'>Computer Science</button>
            <button className='px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm transition cursor-pointer'>Data Science</button>
            <button className='px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm transition cursor-pointer'>Health</button>
            <button className='px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm transition cursor-pointer'>Information Technology</button>
            <button className='px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm transition cursor-pointer'>Art and Humanities</button>
          </div>

        </div>

        <div className="ml-10 text-4xl font-bold mt-20 mb-7"><h1>What subscibers are Achieving through learning</h1></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">

          <div className="rounded-lg border border-gray-300 bg-white p-5">
            <div className="flex items-center gap-3">
              <img src={designcard}
                className='w-12 h-12 rounded-full object-cover'
                alt="" />
              <h3 className='font-semibold'>Abigil p.</h3>
            </div>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium tempore voluptate maiores facilis eaque. Odio non quis sapiente dolores voluptatum iure laudantium veritatis, dolor earum quos placeat, neque blanditiis esse?</p>
          </div>



          <div className="border border-gray-300 rounded-lg bg-white p-5">
            <div className="flex items-center gap-3">
              <img
                src={designcard}
                alt=""
                className='w-12 h-12 rounded-full object-cover'
              />
              <h3 className='font-semibold'>Abigil E.</h3>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nihil natus. Sit impedit inventore unde dolor fuga suscipit odit sunt, culpa nihil rem temporibus a mollitia, excepturi optio animi nisi?</p>

          </div>


          <div className="rounded-lg border border-gray-300 bg-white p-5">
            <div className="flex items-center gap-3">
              <img src={designcard}
                className='w-12 h-12 rounded-full object-cover'
                alt="" />
              <h3 className='font-semibold'>Abigil D.</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, corrupti dicta. Reiciendis omnis aliquam aliquid, rerum laudantium ipsum impedit dolorem praesentium a, neque eos! Iusto recusandae distinctio facere perspiciatis ad.</p>
          </div>


        </div>

      </section>

      {/* section 5 */}
      <Pricing />

      {/* section 5 */}
      <FAQ />

      {/* section 6 */}
      <section className="bg-[#0642ce] min-h-screen">
        <Offer />
        <OfferContent />
      </section>


      {/* section 7 */}
      <section>
        <Footer />
      </section>

    </div >
  )
}

export default Hero


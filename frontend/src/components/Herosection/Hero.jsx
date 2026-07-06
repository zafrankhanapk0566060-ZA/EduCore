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
import designcard from '../../assets/carddesignimage.png'
import FAQ from '../FAQ/FAQ'
import Offer from '../Offer/Offer'
import OfferContent from '../Offer/OfferContent'
import Footer from '../Footer/Footer'
import FeaturedCourses from '../FeaturedCourses/FeaturedCourses'




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

      <section className='bg-white py-14'>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className='text-3xl font-bold text-gray-900 mb-10'>Learn from 150+ Universities and companies</h2>

          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-x-12 gap-y-10">
            <div className="w-32 flex justify-center">
              <img src={logo1}
                className='max-h-16 object-contain'
                alt="" />
            </div>

            <div className="w-32 flex justify-center">
              <img src={logo2}
                className='max-h-16 object-contain'
                alt="" />
            </div>


            <div className="w-32 flex justify-center">
              <img src={logo3}
                className='max-h-16 object-contain'
                alt="" />
            </div>



            <div className="w-32 flex justify-center">
              <img src={logo4}
                className='max-h-16 object-contain'
                alt="" />
            </div>


            <div className="w-32 flex justify-center">
              <img src={logo5}
                className='max-h-16 object-contain'
                alt="" />
            </div>


            <div className="w-32 flex justify-center">
              <img src={logo6}
                className='max-h-16 object-contain'
                alt="" />
            </div>

            <div className="w-32 flex justify-center">
              <img src={logo7}
                className='max-h-16 object-contain'
                alt="" />
            </div>
          </div>
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

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

          {/* Left */}
          <div className="w-full lg:w-1/2 space-y-8">

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Join 90% of learners who achieved a positive career outcome,
              like new job opportunities, increased knowledge,
              and improved workplace performance.
            </h1>

            <button className="w-fit px-8 py-3 border border-blue-700 text-blue-700 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition">
              Get 40% Off
            </button>

          </div>

          {/* Right */}
          <div className="w-full lg:w-1/2 flex justify-center">

            <img
              src={section}
              className="w-full max-w-xl h-auto"
              alt=""
            />

          </div>

        </div>

      </section>

      {/* section 3 */}
      <FeaturedCourses />

      {/* section 4 */}
      <section className='min-h-[90vh]  bg-white'>

        <div className="flex flex-col md:px-5 sm:px-5 px-5 items-center justify-center gap-5">
          <h1 className='text-3xl font-semibold'>Search 10,000+ learning programs</h1>

          <div className="w-full max-w-6xl relative">
            <input
              type="text"
              placeholder='e.g Machine learning'
              className='w-full md:h-12 h-10 lg:h-14 border border-gray-300 rounded-xl pl-12 pr-4 focus:outline-none foucus:-ring-2 focus:ring-blue-600'
            />
          </div>


          <div className="flex flex-row px-2 md:px-2 flex-wrap gap-5 text-gray-700">
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
      <section className='bg-slate-50 py-20'>
        <Footer />
      </section>

    </div >
  )
}

export default Hero


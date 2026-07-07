import React from 'react'

const Category = () => {
  return (
 <section class="bg-gray-100 py-16">
  <div class="max-w-7xl mx-auto px-6">

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">

     
      <div class="bg-black text-white rounded-3xl p-8 row-span-2 flex flex-col justify-between shadow-xl">

        <div>
          <div class="flex items-center gap-3 mb-8">
            <img
              src="https://i.pravatar.cc/100?img=5"
              class="w-12 h-12 rounded-full"
            />

            <div class="text-sm">
              <span class="font-semibold">4.9 ⭐ Rating</span>
            </div>
          </div>

          <h3 class="text-3xl font-semibold leading-relaxed">
            "It's not just about followers—it's about building a real community that supports each other."
          </h3>
        </div>

        <div>
          <h4 class="font-semibold text-lg">Emma Rodriguez</h4>
          <p class="text-gray-400">
            Digital Marketer at SocialLift
          </p>
        </div>

      </div>

    
      <div class="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl duration-300">

        <div class="flex items-center gap-3 mb-6">

          <img
            src="https://i.pravatar.cc/100?img=12"
            class="w-11 h-11 rounded-full"
          />

          <span class="text-sm font-semibold">
            4.9 ⭐ Rating
          </span>

        </div>

        <p class="text-lg leading-8 mb-8">
          "I've grown my audience faster here than on any other social platform I've tried."
        </p>

        <div>
          <h3 class="font-semibold">
            Michael Grant
          </h3>

          <p class="text-gray-500">
            Content Creator
          </p>
        </div>

      </div>

     
      <div class="bg-white rounded-3xl p-6 shadow-md col-span-1 lg:col-span-2 hover:shadow-xl duration-300">

        <div class="flex items-center gap-3 mb-6">

          <img
            src="https://i.pravatar.cc/100?img=15"
            class="w-11 h-11 rounded-full"
          />

          <span class="text-sm font-semibold">
            4.9 ⭐ Rating
          </span>

        </div>

        <p class="text-xl leading-9 mb-10">
          "User-friendly, engaging, and built for growth. Every connection I make here is meaningful."
        </p>

        <div>
          <h3 class="font-semibold">
            David Kim
          </h3>

          <p class="text-gray-500">
            Social Media Strategist
          </p>
        </div>

      </div>

      
      <div class="bg-white rounded-3xl p-6 shadow-md col-span-1 lg:col-span-2 hover:shadow-xl duration-300">

        <div class="flex items-center gap-3 mb-6">

          <img
            src="https://i.pravatar.cc/100?img=5"
            class="w-11 h-11 rounded-full"
          />

          <span class="text-sm font-semibold">
            4.9 ⭐ Rating
          </span>

        </div>

        <p class="text-xl leading-9 mb-10">
          "It's not just about followers—it's about building a real community that supports each other."
        </p>

        <div>
          <h3 class="font-semibold">
            Emma Rodriguez
          </h3>

          <p class="text-gray-500">
            Digital Marketer at SocialLift
          </p>
        </div>

      </div>

      
      <div class="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl duration-300">

        <div class="flex items-center gap-3 mb-6">

          <img
            src="https://i.pravatar.cc/100?img=20"
            class="w-11 h-11 rounded-full"
          />

          <span class="text-sm font-semibold">
            4.9 ⭐ Rating
          </span>

        </div>

        <p class="text-lg leading-8 mb-8">
          "It's not just about followers—it's about building a real community."
        </p>

        <div>
          <h3 class="font-semibold">
            Emma Rodriguez
          </h3>

          <p class="text-gray-500">
            Digital Marketer at SocialLift
          </p>
        </div>

      </div>

    </div>

  </div>
</section>
  )
}

export default Category

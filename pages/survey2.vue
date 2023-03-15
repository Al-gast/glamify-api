<template>
  <div class="flex flex-col justify-center items-center md:mt-[25px]">
    <form>
      <div class="px-1 md:px-0 py-3 md:py-0">
        <p
          class="font-poppins md:text-[36px] text-2xl text-[#FBF5E3] mt-5 md:mt-0 mb-[25px] text-center"
        >
          Share some facts to provide<br class="hidden md:block" />
          the best recommendations
        </p>
      </div>
      <div class="flex justify-center items-center">
        <input
          id="birthday"
          datepicker
          datepicker-autohide
          datepicker-format="dd-mm-yyyy"
          type="text"
          class="md:w-[450px] w-[350px] h-[58px] mb-[25px] rounded-[20px] bg-[##F9F9F9] border border-[#E6E6E6] focus:outline-none ring-inset focus:border-[#207a7a] focus:ring focus:ring-[#207a7a] text-center text-[#737373] placeholder:font-inter placeholder:text-center placeholder:text-[#737373]"
          placeholder="Birthdate (dd-mm-yyyy)"
        />
      </div>

      <div class="flex justify-center items-center">
        <select
          id="Gender"
          class="md:w-[450px] w-[350px] h-[58px] mb-[25px] rounded-[20px] bg-[##F9F9F9] border px-[10px] border-[#E6E6E6] focus:outline-none ring-inset focus:border-[#207a7a] focus:ring focus:ring-[#207a7a] text-center text-[#737373] placeholder:font-inter placeholder:text-center placeholder:text-[#737373]"
        >
          <option selected disabled hidden>
            How do you identify (gender)?
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div class="flex justify-center items-center">
        <select
          id="Etnic"
          class="md:w-[450px] w-[350px] h-[58px] mb-[25px] rounded-[20px] bg-[##F9F9F9] border border-[#E6E6E6] focus:outline-none ring-inset focus:border-[#207a7a] focus:ring focus:ring-[#207a7a] text-center text-[#737373] placeholder:font-inter placeholder:text-center placeholder:text-[#737373]"
        >
          <option selected disabled hidden>What's your etnicity?</option>
          <option value="AmericanIndian">American Indian</option>
          <option value="Asian">Asian</option>
          <option value="Black">Black</option>
          <option value="Latino">Latino</option>
          <option value="NativeHawaiian">Native Hawaiian</option>
          <option value="White">White</option>
        </select>
      </div>

      <div class="flex justify-center items-center">
        <select
          id="Skin"
          class="md:w-[450px] w-[350px] h-[58px] mb-[25px] rounded-[20px] bg-[##F9F9F9] border border-[#E6E6E6] focus:outline-none ring-inset focus:border-[#207a7a] focus:ring focus:ring-[#207a7a] text-center text-[#737373] placeholder:font-inter placeholder:text-center placeholder:text-[#737373]"
        >
          <option selected disabled hidden>
            How does your skin glow at the light of the day?
          </option>
          <option value="AmericanIndian">Dry</option>
          <option value="Oily">Oily</option>
          <option value="Normal">Normal</option>
          <option value="Sensitive">Sensitive</option>
        </select>
      </div>

      <div class="flex justify-center items-center">
        <select
          id="Hair"
          class="md:w-[450px] w-[350px] h-[58px] mb-[25px] rounded-[20px] bg-[##F9F9F9] border border-[#E6E6E6] focus:outline-none ring-inset focus:border-[#207a7a] focus:ring focus:ring-[#207a7a] text-center text-[#737373] placeholder:font-inter placeholder:text-center placeholder:text-[#737373]"
        >
          <option selected disabled hidden>Natural Hair Colour?</option>
          <option value="Black">Black</option>
          <option value="Brown">Brown</option>
          <option value="Red">Red</option>
          <option value="Blonde">Blonde</option>
          <option value="White">White</option>
        </select>
      </div>

      <div class="flex justify-center items-center">
        <select
          id="Hair"
          class="md:w-[450px] w-[350px] h-[58px] mb-[25px] rounded-[20px] bg-[##F9F9F9] border border-[#E6E6E6] focus:outline-none ring-inset focus:border-[#207a7a] focus:ring focus:ring-[#207a7a] text-center text-[#737373] placeholder:font-inter placeholder:text-center placeholder:text-[#737373]"
        >
          <option selected disabled hidden>Eye Colour?</option>
          <option value="Black">Black</option>
          <option value="Brown">Brown</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
        </select>
      </div>

      <div class="flex justify-center items-center">
        <input
          class="md:w-[450px] w-[350px] h-[58px] mb-[32px] rounded-[20px] bg-[##F9F9F9] border border-[#E6E6E6] focus:outline-none ring-inset focus:ring focus:ring-[#207a7a] text-center text-[#737373] placeholder:font-inter placeholder:text-center placeholder:text-[#737373]"
          placeholder="Any skin issues?"
          required
        />
      </div>

      <div class="mb-[47px] flex justify-center">
        <div
          class="w-[10px] h-[10px] border-solid border-2 border-[#FBF5E3] rounded-full ml-[23px] mr-[27px]"
        ></div>
        <div
          class="w-[10px] h-[10px] bg-[#FBF5E3] rounded-full mr-[27px]"
        ></div>
        <div
          class="w-[10px] h-[10px] border-solid border-2 border-[#FBF5E3] rounded-full mr-[27px]"
        ></div>
      </div>

      <div class="text-center mb-[50px]">
        <!-- <button type="submit" class="bg-[#FBF5E3] rounded-[10px] w-[119px] h-[40px]"><p class="text-[#164D4D] font-inter font-bold">CHECK EMAIL</p></button> -->
        <a
          href="/survey1"
          class="bg-[#618686] px-[45px] py-[12px] rounded-[10px] w-[119px] h-[40px] text-[#FBF5E3] font-inter font-bold mr-[18px]"
          >BACK</a
        >
        <a
          href="/survey3"
          class="bg-[#FBF5E3] px-[45px] py-[12px] rounded-[10px] w-[119px] h-[40px] text-[#164D4D] font-inter font-bold ml-[18px]"
          >NEXT</a
        >
      </div>
    </form>
  </div>
</template>
<script setup></script>

<style scoped></style>

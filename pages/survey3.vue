<template>
  <div class="flex flex-col justify-center items-center h-screen mt-[25px]">
    <form>
      <div class="px-2 md:px-0">
        <p
          class="font-poppins md:text-[36px] text-2xl text-[#FBF5E3] mb-[25px] text-center"
        >
          Personalize your experience,<br class="hidden md:block" />
          tell us about your skin
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
          class="md:w-[450px] w-[350px] h-[58px] mb-[25px] rounded-[20px] bg-[##F9F9F9] border border-[#E6E6E6] focus:outline-none ring-inset focus:border-[#207a7a] focus:ring focus:ring-[#207a7a] text-center text-[#737373] placeholder:font-inter placeholder:text-center placeholder:text-[#737373]"
        >
          <option selected disabled hidden>
            How do you identify (gender)?
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div class="mb-[24px] flex justify-center items-center">
        <div>
          <p
            class="text-[#FFFFFF] text-[16px] text-center font-montserrat mb-[18px] font-normal"
          >
            What’s your type of skin?
          </p>
          <div class="flex items-center text-center">
            <input
              id="dry"
              type="checkbox"
              name="typeSkin"
              value="dry"
              onclick="checkSkin(this);"
              class="radioCheckSkin w-[25px] h-[25px] border border-[#618686] bg-gray-50 focus:ring-3 focus:ring-blue-300 rounded"
            />
            <label
              for="dry"
              class="ml-[13px] text-sm font-normal text-[#FBF5E3] text-[15px] font-montserrat mr-[25px]"
              >Dry</label
            >
            <input
              id="mix"
              type="checkbox"
              name="typeSkin"
              value="mix"
              onclick="checkSkin(this);"
              class="radioCheckSkin w-[25px] h-[25px] border border-[#618686] rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
            />
            <label
              for="mix"
              class="ml-[13px] text-sm font-normal text-[#FBF5E3] text-[15px] font-montserrat mr-[25px]"
              >Mix</label
            >
            <input
              id="oily"
              type="checkbox"
              name="typeSkin"
              value="oily"
              onclick="checkSkin(this);"
              class="radioCheckSkin w-[25px] h-[25px] border border-[#618686] rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
            />
            <label
              for="oily"
              class="ml-[13px] text-sm font-normal text-[#FBF5E3] text-[15px] font-montserrat"
              >Oily</label
            >
          </div>
          <div class="flex items-center"></div>
        </div>
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
        <input
          class="md:w-[450px] w-[350px] h-[58px] mb-[32px] rounded-[20px] bg-[##F9F9F9] border border-[#E6E6E6] focus:outline-none ring-inset focus:ring focus:ring-[#207a7a] text-center text-[#737373] placeholder:font-inter placeholder:text-center placeholder:text-[#737373]"
          placeholder="Any skin issues?"
          required
        />
      </div>

      <div class="mb-[47px] flex justify-center">
        <div
          class="w-[10px] h-[10px] border-solid border-2 border-[#FBF5E3] rounded-full ml-[10px] mr-[27px]"
        ></div>
        <div
          class="w-[10px] h-[10px] border-solid border-2 border-[#FBF5E3] rounded-full mr-[27px]"
        ></div>
        <div
          class="w-[10px] h-[10px] bg-[#FBF5E3] rounded-full mr-[27px]"
        ></div>
      </div>

      <div class="text-center mb-[50px]">
        <!-- <button type="submit" class="bg-[#FBF5E3] rounded-[10px] w-[119px] h-[40px]"><p class="text-[#164D4D] font-inter font-bold">CHECK EMAIL</p></button> -->
        <a
          href="/survey2"
          class="bg-[#618686] px-[45px] py-[12px] rounded-[10px] w-[119px] h-[40px] text-[#FBF5E3] font-inter font-bold mr-[18px]"
          >BACK</a
        >
        <a
          href="#"
          class="bg-[#FBF5E3] px-[45px] py-[12px] rounded-[10px] w-[119px] h-[40px] text-[#164D4D] font-inter font-bold ml-[18px]"
          >SUBMIT</a
        >
      </div>
    </form>
  </div>
</template>
<script setup></script>

<style scoped></style>

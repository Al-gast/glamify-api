<template>
  <div class="flex flex-col justify-center items-center h-screen mt-[25px]">
    <form>
      <div>
        <p
          class="font-poppins md:text-[36px] text-2xl text-[#FBF5E3] mb-[18px] text-center"
        >
          External factors<br class="hidden md:block" />
          affecting<br class="md:hidden" />
          your skin
        </p>
      </div>
      <div class="flex justify-center items-center">
        <input
          class="md:w-[450px] w-[350px] h-[58px] mb-[24px] rounded-[20px] bg-[##F9F9F9] border border-[#E6E6E6] focus:outline-none ring-inset focus:ring focus:ring-[#207a7a] text-center text-[#737373] placeholder:font-inter placeholder:text-center placeholder:text-[#737373]"
          placeholder="City (sun exposure, pollution)"
          required
        />
      </div>
      <div class="flex justify-center items-center">
        <input
          class="md:w-[450px] w-[350px] h-[58px] mb-[24px] rounded-[20px] bg-[##F9F9F9] border border-[#E6E6E6] focus:outline-none ring-inset focus:ring focus:ring-[#207a7a] text-center text-[#737373] placeholder:font-inter placeholder:text-center placeholder:text-[#737373]"
          placeholder="What type of activity do you develop?"
          required
        />
      </div>
      <div class="flex justify-center items-center">
        <input
          class="md:w-[450px] w-[350px] h-[58px] mb-[31px] rounded-[20px] bg-[##F9F9F9] border border-[#E6E6E6] focus:outline-none ring-inset focus:ring focus:ring-[#207a7a] text-center text-[#737373] placeholder:font-inter placeholder:text-center placeholder:text-[#737373]"
          placeholder="Do you hydrate frequently?"
          required
        />
      </div>

      <div
        class="mb-[59px] grid grid-cols-2 md:gap-y-[24px] md:gap-x-[76px] gap-8 px-6"
      >
        <div>
          <p
            class="text-[#FFFFFF] text-[16px] font-montserrat mb-[18px] font-normal"
          >
            Smoke?
          </p>
          <div class="flex items-center">
            <input
              id="yesSmoke"
              type="checkbox"
              name="smoke"
              value="yes"
              onclick="checkSmoke(this);"
              class="radioCheckSmoke w-[25px] h-[25px] border border-[#618686] bg-gray-50 focus:ring-3 focus:ring-blue-300 rounded"
            />
            <label
              for="yesSmoke"
              class="ml-[13px] text-sm font-normal text-[#FBF5E3] text-[15px] font-montserrat mr-[25px]"
              >Yes</label
            >
            <input
              id="noSmoke"
              type="checkbox"
              name="smoke"
              value="no"
              onclick="checkSmoke(this);"
              class="radioCheckSmoke w-[25px] h-[25px] border border-[#618686] rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
            />
            <label
              for="noSmoke"
              class="ml-[13px] text-sm font-normal text-[#FBF5E3] text-[15px] font-montserrat"
              >No</label
            >
          </div>
          <div class="flex items-center"></div>
        </div>
        <div>
          <p class="text-[#FFFFFF] text-[16px] font-montserrat mb-[18px]">
            Drink alcohol?
          </p>
          <div class="flex items-center">
            <input
              id="yesDrink"
              type="checkbox"
              name="drink"
              value="yes"
              onclick="checkDrink(this);"
              class="radioCheckDrink w-[25px] h-[25px] border border-[#618686] rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
            />
            <label
              for="yesDrink"
              class="ml-[13px] text-sm font-normal text-[#FBF5E3] text-[15px] font-montserrat mr-[25px]"
              >Yes</label
            >
            <input
              id="noDrink"
              type="checkbox"
              name="drink"
              value="no"
              onclick="checkDrink(this);"
              class="radioCheckDrink w-[25px] h-[25px] border border-[#618686] rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
            />
            <label
              for="noDrink"
              class="ml-[13px] text-sm font-normal text-[#FBF5E3] text-[15px] font-montserrat"
              >No</label
            >
          </div>
        </div>
        <div>
          <p class="text-[#FFFFFF] text-[16px] font-montserrat mb-[18px]">
            Exercise often?
          </p>
          <div class="flex items-center">
            <input
              id="yesExercise"
              type="checkbox"
              name="exercise"
              value="yes"
              onclick="checkExercise(this);"
              class="radioCheckExercise w-[25px] h-[25px] border border-[#618686] rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
            />
            <label
              for="yesExercise"
              class="ml-[13px] text-sm font-normal text-[#FBF5E3] text-[15px] font-montserrat mr-[25px]"
              >Yes</label
            >
            <input
              id="noExercise"
              type="checkbox"
              name="exercise"
              value="no"
              onclick="checkExercise(this);"
              class="radioCheckExercise w-[25px] h-[25px] border border-[#618686] rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
            />
            <label
              for="noExercise"
              class="ml-[13px] text-sm font-normal text-[#FBF5E3] text-[15px] font-montserrat"
              >No</label
            >
          </div>
        </div>
        <div>
          <p class="text-[#FFFFFF] text-[16px] font-montserrat mb-[18px]">
            Sleep well?
          </p>
          <div class="flex items-center">
            <input
              id="yesSleep"
              type="checkbox"
              name="sleep"
              value="yes"
              onclick="checkSleep(this);"
              class="radioCheckSleep w-[25px] h-[25px] border border-[#618686] rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
            />
            <label
              for="yesSleep"
              class="ml-[13px] text-sm font-normal text-[#FBF5E3] text-[15px] font-montserrat mr-[25px]"
              >Yes</label
            >
            <input
              id="noSleep"
              type="checkbox"
              name="sleep"
              value="no"
              onclick="checkSleep(this);"
              class="radioCheckSleep w-[25px] h-[25px] border border-[#618686] rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
            />
            <label
              for="noSleep"
              class="ml-[13px] text-sm font-normal text-[#FBF5E3] text-[15px] font-montserrat"
              >No</label
            >
          </div>
        </div>
      </div>

      <div class="mb-[47px] flex justify-center">
        <div
          class="w-[10px] h-[10px] bg-[#FBF5E3] rounded-full ml-[17px] mr-[27px]"
        ></div>
        <div
          class="w-[10px] h-[10px] border-solid border-2 border-[#FBF5E3] rounded-full mr-[27px]"
        ></div>
        <div
          class="w-[10px] h-[10px] border-solid border-2 border-[#FBF5E3] rounded-full mr-[27px]"
        ></div>
      </div>

      <div class="text-center">
        <!-- <button type="submit" class="bg-[#FBF5E3] rounded-[10px] w-[119px] h-[40px]"><p class="text-[#164D4D] font-inter font-bold">CHECK EMAIL</p></button> -->
        <a
          href="/"
          class="bg-[#618686] px-[45px] py-[12px] rounded-[10px] w-[119px] h-[40px] text-[#FBF5E3] font-inter font-bold mr-[18px]"
          >SKIP</a
        >
        <a
          href="/survey2"
          class="bg-[#FBF5E3] px-[45px] py-[12px] rounded-[10px] w-[119px] h-[40px] text-[#164D4D] font-inter font-bold ml-[18px]"
          >NEXT</a
        >
      </div>
    </form>
  </div>
</template>
<script setup></script>

<style scoped></style>

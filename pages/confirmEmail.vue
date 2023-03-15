<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <form>
      <div>
        <p
          class="font-poppins md:text-[36px] text-2xl text-[#FBF5E3] mb-[92px] text-center"
        >
          Confirm Email!
        </p>
      </div>
      <div class="flex justify-center mb-[32px]">
        <img src="~/assets/image/emailSent.svg" alt="" />
      </div>
      <div>
        <p
          class="font-poppins text-[24px] text-[#FBF5E3] font-light text-center mb-[56px]"
        >
          We’ve sent you an<br />email link! Please verify <br />
          your account
        </p>
      </div>

      <div class="mb-[46px] flex justify-center">
        <div
          class="w-[10px] h-[10px] border-solid border-2 border-[#FBF5E3] rounded-full mr-[27px]"
        ></div>
        <div class="w-[10px] h-[10px] bg-[#FBF5E3] rounded-full"></div>
      </div>

      <div class="text-center">
        <!-- <button type="submit" class="bg-[#FBF5E3] rounded-[10px] w-[119px] h-[40px]"><p class="text-[#164D4D] font-inter font-bold">CHECK EMAIL</p></button> -->
        <nuxtLink
          to="/survey1"
          class="bg-[#FBF5E3] px-[30px] py-[12px] rounded-[10px] w-[119px] h-[40px] text-[#164D4D] font-inter font-bold"
          >CHECK EMAIL</nuxtLink
        >
      </div>
    </form>
  </div>
</template>

<script setup></script>

<style scoped></style>

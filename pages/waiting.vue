<template>
  <div class="md:py-16 md:px-32 px-3 py-6 h-screen">
    <div class="md:grid md:grid-cols-12 gap-4">
      <div class="md:col-span-4">
        <div class="bg-white h-[245px] w-full rounded-3xl px-5 pb-5 mb-5">
          <img
            :src="save1"
            @click="changeSave1"
            alt="save"
            class="relative cursor-pointer ml-5 -top-1"
          />
          <div class="flex justify-center items-center mb-2">
            <img src="/lighting.svg" alt="lighting" />
            <img src="/brush.svg" alt="brush" />
          </div>
          <p class="text-center mb-5">
            “I have a very formal event tomorrow and need help finding a long
            stay red lipstick! I won’t have time to retouch it for hours and
            don’t want to look messy in the picures. Can anyone help?”
          </p>
          <div class="flex justify-center">
            <button
              class="bg-[#164d4d] text-[#ffffff] rounded-xl text-sm px-2 py-1 font-bold"
            >
              RECOMMEND NOW
            </button>
          </div>
        </div>
        <div class="bg-white w-full h-[72px] rounded-3xl p-3 mb-5">
          <p class="text-[#164d4d] text-center font-inter font-semibold">
            Category
          </p>
          <p class="text-xs font-poppins text-center text-[#737373]">
            Make up, lips, lipstick, long stay
          </p>
        </div>
      </div>
      <div class="md:col-span-8 flex justify-center items-center">
        <div class="flex flex-col items-center gap-10">
          <p class="font-light text-[#fbf5e3] text-lg">Patience is a virtue!</p>
          <img src="/hourGlass.svg" alt="" class="72px" />
          <p class="font-light text-[#fbf5e3] text-lg">
            Someone will help you out soon...
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      save1: "saveGray.svg",
      inputYourRecommendation: "",
      filled: false,
    };
  },
  methods: {
    checkFilled() {
      if (this.inputYourRecommendation) {
        this.filled = true;
      } else {
        this.filled = false;
      }
    },
    changeSave1() {
      if (this.save1 == "saveGray.svg") {
        this.save1 = "saveGold.svg";
      } else {
        this.save1 = "saveGray.svg";
      }
    },
  },
  computed: {
    spellCheckClass() {
      if (this.filled) {
        return "text-white bg-[#618686] px-2 py-1.5 rounded-lg";
      } else {
        return "hidden";
      }
    },
    publishClass() {
      if (this.filled) {
        return "text-white bg-[#164d4d] px-5 py-1 rounded-lg";
      } else {
        return "text-white bg-[#e6e6e6] px-5 py-1 rounded-lg";
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>

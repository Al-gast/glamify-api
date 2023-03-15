<template>
  <div class="md:py-16 py-8 md:px-32">
    <div class="md:grid md:grid-cols-12 md:gap-8">
      <div class="md:col-span-4 px-3">
        <div class="bg-white h-[256px] w-full rounded-3xl p-5 mb-8 group">
          <div class="flex justify-end">
            <div class="absolute">
              <div class="w-[43px] h-[33px] border border-[#164d4d] rounded-3xl flex items-center justify-center drop-shadow-lg">
                <img src="/Like.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="absolute mt-16">
              <!-- The button to open modal -->
              <label for="my-modal-3" class="text-[#fbf5e3] font-semibold bg-[#164d4d] border border-[#fbf5e3] rounded-3xl px-10 py-3 hidden group-hover:block">REVIEW</label>

              <!-- Put this part before </body> tag -->
              <input type="checkbox" id="my-modal-3" class="modal-toggle" />
              <div class="modal">
                <div class="modal-box relative bg-white w-[550px] md:h-[486px]">
                  <label for="my-modal-3" class="absolute right-4 top-4"><img src="/xModal.svg" alt="" /></label>
                  <div class="md:grid md:grid-cols-7 gap-3 pt-3">
                    <div class="md:col-span-3">
                      <div class="flex justify-center mb-3">
                        <img src="/retinol.svg" alt="" width="104px" />
                      </div>
                      <div class="flex justify-center">
                        <p class="font-semibold text-center text-[#164d4d] mb-3 text-sm">Retinol in squalane 0.2%</p>
                      </div>
                      <p class="font-semibold text-sm text-center text-[#797878] mb-7">The ordinary</p>
                      <div class="flex justify-center gap-5 mb-3">
                        <img src="/iModal.svg" alt="" />
                        <p class="text-[#618686] font-semibold text-sm">How to review</p>
                      </div>
                      <p class="text-center text-[#618686] mb-3 font-light text-xs">1. Rate with stars</p>
                      <p class="text-center text-[#618686] mb-3 font-light text-xs">2. Describe your experience using the product and provide tips on how to get the best results </p>
                      <p class="text-center text-[#618686] mb-3 font-light text-xs">3. List the purpose or intent when using the product</p>
                    </div>
                    <div class="md:col-span-4 p-2">
                      <div class="rating rating-lg flex justify-center gap-2 pb-3">
                        <input type="radio" name="rating-8" class="mask mask-star-2 bg-[#ddba40] form-radio text-[#ddba40] checked:bg-none" />
                        <input type="radio" name="rating-8" class="mask mask-star-2 bg-[#ddba40] form-radio text-[#ddba40] checked:bg-none" />
                        <input type="radio" name="rating-8" class="mask mask-star-2 bg-[#ddba40] form-radio text-[#ddba40] checked:bg-none" />
                        <input type="radio" name="rating-8" class="mask mask-star-2 bg-[#ddba40] form-radio text-[#ddba40] checked:bg-none" />
                        <input type="radio" name="rating-8" class="mask mask-star-2 bg-[#ddba40] form-radio text-[#ddba40] checked:bg-none" />
                      </div>
                      <form action="">
                        <div class="flex justify-center mb-3">
                          <textarea
                            name=""
                            v-model="input1"
                            @input="checkFilled"
                            id=""
                            cols="25"
                            rows="6"
                            class="rounded-3xl border-2 border-[#e6e6e6] bg-[#f9f9f9] focus:outline-none ring-inset focus:ring focus:ring-[#207a7a] focus:border-[#207a7a] placeholder:text-center placeholder:font-light text-center p-3"
                            placeholder="Describe your experience with the product... Did you Like it? Do you have any tips on how to make the most out of the product?..."
                          ></textarea>
                        </div>
                        <div class="flex justify-center mb-3">
                          <textarea
                            name=""
                            v-model="input2"
                            @input="checkFilled"
                            id=""
                            cols="25"
                            rows="4"
                            class="rounded-3xl border-2 border-[#e6e6e6] bg-[#f9f9f9] focus:outline-none ring-inset focus:ring focus:ring-[#207a7a] focus:border-[#207a7a] placeholder:text-center placeholder:font-light text-center p-3"
                            placeholder="Purpose of using the product: eg. antiaging, spots, imperfections..."
                          ></textarea>
                        </div>
                        <div class="flex justify-center">
                          <button :class="buttonClass">PUBLISH</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center mb-1">
            <img src="/retinol.svg" alt="retinol" width="105px" />
          </div>
          <div class="flex gap-1 justify-center mb-1">
            <img src="/yellowStar.svg" alt="star" width="20px" />
            <img src="/yellowStar.svg" alt="star" width="20px" />
            <img src="/yellowStar.svg" alt="star" width="20px" />
            <img src="/yellowStar.svg" alt="star" width="20px" />
            <img src="/halfYellowStar.svg" alt="star" width="10px" />
            <p class="text-[#797878]">(5)</p>
          </div>
          <p class="font-semibold text-center text-[#164d4d] mb-1">Retinol in squalane 0.2%</p>
          <p class="font-semibold text-center text-[#797878]">The ordinary</p>
        </div>
        <div class="bg-white w-full h-[215px] md:h-[143px] flex items-center rounded-3xl mb-8 p-3 md:hidden">
          <div>
            <p class="text-[#164d4d] text-center font-inter font-semibold mb-3">Top review</p>
            <p class="text-xs font-poppins text-center text-[#737373] mb-6">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...” Read more
            </p>
            <div class="flex justify-between">
              <div class="flex gap-2">
                <img src="/merry.svg" alt="merry" width="31px" />
                <div>
                  <p class="text-sm font-semibold text-[#164d4d]">Mery</p>
                  <p class="text-xs text-[#618686]">+14 upvotes</p>
                </div>
              </div>
              <!-- <div class="flex items-center">
                <img
                  :src="up1"
                  @click="changeUp1"
                  alt=""
                  class="absolute cursor-pointer"
                />
              </div> -->
              <div class="flex gap-1">
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center md:pb-16 pb-8 md:hidden">
          <div class="carousel carousel-center p-2 space-x-4 bg-[#164d4d] max-w-[1140px]">
            <div class="carousel-item">
              <div class="bg-white h-[171px] flex items-center rounded-3xl p-5">
                <div>
                  <p class="text-xs font-poppins max-w-[320px] text-center text-[#737373] mb-8">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...” Read more</p>
                  <div class="flex justify-between">
                    <div class="flex gap-2">
                      <img src="/merry.svg" alt="merry" width="31px" />
                      <div>
                        <p class="text-sm font-semibold text-[#164d4d]">Mery</p>
                        <p class="text-xs text-[#618686]">+14 upvotes</p>
                      </div>
                    </div>
                    <!-- <div class="flex items-center ">
                    <img
                      :src="up1"
                      @click="changeUp2"
                      alt=""
                      class="absolute cursor-pointer"
                    />
                  </div> -->
                    <div class="flex gap-1">
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="bg-white h-[171px] flex items-center rounded-3xl p-5">
                <div>
                  <p class="text-xs font-poppins max-w-[320px] text-center text-[#737373] mb-8">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...” Read more</p>
                  <div class="flex justify-between">
                    <div class="flex gap-2">
                      <img src="/merry.svg" alt="merry" width="31px" />
                      <div>
                        <p class="text-sm font-semibold text-[#164d4d]">Mery</p>
                        <p class="text-xs text-[#618686]">+14 upvotes</p>
                      </div>
                    </div>
                    <!-- <div class="flex items-center ">
                    <img
                      :src="up1"
                      @click="changeUp2"
                      alt=""
                      class="absolute cursor-pointer"
                    />
                  </div> -->
                    <div class="flex gap-1">
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="bg-white h-[171px] flex items-center rounded-3xl p-5">
                <div>
                  <p class="text-xs font-poppins max-w-[320px] text-center text-[#737373] mb-8">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...” Read more</p>
                  <div class="flex justify-between">
                    <div class="flex gap-2">
                      <img src="/merry.svg" alt="merry" width="31px" />
                      <div>
                        <p class="text-sm font-semibold text-[#164d4d]">Mery</p>
                        <p class="text-xs text-[#618686]">+14 upvotes</p>
                      </div>
                    </div>
                    <!-- <div class="flex items-center ">
                    <img
                      :src="up1"
                      @click="changeUp2"
                      alt=""
                      class="absolute cursor-pointer"
                    />
                  </div> -->
                    <div class="flex gap-1">
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="bg-white h-[171px] flex items-center rounded-3xl p-5">
                <div>
                  <p class="text-xs font-poppins max-w-[320px] text-center text-[#737373] mb-8">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...” Read more</p>
                  <div class="flex justify-between">
                    <div class="flex gap-2">
                      <img src="/merry.svg" alt="merry" width="31px" />
                      <div>
                        <p class="text-sm font-semibold text-[#164d4d]">Mery</p>
                        <p class="text-xs text-[#618686]">+14 upvotes</p>
                      </div>
                    </div>
                    <!-- <div class="flex items-center ">
                    <img
                      :src="up1"
                      @click="changeUp2"
                      alt=""
                      class="absolute cursor-pointer"
                    />
                  </div> -->
                    <div class="flex gap-1">
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="bg-white h-[171px] flex items-center rounded-3xl p-5">
                <div>
                  <p class="text-xs font-poppins max-w-[320px] text-center text-[#737373] mb-8">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...” Read more</p>
                  <div class="flex justify-between">
                    <div class="flex gap-2">
                      <img src="/merry.svg" alt="merry" width="31px" />
                      <div>
                        <p class="text-sm font-semibold text-[#164d4d]">Mery</p>
                        <p class="text-xs text-[#618686]">+14 upvotes</p>
                      </div>
                    </div>
                    <!-- <div class="flex items-center ">
                    <img
                      :src="up1"
                      @click="changeUp2"
                      alt=""
                      class="absolute cursor-pointer"
                    />
                  </div> -->
                    <div class="flex gap-1">
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="bg-white h-[171px] flex items-center rounded-3xl p-5">
                <div>
                  <p class="text-xs font-poppins max-w-[320px] text-center text-[#737373] mb-8">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...” Read more</p>
                  <div class="flex justify-between">
                    <div class="flex gap-2">
                      <img src="/merry.svg" alt="merry" width="31px" />
                      <div>
                        <p class="text-sm font-semibold text-[#164d4d]">Mery</p>
                        <p class="text-xs text-[#618686]">+14 upvotes</p>
                      </div>
                    </div>
                    <!-- <div class="flex items-center ">
                    <img
                      :src="up1"
                      @click="changeUp2"
                      alt=""
                      class="absolute cursor-pointer"
                    />
                  </div> -->
                    <div class="flex gap-1">
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="bg-white h-[171px] flex items-center rounded-3xl p-5">
                <div>
                  <p class="text-xs font-poppins max-w-[320px] text-center text-[#737373] mb-8">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...” Read more</p>
                  <div class="flex justify-between">
                    <div class="flex gap-2">
                      <img src="/merry.svg" alt="merry" width="31px" />
                      <div>
                        <p class="text-sm font-semibold text-[#164d4d]">Mery</p>
                        <p class="text-xs text-[#618686]">+14 upvotes</p>
                      </div>
                    </div>
                    <!-- <div class="flex items-center ">
                    <img
                      :src="up1"
                      @click="changeUp2"
                      alt=""
                      class="absolute cursor-pointer"
                    />
                  </div> -->
                    <div class="flex gap-1">
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                      <img src="/star.svg" alt="star" width="20px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white w-full h-[166px] rounded-2xl mb-8 p-3">
          <p class="text-[#164d4d] text-center font-inter font-semibold">Description</p>
          <p class="text-xs font-poppins text-center text-[#737373]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur... Read more
          </p>
        </div>
        <div class="bg-white w-full h-[105px] rounded-2xl p-3 mb-8">
          <p class="text-[#164d4d] text-center font-inter font-semibold">Ingredients</p>
          <p class="text-xs font-poppins text-center text-[#737373]">Lorem, ipsum dolor, sit amet, consectetur adipiscing elit, sed do eiusmod, tempor incididunt ut labore et dolore. Read more</p>
        </div>
        <div class="bg-white w-full h-[83px] rounded-2xl p-3 mb-8">
          <p class="text-[#164d4d] text-center font-inter font-semibold">Target</p>
          <p class="text-xs font-poppins text-center text-[#737373]">Skin, aging, lines</p>
        </div>
        <div class="bg-white w-full h-[121px] rounded-2xl p-3 mb-8">
          <p class="text-[#164d4d] text-center font-inter font-semibold">Don't mix with</p>
          <p class="text-xs font-poppins text-center text-[#737373]">Lorem, ipsum dolor, sit amet, consectetur adipiscing elit, sed do eiusmod, tempor incididunt ut labore et dolore. Read more</p>
        </div>
      </div>

      <div class="flex justify-center mb-5 mt-3 md:hidden">
        <p class="text-[#fbf5e3] font-poppins text-xl">Featured in</p>
      </div>

      <div class="flex justify-center items-center md:pb-16 pb-8 md:hidden">
        <div class="carousel carousel-center p-4 space-x-4 bg-[#164d4d] rounded-box max-w-[1140px]">
          <div class="carousel-item">
            <div class="bg-white h-[245px] w-[360px] rounded-3xl px-5 pb-5">
              <img :src="save1" @click="changeSave1" alt="save" class="relative cursor-pointer ml-5 -top-1" />
              <div class="flex justify-center items-center mb-2">
                <img src="/lighting.svg" alt="lighting" />
                <img src="/brush.svg" alt="brush" />
              </div>
              <p class="text-center mb-5">“I have a very formal event tomorrow and need help finding a long stay red lipstick! I won’t have time to retouch it for hours and don’t want to look messy in the picures. Can anyone help?”</p>
              <div class="flex justify-center">
                <button class="bg-[#164d4d] text-[#ffffff] rounded-xl text-sm px-2 py-1 font-bold">RECOMMEND NOW</button>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="bg-white h-[245px] w-[360px] rounded-3xl px-5 pb-5">
              <img :src="save2" @click="changeSave2" alt="save" class="relative cursor-pointer ml-5 -top-1" />
              <div class="flex justify-center items-center mb-2">
                <img src="/lighting.svg" alt="lighting" />
                <img src="/brush.svg" alt="brush" />
              </div>
              <p class="text-center mb-5">“I have a very formal event tomorrow and need help finding a long stay red lipstick! I won’t have time to retouch it for hours and don’t want to look messy in the picures. Can anyone help?”</p>
              <div class="flex justify-center">
                <button class="bg-[#164d4d] text-[#ffffff] rounded-xl text-sm px-2 py-1 font-bold">RECOMMEND NOW</button>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="bg-white h-[245px] w-[360px] rounded-3xl px-5 pb-5">
              <img :src="save3" @click="changeSave3" alt="save" class="relative cursor-pointer ml-5 -top-1" />
              <div class="flex justify-center items-center mb-2">
                <img src="/lighting.svg" alt="lighting" />
                <img src="/brush.svg" alt="brush" />
              </div>
              <p class="text-center mb-5">“I have a very formal event tomorrow and need help finding a long stay red lipstick! I won’t have time to retouch it for hours and don’t want to look messy in the picures. Can anyone help?”</p>
              <div class="flex justify-center">
                <button class="bg-[#164d4d] text-[#ffffff] rounded-xl text-sm px-2 py-1 font-bold">RECOMMEND NOW</button>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="bg-white h-[245px] w-[360px] rounded-3xl px-5 pb-5">
              <img :src="save4" @click="changeSave4" alt="save" class="relative cursor-pointer ml-5 -top-1" />
              <div class="flex justify-center items-center mb-2">
                <img src="/lighting.svg" alt="lighting" />
                <img src="/brush.svg" alt="brush" />
              </div>
              <p class="text-center mb-5">“I have a very formal event tomorrow and need help finding a long stay red lipstick! I won’t have time to retouch it for hours and don’t want to look messy in the picures. Can anyone help?”</p>
              <div class="flex justify-center">
                <button class="bg-[#164d4d] text-[#ffffff] rounded-xl text-sm px-2 py-1 font-bold">RECOMMEND NOW</button>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="bg-white h-[245px] w-[360px] rounded-3xl px-5 pb-5">
              <img :src="save5" @click="changeSave5" alt="save" class="relative cursor-pointer ml-5 -top-1" />
              <div class="flex justify-center items-center mb-2">
                <img src="/lighting.svg" alt="lighting" />
                <img src="/brush.svg" alt="brush" />
              </div>
              <p class="text-center mb-5">“I have a very formal event tomorrow and need help finding a long stay red lipstick! I won’t have time to retouch it for hours and don’t want to look messy in the picures. Can anyone help?”</p>
              <div class="flex justify-center">
                <button class="bg-[#164d4d] text-[#ffffff] rounded-xl text-sm px-2 py-1 font-bold">RECOMMEND NOW</button>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="bg-white h-[245px] w-[360px] rounded-3xl px-5 pb-5">
              <img :src="save6" @click="changeSave6" alt="save" class="relative cursor-pointer ml-5 -top-1" />
              <div class="flex justify-center items-center mb-2">
                <img src="/lighting.svg" alt="lighting" />
                <img src="/brush.svg" alt="brush" />
              </div>
              <p class="text-center mb-5">“I have a very formal event tomorrow and need help finding a long stay red lipstick! I won’t have time to retouch it for hours and don’t want to look messy in the picures. Can anyone help?”</p>
              <div class="flex justify-center">
                <button class="bg-[#164d4d] text-[#ffffff] rounded-xl text-sm px-2 py-1 font-bold">RECOMMEND NOW</button>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="bg-white h-[245px] w-[360px] rounded-3xl px-5 pb-5">
              <img :src="save7" @click="changeSave7" alt="save" class="relative cursor-pointer ml-5 -top-1" />
              <div class="flex justify-center items-center mb-2">
                <img src="/lighting.svg" alt="lighting" />
                <img src="/brush.svg" alt="brush" />
              </div>
              <p class="text-center mb-5">“I have a very formal event tomorrow and need help finding a long stay red lipstick! I won’t have time to retouch it for hours and don’t want to look messy in the picures. Can anyone help?”</p>
              <div class="flex justify-center">
                <button class="bg-[#164d4d] text-[#ffffff] rounded-xl text-sm px-2 py-1 font-bold">RECOMMEND NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md:col-span-8 px-3 hidden md:block">
        <div class="bg-white w-full md:h-[143px] rounded-3xl mb-8 p-3">
          <p class="text-[#164d4d] text-center font-inter font-semibold">Top review</p>
          <p class="text-xs font-poppins text-center text-[#737373] mb-6">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...” Read more
          </p>
          <div class="flex justify-between">
            <div class="flex gap-2">
              <img src="/merry.svg" alt="merry" width="31px" />
              <div>
                <p class="text-sm font-semibold text-[#164d4d]">Mery</p>
                <p class="text-xs text-[#618686]">+14 upvotes</p>
              </div>
            </div>
            <div class="flex items-center">
              <img :src="up1" @click="changeUp1" alt="" class="absolute cursor-pointer" />
            </div>
            <div class="flex gap-1">
              <img src="/star.svg" alt="star" width="20px" />
              <img src="/star.svg" alt="star" width="20px" />
              <img src="/star.svg" alt="star" width="20px" />
              <img src="/star.svg" alt="star" width="20px" />
              <img src="/star.svg" alt="star" width="20px" />
            </div>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-8 mb-5">
          <div class="bg-white w-full h-[153px] rounded-3xl p-5">
            <p class="text-xs font-poppins text-center text-[#737373] mb-8">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...” Read more</p>
            <div class="flex justify-between">
              <div class="flex gap-2">
                <img src="/merry.svg" alt="merry" width="31px" />
                <div>
                  <p class="text-sm font-semibold text-[#164d4d]">Mery</p>
                  <p class="text-xs text-[#618686]">+14 upvotes</p>
                </div>
              </div>
              <div class="flex items-center">
                <img :src="up2" @click="changeUp2" alt="" class="absolute cursor-pointer" />
              </div>
              <div class="flex gap-1">
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
              </div>
            </div>
          </div>
          <div class="bg-white w-full h-[153px] rounded-3xl p-5">
            <p class="text-xs font-poppins text-center text-[#737373] mb-8">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...” Read more</p>
            <div class="flex justify-between">
              <div class="flex gap-2">
                <img src="/merry.svg" alt="merry" width="31px" />
                <div>
                  <p class="text-sm font-semibold text-[#164d4d]">Mery</p>
                  <p class="text-xs text-[#618686]">+14 upvotes</p>
                </div>
              </div>
              <div class="flex items-center">
                <img :src="up3" @click="changeUp3" alt="" class="absolute cursor-pointer" />
              </div>
              <div class="flex gap-1">
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
              </div>
            </div>
          </div>
          <div class="bg-white w-full h-[153px] rounded-3xl p-5">
            <p class="text-xs font-poppins text-center text-[#737373] mb-8">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...” Read more</p>
            <div class="flex justify-between">
              <div class="flex gap-2">
                <img src="/merry.svg" alt="merry" width="31px" />
                <div>
                  <p class="text-sm font-semibold text-[#164d4d]">Mery</p>
                  <p class="text-xs text-[#618686]">+14 upvotes</p>
                </div>
              </div>
              <div class="flex items-center">
                <img :src="up4" @click="changeUp4" alt="" class="absolute cursor-pointer" />
              </div>
              <div class="flex gap-1">
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
              </div>
            </div>
          </div>
          <div class="bg-white w-full h-[153px] rounded-3xl p-5">
            <p class="text-xs font-poppins text-center text-[#737373] mb-8">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...” Read more</p>
            <div class="flex justify-between">
              <div class="flex gap-2">
                <img src="/merry.svg" alt="merry" width="31px" />
                <div>
                  <p class="text-sm font-semibold text-[#164d4d]">Mery</p>
                  <p class="text-xs text-[#618686]">+14 upvotes</p>
                </div>
              </div>
              <div class="flex items-center">
                <img :src="up5" @click="changeUp5" alt="" class="absolute cursor-pointer" />
              </div>
              <div class="flex gap-1">
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center mb-10">
          <button class="bg-[#fbf5e3] rounded-lg px-6 py-2 text-[#164d4d] font-bold">SHOW ALL REVIEW</button>
        </div>
        <div class="flex justify-center mb-8">
          <p class="text-[#fbf5e3] font-poppins text-xl">Featured in</p>
        </div>
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div class="bg-white h-[245px] w-full rounded-3xl p-5 mb-4">
            <div class="flex justify-center items-center mb-2">
              <img src="/lighting.svg" alt="lighting" />
              <img src="/brush.svg" alt="brush" />
            </div>
            <p class="text-center mb-5">“I have a very formal event tomorrow and need help finding a long stay red lipstick! I won’t have time to retouch it for hours and don’t want to look messy in the picures. Can anyone help?”</p>
            <div class="flex justify-center">
              <button class="bg-[#164d4d] text-[#ffffff] rounded-3xl text-sm px-2 py-1 font-bold">View</button>
            </div>
          </div>
          <div class="bg-white h-[245px] w-full rounded-3xl p-5 mb-4">
            <div class="flex justify-center items-center mb-2">
              <img src="/lighting.svg" alt="lighting" />
              <img src="/brush.svg" alt="brush" />
            </div>
            <p class="text-center mb-5">“I have a very formal event tomorrow and need help finding a long stay red lipstick! I won’t have time to retouch it for hours and don’t want to look messy in the picures. Can anyone help?”</p>
            <div class="flex justify-center">
              <button class="bg-[#164d4d] text-[#ffffff] rounded-3xl text-sm px-2 py-1 font-bold">View</button>
            </div>
          </div>
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
      save2: "saveGray.svg",
      save3: "saveGray.svg",
      save4: "saveGray.svg",
      save5: "saveGray.svg",
      save6: "saveGray.svg",
      save7: "saveGray.svg",
      save8: "saveGray.svg",
      save9: "saveGray.svg",
      up1: "upGray.svg",
      up2: "upGray.svg",
      up3: "upGray.svg",
      up4: "upGray.svg",
      up5: "upGray.svg",
      input1: "",
      input2: "",
      filled: false,
    };
  },
  methods: {
    changeSave1() {
      if (this.save1 == "saveGray.svg") {
        this.save1 = "saveGold.svg";
      } else {
        this.save1 = "saveGray.svg";
      }
    },
    changeSave2() {
      if (this.save2 == "saveGray.svg") {
        this.save2 = "saveGold.svg";
      } else {
        this.save2 = "saveGray.svg";
      }
    },
    changeSave3() {
      if (this.save3 == "saveGray.svg") {
        this.save3 = "saveGold.svg";
      } else {
        this.save3 = "saveGray.svg";
      }
    },
    changeSave4() {
      if (this.save4 == "saveGray.svg") {
        this.save4 = "saveGold.svg";
      } else {
        this.save4 = "saveGray.svg";
      }
    },
    changeSave5() {
      if (this.save5 == "saveGray.svg") {
        this.save5 = "saveGold.svg";
      } else {
        this.save5 = "saveGray.svg";
      }
    },
    changeSave6() {
      if (this.save6 == "saveGray.svg") {
        this.save6 = "saveGold.svg";
      } else {
        this.save6 = "saveGray.svg";
      }
    },
    changeSave7() {
      if (this.save7 == "saveGray.svg") {
        this.save7 = "saveGold.svg";
      } else {
        this.save7 = "saveGray.svg";
      }
    },
    changeSave8() {
      if (this.save8 == "saveGray.svg") {
        this.save8 = "saveGold.svg";
      } else {
        this.save8 = "saveGray.svg";
      }
    },
    changeSave9() {
      if (this.save9 == "saveGray.svg") {
        this.save9 = "saveGold.svg";
      } else {
        this.save9 = "saveGray.svg";
      }
    },
    changeUp1() {
      if (this.up1 == "upGray.svg") {
        this.up1 = "upGreen.svg";
      } else {
        this.up1 = "upGray.svg";
      }
    },
    changeUp2() {
      if (this.up2 == "upGray.svg") {
        this.up2 = "upGreen.svg";
      } else {
        this.up2 = "upGray.svg";
      }
    },
    changeUp3() {
      if (this.up3 == "upGray.svg") {
        this.up3 = "upGreen.svg";
      } else {
        this.up3 = "upGray.svg";
      }
    },
    changeUp4() {
      if (this.up4 == "upGray.svg") {
        this.up4 = "upGreen.svg";
      } else {
        this.up4 = "upGray.svg";
      }
    },
    changeUp5() {
      if (this.up5 == "upGray.svg") {
        this.up5 = "upGreen.svg";
      } else {
        this.up5 = "upGray.svg";
      }
    },
    checkFilled() {
      if (this.input1 && this.input2) {
        this.filled = true;
      } else {
        this.filled = false;
      }
    },
  },
  computed: {
    buttonClass() {
      if (this.filled) {
        return "ml-5 text-white bg-[#164d4d] px-8 py-2 rounded-lg border-white";
      } else {
        return "ml-5 text-white bg-[#e6e6e6] px-8 py-2 rounded-lg";
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>

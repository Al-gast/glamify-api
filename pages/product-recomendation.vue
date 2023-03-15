<template>
  <div class="md:py-16 py-5 md:px-32 max-h-[20000px]">
    <div class="grid md:grid-cols-12 gap-4">
      <div class="md:col-span-4 px-3 md:px-0">
        <div class="bg-white h-[245px] w-full rounded-3xl px-5 pb-5 mb-4">
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
        <div class="bg-white w-full h-[72px] rounded-3xl p-3">
          <p class="text-[#164d4d] text-center font-inter font-semibold">
            Category
          </p>
          <p class="text-xs font-poppins text-center text-[#737373]">
            Make up, lips, lipstick, long stay
          </p>
        </div>
      </div>
      <div class="md:col-span-8 px-3">
        <div class="grid md:grid-cols-2 gap-4 mb-5">
          <div class="bg-[#ebf4fa] h-[245px] w-full rounded-3xl p-8">
            <div class="flex justify-around gap-3 items-center mb-5">
              <p class="text-left text-xs max-w-[154px]">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud...”
              </p>
              <div class="w-[124px] h-[127px] bg-white rounded-xl">
                <div class="flex justify-center">
                  <img src="/retinol.svg" alt="" />
                </div>
                <p class="font-semibold text-center text-sm text-[#164d4d]">
                  Retinol in squalane 0.2%
                </p>
              </div>
            </div>
            <div class="flex justify-between">
              <div class="flex gap-2">
                <img src="/merry.svg" alt="merry" width="31px" />
                <div>
                  <p class="text-sm font-semibold text-[#164d4d]">Mery</p>
                  <p class="text-xs text-[#618686]">+14 upvotes</p>
                </div>
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
          <div class="bg-[#ebf4fa] h-[245px] w-full rounded-3xl p-8">
            <div class="flex justify-around gap-3 items-center mb-5">
              <p class="text-left text-xs max-w-[154px]">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud...”
              </p>
              <div class="w-[124px] h-[127px] bg-white rounded-xl">
                <div class="flex justify-center">
                  <img src="/retinol.svg" alt="" />
                </div>
                <p class="font-semibold text-center text-sm text-[#164d4d]">
                  Retinol in squalane 0.2%
                </p>
              </div>
            </div>
            <div class="flex justify-between">
              <div class="flex gap-2">
                <img src="/merry.svg" alt="merry" width="31px" />
                <div>
                  <p class="text-sm font-semibold text-[#164d4d]">Mery</p>
                  <p class="text-xs text-[#618686]">+14 upvotes</p>
                </div>
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
          <div class="bg-[#ebf4fa] h-[245px] w-full rounded-3xl p-8">
            <div class="flex justify-around gap-3 items-center mb-5">
              <p class="text-left text-xs max-w-[154px]">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud...”
              </p>
              <div class="w-[124px] h-[127px] bg-white rounded-xl">
                <div class="flex justify-center">
                  <img src="/retinol.svg" alt="" />
                </div>
                <p class="font-semibold text-center text-sm text-[#164d4d]">
                  Retinol in squalane 0.2%
                </p>
              </div>
            </div>
            <div class="flex justify-between">
              <div class="flex gap-2">
                <img src="/merry.svg" alt="merry" width="31px" />
                <div>
                  <p class="text-sm font-semibold text-[#164d4d]">Mery</p>
                  <p class="text-xs text-[#618686]">+14 upvotes</p>
                </div>
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
          <div class="bg-[#ebf4fa] h-[245px] w-full rounded-3xl p-8">
            <div class="flex justify-around gap-3 items-center mb-5">
              <p class="text-left text-xs max-w-[154px]">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud...”
              </p>
              <div class="w-[124px] h-[127px] bg-white rounded-xl">
                <div class="flex justify-center">
                  <img src="/retinol.svg" alt="" />
                </div>
                <p class="font-semibold text-center text-sm text-[#164d4d]">
                  Retinol in squalane 0.2%
                </p>
              </div>
            </div>
            <div class="flex justify-between">
              <div class="flex gap-2">
                <img src="/merry.svg" alt="merry" width="31px" />
                <div>
                  <p class="text-sm font-semibold text-[#164d4d]">Mery</p>
                  <p class="text-xs text-[#618686]">+14 upvotes</p>
                </div>
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

        <!-- The button to open modal -->
        <div class="flex justify-center">
          <label
            for="recommendModal"
            class="bg-[#fbf5e3] rounded-lg px-6 py-2 text-[#164d4d] font-bold cursor-pointer"
            >ADD RECOMENDATION</label
          >
        </div>
        <!-- Put this part before </body> tag -->
        <input type="checkbox" id="recommendModal" class="modal-toggle" />
        <div class="modal">
          <div
            class="modal-box relative bg-white w-[550px] md:h-[486px] h-[800px]"
          >
            <label for="recommendModal" class="absolute right-4 top-4"
              ><img src="/xModal.svg" alt=""
            /></label>
            <div class="">
              <div class="grid md:grid-cols-7 gap-3">
                <div class="md:col-span-3 mt-3 flex flex-col items-center">
                  <div class="flex justify-start mb-3">
                    <img src="/iModal.svg" alt="" />
                    <p
                      class="text-[#618686] font-semibold text-sm max-w-[113px] text-center"
                    >
                      How to recommend
                    </p>
                  </div>
                  <p
                    class="text-center text-[#618686] mb-3 font-light max-w-[173px] text-xs"
                  >
                    1. Search for the product in Glamify by brand and name. If
                    you cannot find the product, add it to the catalogue first!
                  </p>
                  <p
                    class="text-center text-[#618686] mb-3 font-light max-w-[173px] text-xs"
                  >
                    2. Add some comment to your recommendation: why is it
                    helpful to the issue?
                  </p>
                  <p
                    class="text-center text-[#618686] mb-3 font-light max-w-[173px] text-xs"
                  >
                    3. Review and post
                  </p>
                </div>
                <div class="md:col-span-4 p-2">
                  <h2 class="text-center font-bold text-[#164d4d] mb-5">
                    Have a Recommendation?
                  </h2>
                  <form action="">
                    <input
                      type="text"
                      placeholder="Search brand and product name"
                      class="w-full rounded-full border border-[#e6e6e6] bg-[#f9f9f9] placeholder:text-center placeholder:text-md placeholder:font-light placeholder:text-[#797878] placeholder:text-sm"
                    />
                    <p class="text-center text-[#618686] font-light py-2">or</p>
                    <input
                      type="text"
                      placeholder="Add Glamify URL"
                      class="w-full rounded-full border border-[#e6e6e6] bg-[#f9f9f9] placeholder:text-center placeholder:text-md placeholder:font-light placeholder:text-[#797878] placeholder:text-sm mb-3"
                    />
                    <label
                      for="newProduct"
                      class="text-center text-sm font-light text-[#618686] mb-3"
                      ><p>
                        Cannot find it?
                        <span
                          class="underline-offset-2 underline cursor-pointer"
                          >Add product
                        </span>
                      </p>
                    </label>

                    <!-- Put this part before </body> tag -->
                    <input
                      type="checkbox"
                      id="newProduct"
                      class="modal-toggle"
                    />
                    <div class="modal">
                      <div
                        class="modal-box relative bg-white w-[550px] md:h-[486px] h-[800px]"
                      >
                        <label for="newProduct" class="absolute right-4 top-4"
                          ><img src="/xModal.svg" alt=""
                        /></label>
                        <div class="md:grid md:grid-cols-7 md:gap-5">
                          <div class="md:col-span-3">
                            <div
                              class="flex justify-center gap-5 mb-3 mt-5 md:mt-0"
                            >
                              <img src="/iModal.svg" alt="" />
                              <p class="text-[#618686] font-semibold text-sm">
                                How to add a new product
                              </p>
                            </div>
                            <p
                              class="text-center text-[#618686] mb-3 font-light text-xs"
                            >
                              1. Add Amazon link
                            </p>
                            <p
                              class="text-center text-[#618686] mb-3 font-light text-xs"
                            >
                              2. Add brand name
                            </p>
                            <p
                              class="text-center text-[#618686] mb-3 font-light text-xs"
                            >
                              3. Add product name
                            </p>
                            <p
                              class="text-center text-[#618686] mb-3 font-light text-xs"
                            >
                              4. Review product
                            </p>
                            <p
                              class="text-center text-[#618686] mb-3 font-light text-xs"
                            >
                              5. Our team will check the request and publish it
                              once it’s approved
                            </p>
                          </div>
                          <div class="md:col-span-4 p-2">
                            <h2
                              class="text-center mb-5 text-[#164d4d] font-bold"
                            >
                              New product?
                            </h2>
                            <form action="">
                              <input
                                type="text"
                                placeholder="Add amazon link"
                                class="w-full rounded-full border border-[#e6e6e6] bg-[#f9f9f9] placeholder:text-center placeholder:text-md placeholder:font-light placeholder:text-[#797878] placeholder:text-sm mb-3 focus:ring-[#207a7a] focus:border-[#207a7a]"
                              />
                              <input
                                type="text"
                                placeholder="Brand name"
                                class="w-full rounded-full border border-[#e6e6e6] bg-[#f9f9f9] placeholder:text-center placeholder:text-md placeholder:font-light placeholder:text-[#797878] placeholder:text-sm mb-3 focus:ring-[#207a7a] focus:border-[#207a7a]"
                              />
                              <input
                                type="text"
                                placeholder="Product name"
                                class="w-full rounded-full border border-[#e6e6e6] bg-[#f9f9f9] placeholder:text-center placeholder:text-md placeholder:font-light placeholder:text-[#797878] placeholder:text-sm mb-6 focus:ring-[#207a7a] focus:border-[#207a7a]"
                              />
                              <div class="flex justify-center">
                                <label
                                  for="nextAddProduct"
                                  class="text-white bg-[#164d4d] px-8 py-2 rounded-lg"
                                  >NEXT</label
                                >

                                <!-- Put this part before </body> tag -->
                                <input
                                  type="checkbox"
                                  id="nextAddProduct"
                                  class="modal-toggle"
                                />
                                <div class="modal">
                                  <div
                                    class="modal-box relative bg-white w-[550px] md:h-[486px] h-[800px]"
                                  >
                                    <label
                                      for="nextAddProduct"
                                      class="absolute right-4 top-4"
                                      ><img src="/xModal.svg" alt=""
                                    /></label>
                                    <div
                                      class="md:grid md:grid-cols-7 md:gap-5 pt-3"
                                    >
                                      <div class="md:col-span-3">
                                        <div
                                          class="flex justify-center gap-5 mb-3"
                                        >
                                          <img src="/iModal.svg" alt="" />
                                          <p
                                            class="text-[#618686] font-semibold text-sm"
                                          >
                                            How to add a new product
                                          </p>
                                        </div>
                                        <p
                                          class="text-center text-[#618686] mb-3 font-light text-xs"
                                        >
                                          1. Add Amazon link
                                        </p>
                                        <p
                                          class="text-center text-[#618686] mb-3 font-light text-xs"
                                        >
                                          2. Add brand name
                                        </p>
                                        <p
                                          class="text-center text-[#618686] mb-3 font-light text-xs"
                                        >
                                          3. Add product name
                                        </p>
                                        <p
                                          class="text-center text-[#618686] mb-3 font-light text-xs"
                                        >
                                          4. Review product
                                        </p>
                                        <p
                                          class="text-center text-[#618686] mb-3 font-light text-xs"
                                        >
                                          5. Our team will check the request and
                                          publish it once it’s approved
                                        </p>
                                        <input
                                          type="text"
                                          placeholder="Add amazon link"
                                          class="w-full rounded-full border border-[#e6e6e6] bg-[#f9f9f9] placeholder:text-center placeholder:text-md placeholder:font-light placeholder:text-[#797878] placeholder:text-sm mb-3 focus:ring-[#207a7a] focus:border-[#207a7a]"
                                        />
                                        <input
                                          type="text"
                                          placeholder="Brand name"
                                          class="w-full rounded-full border border-[#e6e6e6] bg-[#f9f9f9] placeholder:text-center placeholder:text-md placeholder:font-light placeholder:text-[#797878] placeholder:text-sm mb-3 focus:ring-[#207a7a] focus:border-[#207a7a]"
                                        />
                                        <input
                                          type="text"
                                          placeholder="Product name"
                                          class="w-full rounded-full border border-[#e6e6e6] bg-[#f9f9f9] placeholder:text-center placeholder:text-md placeholder:font-light placeholder:text-[#797878] placeholder:text-sm mb-6 focus:ring-[#207a7a] focus:border-[#207a7a]"
                                        />
                                      </div>
                                      <div class="md:col-span-4">
                                        <div
                                          class="rating rating-lg flex justify-center gap-2 pb-3"
                                        >
                                          <input
                                            type="radio"
                                            name="rating-8"
                                            class="mask mask-star-2 bg-[#ddba40] form-radio text-[#ddba40] checked:bg-none"
                                          />
                                          <input
                                            type="radio"
                                            name="rating-8"
                                            class="mask mask-star-2 bg-[#ddba40] form-radio text-[#ddba40] checked:bg-none"
                                          />
                                          <input
                                            type="radio"
                                            name="rating-8"
                                            class="mask mask-star-2 bg-[#ddba40] form-radio text-[#ddba40] checked:bg-none"
                                          />
                                          <input
                                            type="radio"
                                            name="rating-8"
                                            class="mask mask-star-2 bg-[#ddba40] form-radio text-[#ddba40] checked:bg-none"
                                          />
                                          <input
                                            type="radio"
                                            name="rating-8"
                                            class="mask mask-star-2 bg-[#ddba40] form-radio text-[#ddba40] checked:bg-none"
                                          />
                                        </div>
                                        <form action="">
                                          <div class="flex justify-center mb-5">
                                            <textarea
                                              name=""
                                              v-model="input1"
                                              @input="checkFilled"
                                              id=""
                                              cols="25"
                                              rows="5"
                                              class="rounded-3xl border-2 border-[#e6e6e6] bg-[#f9f9f9] focus:outline-none ring-inset focus:ring focus:ring-[#207a7a] focus:border-[#207a7a] placeholder:text-center placeholder:font-light text-center p-3"
                                              placeholder="Describe your experience with the product... Did you like it? Do you have any tips on how to make the most out of the product?..."
                                            ></textarea>
                                          </div>
                                          <div class="flex justify-center mb-5">
                                            <textarea
                                              name=""
                                              v-model="input2"
                                              @input="checkFilled"
                                              id=""
                                              cols="25"
                                              rows="5"
                                              class="rounded-3xl border-2 border-[#e6e6e6] bg-[#f9f9f9] focus:outline-none ring-inset focus:ring focus:ring-[#207a7a] focus:border-[#207a7a] placeholder:text-center placeholder:font-light text-center p-3"
                                              placeholder="Purpose of using the product: eg. antiaging, spots, imperfections..."
                                            ></textarea>
                                          </div>
                                          <div class="flex justify-center">
                                            <!-- The button to open modal -->
                                            <!-- <button> -->
                                            <label for="recommendModal">
                                              <label for="newProduct">
                                                <label for="nextAddProduct">
                                                  <label
                                                    for="requestSubmitted"
                                                    class="text-white bg-[#164d4d] px-5 py-1 rounded-lg"
                                                  >
                                                    SUBMIT REQUEST
                                                  </label>
                                                </label>
                                              </label>
                                            </label>
                                            <!-- </button> -->

                                            <!-- Put this part before </body> tag -->
                                            <input
                                              type="checkbox"
                                              id="requestSubmitted"
                                              class="modal-toggle"
                                            />
                                            <div class="modal">
                                              <div
                                                class="modal-box relative bg-white w-[550px] md:h-[486px] h-[800px] flex justify-center items-center"
                                              >
                                                <button
                                                  class="absolute right-4 top-4"
                                                >
                                                  <img
                                                    src="/xModal.svg"
                                                    alt=""
                                                  />
                                                </button>
                                                <div
                                                  class="flex flex-col items-center gap-5"
                                                >
                                                  <p
                                                    class="text-center font-light text-[#618686]"
                                                  >
                                                    Request submited!
                                                  </p>
                                                  <img
                                                    src="/requestSubmitted.svg"
                                                    alt=""
                                                  />
                                                  <p
                                                    class="text-center max-w-[172px] font-light text-[#618686]"
                                                  >
                                                    Once the product is
                                                    reviewed, if everything is
                                                    all right the product and
                                                    review will be posted.
                                                  </p>

                                                  <button
                                                    class="text-white bg-[#164d4d] px-5 py-1 rounded-lg"
                                                  >
                                                    ADD ANOTHER PRODUCT
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- The button to open modal -->
                    <div class="flex justify-center mt-3">
                      <label
                        for="next"
                        class="text-white bg-[#164d4d] px-8 py-2 rounded-lg border-white cursor-pointer"
                        >Next</label
                      >
                    </div>
                    <!-- Put this part before </body> tag -->
                    <input type="checkbox" id="next" class="modal-toggle" />
                    <div class="modal">
                      <div
                        class="modal-box relative bg-white w-[550px] md:h-[486px] h-[800px]"
                      >
                        <label for="next" class="absolute right-4 top-4"
                          ><img src="/xModal.svg" alt=""
                        /></label>
                        <div class="">
                          <div class="md:grid md:grid-cols-7 md:gap-5">
                            <div
                              class="md:col-span-3 md:mt-3 flex flex-col items-center"
                            >
                              <div class="flex justify-start mb-3">
                                <img src="/iModal.svg" alt="" />
                                <p
                                  class="text-[#618686] font-semibold text-sm max-w-[113px] text-center"
                                >
                                  How to recommend
                                </p>
                              </div>
                              <p
                                class="text-center text-[#618686] mb-3 font-light max-w-[173px] text-xs"
                              >
                                1. Search for the product in Glamify by brand
                                and name. If you cannot find the product, add it
                                to the catalogue first!
                              </p>
                              <p
                                class="text-center text-[#618686] mb-3 font-light max-w-[173px] text-xs"
                              >
                                2. Add some comment to your recommendation: why
                                is it helpful to the issue?
                              </p>
                              <p
                                class="text-center text-[#618686] mb-3 font-light max-w-[173px] text-xs"
                              >
                                3. Review and post
                              </p>
                              <div class="md:mt-12">
                                <div class="flex justify-center">
                                  <img src="/retinol.svg" alt="" />
                                </div>
                                <p
                                  class="font-semibold text-center text-sm text-[#164d4d]"
                                >
                                  Retinol in <br />
                                  squalane 0.2%
                                </p>
                              </div>
                            </div>
                            <div class="md:col-span-4 md:mt-3">
                              <h2
                                class="text-center font-bold text-[#164d4d] mb-2"
                              >
                                Why is it a good product?
                              </h2>
                              <div class="flex justify-center">
                                <p
                                  class="text-center italic text-sm max-w-[249px] font-light text-[#164d4d] mb-3"
                                >
                                  “I have a very formal event tomorrow and need
                                  help finding a long stay red lipstick! I won’t
                                  have time to retouch it for hours and don’t
                                  want to look messy in the picures. Can anyone
                                  help?”
                                </p>
                              </div>
                              <h2
                                class="text-center font-bold text-[#164d4d] mb-3"
                              >
                                Your recommendation
                              </h2>
                              <form action="">
                                <div class="flex justify-center">
                                  <textarea
                                    name=""
                                    v-model="inputYourRecommendation"
                                    @input="checkFilled"
                                    id=""
                                    cols="30"
                                    rows="4"
                                    class="rounded-3xl border-2 border-[#e6e6e6] bg-[#f9f9f9] focus:outline-none ring-inset focus:ring focus:ring-[#207a7a] focus:border-[#207a7a] placeholder:text-center placeholder:font-light placeholder:text-xs text-center p-3 mb-3 max-w-[249px]"
                                    placeholder="Provide some examples of why your recommendation is a good match as a recommendation (based on your own experience) and how to use it for best results"
                                  ></textarea>
                                </div>
                                <div class="flex justify-center gap-3">
                                  <div class="mt-1">
                                    <label
                                      for="spellCheck"
                                      :class="spellCheckClass"
                                      >SPELL CHECK</label
                                    >
                                    <!-- Put this part before </body> tag -->
                                    <input
                                      type="checkbox"
                                      id="spellCheck"
                                      class="modal-toggle"
                                    />
                                    <div class="modal">
                                      <div
                                        class="modal-box bg-white md:h-[486px] h-[800px] w-[550px] flex justify-center items-center relative max-h-screen"
                                      >
                                        <label
                                          for="spellCheck"
                                          class="absolute right-4 top-4"
                                          ><img src="/xModal.svg" alt=""
                                        /></label>
                                        <div>
                                          <form>
                                            <h3 class="text-center mb-3">
                                              Your Text
                                            </h3>
                                            <div
                                              class="flex justify-center mb-3"
                                            >
                                              <textarea
                                                name=""
                                                id=""
                                                class="w-[360px] h-[105px] rounded-2xl border border-[#e6e6e6] bg-[#f9f9f9] focus:ring-[#207a7a] focus:border-[#207a7a] placeholder:p-3 p-3"
                                                :value="inputYourRecommendation"
                                              ></textarea>
                                            </div>
                                            <h3 class="text-center mb-3">
                                              Text correction
                                            </h3>
                                            <div
                                              class="flex justify-center mb-10"
                                            >
                                              <textarea
                                                name=""
                                                id=""
                                                class="w-[360px] h-[105px] rounded-2xl border border-[#e6e6e6] bg-[#f9f9f9] focus:ring-[#207a7a] focus:border-[#207a7a] placeholder:p-3 p-3"
                                              ></textarea>
                                            </div>
                                            <div
                                              class="flex justify-center gap-3"
                                            >
                                              <button
                                                class="text-white bg-[#e6e6e6] px-5 py-1 rounded-lg"
                                              >
                                                REJECT
                                              </button>
                                              <label
                                                for="spellCheck"
                                                class="text-white bg-[#164d4d] px-5 py-1 rounded-lg"
                                              >
                                                APPLY
                                              </label>
                                            </div>
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <button :class="publishClass">PUBLISH</button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="py-14">
          <p class="text-center text-[#fbf5e3] text-3xl font-light mb-8">
            Need help finding the perfect product?
          </p>
          <!-- The button to open modal -->
          <div class="flex justify-center">
            <label
              for="recommendationRequest"
              class="text-[#fbf5e3] bg-[#164d4d] border border-[#fbf5e3] rounded-lg py-2 px-3"
              >RECOMENDATION REQUEST</label
            >
          </div>

          <!-- Put this part before </body> tag -->
          <input
            type="checkbox"
            id="recommendationRequest"
            class="modal-toggle"
          />
          <div class="modal">
            <div
              class="modal-box relative bg-white w-[550px] md:h-[486px] h-[800px]"
            >
              <label for="recommendationRequest" class="absolute right-4 top-4"
                ><img src="/xModal.svg" alt=""
              /></label>
              <div class="md:grid md:grid-cols-7 md:gap-5 pt-3">
                <div class="md:col-span-3 flex flex-col items-center">
                  <div class="flex justify-start mb-3 gap-3">
                    <img src="/iModal.svg" alt="" />
                    <p
                      class="text-[#618686] font-semibold text-sm max-w-[115px] text-center"
                    >
                      How to request a recommendation
                    </p>
                  </div>
                  <p
                    class="text-center text-[#618686] mb-3 font-light max-w-[173px] text-xs"
                  >
                    1. Present your question (add as many details as possible)
                  </p>
                  <p
                    class="text-center text-[#618686] mb-3 font-light max-w-[173px] text-xs"
                  >
                    2. Select some features that help classifying your question
                  </p>
                  <p
                    class="text-center text-[#618686] mb-3 font-light max-w-[173px] text-xs"
                  >
                    3. Post!
                  </p>
                </div>
                <div class="md:col-span-4">
                  <p class="text-center text-[#164d4d] font-bold mb-3">
                    Post your question
                  </p>
                  <form action="">
                    <div class="flex justify-center">
                      <textarea
                        name=""
                        id=""
                        v-model="yourQuestion"
                        @input="checkFilled2"
                        cols="26"
                        rows="6"
                        placeholder="Write your question (eg. Does anyone know a good moisturizer that has a matte finish? My skin tends to get too shiny in the summer”)"
                        class="rounded-2xl border border-[#e6e6e6] bg-[#f9f9f9] focus:ring-[#207a7a] focus:border-[#207a7a] placeholder:text-center placeholder:p-3 placeholder:text-sm placeholder:font-light mb-5 p-3 font-light text-sm"
                      ></textarea>
                    </div>
                    <div class="flex justify-center gap-3">
                      <div class="flex justify-center gap-3">
                        <div class="mt-1">
                          <label for="spellCheck2" :class="spellCheckClass2"
                            >SPELL CHECK</label
                          >
                          <!-- Put this part before </body> tag -->
                          <input
                            type="checkbox"
                            id="spellCheck2"
                            class="modal-toggle"
                          />
                          <div class="modal">
                            <div
                              class="modal-box bg-white md:h-[486px] h-[800px] w-[550px] flex justify-center items-center relative max-h-screen"
                            >
                              <label
                                for="spellCheck2"
                                class="absolute right-4 top-4"
                                ><img src="/xModal.svg" alt=""
                              /></label>
                              <div>
                                <form>
                                  <h3 class="text-center mb-3">Your Text</h3>
                                  <div class="flex justify-center mb-3">
                                    <textarea
                                      name=""
                                      id=""
                                      class="w-[360px] h-[105px] rounded-2xl border border-[#e6e6e6] bg-[#f9f9f9] focus:ring-[#207a7a] focus:border-[#207a7a] placeholder:p-3 p-3"
                                      :value="yourQuestion"
                                    ></textarea>
                                  </div>
                                  <h3 class="text-center mb-3">
                                    Text correction
                                  </h3>
                                  <div class="flex justify-center mb-10">
                                    <textarea
                                      v-model="filed2"
                                      name=""
                                      id=""
                                      class="w-[360px] h-[105px] rounded-2xl border border-[#e6e6e6] bg-[#f9f9f9] focus:ring-[#207a7a] focus:border-[#207a7a] placeholder:p-3 p-3"
                                    ></textarea>
                                  </div>
                                  <div class="flex justify-center gap-3">
                                    <button
                                      class="text-white bg-[#e6e6e6] px-5 py-1 rounded-lg"
                                    >
                                      REJECT
                                    </button>
                                    <label
                                      for="spellCheck2"
                                      class="text-white bg-[#164d4d] px-5 py-1 rounded-lg"
                                    >
                                      APPLY
                                    </label>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="flex justify-center">
                        <label
                          for="moreInformation"
                          class="text-white bg-[#164d4d] px-5 py-1 rounded-lg"
                          >NEXT</label
                        >
                      </div>
                      <!-- Put this part before </body> tag -->
                      <input
                        type="checkbox"
                        id="moreInformation"
                        class="modal-toggle"
                      />
                      <div class="modal">
                        <div
                          class="modal-box relative bg-white w-[550px] md:h-[486px] h-[800px]"
                        >
                          <label
                            for="moreInformation"
                            class="absolute right-4 top-4"
                            ><img src="/xModal.svg" alt=""
                          /></label>
                          <div class="md:grid md:grid-cols-7 md:gap-5 pt-3">
                            <div class="col-span-3 flex flex-col items-center">
                              <div class="flex justify-start mb-3 gap-3">
                                <img src="/iModal.svg" alt="" />
                                <p
                                  class="text-[#618686] font-semibold text-sm max-w-[115px] text-center"
                                >
                                  How to request a recommendation
                                </p>
                              </div>
                              <p
                                class="text-center text-[#618686] mb-3 font-light max-w-[173px] text-xs"
                              >
                                1. Present your question (add as many details as
                                possible)
                              </p>
                              <p
                                class="text-center text-[#618686] mb-3 font-light max-w-[173px] text-xs"
                              >
                                2. Select some features that help classifying
                                your question
                              </p>
                              <p
                                class="text-center text-[#618686] mb-3 font-light max-w-[173px] text-xs"
                              >
                                3. Post!
                              </p>
                            </div>
                            <div class="col-span-4">
                              <p
                                class="text-center text-[#164d4d] font-bold mb-3"
                              >
                                Add some more information
                              </p>
                              <form action="">
                                <div class="flex justify-center">
                                  <select
                                    class="bg-[#f9f9f9] border border-[#e6e6e6] rounded-3xl h-[39px] w-full max-w-[249px] mb-5"
                                  >
                                    <option
                                      class="text-center"
                                      disabled
                                      selected
                                    >
                                      Select Your Category
                                    </option>
                                    <option class="text-center">
                                      Normal Apple
                                    </option>
                                    <option class="text-center">
                                      Normal Orange
                                    </option>
                                    <option class="text-center">
                                      Normal Tomato
                                    </option>
                                  </select>
                                </div>
                                <div class="flex justify-center">
                                  <select
                                    class="bg-[#f9f9f9] border border-[#e6e6e6] rounded-3xl h-[39px] w-full max-w-[249px] mb-5"
                                  >
                                    <option
                                      class="text-center"
                                      disabled
                                      selected
                                    >
                                      Target Area
                                    </option>
                                    <option class="text-center">
                                      Normal Apple
                                    </option>
                                    <option class="text-center">
                                      Normal Orange
                                    </option>
                                    <option class="text-center">
                                      Normal Tomato
                                    </option>
                                  </select>
                                </div>
                                <div class="flex justify-center">
                                  <label
                                    for="doubleCheck"
                                    class="text-white bg-[#164d4d] px-5 py-1 rounded-lg"
                                    >NEXT</label
                                  >
                                </div>
                                <!-- Put this part before </body> tag -->
                                <input
                                  type="checkbox"
                                  id="doubleCheck"
                                  class="modal-toggle"
                                />
                                <div class="modal">
                                  <div
                                    class="modal-box relative bg-white w-[550px] md:h-[486px] h-[800px]"
                                  >
                                    <label
                                      for="doubleCheck"
                                      class="absolute right-4 top-4"
                                      ><img src="/xModal.svg" alt=""
                                    /></label>
                                    <div
                                      class="md:grid md:grid-cols-7 md:gap-5 pt-3"
                                    >
                                      <div
                                        class="md:col-span-3 flex flex-col items-center"
                                      >
                                        <div
                                          class="flex justify-start mb-3 gap-3"
                                        >
                                          <img src="/iModal.svg" alt="" />
                                          <p
                                            class="text-[#618686] font-semibold text-sm max-w-[115px] text-center"
                                          >
                                            How to request a recommendation
                                          </p>
                                        </div>
                                        <p
                                          class="text-center text-[#618686] mb-3 font-light max-w-[173px] text-xs"
                                        >
                                          1. Present your question (add as many
                                          details as possible)
                                        </p>
                                        <p
                                          class="text-center text-[#618686] mb-3 font-light max-w-[173px] text-xs"
                                        >
                                          2. Select some features that help
                                          classifying your question
                                        </p>
                                        <p
                                          class="text-center text-[#618686] mb-3 font-light max-w-[173px] text-xs"
                                        >
                                          3. Post!
                                        </p>
                                      </div>
                                      <div class="col-span-4">
                                        <p
                                          class="text-center text-[#164d4d] font-bold mb-3"
                                        >
                                          Double check
                                        </p>
                                        <div
                                          class="flex justify-center items-center mb-2"
                                        >
                                          <img
                                            src="/lighting.svg"
                                            alt="lighting"
                                          />
                                          <img src="/brush.svg" alt="brush" />
                                        </div>
                                        <div class="flex justify-center">
                                          <p
                                            class="text-center max-w-[270px] text-sm font-light text-black italic"
                                          >
                                            “I have a very formal event tomorrow
                                            and need help finding a long stay
                                            red lipstick! I won’t have time to
                                            retouch it for hours and don’t want
                                            to look messy in the picures. Can
                                            anyone help?”
                                          </p>
                                        </div>
                                        <div class="flex justify-center py-3">
                                          <NuxtLink to="/waiting">
                                            <button
                                              class="text-white bg-[#164d4d] px-5 py-1 rounded-lg"
                                            >
                                              POST
                                            </button>
                                          </NuxtLink>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
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
      inputYourRecommendation: "",
      yourQuestion: "",
      filled: false,
      filled2: false,
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
    checkFilled2() {
      if (this.yourQuestion) {
        this.filled2 = true;
      } else {
        this.filled2 = false;
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
    spellCheckClass2() {
      if (this.filled2) {
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

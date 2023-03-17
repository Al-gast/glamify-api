<template>
  <div>
    <header
      class="shadow-sm bg-[#0C3434] sticky top-0 z-50 md:px-20 p-5 md:p-0"
    >
      <nav
        class="container mx-auto h-[79px] md:flex items-center justify-around hidden"
      >
        <NuxtLink href="/"
          ><p class="text-white font-bold text-xl">glamify beauty</p></NuxtLink
        >
        <form>
          <div class="flex">
            <div class="relative w-[471px] h-[55px]">
              <input
                type="search"
                id="search-dropdown"
                class="block p-2.5 pl-[26px] w-full h-[55px] z-20 text-sm text-gray-900 bg-gray-50 rounded-2xl border border-[#E6E6E6] focus:outline-none focus:border-[#164D4D] ring-inset focus:ring focus:ring-[#164D4D]"
                placeholder="Search for your product..."
                required
              />
              <button
                type="submit"
                class="absolute top-0 right-0 bottom-0 p-2.5 w-[60px] text-sm font-medium text-white bg-[#164D4D] rounded-r-2xl border border-white hover:bg-[#164D4D]"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span class="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
        <ul class="flex gap-24">
          <li>
            <NuxtLink to="/product-recomendation"
              ><p class="text-white text-center">
                Recomendation <br />Request
              </p></NuxtLink
            >
          </li>
          <li>
            <NuxtLink href="/detail-product"
              ><p class="text-white text-center">
                Review <br />
                Product
              </p></NuxtLink
            >
          </li>
          <li class="flex items-center">
            <NuxtLink to="/login">
              <p
                class="text-white text-center"
                @click="delCookie"
                v-html="login()"
              ></p>
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <nav class="md:hidden">
        <div class="flex justify-around">
          <div class="flex justify-center">
            <label for="modalNavbar" class="pt-1.5">
              <img src="/burgerNav.svg" alt="" />
            </label>

            <input type="checkbox" id="modalNavbar" class="modal-toggle" />
            <div class="modal">
              <div
                class="modal-box relative bg-green h-screen p-0 rounded-none border border-[#FBF5E3]"
              >
                <label for="modalNavbar" class="absolute right-4 top-4"
                  ><img src="/xModalWhite.svg" alt=""
                /></label>
                <div class="flex flex-col">
                  <label for="modalNavbar">
                    <ul class="flex flex-col">
                      <li>
                        <a href="/"
                          ><p
                            class="text-[#FBF5E3] font-bold text-2xl pt-5 pl-5 pb-5"
                          >
                            glamify beauty
                          </p></a
                        >
                      </li>
                      <hr class="border-[1px]" />
                      <li>
                        <a href="/product-recomendation"
                          ><p class="text-[#FBF5E3] font-light p-5">
                            Recomendation request
                          </p></a
                        >
                      </li>
                      <hr class="border-[1px]" />
                      <li>
                        <a href="/detail-product"
                          ><p class="text-[#FBF5E3] font-light p-5">
                            Product review
                          </p></a
                        >
                      </li>
                      <hr class="border-[1px]" />
                      <li class="p-7"></li>
                      <hr class="border-[1px]" />
                      <li class="p-7"></li>
                      <hr class="border-[1px]" />
                      <li class="p-7"></li>
                      <hr class="border-[1px]" />
                      <li class="p-7"></li>
                      <hr class="border-[1px]" />
                      <li class="p-7"></li>
                      <hr class="border-[1px]" />
                      <li class="p-7"></li>
                      <hr class="border-[1px]" />
                    </ul>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a href="/"
              ><p class="text-white font-bold text-xl">glamify beauty</p></a
            >
          </div>
          <div class="flex justify-center">
            <a href="/login">
              <img src="/user.svg" alt="" />
            </a>
          </div>
        </div>
        <div>
          <form>
            <div class="flex justify-center pt-5">
              <div class="relative h-[55px]">
                <input
                  type="search"
                  id="search-dropdown"
                  class="block p-2.5 pl-[26px] w-[297px] h-[55px] z-20 text-sm text-gray-900 bg-gray-50 rounded-2xl border border-[#E6E6E6] focus:outline-none focus:border-[#164D4D] ring-inset focus:ring focus:ring-[#164D4D]"
                  placeholder="Search for your product..."
                  required
                />
                <button
                  type="submit"
                  class="absolute top-0 right-0 bottom-0 p-2.5 w-[60px] text-sm font-medium text-white bg-[#164D4D] rounded-r-2xl border border-white hover:bg-[#164D4D]"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <span class="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </nav>
    </header>

    <!-- output the page content -->
    <div class="bg-green h-full">
      <slot />
    </div>

    <footer class="md:hidden">
      <div class="bg-[#0C3434] h-[246px] md:py-5 py-8">
        <div class="flex justify-center">
          <div class="max-w-[450px] grid md:flex grid-cols-2 md:gap-12 gap-8">
            <p class="text-white font-poppins text-center">About us</p>
            <p class="text-white font-poppins text-center">The platform</p>
            <p class="text-white font-poppins text-center">Contact</p>
            <p class="text-white font-poppins text-center">Imprint</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const auth = useCookie("auth");

console.log(auth.value, "ini auth");

const login = () => {
  if (auth.value !== undefined) {
    return `Log out`;
  } else {
    return "Login / <br/> Sign up";
  }
};

const delCookie = () => {
  auth.value = undefined;
};
</script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}

body {
  background-color: #164d4d;
  margin: 0px;
}
</style>

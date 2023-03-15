<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <div>
      <p
        class="font-poppins font-bold text-2xl md:font-normal md:text-[36px] text-[#FBF5E3] md:mb-[33px] mb-4 text-center"
      >
        Sign up
      </p>
    </div>
    <form @submit.prevent="onSubmit">
      <div class="flex justify-center items-center">
        <input
          class="md:w-[450px] w-[350px] h-[58px] mb-[24px] rounded-[20px] bg-[#164D4D] border border-[#E6E6E6] focus:outline-none ring-inset focus:ring focus:ring-[#FBF5E3] focus:border-[#FBF5E3] text-center text-[#FBF5E3] placeholder:font-inter placeholder:text-center placeholder:text-[#FBF5E3]"
          placeholder="Name"
          required
          v-model="form.name"
        />
      </div>
      <div class="flex justify-center items-center">
        <input
          type="email"
          class="md:w-[450px] w-[350px] h-[58px] mb-[24px] rounded-[20px] bg-[#164D4D] border border-[#E6E6E6] focus:outline-none ring-inset focus:ring focus:ring-[#FBF5E3] focus:border-[#FBF5E3] text-center text-[#FBF5E3] placeholder:font-inter placeholder:text-center placeholder:text-[#FBF5E3]"
          placeholder="Email"
          required
          v-model="form.email"
        />
      </div>
      <div class="flex justify-center items-center">
        <input
          class="md:w-[450px] w-[350px] h-[58px] mb-[24px] rounded-[20px] bg-[#164D4D] border border-[#E6E6E6] focus:outline-none ring-inset focus:ring focus:ring-[#FBF5E3] focus:border-[#FBF5E3] text-center text-[#FBF5E3] placeholder:font-inter placeholder:text-center placeholder:text-[#FBF5E3]"
          placeholder="Username"
          required
          v-model="form.username"
        />
      </div>
      <div class="flex justify-center items-center">
        <input
          type="password"
          class="md:w-[450px] w-[350px] h-[58px] mb-[46px] rounded-[20px] bg-[#164D4D] border border-[#E6E6E6] focus:outline-none ring-inset focus:ring focus:ring-[#FBF5E3] focus:border-[#FBF5E3] text-center text-[#FBF5E3] placeholder:font-inter placeholder:text-center placeholder:text-[#FBF5E3]"
          placeholder="Password"
          required
          v-model="form.password"
        />
      </div>

      <div class="mb-[46px] flex justify-center">
        <div
          class="w-[10px] h-[10px] bg-[#FBF5E3] rounded-full mr-[27px]"
        ></div>
        <div
          class="w-[10px] h-[10px] border-solid border-2 border-[#FBF5E3] rounded-full"
        ></div>
      </div>

      <div class="text-center">
        <button
          type="submit"
          class="bg-[#FBF5E3] rounded-[10px] w-[119px] h-[40px]"
        >
          <p class="text-[#164D4D] font-inter font-bold">NEXT</p>
        </button>
        <!-- <a
          href="/confirmEmail"
          class="bg-[#FBF5E3] px-[45px] py-[12px] rounded-[10px] w-[119px] h-[40px] text-[#164D4D] font-inter font-bold"
          >NEXT</a
        > -->
      </div>
    </form>
  </div>
</template>

<script setup>
const url = "http://127.0.0.1:8000/api/auth/register";
const _error = ref(null);

const form = reactive({
  name: "",
  email: "",
  username: "",
  password: "",
});

async function onSubmit() {
  const { data, error } = await useFetch(url, {
    method: "post",
    body: form,
  });
  if (error.value) {
    _error.value = error.value.data.error;
    return;
  }
  navigateTo("/confirmEmail");
}
</script>

<style scoped></style>

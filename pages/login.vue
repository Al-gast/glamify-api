<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <div>
      <p
        class="font-poppins font-bold md:font-normal text-2xl md:text-[36px] text-[#FBF5E3] md:mb-[33px] mb-4 text-center"
      >
        Log in
      </p>
    </div>
    <div v-if="_error">
      <p class="bg-red-500 text-red-200 text-sm p-3 mb-5">
        {{ _error }}
      </p>
    </div>
    <form @submit.prevent="onSubmit">
      <div class="flex justify-center items-center">
        <input
          class="md:w-[450px] w-[350px] h-[58px] mb-[24px] rounded-[20px] bg-[#164D4D] border border-[#E6E6E6] focus:outline-none ring-inset focus:border-[#FBF5E3] focus:ring focus:ring-[#FBF5E3] text-center text-[#FBF5E3] placeholder:font-inter placeholder:text-center placeholder:text-[#FBF5E3]"
          placeholder="Email or Username"
          required
          v-model="form.email"
        />
      </div>
      <div class="flex justify-center items-center">
        <input
          type="password"
          class="md:w-[450px] w-[350px] h-[58px] mb-[24px] rounded-[20px] bg-[#164D4D] border border-[#E6E6E6] focus:outline-none ring-inset focus:border-[#FBF5E3] focus:ring focus:ring-[#FBF5E3] text-center text-[#FBF5E3] placeholder:font-inter placeholder:text-center placeholder:text-[#FBF5E3]"
          placeholder="Password"
          required
          v-model="form.password"
        />
      </div>
      <div class="text-center md:mb-[22px] mb-7">
        <a
          href="#"
          class="text-[#FBF5E3] font-inter underline underline-offset-4"
          >Forgot password?</a
        >
      </div>
      <div class="text-center md:mb-[80px] mb-7">
        <!-- <button
          @click="clicked"
          type="button"
          class="bg-[#FBF5E3] rounded-[10px] md:w-[119px] md:h-[40px] px-8 py-2 md:px-0 md:py-0"
        >
          <p class="text-[#164D4D] font-inter font-bold">SUBMIT</p>
        </button> -->
        <button
          type="submit"
          class="bg-[#FBF5E3] rounded-[10px] md:w-[119px] md:h-[40px] px-8 py-2 md:px-0 md:py-0"
        >
          <p class="text-[#164D4D] font-inter font-bold">SUBMIT</p>
        </button>
      </div>
    </form>
    <div class="text-center">
      <a
        href="/signup"
        class="text-[#FBF5E3] font-inter underline underline-offset-4 font-semibold"
        >Don't have an account yet? <br class="md:hidden" />
        Sign up!</a
      >
    </div>
  </div>
</template>

<script setup>
function clicked() {
  const authCookie = useCookie("auth");
  authCookie.value = true;
  const reload = useCookie("reload");
  reload.value = true;
  navigateTo("/");
}

const url = "http://127.0.0.1:8000/api/auth/login";
const _error = ref(null);

const form = reactive({
  email: "",
  password: "",
});

async function onSubmit() {
  const { data, error } = await useFetch(url, {
    method: "post",
    body: form,
  });
  console.log(data);
  if (error.value) {
    console.log(error);
    _error.value = "login failed";
    return;
  }

  const authCookie = useCookie("auth");
  authCookie.value = true;
  const reload = useCookie("reload");
  reload.value = true;
  navigateTo("/");
}
</script>

<style scoped></style>

<script setup lang="ts">
import useAuth from '~~/composables/useAuth';


const router = useRouter();
console.log(router);
definePageMeta({
    layout: "login-layout",
});

const data = ref<any>({
  account: "",
  password: ""
})

let mode = ref<any>('signin-mode')

let loading = ref<any>({
  login: false,
})

const registerAccount = async (formData: any) => {
  mode.value = 'signin-mode'
  data.value = {
    account: formData.account,
    password: formData.password
  }
};

const login = async () => {
  loading.value.login = true
  const response = await useAuth().login(data.value.account, data.value.password)
  if (response) {
    useNotify('success', 'Đăng nhập thành công').show()
    router.push({ path: '/' })
  }
  loading.value.login = false
}
</script>
<style lang="sass">
@import '~~/assets/sass/_login.sass'
</style>
<template>
  <section class="login_section">
    <div class="login">
      <div class="login_form">
        <template v-if="mode === 'signin-mode'">
          <div class="login_form_input">
            <h3 class="form_title">Login</h3>
            <form @submit.prevent="login()">
              <div class="form_group">
                <label class="label" for="name">Username</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="data.account"
                  placeholder="Type your username"
                  required
                >
              </div>
              <div class="form_group">
                <label class="label" for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="data.password"
                  placeholder="Type your password"
                  required
                >
              </div>
              <div class="form_action">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  <label for="rememberCheck">
                    Remember Me
                  </label>
                </div>
                <a @click="$router.push('/resetPassword')" class="form_link">Forgot Password?</a>
              </div>
              <button :disabled="loading.login" type="submit" class="btn btn-primary form_submit w-100">
                <span v-if="loading.login" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Login
              </button>
            </form>
            <div class="form-helper">
              <span>Don't have an account? </span>
              <a @click="mode = 'signup-mode'" class="form_link">Click here to sign up.</a>
            </div>
          </div>
        </template>
        <template v-if="mode === 'signup-mode'">
          <LazySignUp @sign-up="registerAccount" @change-mode="mode = 'signin-mode'" />
        </template>
      </div>
      <div class="login_info">
        <img v-if="mode === 'signin-mode'" src="@/assets/images/image1.png" alt="">
        <img v-if="mode === 'signup-mode'" src="@/assets/images/image2.png" alt="">
      </div>
    </div>
  </section>
</template>
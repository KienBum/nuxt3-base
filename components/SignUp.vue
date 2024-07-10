<template>
  <div class="login_form_input">
    <h3 class="form_title">Sign Up</h3>
    <form @submit.prevent="registerAccount()" >
      <div class="form_group">
        <label class="label" for="name">Full name</label>
        <Field name="name" rules="required" />
        <input
          type="text"
          class="form-control"
          v-model="data.name"
          placeholder="Username"
          required
        />
      </div>
      <div class="form_group">
        <label class="label" for="mail">Email address</label>
        <input
          type="text"
          class="form-control"
          v-model="data.email"
          placeholder="Email"
          required
        />
      </div>
      <div class="form_group">
        <label class="label" for="phone">Phone Number</label>
        <input
          type="text"
          class="form-control"
          v-model="data.phone"
          placeholder="Phone"
          required
        />
      </div>
      <div class="form_group">
        <label class="label" for="mail">Date of Birth</label>
        <input
          type="text"
          class="form-control"
          v-model="data.dob"
          placeholder="Dob"
          required
        />
      </div>
      <div class="form_group">
        <label class="label" for="account">Account</label>
        <input
          type="text"
          class="form-control"
          v-model="data.account"
          placeholder="Account"
          required
        />
      </div>
      <div class="form_group">
        <label class="label" for="pass">Password</label>
        <input
          type="password"
          class="form-control"
          v-model="data.password"
          placeholder="Password"
          autocomplete="new-password"
          required
        />
      </div>
      <div class="form_group">
        <label class="label" for="pass">Re-Password</label>
        <input
          type="password"
          class="form-control"
          v-model="data.rePassword"
          placeholder="Password"
          autocomplete="new-password"
          required
        />
      </div>
      <div class="form_action">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            v-model="data.isAgree"
            id="flexCheckDefault"
          />
          <label for="rememberCheck">I agree with the terms of use</label>
        </div>
      </div>
      <button type="submit" :disabled="!data.isAgree || loading.register" class="btn btn-primary form_submit w-100">
        <span
          v-if="loading.register"
          class="spinner-border spinner-border-sm"
          role="status" aria-hidden="true"
        ></span>
        Sign up
      </button>
    </form>
    <div class="form-helper">
      <span>Already have an Account? </span>
      <a @click="$emit('change-mode', 'signin-mode')" class="form_link" href="#">Sign in.</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const props = defineProps({
  item: {
    type: [Object],
    default: () => ({}),
  },
});

let data = ref<any>({
  name: '',
  email: '',
  phone: '',
  dob: '',
  account: '',
  password: '',
  rePassword: '',
  isAgree: false
});

let loading = ref<any>({
  register: false,
})
const checkPassword = () => {
  return data.password === data.rePassword;
}
const registerAccount = async () => {
  
  const checkPrd = checkPassword();
  if ( checkPrd ) {
  loading.value.register = true
  let formData: any = data.value

  // const response = await useAuth().register(
  //   formData.name,
  //   formData.email,
  //   formData.phone,
  //   formData.dob,
  //   formData.account,
  //   formData.password,
  // )
  // if (response) {
  //   // useNotify('success', 'Đăng ký tài khoản thành công').show()
  //   emits("sign-up", formData);
  // }
  useNotify('success', 'Đăng ký tài khoản thành công').show()
  router.push('/')
  loading.value.register = false
    }
};

const emits = defineEmits(["change-mode", "sign-up"]);
</script>

<style lang="sass" scoped>
@import '~~/assets/sass/_tree.sass'
</style>

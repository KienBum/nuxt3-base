<template>
  <div class="login_form_input">
    <h3 class="form_title">Sign Up</h3>
    <a-form
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      layout="horizontal"
      style="max-width: 600px"
      ref="formRef"
      name="custom-validation"
      :model="formState"
      :rules="rules"
      @finish="handleFinish"
      @validate="handleValidate"
      @finishFailed="handleFinishFailed"
    >
      <div class="form_group">
        <a-form-item has-feedback class="label" label="Full name" name="name">
          <a-input
            v-model:value="formState.name"
            type="text"
            placeholder="Full name"
            autocomplete="off"
          />
        </a-form-item>
      </div>
      <div class="form_group">
        <a-form-item
          has-feedback
          class="label"
          label="Email address"
          name="email"
        >
          <a-input
            v-model:value="formState.email"
            type="text"
            placeholder="Email"
            autocomplete="off"
          />
        </a-form-item>
      </div>
      <div class="form_group">
        <a-form-item
          has-feedback
          class="label"
          label="Phone Number"
          name="phone"
        >
          <a-input
            v-model:value="formState.phone"
            type="text"
            placeholder="Phone"
            autocomplete="off"
          />
        </a-form-item>
      </div>
      <div class="form_group">
        <a-form-item
          has-feedback
          class="label"
          label="Date of Birth"
          name="dob"
        >
          <a-input
            v-model:value="formState.dob"
            type="date"
            placeholder="Dob"
            autocomplete="off"
          />
        </a-form-item>
      </div>
      <div class="form_group">
        <a-form-item has-feedback class="label" label="Account" name="account">
          <a-input
            v-model:value="formState.account"
            type="text"
            placeholder="Account"
            autocomplete="off"
          />
        </a-form-item>
      </div>
      <div class="form_group">
        <a-form-item
          has-feedback
          class="label"
          label="Password"
          name="password"
        >
          <a-input
            v-model:value="formState.password"
            type="password"
            placeholder="Password"
            autocomplete="off"
          />
        </a-form-item>
      </div>
      <div class="form_group">
        <a-form-item
          has-feedback
          class="label"
          label="Re-Password"
          name="rePassword"
        >
          <a-input
            v-model:value="formState.rePassword"
            type="password"
            placeholder="Re-Password"
            autocomplete="off"
          />
        </a-form-item>
      </div>
      <!--  -->
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
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button
          class="btn btn-primary form_submit w-100"
          type="primary"
          html-type="submit"
          :disabled="!data.isAgree || loading.register"
          >Sign up</a-button
        >
        <!-- <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button> -->
      </a-form-item>
      <!-- <button
        type="submit"
        :disabled="!data.isAgree || loading.register"
        class="btn btn-primary form_submit w-100"
      >
        <span
          v-if="loading.register"
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Sign up
      </button> -->
    </a-form>
    <div class="form-helper">
      <span>Already have an Account? </span>
      <a @click="$emit('change-mode', 'signin-mode')" class="form_link" href="#"
        >Sign in.</a
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { Rule } from "ant-design-vue/es/form";
import type { FormInstance } from "ant-design-vue";
interface FormState {
  name: string;
  email: string;
  phone: string;
  dob: string;
  account: string;
  password: string;
  rePassword: string;
}
const formRef = ref<FormInstance>();
const formState = reactive<FormState>({
  name: "",
  email: "",
  phone: "",
  dob: "",
  account: "",
  password: "",
  rePassword: "",
});
const checkPhone = async (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject("Please input the phone");
  }
  if (!(/^0\d{9}$/.test(value))){
    return Promise.reject('Invalid format phone')
  }
    return Promise.resolve();
};
const checkDob = async (_rule: Rule, value: number) => {
  if (!value) {
    return Promise.reject("Please input the dob");
  }
    return Promise.resolve();
};
const validateData = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("Please input the data");
  } else {
    return Promise.resolve();
  }
};const validatePass = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("Please input the password");
  } else {
    if (formState.rePassword !== "") {
      formRef.value.validateFields("rePassword");
    }
    return Promise.resolve();
  }
};
const validatePass2 = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("Please input the password again");
  } else if (value !== formState.password) {
    return Promise.reject("Two inputs don't match!");
  } else {
    return Promise.resolve();
  }
};

const rules: Record<string, Rule[]> = {
  name: [{ required: true, validator: validateData, trigger: "change" }],
  email: [{ required: true, validator: validateData, trigger: "change" }],
  phone: [{ required: true, validator: checkPhone, trigger: "change" }],
  dob: [{ validator: checkDob, trigger: "change" }],
  account: [{ required: true, validator: validateData, trigger: "change" }],
  password: [{ required: true, validator: validatePass, trigger: "change" }],
  rePassword: [{ validator: validatePass2, trigger: "change" }],
};
const labelCol = { style: { width: '150px' } };
const wrapperCol = { span: 14 };
const handleFinish = (values: FormState) => {
  registerAccount(values)
};
const handleFinishFailed = (errors) => {
  console.log(errors);
};
const resetForm = () => {
  formRef.value.resetFields();
};
const handleValidate = (...args) => {
  // console.log(args);
};
const router = useRouter();
const props = defineProps({
  item: {
    type: [Object],
    default: () => ({}),
  },
});

let data = ref<any>({
  name: "",
  email: "",
  phone: "",
  dob: "",
  account: "",
  password: "",
  rePassword: "",
  isAgree: false,
});

let loading = ref<any>({
  register: false,
});
const registerAccount = async (values: FormState) => {

    loading.value.register = true;
    
    const response = await useAuth().register(
      values.name,
      values.email,
      values.phone,
      values.dob,
      values.account,
      values.password,
    )
    console.log(222, response);
    
    if (response) {
      useNotify('success', 'Đăng ký tài khoản thành công').show()
      emits("sign-up", values);
    }
    // router.push("/");
    loading.value.register = false;
};

const emits = defineEmits(["change-mode", "sign-up"]);
</script>

<style lang="sass" scoped>
@import '~~/assets/sass/_tree.sass'
</style>

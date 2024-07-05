import FloatingVue from "floating-vue";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(FloatingVue);
  vueApp.use(Antd);
  vueApp.component("VueCtkDateTimePicker", VueCtkDateTimePicker);
});

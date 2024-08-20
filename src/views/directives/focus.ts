import { DirectiveBinding } from "vue";

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.focus();
    console.log(binding);
  },
  updated(el: HTMLElement) {
    el.focus();
  },
};

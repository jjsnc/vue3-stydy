import { DirectiveBinding } from "vue";

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.focus();
  },
  updated(el: HTMLElement) {
    el.focus();
  },
};

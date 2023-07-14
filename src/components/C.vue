<script>

import {h} from 'vue';
export default {
  props: ['msg'],
  setup(props, { slots }) {
    return () => [
      // 默认插槽：
      // <div><slot /></div>
      h('div', slots.default()),

      // 具名插槽：
      // <div><slot name="footer" :text="message" /></div>
      h('div',slots.footer({
        text:props.msg
      }))
     
    ]
  }
}
</script>

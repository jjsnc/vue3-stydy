<script>
import { ref, h } from "vue";

export default {
  props: {},
  setup(props) {
    let p = h("p", "1111");
    const count = ref(1);
    const ok = ref("ok");
    return () =>
      h(
        "div",
        { style: { "background-color": "#2f2" }, id: "menu" },
        Array.from({ length: 2 }).map(() => {
          return h("p", "hahaha");
        }),
        [ok.value ? h("div", "yes") : h("span", "no")],
        [h('button',{onClick(event){
           console.log(event)
        }},'click Me')]
      );
  },
};
</script>

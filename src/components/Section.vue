<template>
    <section class="section" :style="cssVars">
        <slot name="image" />
    </section>
</template>


<script>
export default {
  name: "Section",
  props: ["border"],
  computed: {
    cssVars() {
      return {
        "--border": this.border,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/css/variables.scss";

section {
    border-left: var(--warm-grey) 1px solid;
    border-right: var(--warm-grey) 1px solid;
    border-bottom: 12px var(--border) solid;
    padding: 0;
    margin: 0;
}

img {
    width: 100%;
    display: block;
}
</style>
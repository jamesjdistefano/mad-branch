<template>
    <section class="section" :class="display" :style="cssVars">
        <slot name="image" />
        <slot name="second" />
    </section>
</template>


<script>
export default {
  name: "Section",
  props: ["border", "display"],
  display: {
      type: String,
  },
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

.two-up { 
  display: flex; 
  justify-content: space-evenly;
  padding: 4rem;
  img { 
    display: inline;
    width: 40%;
    border: 1px $warm-grey solid;
    }
}
</style>
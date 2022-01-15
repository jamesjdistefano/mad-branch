<template>
    <section class="copy-block" :style="{'background-color' : bgColor}">
        <slot />
        <p class="attribution"><slot name="secondary" /></p>
    </section>
</template>


<script>
export default {
  name: "PageSection",
  props: {
    align: {
      type: String,
    },
    bgColor: {
      type: String,
    },
  },
};
</script>


<style scoped>

section {
    background-color: black;
    border-left: var(--warm-grey) 1px solid;
    border-right: var(--warm-grey) 1px solid;
    padding: 28rem;
    margin: 0;
}

img {
    width: 100%;
    display: block;
}


.attribution { 
    font-family: Heebo-Thin, sans-serif; 
    font-size: 2.1rem;
    margin-top: 8rem;
}

a {
    color: var(--spring-green);
}

</style>
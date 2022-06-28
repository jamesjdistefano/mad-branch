<template>
    <section class="copy-block" :class= "align" :style="{'background-color' : bgColor}">
        <slot />
        <p class="attribution"><slot name="secondary" /></p>
    </section>
</template>


<script>
export default {
  name: "CopyBlock",
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
    padding: 28rem 12rem;
    margin: 0;
    color: white;
}

.center {
  display: flex;
  justify-content: center;
}


.attribution { 
    font-family: Heebo-Thin, sans-serif; 
    font-size: clamp(1.8rem, 50%, 2.4rem);
    margin-top: 8rem;
}

a {
    color: var(--spring-green);
}

</style>
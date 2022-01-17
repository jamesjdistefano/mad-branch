<template>
    <section :style="{'background-color' : bgColor}">
        <p class="quote">&#8220;<slot />&#8221; </p>
        <p class="attribution">&#8212; <slot name="secondary" /></p>
    </section>
</template>


<script>
export default {
  name: "Quote",
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

img {
    width: 100%;
    display: block;
}


.quote { 
   margin-top: 8rem;
   font-family: Playfair-Italic, serif; 
   font-size: 8rem;
   font-weight: 400;
   letter-spacing: -0.01em;
}

.attribution { 
   font-family: Heebo-Thin, serif; 
   margin-top: 4.2rem;
   font-size: 2.1rem;
   font-weight: 400;
   letter-spacing: 0.02em;
   display: flex; 
   justify-content: flex-end;
   margin-right: 40px;
}

a {
    color: var(--spring-green);
}

</style>
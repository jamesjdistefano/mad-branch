<template>
    <nav class="navigation" :class="color">
        <g-link class="nav__link" to="/"><img src="../../static/images/MB_mark.svg" width=72 :class = "color" alt="Mad Branch mark." /></g-link>
        <ul>
            <li><g-link class="nav__link" to="/projects/wez/">Projects</g-link></li>
            <li><g-link class="nav__link" to="/about/">About</g-link></li>
            <li><g-link class="nav__link" to="mailto:madbranch.studio@gmail.com">Contact</g-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    color: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/variables.scss";

nav {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    color: $dark-dark;
}

a {
    color: $dark-dark;
    text-decoration: none;
}

ul {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 4rem;
    list-style: none;
}

li {
    font-family: Heebo-Light, sans-serif;
    font-size: 2.4rem;
}

.white { 
    filter: invert(100%) sepia(67%) saturate(0%) hue-rotate(183deg) brightness(106%) contrast(101%);
}
</style>
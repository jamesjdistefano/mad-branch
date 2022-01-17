<template>
    <nav class="navigation">
        <g-link class="nav__link" to="/"><img src="../../static/images/MB_mark.svg" width=72 /></g-link>
        <ul>
            <li><g-link class="nav__link" to="/">Projects</g-link></li>
            <li><g-link class="nav__link" to="/about/">About</g-link></li>
            <li><g-link class="nav__link" to="/">Contact</g-link></li>
        </ul>
    </nav>
</template>

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
</style>
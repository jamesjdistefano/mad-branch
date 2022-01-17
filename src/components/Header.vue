<template>
    <header class="header">
      <Navigation />

      <img class="whitespace" src="../../static/images/mad-branch-logo.svg" />
    </header>
</template>

<style lang="scss" scoped>
@import "../assets/css/variables.scss";

header {
    background-image: url(../../static/images/background.png);
    border-left: var(--warm-grey) 1px solid;
    border-right: var(--warm-grey) 1px solid;
    border-bottom: 12px var(--perrywinkle) solid;
    padding: 1rem 4rem 0rem 4rem;
    margin: 0;
}

img {
    width: 100%;
    display: block;
}

.whitespace {
  margin-top: 45rem;
  margin-bottom: 10rem;
}
</style>
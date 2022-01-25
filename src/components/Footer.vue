<template>
    <footer class="header whitespace">
      <img src ="../../static/images/MB_mark_white.svg" width=220 alt="Mad Branch mark, again. Bigger this time. And white."/>
      <p>Copyright 2022, <a href="mailto: madbranch.studio@gmail.com">Mad Branch Studio</a>. All rights blah blah.</p>
    </footer>
</template>

<style lang="scss" scoped>
@import "../assets/css/variables.scss";

footer {
    background-color: $dark-dark; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
}

img {
    display: block;
}

p { 
  font-family: Heebo-Light;
  margin-top: 5rem;
}
.whitespace {
  padding-top: 45rem;
  padding-bottom: 10rem;
}
</style>
<template>
  <div>
    <Navigation color="white"/>
    <main>
      <slot/>
    </main>
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>


</style>

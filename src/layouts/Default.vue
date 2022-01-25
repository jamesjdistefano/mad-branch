<template>
  <div>
    <Navigation />
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

<style>


</style>

<template>
  <Default>
    <h1>About</h1>
    <Section border="var(--salmon)">
      <template #image><img src="../../static/images/photography.png" /></template>
    </Section>
  </Default>
</template>

<script>
export default {
  metaInfo: {
    title: 'Mad Branch Woodworking Studio | Atlanta, GA'
  }
}
</script>

<style>
h1 {
  background-color: black;
  color: white;
  font-family: Playfair-Title;
  font-size: 19.2rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  padding: 40rem;
  margin-bottom: 0;
}
</style>

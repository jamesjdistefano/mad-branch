<template>
  <Home>
    <Header />
    <Section border="var(--salmon)">
      <template #image><img src="../../static/images/jaunty-fatboy.png"  alt="A lovely, round, little fellow, suitable for a storing leprechaun's gold."/></template>
    </Section>
    <Section border="var(--spring-green)">
      <template #image><img src="../../static/images/small-bowl-top-down.jpg" alt="Highly stylized top down bowl photo."/></template>
    </Section>
    <Section border="var(--hot-pink)">
      <template #image><img src="../../static/images/chopsticks.png" alt="That ripple holds a pair of chopsticks all nice-like." /></template>
    </Section>
    <CopyBlock>
      <template>
        <h1>Based in Atlanta, GA, Mad Branch is a custom woodworking studio specializing in turned, carved, and sculpted pieces, primarily from reclaimed wood.</h1> 
      </template>
      <template #secondary><a href="mailto: madbranch.studio@gmail.com">email MadBranch</a></template>
    </CopyBlock>

    <Section border="var(--gold)">
      <template #image><img src="../../static/images/october.png" alt="O hushed October morning mild / Thy leaves have ripened to the fall / Tomorrow wind, if it be wild / Should waste them all."/></template>
    </Section>

    <Quote bgColor="var(--teal)">
      <template>Perfection is beautiful but stupid.</template>
      <template #secondary>Bruno Munari</template>
    </Quote>

    <Section border="var(--salmon)">
      <template #image><img src="../../static/images/wez.png" alt="Stormy petrel of the post-apocalyptic wasteland."/></template>
    </Section>
  </Home>
</template>

<script>
export default {
  metaInfo: {
    title: 'Mad Branch Woodworking Studio | Atlanta, GA'
  }
}


</script>

<style scoped>
h1 { 
 font:inherit;
}
</style>

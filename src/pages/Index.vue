<template>
  <Home>
    <Header />
    <Section border="var(--salmon)">
      <template #image><img src="../../static/images/jaunty-fatboy.png" /></template>
    </Section>
    <Section border="var(--spring-green)">
      <template #image><img src="../../static/images/small-bowl-top-down.jpg" /></template>
    </Section>
    <Section border="var(--hot-pink)">
      <template #image><img src="../../static/images/chopsticks.png" /></template>
    </Section>
    <CopyBlock>
      <template>
        Based in Atlanta, GA, <h1>Mad Branch is a custom woodworking studio</h1> specializing in turned, carved, and sculpted pieces, primarily from reclaimed wood. 
      </template>
      <template #secondary><a href="mailto: madbranch.studio@gmail.com">email MadBranch</a></template>
    </CopyBlock>

    <Section border="var(--gold)">
      <template #image><img src="../../static/images/october.png" /></template>
    </Section>

    <Quote bgColor="var(--teal)">
      <template>Perfection is beautiful but stupid.</template>
      <template #secondary>Bruno Munari</template>
    </Quote>

    <Section border="var(--salmon)">
      <template #image><img src="../../static/images/wez.png" /></template>
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

<style>
h1 { 
  display: inline;
  font: inherit;
}
</style>

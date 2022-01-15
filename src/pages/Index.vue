<template>
  <Home>
    <Section border="var(--maroon)">
      <template #image><img src="../../src/logo-mad-branch-woodworking-studio.svg" /></template>
    </Section>
    <Section>
      <template #image><img src="../../static/images/jaunty-fatboy.png" /></template>
    </Section>
    <Section>
      <template #image><img src="../../static/images/small-bowl-top-down.jpg" /></template>
    </Section>
    <Section>
      <template #image><img src="../../static/images/chopsticks.png" /></template>
    </Section>
    <CopyBlock>
      <template>
        Based in Atlanta, GA, Mad Branch is a custom woodworking studio specializing in turned, carved, and sculpted pieces, primarily from reclaimed wood. 
      </template>
      <template #secondary><a href="#">email MadBranch</a></template>
    </CopyBlock>

    <Section>
      <template #image><img src="../../static/images/october.png" /></template>
    </Section>

    <CopyBlock bgColor="var(--teal)">
      <template>
        "Perfection is beautiful but stupid." 
      </template>
      <template #secondary>– Bruno Munari</template>
    </CopyBlock>

    <Section>
      <template #image><img src="../../static/images/wez-main.png" /></template>
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

</style>

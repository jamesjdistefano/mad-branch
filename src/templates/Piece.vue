<template>
  <div>
    <p>{{ $page.piece.name }}</p>
    <p>{{ $page.piece.shortDescription }}</p>
    <g-image :src="$page.piece.hero.file.url" />

    <div v-for="desc in $page.piece.descriptive" :key="desc.id">
      <p v-html="desc.content"></p>
    </div>

  </div>
</template>

<page-query>
 query Piece($id: ID) {
    piece: contentfulPiece (id: $id) {
      id
      name
      shortDescription
      hero {
        file {
          url
        }
      }
      descriptive {
        id
        content
      }
    }
 }
</page-query>

<script>
import MarkdownIt from 'markdown-it'
export default {
  computed: {
    content() {
      const md = new MarkdownIt()
      return md.render(this.$page.piece.description.content)
    },
 }
}
</script>
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/css/styles.scss'

// import DefaultLayout from '~/layouts/Default.vue'
import Home from '~/layouts/Home.vue'
import Section from '~/components/Section.vue'
import CopyBlock from '~/components/CopyBlock.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  // Vue.component('Layout', DefaultLayout)
  Vue.component('Home', Home)
  Vue.component('Section', Section)
  Vue.component('CopyBlock', CopyBlock)
}

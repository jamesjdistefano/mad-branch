// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/css/styles.scss'

// import DefaultLayout from '~/layouts/Default.vue'
import Home from '~/layouts/Home.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Navigation from '~/components/Navigation.vue'
import Section from '~/components/Section.vue'
import CopyBlock from '~/components/CopyBlock.vue'
import Quote from '~/components/Quote.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  // Vue.component('Layout', DefaultLayout)
  Vue.component('Home', Home)
  Vue.component('Header', Header)
  Vue.component('Footer', Footer)
  Vue.component('Navigation', Navigation)
  Vue.component('Section', Section)
  Vue.component('CopyBlock', CopyBlock)
  Vue.component('Quote', Quote)
}

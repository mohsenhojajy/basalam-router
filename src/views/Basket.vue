<template>
  <div class="basket">
    <Header/>
    <Tab/>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
import Content from '../components/Content.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import Tab from '../components/Tab.vue'
export default {
  name: 'Basket',
  components: {
    Header,
    Tab,
    Footer,
    Content
  }
}
</script>

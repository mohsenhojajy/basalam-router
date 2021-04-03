<template>
  <div class="Buylist">
    <Header/>
    <Tab/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import Tab from '../components/Tab.vue'
export default {
  name: 'Buylist',
  components: {
    Header,
    Tab,
    Footer
  }
}
</script>

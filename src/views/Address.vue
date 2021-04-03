<template>
  <div class="address__nav">
    <Header/>
    <HeaderAddress/>
    <ContetntAddress/>
    <Footer/>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import HeaderAddress from '../components/content/address/HeaderAddress.vue'
import ContetntAddress from '../components/content/address/ContetntAddress.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'address__nav',
  components: {
    Header,
    HeaderAddress,
    ContetntAddress,
    Footer
  }
}
</script>

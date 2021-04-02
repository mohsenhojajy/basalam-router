<template>
  <div class="Content">
    <Stall/>
    <Profile/>
    <Product/>
    <Total/>
    
  </div>
</template>

<script>
import Stall from './content/Stall.vue'
import Profile from './content/Profile.vue'
import Product from './content/Product.vue'
import Total from './content/Total.vue'




export default {
  name: 'Content',
  components: {
    Profile,
    Product,
    Stall,
    Total
  }
}
</script>

<style>


.Content{

    width: 100%;
    background: #FFFFFF;
}
</style>

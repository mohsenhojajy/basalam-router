<template>
  <div class="Content">
    <Stall/>
    <Profile/>
   <Product/>
   <Total/>
  </div>
</template>

<script>
import Stall from './content/basket/Stall.vue'
import Profile from './content/basket/Profile.vue'
import Product from './content/basket/Product.vue'
import Total from './content/basket/Total.vue'
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

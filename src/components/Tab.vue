<template>
     <div class="tab">
        <button class="tab__feature tab-click"><router-link to="/basket">سبدخرید</router-link></button>
        <button class="tab__feature"><router-link to="/Buylist">لسیت خرید بعدی</router-link></button>
      <router-view/>
     </div>
</template>
<script>
export default {
  name: 'tab',
  components: {
  }
}
</script>

<style>
.tab {
   position: relative;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  width: 360px;
  height: 42px;
  background: #ffffff;
  margin-top: 3px;}
.tab__feature {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  font-family: IRANSans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  align-items: center;
  width: 50%;
  color: #535353;}
.tab-click {
  font-weight: bold;
  font-size: 14px !important;
  color: #DF3856;}
.tab-click::after {
  display: block;
  content: " ";
  height: 2px;
  width: 50%;
  background: #DF3856;
  position: absolute;
  top: 42px;}
</style>

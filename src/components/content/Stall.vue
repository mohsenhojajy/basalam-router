<template>                    
   <div class="stall">
        <div class="stall__head">
            <span class="stall__head__from-stall">:از غرفه</span>
            <span class="stall__head__name-stall"><b>خوشمزه های خاتون </b></span>
        </div>  
   </div>
</template>



<script>





export default {
  name: 'stall',
  components: {
  
  }
}
</script>


<style>

.stall {
  width: 360px;
  margin-top: 2px;
  margin-bottom: 5px;
  justify-content: center;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: right;
}

.stall__head {
  display: flex;
  flex-direction: row-reverse;
  justify-content: right;
  width: 92%;
  height: 20px;
  margin: 0 auto;
  margin-top: 20px;
  /* background-color: beige; */
}

.stall__head__from-stall {
  font-family: IRANSans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #3E3E3E;
}

.stall__head__name-stall {
  font-family: IRANSans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #3E3E3E;
  margin-right: 2px;
}
</style>

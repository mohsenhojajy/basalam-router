<template>
    <div class="stall__footer">
        <p class="stall__footer__border-text">هورا! ارسال از این غرفه برای شما <span>.رایگان شد</span></p>
        <div class="stall__footer__tiket">
                <img src="@/assets/vector/belit.svg" alt="tiket">
                <a class="" href="#">ثبت کد تخفیف غرفه</a>
        </div>
        <div class="stall__footer__Down">
            <button class="stall__footer__Down--buy">ادامه خرید فقط از این غرفه</button>
            <div class="stall__footer__price">
                <p class="stall__footer__price-kala">جمع مبلغ برای ۲ کالا</p>
                <div class="stall__footer__price-toman">۷۵,۰۰۰
                    <span class=" product__price__box">
                        <img class="" src="@/assets/vector/toman.svg" alt="toman">
                    </span>
                </div>
            </div>
        </div>
      <div class="line"></div><!--  global class  -->
    </div>
</template>

<script>
export default {
  name: 'Total',
  components: {
  }
}
</script>

<style>
.stall__footer{
margin-top:20px;
/* margin: 20px 0; */
}
.stall__footer__border-text {
  margin: auto;
  width: 92%;
  height: 28px;
  background: #DFF5F1;
  border-radius: 2px;
  font-family: IRANSans;
  font-size: 12px;
  display: flex;
  align-items: center;
  color: #00786C;
  flex-direction: row-reverse;
  padding-right: 8px;
}
.stall__footer_border-text span {
  font-weight: bold;
  margin-right: 2px;
}
.stall__footer__tiket {
  margin: 15px 25px;
  height: 24px;
  background-color: #eeee;
  border-radius: 100px;
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  font-family: IRANSans;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  align-items: center;
  text-align: center;
  color: #3E3E3E;
}
.stall__footer__Down {
  display: flex;
  width: 92%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
.stall__footer__Down--buy {
  height: 32px;
  background: #DF3856;
  border-radius: 100px;
  font-family: IRANSans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FAFAFA;
  padding: 0 16px;
}
.stall__footer__price {
  display: flex;
  flex-direction: column;
  font-family: IRANSans;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 19px;
  display: flex;
  align-items: flex-start;
  text-align: right;
  color: #535353;
}
.stall__footer__price-toman {
  display: flex;
  align-items: flex-end;
  flex-direction: row-reverse;
  }
</style>

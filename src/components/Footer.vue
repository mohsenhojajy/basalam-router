<template>
    <div class="content-footer">
            <div class="content__footer__Down">
                <button class="content__footer__Down--buy b"><a href="basket-address.html">ادامه خرید از دو غرفه</a></button>
                <div class="content__footer__price">
                    <p class="content__footer__price-kala">مبلغ قابل پرداخت ۲ غرفه</p>
                    <div class="content__footer__price-toman">۷۵,۰۰۰
                        <div class=" product__price__box">
                            <img class="" src="@/assets/vector/toman.svg" alt="toman">
                        </div>
                    </div>
                </div>
            </div>   
    </div>  
</template>

<style >

.content-footer {
  width: 360px;
  background: #ffffff;
  margin-top: 20px;
  bottom: 0px;
  position: fixed;
}

.b {
  width: 60%;
  height: 40px;
  font-family: IRANSans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  display: flex;
  justify-content: center;
  color: #FAFAFA;
}

.content__footer__Down {
  display: flex;
  width: 92%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}

.content__footer__Down--buy {
  background: #DF3856;
  border-radius: 100px;
  align-items: center;
  text-align: center;
  padding: 0 16px;
  width: 60%;
  height: 40px;
  font-family: IRANSans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  display: flex;
  justify-content: center;
  color: #FAFAFA;
}

.content__footer__price {
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

.content__footer__price-toman {
  display: flex;
  align-items: flex-end;
  flex-direction: row-reverse;
}
</style>


<template>
 <div>
    <div class="product">
        <img class="product__pic" id="product__pic" src="@/assets/vector/sosis.svg" alt="product-pic">
        <p class="product__text">سوسیس آلمانی پنیری</p>
        <div class="product__price">
            <span class="">۷۵,۰۰۰</span>
            <span class="product__price-discount">۸۵,۰۰۰</span>
        </div>
        <div class=" product__price__box">
            <img class="" src="@/assets/vector/toman.svg" alt="toman">
        </div>
    </div>
    <div class=" product__detail">
        <button class="product__detail-Negative" onclick="manfi()"><img src="@/assets/vector/manfi.svg" alt="negative"></button>
        <span class="product__detail-number" id="product__detail-number11">۳</span>
            <button class="product__detail-Positive" onclick="mosbat()">
                <img src="@/assets/vector/mosbat.svg" alt="Positive">
            </button>
            <button class="product__detail-recyclebin"><img src="@/assets/vector/Recyclebin.svg" alt="resycle"></button>
            <span class="product__detail-store"><a href="#">ذخیره در لیست خرید بعدی </a></span>
    </div>
    <div class="line"></div>
    <!-- global class -->
 </div>
</template>

<style>
.product {
  display: flex;
  width: 92%;
  flex-direction: row-reverse;
  margin: 0 auto;
  margin-top: 15px;
  justify-content: right;
}
.product__pic {
  border-radius: 10px;
  width: 82px;
  height: 82px;
}
.product__text {
  font-family: IRANSans;
  font-size: 12px;
  width: 40%;
  height: 30%;
  text-align: right;
  margin-right: 10px;
}
.product__price {
  align-self: flex-end;
  font-size: 12px;
  font-weight: 400;
  color: #535353;
  font-family: IRANSans;
  font-size: 12px;
  display: flex;
  align-items: center;
  color: #535353;
}
.product__price span {
  margin: 0 2px;
}
.product__price__box {
  margin-bottom: 10;
  margin: 0 2px;
  align-self: flex-end;
  font-size: 12px;
  font-weight: 400;
  color: #535353;
  font-family: IRANSans;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #535353;
  font-weight: bold;
}
.product__price-discount {
  color: #9D9D9D;
  text-decoration: line-through #9D9D9D;
}
.product__detail {
  display: flex;
  flex-direction: row-reverse;
  /* background: mediumvioletred; */
  width: 92%;
  justify-content: right;
  margin: 0 auto;
  margin-top: 14px;
}
.product__detail button {
  background: #EEEEEE;
  border-radius: 100px;
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
}
.product__detail-number {
  width: 25.79px;
  Height: 23.36px;
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  font-family: IRANSans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #535353;
}
.product__detail-recyclebin {
  margin-right: 5%;
}
.product__detail-store {
  font-family: IRANSans;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  /* line-height: 16px; */
  display: flex;
  align-items: flex-end;
  text-align: center;
  text-transform: uppercase;
  color: #7D7D7D;
  margin-right: 24%;
  padding: 0px;
  /* padding-bottom: -15px; */
  border-bottom: 1px dashed #7D7D7D;
}
</style>

<template>
      <div class="header">
        <div class="header__top">
            <div class="header__top-rightbox">
               <img  class="header__top__logo" src="@/assets/vector/logo.svg" alt="logo">
               <img  class="header__top__logotext" src="@/assets/vector/Type.svg" alt="textlogo">
               <button class="header__top__menu">
                   <img class="header__top__menu-size" src="@/assets/vector/menu.svg" alt="menu" >
               </button>
            </div>
            <div class="header__top-leftbox">
                <button class="header__top__sell">فروش در باسلام </button>
                <button class="header__top__basket">
                    <img class="header__top__basket-size" src="@/assets/vector/Basket.svg" alt="basket">
                </button>
                <span class="header__top__basket-number" id="header-up__left-basket-number">۳</span>
            </div>
        </div>
        <form class="header__bottom" action="#" method="POST">
            <input type="text" dir="rtl" class="header__bottom__input" placeholder="جست‌وجو در صدها هزار محصول خانگی و محلی..." autocomplete="off">
            <button class="header__bottom__search">
                <img src="@/assets/vector/search.svg" alt="search">
            </button>
        </form>
    </div>
</template>
<script>
export default {
  name: 'header',
  components: {
  }
}
</script>

<style>
.header {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 360px;
  height: 101px;
  background: #FFFFFF;}
  .header__top {
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
  width: 90%;
  height: 32px;
  margin-top: 6px;}
.header__top-rightbox {
  display: flex;
  flex-direction: row-reverse;
}
.header__top__logo{
  width: 22px;
  height: 24px;
  display: flex;
}
.header__top__logotext{
 width: 69px;
  height: 20px;
  margin-right: 2px;
  display: flex;
}
.header__top__menu{
  padding: 5px;
}
.header__top__menu-size{
  display: flex;
 width: 10.50px;
  height: 6.25px;
}
.header__top-leftbox {
  position: relative;
display: flex;
flex-direction: row-reverse;
}
.header__top__sell{
  height: 32px;
  width: 103px;
  background: #3E3E3E;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: IRANSans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 19px;
  text-align: center;
  text-transform: uppercase;
  color: #FAFAFA;
}
.header__top__basket{
  position: relative;
   display: flex;
  align-items: flex-end;
  align-self: flex-end;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
}
.header__top__basket-size{
  width: 16px;
  height: 20px;
}
.header__top__basket-number{
  position: absolute;
    left: -4.5%;
  top: 3%;
  width: 18px;
  height: 18px;
  background: #DF3856;
  border-radius: 100px;
  font-family: IRANSans;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 19px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
}
/* =========================< header bottom >========================= */
.header__bottom{
display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 90%;
  height: 40px;
  background: none;
  border: 1px solid #9D9D9D;
  border-radius: 100px;
}
.header__bottom__input{
display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 80%;
  height: 19px;
  border: none;
  text-align: right;
  outline: none;
  font-family: IRANSans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 19px;
  text-transform: uppercase;
  color: #7D7D7D;
}
.header__bottom__search{
width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
}
</style>

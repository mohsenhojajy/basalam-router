<template>
    <div class="address__box">
        <div class="address__content">
            <span class="address__content--sendto"> به :مهدی خدادادی </span>
            <button><img class="address__content--pic" src="@/assets/vector/edit.svg" alt="edit-pic"></button>
        </div>
        <div class="address__contentbox">
            <div class="address__contentbox--left">
                <span class="address__contentbox--text">
                    قم، پردیسان، خیابان دانشگاه، بعد از میدان علوم، رو به روی پایانه، ساختمان شرکت توسعه
                    و تدبیر جوامع سلام
                </span>
            </div>
            <div class="address__contentbox--right">
                <div class="containerb">
                    <input type="radio" checked="checked" name="radio">
                    <span class="checkmark"></span>
                </div>
            </div>
        </div>
        <div class="article__line"></div>
    </div>
</template>

<style>
.address__box{
    background: #ffffff;
}
.address__content {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 80%;
    margin-left: 4%;
    align-items: center;
    text-align: right;
}
.address__content--sendto {
    font-family: IRANSans;
    font-size: 14px;
    color: #3E3E3E;
}
.address__contentbox {
    display: flex;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}
.address__contentbox--left {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 76%;
    margin-left: 8%;
    align-items: center;
    text-align: right;
}
.address__contentbox--text {
    display: flex;
    flex-direction: row-reverse;
    font-family: IRANSans;
    font-size: 14px;
    color: #3E3E3E;
}
.address__contentbox--right {
    display: flex;
    justify-content: center;
    width: 16%;
    margin-top: 4px;
}
/* =====================radiobutton ==========================*/
.containerb {
    position: absolute;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    color: #DF3856;
}
.containerb input {
    opacity: 0;
    cursor: pointer;
}
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #ffffff;
    border-radius: 100%;
    border: 2px solid #9D9D9D;
}
.containerb:hover input~.checkmark {
    background-color: #ccc;
}
.containerb input:checked~.checkmark {
    background-color: #DF3856;
    border: none;
}
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}
.containerb input:checked~.checkmark:after {
    display: block;
}
.containerb .checkmark:after {
    top: 5px;
    left: 5px;
    align-content: center;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
}
</style>

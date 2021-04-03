<template>
    <div class="address">
        <div class="address__head">
             <router-link to="/basket"><img class="address__back" src="@/assets/vector/back.svg" alt="baek-pic"></router-link>
    <router-view/>
            <span class="address__send"> آدرس ارسال </span>
            <button class="address__newaddress">
                <img class="address__newaddress--pic" src="@/assets/vector/mosbat.svg" alt="baek-pic">
                 <span class="address__newaddress--text">آدرس جدید</span>
            </button>
        </div>
    </div>
</template>

<style>
.address {
    width: 360px;
    margin-top: 2px;
    padding-bottom: 5px;
    justify-content: center;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: right;
}

.address__head {
    display: flex;
    flex-direction: row-reverse;
    justify-content: right;
    width: 92%;
    height: 40px;
    margin: 0 auto;
    margin-top: 10px;
    align-items: center;
}

.address__back {
    width: 40px;
    height: 40px;
    border-radius: 100px;
}

.address__send {
    font-family: IRANSans;
    font-size: 16px;
    color: #3E3E3E;
    font-family: IRANSans;
    font-style: normal;
    font-weight: normal;
    margin-right: 4px;
}

.address__newaddress {
    border: 1px solid #9D9D9D;
    width: 141px;
    height: 40px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    margin-right: 20%;
    border-radius: 100px;
}

.address__newaddress--pic {
    width: 16px;
    height: 16px;
}

.address__newaddress--text {
    font-family: IRANSans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    margin-right: 2px;
}
</style>

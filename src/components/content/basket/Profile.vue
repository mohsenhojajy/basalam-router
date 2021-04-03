<template>
  <div>
    <div class="stall__profile">
        <img class="stall__profile-pic" src="@/assets/profile/pic1.svg" alt="profile-pic">
       <div class="stall__profile-text-box">
            <span class="stall__profile-name"> مینو هنگام </span>
            <span class="stall__profile-location">از سعادت شهر
                <img class="" src="@/assets/vector/location.svg" alt="profile-location">
            </span>
        </div>
    </div>
  </div>
</template>

<style>
.stall__profile {
  width: 92%;
  height: 40px;
  margin: 0 auto;
  margin-top: 15px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: right;
  }
.stall__profile-pic {
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background: slategray;
}
.stall__profile-text-box {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
}
.stall__profile-name {
  font-family: IRANSans;
  font-size: 12px;
  color: #3E3E3E;
  font-family: IRANSans;
  font-style: normal;
  font-weight: normal;
  display: flex;
  align-items: center;
  align-self: flex-end;
}
.stall__profile-location {
  font-family: IRANSans;
  font-size: 10px;
  display: flex;
  align-items: flex-end;
  text-transform: uppercase;
  align-self: flex-end;
  align-items: center;
  color: #3E3E3E;
}
.stall__profile-location img {
  margin-left: 5px;
}
</style>

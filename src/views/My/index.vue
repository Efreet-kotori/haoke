<template>
  <div>
    <div class="My_title__39w3V">
      <div>
        <van-image src="http://liufusong.top:8080/img/profile/bg.png" />
      </div>

      <div class="My_info__eOYeg">
        <div class="My_myIcon__3cKIV">
          <img
            class="My_avatar__2Fbh7"
            src="http://liufusong.top:8080/img/profile/avatar.png"
            alt="icon"
          />
        </div>
        <div class="My_user__B6O1D">
          <div class="My_name__3U2NB">游客</div>
          <div class="My_edit__3wqlv">
            <van-button type="primary" size="mini">去登录</van-button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <van-grid :column-num="3" :border="false" clickable>
        <van-grid-item icon="star-o" text="我的收藏" @click="Collection" />
        <van-grid-item icon="wap-home-o" text="我的出租" />
        <van-grid-item icon="underway-o" text="看房记录" />
        <van-grid-item icon="newspaper-o" text="成为房主" />
        <van-grid-item icon="contact" text="个人资料" />
        <van-grid-item icon="service-o" text="联系我们" />
      </van-grid>
    </div>
    <div class="img">
      <van-image
        width="8.625rem"
        height="2.122rem"
        src="http://liufusong.top:8080/img/profile/join.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    Collection () {
      this.$router.push('/collection')
    }
  }
}
</script>

<style scoped lang="less">
.My_title__39w3V {
  min-height: 300px;
  position: relative;
  margin-bottom: 15px;
}

.My_info__eOYegiang {
  position: absolute;
  background: #fff;
  width: 85%;
  height: 55%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px 3px #ddd;
  margin: 50px auto 0;
  padding: 0 20px;
  text-align: center;
  font-size: 13px;
}
.My_myIcon__3cKIV {
  position: relative;
  transform: translateY(-50%);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  border: 5px solid #f5f5f5;
  display: inline-block;
  box-shadow: 0 2px 2px #bdbdbd;
}
.My_avatar__2Fbh7 {
  width: 100%;
  border-radius: 50%;
}
.My_info__eOYeg {
  position: absolute;
  background: #fff;
  width: 85%;
  height: 55%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px 3px #ddd;
  margin: 50px auto 0;
  padding: 0 20px;
  text-align: center;
  font-size: 13px;
}
.My_user__B6O1D {
  padding-top: 15px;
}
.My_name__3U2NB {
  margin-top: -30px;
  margin-bottom: 10px;
}
.My_edit__3wqlv {
  color: #999;
  font-size: 12px;
  margin-top: 20px;
}
.img {
  text-align: center;
  margin-top: 25px;
}
</style>

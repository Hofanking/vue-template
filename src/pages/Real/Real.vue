<template>
  <!--首页外卖-->
  <div class="msite">
    <!--首页头部-->
    <HeaderTop title="第一页">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <div style="height: 500px;text-align: center;line-height: 500px;">视频监控一</div>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'

export default {
  components: {HeaderTop}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

</style>

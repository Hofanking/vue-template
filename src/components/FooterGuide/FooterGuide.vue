<template>
  <div class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" :class="{on: '/real' === $route.path}" @click="goTo('/real')">
      <span class="item_icon">
        <i class="iconfont icon-real"></i>
      </span>
      <span>实时视频</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/replay' === $route.path}" @click="goTo('/replay')">
      <span class="item_icon">
        <i class="iconfont icon-replay"></i>
      </span>
      <span>录像回放</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/warn' === $route.path}" @click="goTo('/warn')">
      <span class="item_icon">
        <i class="iconfont icon-warn"></i>
      </span>
      <span>告警日志</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/setting' === $route.path}" @click="goTo('/setting')">
      <span class="item_icon">
        <i class="iconfont icon-setting"></i>
      </span>
      <span>配置管理</span>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    goTo (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #31cac8
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>

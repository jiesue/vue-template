<template>
    <div class="header">
       <div class="content-wrapper">
           <div class="avatar">
               <img width="64" height="64" :src="seller.avatar" alt="">
           </div>
           <div class="content">
               <div class="title">
                   <span class="brand"></span>
                   <span class="name">{{seller.name}}</span>
               </div>
               <div class="description">
                   {{seller.description}}/{{seller.deliveryTime}}分钟送达
               </div>
               <div class="supports" v-if="seller.supports">
                   <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                   <span class="text">{{seller.supports[0].description}}</span>
               </div>
           </div>
           <div class="support-count" @click="showDetail" v-if="seller.supports">
               <span class="count">{{seller.supports.length}}个</span>
               <i class="icon-keyboard_arrow_right">></i>
           </div>
       </div>
       <div class="bulletin-wrapper">
           <span class="bulletin-title"></span>
           <span class="bulletin-text">{{seller.bulletin}}</span>
       </div>
       <div class="background">
           <img :src="seller.avatar" alt="" width="100%" height="100%">
       </div>
       <div v-show="detailShow" class="detail">
           <div class="detail-wrapper clearfix">
               <div class="detail-main">
                   <h1 class="name">{{seller.name}}</h1>
                   <div class="star-wrapper">
                        <star :size="48" :score="seller.score"></star>
                   </div>
                   <div class="title">
                       <div class="line"></div>
                       <div class="text">优惠信息</div>
                       <div class="line"></div>
                   </div>
                   <ul v-if="seller.supports" class="supports">
                       <li class="supports-item" v-for="item in seller.supports">
                           <span class="icon" :class="classMap[seller.supports[%index].type]"></span>
                           <span class="text">{{seller.supports[%idnex].description}}</span>
                       </li>
                   </ul>
               </div>
           </div>
           <div class="detail-close">
               <i class="icon-close"></i>
           </div>
       </div>
    </div>
</template>

<script>
import star from '../star/star';

export default {
    name: 'Header',
    props: {
        seller: {
            type: Object
        }
    },
    data () {
        return {
            detailShow: false
        };
    },
    methods: {
        showDetail () {
            this.detailShow = true;
        }
    },
    created () {
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
    components: {
        star
    }

};
</script>

<style lang="stylus" rel="stylesheet/stylus">
    // @import "../.../common/stylus/minxin";
    // @import "../../common/stylus/sell-icon.styl";

    .header
        position relative
        color #ffffff
        background rgba(7, 17, 27,0.5)
        .content-wrapper
            position relative
            padding 24px 12px 18px 24px
            font-size 0
            .avatar
                display inline-block
                vertical-align top
                img
                     border-radius 2px
            .content
                display inline-block
                font-size 14px
                margin-left 16px
                .title
                    margin 2px 0 8px 0
                    .brand
                        display inline-block
                        vertical-align top
                        width:30px
                        height 18px
                        background url(../../../resource/img/brand@2x.png) no-repeat
                        background-size 30px 18px
                    .name
                        margin-left 6px
                        font-size 16px
                        line-height 18px
                        font-weight bold
                    .description
                        margin-bottom 10px
                        line-height 12px
                        font-size 12px
                .supports
                    .icon
                        display: inline-block
                        width 12px
                        height 12px
                        margin-right 4px
                        padding 5px
                        background-size 12px 12px
                        background-repeat no-repeat
                        &.decrease
                            bg-image('decrease_l')
                        &.discount
                            bg-image('discount_l')
                        &.guarantee
                            bg-image('guarantee_l')
                        &.invoice
                            bg-image('invoice_l')
                        &.special
                            bg-image('special_l')
                    .text
                        line-height 12px
                        font-size 10px
            .support-count
                position absolute
                right 12px
                bottom 18px
                padding 0 8px
                height 24px
                line-height 24px
                border-radius 14px
                background rgba(0,0,0,0.2)
                text-align center
                .count
                    vertical-align top
                    font-size 10px
                .icon-keyboard_arrow_right
                    margin-left 2px
                    line-height 24px
                    font-size 10px
        .bulletin-wrapper
            height 28px
            line-height 28px
            padding 0 22px 0 12px
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            background rgba(7,17,27,0.2)
            .bulletin-title
                display inline-block
                vertical-align top
                margin-top 7px
                width 22px
                height 12px
                bg-image('bulletin')
                background-size 22px 12px
                background-repeat no-repeat
            .bulletin-text
                vertical-align top
                margin 0 4px
                font-size 10px
            .icon-keyboard_arrow_right
                position absolute
                font-size 10px
                right 12px
                top 8px
        .background
            position absolute
            left 0
            height 0
            z-index -1
            filter blur(10px)
        .detail
            position fixed
            z-index 100
            width 100%
            height 100%
            top 0
            left 0
            overflow auto
            background rgba(7,17,27,0.8)
            .detail-wrapper
                min-height 100%
                .detail-main
                    margin-top 64px
                    padding-bottom 64px
                    text-align center
                    .name
                        line-height 16px
                        text-align center
                        font-size 16px
                        font-weight 700
                    .star-wrapper
                        margin-top 18px
                        padding 2px 0
                        text-align center
                    .title
                        display flex
                        width 80%
                        margin 28px auto 24px auto 
                        .line
                            flex 1
                            position relative
                            top -6px
                            border-bottom 1px solid rgba(255,255,255,0.2)
                        .text
                            padding 0 12px
                            font-size 14px
                            font-weight 700

            .detail-close
                position relative
                width 32px
                height 32px
                margin -64px auto 0 auto
                clear both
                font-size 32px


</style>

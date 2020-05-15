<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;">登录</a>
                    <a href="javascript:;">注册</a>
                    <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>购物车</a>

                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children"></div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nav-header'
}
</script>
<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
    .header{
        .nav-topbar{
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            .container{

                width: 1226px;
                margin-right: auto;
                margin-left: auto;
                @include flex();
                a{
                    display: inline-block;
                    color: #B0B0B0;
                    margin-right: 17px;
                }
                .my-cart{
                    width: 110px;
                    background-color: #FF6600;
                    text-align: center;
                    color: #fff;
                    .icon-cart{
                        @include bgImg($img:'/imgs/icon-cart-checked.png',$w:16px,$h:12pxS);
                        margin-right: 5px;
                    }
                }
            }
        }
        .nav-header{
            .container{
                height: 112px;
                @include flex();
                .header-logo{
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background-color: #FF6600;
                    a{
                        display: inline-block;
                        width: 110px;
                        height: 55px;
                        &:before{
                            content: ' ';
                            @include bgImg($img:'/imgs/mi-logo.png',$w:55px,$h:55px,$s:55px);
                            transition: margin .2s;
                        }
                        &:after{
                            content: ' ';
                            @include bgImg($img:'/imgs/mi-home.png',$w:55px,$h:55px,$s:55px);
                        }
                        &:hover:before{
                            margin-left: -55px;
                            transition: margin .2s;
                        }
                    }
                }
                .header-menu{
                    display: inline-block;
                    flex: 1;
                    padding-left: 206px;
                    .item-menu{
                        display: inline-block;
                        color: #333;
                        font-weight: bold;
                        line-height: 60px;
                        font-size: 16px;
                        margin-right: 20px;
                        span{
                            cursor: pointer;
                            &:hover{
                                color: #FF6600;
                            }
                        }
                    }
                }
                .header-search{
                    width: 319px;
                    .wrapper{
                        height: 50px;
                        border: 1px solid #e0e0e0;
                        @include flex();
                        input{
                            border: none;
                            box-sizing: border-box;
                            border-right: 1px solid #e0e0e0;
                            width: 264px;
                            height: 50px;
                            padding-left: 14px;
                        }
                        a{
                            @include bgImg($img:'/imgs/icon-search.png',$w:18px,$h:18px,$s:contain);
                            margin-right: 16px;
                        }
                    }
                }
            }
        }
    }
</style>
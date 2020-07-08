<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="javascript:;">zwg小米商城</a><span>|</span>
            <a href="javascript:;">vue全栈课程</a><span>|</span>
            <a href="javascript:;">vue学习商城项目</a><span>|</span>
            <a href="javascript:;">HTML/CSS/JavaScript学习项目</a>
        </div>
        <div class="tail">
            <p>Copyright @2019<span>mi.futurefe.com</span>All Right Reserved.</p>
        </div>

    </div>
</template>
<script>
export default {
    name:'nav-footer'
}
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
    .footer{
        // position: absolute;
        width: 100%;
        bottom: 0;
        height:234px;
        border-top: 4px solid $colorA;
        background-color: $colorB;
        color: #999999;
        font-size: 16px;
        text-align: center;
        .footer-logo{
            margin-top: 46px;
            margin-bottom: 31px;
            img{
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link{
            a{
                color: #999999;
                display: inline-block;
            }
            span{
                color: #999999;
                margin: 0 10px;
            }
        }
        .tail{
            margin-top: 10px;
            span{
                margin: 0 5px;
                color: $colorA;
            }
        }
    }
</style>
<template>
    <div class="product">
        <product-param :title='title'>
            <template v-slot:buy>
                <button class="btn-large" @click='buy'>立即购买</button>
            </template>
        </product-param>
        <div class="content">
            <div class="item-bg-1">
                <h1>{{title}}</h1>
                <h2>{{subtitle}}</h2>
                <p>
                    全球首款双频 GP<span>|</span>
                    骁龙845<span>|</span>
                    AI变焦双摄<span>|</span>
                    红外人脸识别
                </p>
                <p class="price">￥<strong>{{price}}</strong></p>
            </div>
            <div class="item-bg-2"></div>
            <div class="item-bg-3"></div>
            <div class="item-swiper">

                <swiper :options='swiperOption'>
                    <swiper-slide><img src="/imgs/product/gallery-2.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-3.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-4.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            
            <div class="item-video">
                <h2>
                    60帧超慢动作摄影
                    <br/>
                    慢慢回味每一瞬间的精彩
                </h2>
                <p>
                    后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！
                    <br/>
                    更能AI 精准分析视频内容，15个场景智能匹配背景音效。
                </p>
                <div class="video-bg" @click="showSlide='slideDown'"></div>
                <div class="video-box" v-show="showSlide">
                    <div class="overlay"></div>
                    <div class="video" :class="showSlide">
                        <span @click="closeVideo"></span>
                        <video src="/imgs/product/video.mp4" muted autoplay controls></video>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ProductParam from '@/components/ProductParam'
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    name: 'Product',
    components:{
        ProductParam,
        Swiper,
        SwiperSlide
    },
    data(){
        return {
            title: '',
            subtitle: '',
            price:0,
            isShow: false,
            product:{},
            showSlide: '',
            swiperOption:{
                autoplay:true,
                slidesPerView:3,
                spaceBetween: 30,
                freeMode: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                }
            }
        }
    },
    mounted(){
        this.getProduct()
    },
    methods:{
        getProduct(){
            let id = this.$route.params.id
            this.axios.get(`/products/${id}`).then((res)=>{
                this.product = res;
                this.title = res.name;
                this.subtitle = res.subtitle;
                this.price = res.price;
            })
        },
        closeVideo(){
            this.showSlide = 'slideUp';
            setTimeout(() => {
                this.showSlide = ''
            }, 700);
        },
        buy(){
            let id = this.$route.params.id
            this.$router.push(`/detail/${id}`);
        }
    }
}
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
    .product{
        // width: 1226px;
        // margin: auto;
        .content{
            width:100%;
            .item-bg-1{
                background: url('/imgs/product/product-bg-1.png') no-repeat center;
                height: 718px;
                text-align: center;
                // padding-top: 55px;
                h1{
                    font-size:80px;
                    padding-top:55px;
                }
                h2{
                    font-size:24px;
                    letter-spacing: 10px;
                }
                p{
                    margin-top:21px;
                    margin-bottom:40px;
                    font-size: 18px;
                    color: #333333;
                    span{
                        margin:0 15px;
                    }
                }
                .price{
                    font-size:30px;
                    color:#333333;
                    em{
                        font-style:normal;
                        font-size:38px;
                    }
                }
            }
            .item-bg-2{
                background:url(/imgs/product/product-bg-2.png) no-repeat center;
                height:480px;
                background-size:1226px 397px;
            }
            .item-bg-3{
                background:url(/imgs/product/product-bg-3.png) no-repeat center;
                height:638px;
                background-size:contain;
            }
            .item-swiper{
                margin:36px auto 52px;
                .desc{
                font-size:18px;
                color:#333333;
                text-align:center;
                }
                img{
                width:100%;
                }
            }
            .item-video{
                color: white;
                background-color: black;
                text-align: center;
                height: 1044px;
                margin-bottom: 76px;
                h2{
                    padding-top: 88px;
                    font-size: 60px;
                    margin-bottom: 45px;
                }
                p{
                    font-size: 20px;
                    margin-bottom: 45px;
                }
                .video-bg{
                    background:url('/imgs/product/gallery-1.png') no-repeat center;
                    background-size:cover;
                    width:1226px;
                    height:540px;
                    margin:0 auto;
                    cursor:pointer;
                }

                .video-box{
                    .overlay{
                        @include position(fixed);
                        background: #333333;
                        opacity: .4;
                        z-index: 9;
                    }
                    @keyframes slideDown{
                        from{
                            top: -50%;
                            opacity: 0;
                        }
                        to{
                            top: 50%;
                            opacity: 1;
                        }
                    }
                    @keyframes slideUp{
                        from{
                            top: 50%;
                            opacity: 1;
                        }
                        to{
                            top: -50%;
                            opacity: 0;
                        }
                    }
                    .video{
                        position: fixed;
                        top: -50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        z-index: 10;
                        width: 1000px;
                        height: 536px;
                        opacity: 1;
                        &.slideDown{
                            animation: slideDown .6s linear;
                            top: 50%;
                        }
                        &.slideUp{
                            animation:  slideUp .6s linear;
                        }
                        span{
                            position: absolute;
                            @include bgImg($img:'/imgs/icon-close.png', $w:20px, $h:20px,$s:contain);
                            top: 20px;
                            right: 20px;
                            cursor: pointer;
                            z-index: 11;
                        }
                        video{
                            width:100%;
                            height:100%;
                            object-fit:cover;
                            outline:none;
                        }
                    }
                }
            }

        }
        
    }
</style>
<template>
    <div class="container" :style="{ backgroundColor : bgcolor}">
        <img :src="image" alt="burger">
        <h3>{{Product}}</h3>
        <p>{{quantity}}</p>
    </div>
</template>

<script>
export default{
    name: "Category",
    props: ["bgcolor", "image", "Product", "quantity"]
}
</script>

<style scoped>
@import "https://unicons.iconscout.com/release/v4.0.0/css/line.css";
    .container{
        width: 136px;
        height: 177px;
        border-radius: 10px;
        /* border: 1px solid var(--NestMart-Brand-1-Light, #81B13D); */
        background: #F2FCE4;
        box-shadow: 20px 20px 40px 0px rgba(24, 24, 24, 0.07);
    }
    img{
        margin: 0 0 -15px 0;
        width: 120px;
        height: 120px;
        flex-shrink: 0;
        /* background: url(<path-to-image>), lightgray 50% / cover no-repeat; */


    }
    h3 ,p{
        color: var(--NestMart-TextHeading, #253D4E);
        text-align: center;
        /* NestMart/Heading 6 */
        font-family: Quicksand;
        font-size: 16px;
        font-weight: 700;
    }
    p{
        color: var(--NestMart-Text-Muted, #B6B6B6);
        text-align: center;
        /* NestMart/ Text xs */
        font-family: Lato;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px; /* 150% */
        margin: -15px 0px 0 0;
    }
    
</style>
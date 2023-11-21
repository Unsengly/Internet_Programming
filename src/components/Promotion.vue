<template>
    <div class="promotion" :style="{backgroundColor: colorBackground}">
        
            <p class="desc">{{ description }}</p>
            <!-- <myButton class="btn" btncolor="backgroundColor" btntext="text"></myButton> -->
            <Button class="btn" :style="{backgroundColor: btnbgcolor}">
                <div class="text">{{ btntext }}</div>
                <i class="uil uil-arrow-right"></i>
            </Button>
        
        <img :src="productImages" alt="onions">
        <!-- <Button class="buton" :btnColor="backgroundColor" btntext="text" >  </Button> -->
        <!-- <i class="uil uil-arrow-right"></i> -->
    </div>
</template>

<script>
import Button from "./Button.vue";
export default{
    name: "Promotion",
    component: {
        Button,
    },
    props: {
        colorBackground:String, 
        productImages:String, 
        description:String,
        btnbgcolor:String,
        btntext:String,
    },
    // props: ["colorBackground", "productImages", "description"],
}
</script>

<style>
    .promotion{
        width: 512px;
        height: 300px;
        border-radius: 10px;
        position: relative;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    
    .desc{
        width: 50%;
        height: 100%;
        color:  #253D4E;
        font-size: 24px;
        font-weight: 700;
        font-style: Quicksand;
        /* text-align: center; */
        padding: 10%  0 0 8%;
        /* margin: -220px 0 0 20px */
        /* position: absolute;
        top: 265px;
        left: 30px; */
    }

    img{
        position: relative;
        width: 50%;
        height: 249px;
        border-radius: 0 0 10px 10px;
        margin: 50px 0 0 0;
        display: flex;
        object-fit: contain;
    }
    /* .buton{
        position: absolute;
        padding: 2px;

    } */
    .btn{
        position: absolute;
        top: 200px;
        left: 42px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 15px;
    }
    .text{
        font-size: 20px;
        font-style: Quicksand;
        color: #fff;
        font-size: 14px;
    }
    .uil{
        font-size: 15px;
        color: #fff;
    }
</style>
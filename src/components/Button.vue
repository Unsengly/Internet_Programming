<template>
    <button :style="{backgroundColor: btnbgcolor}">
        <!-- <p class="text">{{ btntext }}</p> -->
        <!-- <p>{{ icons }}</p> -->
        <!-- <i class="uil uil-arrow-right"></i> -->
    </button>
</template>

<script>
export default{
    name: "Button",
    // props: ["backgroundcolor", "btntext", "icons"]
    props: {
        btntext: String,
        btnbgcolor: String,
        
    }
}
</script>

<style>
/* @import "https://unicons.iconscout.com/release/v4.0.0/css/line.css"; */
    button{
        width: 120px;
        height: 40px;
        border-radius: 3px;
        border: none;
        /* display: flex; */
        /* flex-direction: row; */
        /* padding: 8px 15px; */
        /* justify-content: center; */
        /* align-items: center; */
        /* color: black; */
        /* background: red; */
        /* padding: 5px; */
        /* font-size: 5px; */
        /* gap: 10px; */
        /* box-shadow: 14px 14px 36px 0px rgba(85, 85, 85, 0.10); */
    }
    /* .text{
        font-size: 12px;
        font-weight: 700;
    } */
</style>
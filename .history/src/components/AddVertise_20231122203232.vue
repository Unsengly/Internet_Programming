<template>
    <div class="container_add" :style="{backgroundColor: bgColor}">
        <div class="wrap_add" >
            <!-- <div class="container1">
                
            </div> -->
            <div class="heading">
                {{ heanding }}
            </div>
            <div class="_btn">
                <MyButton  :text="textBtn" :Bgcolor="colorBtn"/>
            </div>
        </div>

        <div class="image_add">
            <img :src="Img" alt="" />
        </div>
        
    </div>
</template>

<script>
import MyButton from './MyButton.vue';

export default{
    name: 'AddVertise',
    props: {
        heanding: {
            type: String,
            default: 'New Collection',
        },
        bgColor: {
            type: String,
            default: '#3BB77E',
        },
        textBtn: {
            type: String,
            default: 'Show Now',
        },
        colorBtn: {
            type: String,
            default: '#3d3d3d',
        },
        Img: {
            type: String,
            default: 'https://picsum.photos/200/300',
        }
    },
    components: {
        MyButton,
    },
}

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600&display=swap');

.wrap_add{
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: start;
    padding: 10px;
    margin-left: 10px;
}
.container_add {
    width: 480px;
    height: 300px;
    border: 1px solid #BCE3C9;
    display: flex;
    border-radius: 10px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.container_add:hover {
    border: 2px solid #3BB77E;
}
/* .container1 {
    width: 200px;
    height:150px ;
    margin-left: 48px;
    margin-top: 77px;
    display: flex;
    flex-direction: column;
    justify-content: center;

} */
.heading {
    font-family: Quicksand;
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    color: #000;
}
._btn {
    margin-top: 20px;
}
.image_add {
    width: 40%;
    height: 60%;
    margin-top: 120px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: end;
}

img {
    width: 100%;
    height: 100%;
}

</style>
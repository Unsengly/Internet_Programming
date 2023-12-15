<template>
  <div class="tage_container">
    <div class="tage" :style="{backgroundColor: color}">
        {{ title }}
    </div>
  </div>
</template>

<script>
export default {
    name: 'TageProduct',
    props: {
        color: {
            type: String,
            default: '#3BB77E',
        },
        title: {
            type: String,
            default: 'New',
        }
    }

}
</script>

<style scope>

@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600&display=swap');

.tage_container{
    width: 58px;
    height: 32px;
}

.tage{
    font-family: Quicksand;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #FFFFFF;

    border-radius: 0px 30px 30px 0px;
    padding: 10px 15px;
}

</style>
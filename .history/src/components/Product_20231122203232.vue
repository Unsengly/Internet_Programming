<template>
  <div class="container_product">
    <div class="tag_product">
        <TageProduct :color="tage_color" :title="tage_title" />
    </div>
    <div class="image_product">
        <img :src="Image_product" alt="">
    </div>
    
    <div class="wrap_info_product">
        <div class="category_product">
            {{ category_product }}
        </div>
        <div class="name_product">
            {{ name_product }}
        </div>
        <div class="rate_product">
            
            <svg 
                v-for="(starCorlor) in getStarColors()" :key="starCorlor" 
                width="12" height="12" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="12,2 15,10 23,10 17,14 19,22 12,17 5,22 7,14 1,10 9,10" :fill="starCorlor"/>
            </svg>
    
            ({{ rate_product.toFixed(1)  }})

        </div>
        <div class="des_product">
            {{ des_product }}
        </div>
        <div class="wrap_price_qty">
            <div class="price_product">
                {{ sell_price_product }}
                <div class="discount_price" style="margin-top: 10px;">{{ discount_price }}</div>
            
            </div>
            
            <button 
                class="num_product" 
                v-if="quantity === 0" 
                @click="showInput = true; quantity = 1">Add +</button>
            <button 
                class="num_product" 
                type="number" min="0" max="100"
                v-if="showInput && quantity > 0 " 
                :value="quantity" 
                @input="updateQuantity($event.target.value)"
            > 
                <div style="margin-left: 20px;">{{ quantity }}</div>
                
                <div class="arrow_num_product">
                    <!-- arrow up -->
                    <svg 
                       style="margin-left: 20px;" 
                       width="15" height="15" 
                       xmlns="http://www.w3.org/2000/svg" 
                       viewBox="0 0 24 24"
                       @click="increaseQuantity">
                        <path d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z" fill="#3BB77E"></path>
                    </svg>
                    
                    <!-- arrow down -->
                    <svg 
                       style="margin-left: 20px;" 
                       width="15" height="15" 
                       xmlns="http://www.w3.org/2000/svg" 
                       viewBox="0 0 24 24"
                       @click="decreaseQuantity">
                        <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z" fill="#3BB77E"></path>
                    </svg>
                </div>

             </button>
        </div>
    </div>
  </div>
</template>

<script>

import TageProduct from './TageProduct.vue';

export default {
    name: 'Product',
    props: {
        tage_title: String,
        tage_color: String,
        Image_product: String,
        category_product: String,
        name_product: String,
        rate_product: Number,
        sell_price_product: Number,
        des_product: String,
        discount_price: String,
    },
    components: {
        TageProduct,
    },

    data() {
        return {
            showInput: false,
            quantity: 0,
        }
    },
    
    methods: {
        getStarColors() {
            let colors = [];
            for (let i = 0; i < 5; i++) {
                if (i < this.rate_product) {
                    colors.push('#FDC040'); // gold color for active stars
                } else {
                    colors.push('#CDCDCD'); // gray color for inactive stars
                }
            }
            return colors;
        },
        updateQuantity(value) {
            if (value === 0) {
                this.showInput = false;
            } else {
                this.showInput = true;
                this.quantity = value;
            }
        },
        increaseQuantity() {
            this.quantity++;
            this.showInput = true;
        },

        decreaseQuantity() {
            if (this.quantity > 0) {
                this.quantity--;
            }
            if (this.quantity === 0) {
                this.showInput = false;
            }
        },

    },

}
</script>

<style scope>

@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600&display=swap');

.container_product{
    width: 274px;
    height: 400px;
    border: 1px solid #BCE3C9;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    position: relative;
}

.container_product:hover{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 2px solid #3BB77E;
}

.tag_product{
    position: absolute;
    top: 30px;
    left: 0;
}

.image_product{
    width: 220px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

.image_product img{
    width: 100%;
    height: 100%;
    object-fit: cover;

    padding-top: 50px;
}

.category_product{
    font-family: Quicksand;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #3D3D3D;
}

.name_product{
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    text-align: start;
    color: #3D3D3D;
    
    margin-top: 10px;
   
}

.rate_product{
    font-family: Quicksand;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #3D3D3D;

    margin-top: 10px;
}

.rate_product .star{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

.des_product{
    font-family: Quicksand;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #3D3D3D;

    margin-top: 10px;
}

.wrap_price_qty{
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    margin-top: 30px;
}

.price_product{
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 20px;
    text-align: center;
    color: #3BB77E;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.discount_price{
    font-family: Quicksand;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: start;
    color: #3D3D3D;
    text-decoration-line: line-through;
}

.num_product{
    width: 68px;
    height: 30px;
    border: 0px solid #3BB77E;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Quicksand;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #3BB77E;
    
    cursor: pointer;
    background-color: #DEF9EC;
}

.num_product:hover{
    border: 1px solid #3BB77E;
}

.arrow_num_product{
    display: flex;
    flex-direction: column;
}

.wrap_info_product{
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 20px;
}


</style>
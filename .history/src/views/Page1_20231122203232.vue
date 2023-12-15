<!-- print hello world -->
<template>
    <div class="container_page1">
    
        <div class="wrap_page1">
            <div>
                <Menu text_menu="Featured Categories"/>
            </div>
            
            <div class="cart_page1">
                <div v-for="item in categories" :key="item.Img" class="card_conatainer">
                    <Cart
                        :bgColor="item.bgColor"
                        :Img="item.Img"
                        :Title="item.Title"
                        :Item="item.Item"
                    />
                </div>
            </div>
  
            <div class="promotion_page1">
                <div v-for="item in promotions" :key="item.Img">
                    <AddVertise
                        :bgColor="item.bgColor"
                        :heanding="item.heanding"
                        :textBtn="item.textBtn"
                        :colorBtn="item.colorBtn"
                        :Img="item.Img"
                    />
                </div>
            </div>

            <div class="popular_product_menu">
                <Menu text_menu="Popular Products"/>
            </div>

            <div class="product_page1 item">
                <div v-for="item in products" :key="item.Img">
                    <Product
                        :tage_title="item.tag"
                        :tage_color="item.tag_color"
                        :Image_product="item.image"
                        :category_product="item.category"
                        :name_product="item.name"
                        :rate_product="item.rate"
                        :sell_price_product="item.sellPrice"
                        :des_product="item.description"
                        :discount_price="item.discountPrice"
                    />
                </div>
            </div>
        </div>
      
    </div>
  </template>
  
  <script>
  
  import MyButton from '../components/MyButton.vue';
  import Cart from '../components/Cart.vue';
  import AddVertise from '../components/AddVertise.vue';
  import Menu from '../components/Menu.vue';
  import Product from '../components/Product.vue';

  import { mapState } from 'pinia';
  import { useProductStore} from '../stores/product_store.js';
  
  export default {
      name: 'App',
      components: {
        MyButton,
        Cart,
        AddVertise,
        Menu,
        Product,
      },
      computed: {
        ...mapState(useProductStore, ["categories"]),
        ...mapState(useProductStore, ["promotions"]),
        ...mapState(useProductStore, ["products"]),
      },
    };
  
  </script>
  
<style scoped>

.container_page1 {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.wrap_page1 {
   
    width: 1500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.cart_page1{
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: space-between;
    gap: 8px;
}

.promotion_page1{
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px;
}
   
.popular_product_menu{
    margin-top: 10px;
    
}  

.product_page1 {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: center;
    gap: 15px;
}

</style>
  
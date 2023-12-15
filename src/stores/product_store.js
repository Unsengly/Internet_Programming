import { defineStore } from 'pinia';
// how to import image in vue3
// https://stackoverflow.com/questions/63492211/how-to-import-image-in-vue3
import onionImg from '@/assets/images/onion.png';
import vegetableImg from '@/assets/images/vegetable.png';
import yogurtImg from '@/assets/images/yogurt.png';
import hamburger from '@/assets/images/hamburger.png';
import appleImg from '@/assets/images/apple.png';
import orangeImg from '@/assets/images/orange.png';
import kiwiImg from '@/assets/images/kiwi.png';
import peachImg from '@/assets/images/peach.png';
import snackImg from '@/assets/images/snack.png';
import milkImg from '@/assets/images/milk.png';
import headphoneImg from '@/assets/images/headphone.png';
import popcorn from '@/assets/images/popcorn.png';
import red_onion from '@/assets/images/red_onion.png';
import lemon from '@/assets/images/lemon.png';
import china_orange from '@/assets/images/china_orange.png';
import chili from '@/assets/images/chili.png';
import beef from '@/assets/images/beef.png';
import fish from '@/assets/images/fish.png';
import carbage from '@/assets/images/carbage.png';
import berry from '@/assets/images/berry.png';
import pork from '@/assets/images/pork.png';
import mongoImg from '@/assets/images/mongo.png';
import beer_gril from '@/assets/images/beef_gril.png';


export const useProductStore = defineStore("product", {
    state: () => ({
        groups: ["Milks & Diaries", "Coffes & Teas", "Pet Foods", "Meats", "Vegetables", "Fruits", "Bakery", "Frozen Foods", "Snacks", "Canned Foods", "Beverages", "Cleaning", "Health & Beauty", "Baby", "Others"],
        promotions: [
          { 
            id: 1,
            bgColor: "#F0E8D5",
            heanding: "Everyday Fresh & Clean with Our Products",
            textBtn: "Show Now",
            colorBtn: "#3BB77E",
            Img: onionImg,
          },
          {
            id: 2,
            bgColor: "#F3E8E8",
            heanding: "Make your Breakfast Healthy and Easy",
            textBtn: "Show Now",
            colorBtn: "#3BB77E",
            Img: yogurtImg,
          },
          {
            id: 3,
            bgColor: "#E7EAF3",
            heanding: "Make your Breakfast Healthy and Easy",
            textBtn: "Show Now",
            colorBtn: "#FDC040",
            Img: vegetableImg,
          }
        ],
        categories: [
            {   
                id: 1,
                bgColor: "#F2FCE4",
                Img: hamburger,
                Title: "Milk & Diaries",
                Item: "14 items"
              },
              {
                id: 2,
                bgColor: "#FFFCEB",
                Img: peachImg,
                Title: "Peach",
                Item: "17 items"
              },
              {
                id: 3,
                bgColor: "#ECFFEC",
                Img: kiwiImg,
                Title: "Oganic Kiwi",
                Item: "21 items"
              },
              {
                id: 4,
                bgColor: "#FEEFEA",
                Img: appleImg,
                Title: "Red Apple",
                Item: "68 items"
              },
              {
                id: 5,  
                bgColor: "#FFF3EB",
                Img: snackImg,
                Title: "Snack",
                Item: "34 items"
              },
              {
                id: 6,
                bgColor: "#FFF3FF",
                Img: berry,
                Title: "Black plum",
                Item: "25 items"
              },
              {
                id: 7,
                bgColor: "#F2FCE4",
                Img: carbage,
                Title: "Vegetable",
                Item: "65 items"
              },
              {
                id: 8,
                bgColor: "#FFFCEB",
                Img: headphoneImg,
                Title: "Headphone",
                Item: "33 items"
              },
              {
                id: 9,
                bgColor: "#F2FCE4",
                Img: milkImg,
                Title: "Cake & Milk",
                Item: "54 items"
              },
              {
                id: 10,
                bgColor: "#FFF3FF",
                Img: orangeImg,
                Title: "Orange",
                Item: "63 items"
              },  
        ],
        products: [ 
            {
                id: 1,
                tag: "-17%",
                image: mongoImg,
                category: "Hodo Foods",
                name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                rate: 2,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: "$2.03",
                tag_color: "#3BB77E"
            },
            {
                id: 2,
                tag: "Hot",
                image: popcorn,
                category: "Hodo Foods",
                name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                rate: 5,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: "$2.03",
                tag_color: "#FD6E6E"
            },
            {
                id: 3,
                tag: "Sale",
                image: china_orange,
                category: "Hodo Foods",
                name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                rate: 1,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: "$2.03",
                tag_color: "#FDC040"
            },
            {
                id: 4,
                tag: "-17%",
                image: chili,
                category: "Hodo Foods",
                name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                rate: 4,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: "$2.03",
                tag_color: ""
            },
            {
                id: 5,
                tag: "-17%",
                image: lemon,
                category: "Hodo Foods",
                name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                rate: 4,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: "$2.03",
                tag_color: ""

            },
            {
                id: 6,
                tag: "-17%",
                image: pork,
                category: "Hodo Foods",
                name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                rate: 3,
                description: "500 gram",
                sellPrice: "$2.51",
                discountPercentage: 17,
                discountPrice: "$3.03",
                tag_color: ""
            },
            {
                id: 7,
                tag: "Sale",
                image: fish,
                category: "Hodo Foods",
                name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                rate: 4,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: "$2.03",
                tag_color: "#FDC040"
            },
            {
                id: 8,
                tag: "-17%",
                image: beer_gril,
                category: "Hodo Foods",
                name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                rate: 2,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: '$2.03',
                tag_color: ""
            },
            {
                id: 9,
                tag: "-17%",
                image: beef,
                category: "Hodo Foods",
                name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                rate: 5,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: '$2.03',
                tag_color: ""
            },
            {
                id: 10,
                tag: "Hot",
                image: red_onion,
                category: "Hodo Foods",
                name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                rate: 3,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: '$2.03',
                tag_color: "#FD6E6E"
            },
        ],   
    }),
    getters: {
        
    },
    actions: {
        
    },
} )

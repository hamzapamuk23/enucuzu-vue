<template>
    <v-container>
        <v-layout>
            <v-flex class="xs12 sm12 md12 lg12">
                <v-card v-for="(product) in products" :key="product.id"  max-width="15%"  class="mt-5 mx-2 elevation-3" style=" display:inline-block" >
                    <v-img :src="product.imageUrl"></v-img>
                    <v-card-title class="pa-0 text-subtitle-1">{{product.name}}</v-card-title>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-subtitle align="center" class="pa-2" style="font-size:50%">{{product.price}}<strong>TL</strong>({{product.platformName}})</v-card-subtitle>
                </v-card>
            </v-flex>
        </v-layout>
        <div>
            <label></label>
        </div>
    </v-container>
</template>

<script>

export default {
    data: () => ({
        products:[]
    }),
    methods:{
        async getProduct(){
            console.log(localStorage.getItem('searchName'))
            const response = await this.axios.get("http://localhost:8080/product/search/findCheapestProduct?name="+localStorage.getItem('searchName'));
            this.products = response.data._embedded.products
            this.products = JSON.parse(JSON.stringify(this.products))
            console.log(this.products)
            
        }
    },
    mounted(){
        this.getProduct()
    }
    
}
</script>

<style>

</style>
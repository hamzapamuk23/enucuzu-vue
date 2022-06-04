<template>
    <v-container>
        <v-layout>
            <v-flex class="xs12 sm12 md12 lg12">
                <v-card @click="goToProductDetail(index)" v-for="(product,index) in products" :key="product.id"
                    width="15%" class="mt-5 mx-2 elevation-3"
                    style="display:inline-block; overflow:hidden; white-space: nowrap; text-overflow: ellipsis;">
                    <!-- <a :href="product.url" style="text-decoration:none; color:#1b1b1b; "> -->
                    <v-img size="10px" :src="product.imageUrl"></v-img>
                    <v-tooltip right>
                        <template v-slot:activator="{ on }">
                            <v-card-title class="pa-0" v-on="on" style=" font-size:14px; font-family:source_sans_proregular;">{{product.name}}
                            </v-card-title>
                        </template>
                        <span>{{product.name}}</span>
                    </v-tooltip>
                    <v-divider></v-divider>
                    <v-card-subtitle align="center" class="pa-2" style="font-size:100%">{{product.price}} TL
                    </v-card-subtitle>
                    <!-- </a> -->
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        products:[]
        }),
    mounted(){
        this.getProduct()
    },
    methods:{
        async getProduct(){
            const response = await this.axios.get("http://localhost:8080/product?size=24")
            this.totalPage = response.data.page.totalPages
            this.totalElements = response.data.page.totalElements
            this.size = response.data.page.size
            this.products = response.data._embedded.products
        },
        goToProductDetail(index){
            this.$router.push({path: "/product-detail", query:{productId: this.products[index].id}})
        },
    }
};
</script>
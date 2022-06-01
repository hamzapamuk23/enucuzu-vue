<template>
    <v-row class="mt-5 mx-2 elevation-3" width="100%" align="center">
        <v-col width="50%" style="border-right:1px solid gray" >
            <v-card max-width="35%"  class="elevation-3" style=" margin-left: 10%; display:inline-block" >
                <v-img :src="product.imageUrl"></v-img>
                <v-card-title class="pa-0  text-subtitle-1">{{product.name}}</v-card-title>
                <v-divider class="mx-4"></v-divider>
                <v-card-subtitle align="center" class="pa-2" style="; font-size:50%"><strong> {{product.price}} TL </strong> (Trendyol)</v-card-subtitle>
            </v-card>
            <v-div max-width="35%"   style=" margin-left: 10%; display:inline-block; position: relative; top:-415px" >
                <v-btn  style="display:block">Trendyol:<span>{{product.price}} TL</span></v-btn>
                <v-btn class="mt-5" style="display:block">Trendyol:<span>{{product.price}} TL</span></v-btn>



            </v-div>
            <!-- <v-card max-width="35%"  class="elevation-3" style=" margin-top: 0; margin-left: 10%; display:inline-block" >
                <v-list-item dense link two-line>
                    <v-list-item-content>
                        <v-img src="https://cdn.dsmcdn.com/web/logo/ty-web.svg"></v-img>
                        <v-list-item-title></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

            </v-card> -->
                <!-- <vr -->
                <!-- <v-img style="width: 400px; height: 600px%;"  sizes="small" :src="product.imageUrl"></v-img> -->
            
        </v-col>
        <v-col   width="50%">
            <table>
                <tr>
                    <th class="text-left">Teknik Özellikler:</th>
                </tr>
                <tr v-for="(productDetail) in Object.entries(this.product.detail)" :key="productDetail.id">
                    <th class="text-left" style="font-size: 90%; width: 60%">{{productDetail[0]}}</th>
                    <th class="text-left" style="width: 3%">:</th>
                    <td style="width: 37%; font-size: 80%;" colspan="2">{{productDetail[1]}}</td>
                </tr>
            </table>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        product:{},
        otherLinks:[{url:"https://cdn.dsmcdn.com/web/logo/ty-web.svg",name:"N11"},
        {url:"https://www.trendyol.com/samsung-c-t/gt-e-1205-kamerasiz-tuslu-cep-telefonu-p-258163943",name:"N11"},
        {url:"https://www.trendyol.com/samsung-c-t/gt-e-1205-kamerasiz-tuslu-cep-telefonu-p-258163943",name:"N11"}]
    }),
    methods:{
        async getProduct(){
            const response = await this.axios.get("http://localhost:8080/product/search/getProduct?id=" + this.$route.query.productId)
            this.product = response.data._embedded.products[0]
            console.log(this.product)

        }
    },
    mounted(){
        this.getProduct()
    }
}
</script>
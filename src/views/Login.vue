<template>
<v-container style=" width:60%;  margin-top: 10%; justify-content: center; align-items: center; ">
    <v-row class="mt-5 mx-2 elevation-5" align="center" style="background-color:#C5CAE9; border-radius: 5px;" >
        <v-col cols="6" >
            En Ucuzu Sitemize Hoşgeldin.
        </v-col>
        <v-col cols="6" style="border-left: 1px solid red" >
          <v-form ref="form" lazy-validation>
            <v-container grid-list-md pa-0>
                <v-layout row wrap>
                    <v-flex class="xs12 sm12 md12 lg12" >
                        <v-text-field v-model="customer.userName" hide-details dense outlined label="Kullanıcı Adı"></v-text-field>
                    </v-flex>
                    <v-flex class="xs12 sm12 md12 lg12" >
                        <v-text-field type="password" v-model="customer.password" hide-details dense outlined label="Parola"></v-text-field>
                    </v-flex>
                    <v-flex v-if="login" @click="login=!login" class="xs12 sm12 md12 lg12" >
                        <span style="cursor:pointer;">Kayıt Olmak için Tıklayınız...</span>
                    </v-flex>
                    <v-flex v-if="!login" @click="login=!login" class="xs12 sm12 md12 lg12" >
                        <span style="cursor:pointer;">Üye İseniz Burdan Giriş Yapınız...</span>
                    </v-flex>
                    <v-flex v-if="login" class="xs4 sm4 md4 lg4 text-center">
                        <v-btn @click="checkUser()" width="130px" color="success" >
                            <v-icon left> send </v-icon>
                            Giriş Yap
                        </v-btn>
                    </v-flex>
                    <v-flex v-if="!login" class="xs4 sm4 md4 lg4 text-center">
                        <v-btn @click="addCustomer()" width="130px" color="success" >
                            <v-icon left> send </v-icon>
                            Üye Ol
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-form>
        </v-col>
    </v-row>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      customer:{userName:"",password:""},
      login:true
    }),
    methods:{
      async addCustomer(){
        console.log(this.customer)
        const response = await this.axios.post("http://localhost:8080/user/search/signIn" , this.customer)
        console.log(response)
      },
      async checkUser(){
        console.log(this.customer)
        const response = await this.axios.get("http://localhost:8080/user/search/signUp?userName=" + this.customer.userName + "&password=" + this.customer.password)
        console.log(response.data)
      }
    }
  }
</script>

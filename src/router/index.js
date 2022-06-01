import Vue from "vue";
import VueRouter from "vue-router";
import Product from "../views/Product.vue";
import ProductDetail from "../views/ProductDetail.vue";
import Login from "../views/Login.vue";
import ProductMobile from "../views/ProductMobile.vue";
import ProductDetailMobile from "../views/ProductDetailMobile.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/Product-detail",
    name: "Product-detail",
    component: ProductDetail,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  }, {
    path: "/product-mobile",
    name: "ProductMobile",
    component: ProductMobile,
  },
  {
    path: "/productDetailMobile",
    name: "ProductDetailMobile",
    component: ProductDetailMobile,
  }
  // {
  //   path: "/student",
  //   name: "Student",
  //   component: Student,
  // },
  // {
  //   path: "/school",
  //   name: "School",
  //   component: School,
  //   // component: () => import('../views/About.vue')
  // },
];

['push','replace'].forEach(method => {
  const originalMethod = VueRouter.prototype[method];
  VueRouter.prototype[method] = function m(location) {
    return originalMethod.call(this, location).catch(error => {
      if (error.name !== 'NavigationDuplicated') {
        // capture exception
      }
    })
  };
});

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

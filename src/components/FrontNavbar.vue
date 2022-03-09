<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light pt-3">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand" href="#">前台</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link active"
              aria-current="page"
              href="#"
              >首頁</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link" href="#"
              >產品列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link" href="#"
              >購物車</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link" href="#"
              >登入後台</router-link
            >
          </li>
        </ul>
      </div>
      <button type="button" class="btn btn-primary me-5">
        結帳
        <span
          class="position-absolute top-0 start-80 me-5 pt-5translate-middle badge rounded-pill bg-danger"
        >
          {{ cartData.carts.length }}
          <span class="visually-hidden">unread messages</span>
        </span>
      </button>
    </div>
  </nav>
</template>

<script>
import emitter from '@/libs/emitter.js'
export default {
  data() {
    return {
      cartData: {
        carts: []
      }
    }
  },
  methods: {
    // 取得購物車列表
    getCart() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          // console.log(res);
          this.cartData = res.data.data
          // console.log(this.cartData);
        })
        .catch((err) => {
          alert(err.data.message)
        })
    }
  },
  mounted() {
    this.getCart()
    emitter.on('get-cart', () => {
      this.getCart()
    })
  }
}
</script>

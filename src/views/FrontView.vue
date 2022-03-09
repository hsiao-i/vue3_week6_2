<template>
  <FrontNavbar></FrontNavbar>
  <div class="container mt-5">
    <h2 class="text-center">前台</h2>
  </div>
  <router-view></router-view>
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue'
export default {
  components: {
    FrontNavbar
  }
}
</script>

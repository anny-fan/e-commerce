<script setup>
import BaseLayout from '@/components/BaseLayout.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

// const routes = {
//   '/': Home,
//   '/about': About
// }

// export default {
//   components: {
//     BaseLayout,
//     Header,
//     Footer,
//     RouterLink
//   }
// data() {
//   return {
//     currentPath: window.location.hash
//   }
// },
// computed: {
//   currentView() {
//     return routes[this.currentPath.slice(1) || '/'] || NotFound
//   }
// },
// mounted() {
//   window.addEventListener('hashchange', () => {
//     this.currentPath = window.location.hash
//   })
// }
// }
</script>

<template>
  <BaseLayout>
    <template #header>
      <Header></Header>
    </template>

    <template #default>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </template>

    <template #footer>
      <Footer v-show="$route.meta.show"></Footer>
    </template>
  </BaseLayout>
  <!-- <header>
    <a href="#/">Home</a> | <a href="#/about">About</a> |
    <a href="#/non-existent-path">Broken Link</a>
  </header> -->

  <!-- <component :is="currentView" /> -->
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>

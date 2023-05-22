<script>
import Home from './components/Home.vue'
import About from './components/About.vue'
import NotFound from './components/NotFound.vue'
import BaseLayout from './components/BaseLayout.vue'
import Header from './components/Header.vue'
const routes = {
  '/': Home,
  '/about': About
}
export default {
  components: {
    BaseLayout,
    Header
  },
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
}
</script>

<template>
  <BaseLayout>
    <template #header>
      <Header></Header>
    </template>

    <template #default>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>

    <template #footer>
      <p>Here's some contact info</p>
    </template>
  </BaseLayout>
  <header>
    <a href="#/">Home</a> |
    <a href="#/about">About</a> |
    <a href="#/non-existent-path">Broken Link</a>
  </header>
  
  <h1 class="text-3xl font-bold underline">
    Style
  </h1>

  <component :is="currentView" />

</template>

<style scoped>

</style>

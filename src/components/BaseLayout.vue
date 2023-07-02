<script>
import { defineComponent } from 'vue'

export default defineComponent({
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      const scrollBtn = this.$refs.scrollTopButton

      if (window.scrollY > 200) {
        scrollBtn.classList.remove('invisible')
      } else {
        scrollBtn.classList.add('invisible')
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
})
</script>

<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
    <div ref="scrollTopButton" class="scroll-top fixed z-10 right-2 bottom-2 transition">
      <div class="text-gray-400 hover:text-blue-400 transition">
        <button @click="scrollToTop">Scroll to top</button>
      </div>
    </div>
  </div>
</template>

<style></style>

<template>
  <div class=" relative">
    <div class="md:container md:mx-auto flex px-6 py-4">
      <span class="flex-none">logo</span>
      <nav class="grow">
        <ul class="flex w-fit mx-auto">
          <li class="mx-6 py-6">
            <span class="nav-style"><a class="nav-link">HOME</a></span>
          </li>

          <li class="mx-6 py-6" v-on:mouseenter="show = true" v-on:mouseleave="show = false">
            <span class="nav-style"><a class="nav-link">CATALOG </a></span>
            <!-- catalog menu-->
            <Transition name="slide-fade">
              <div
                v-if="show"
                class="bg-white drop-shadow-sm flex border w-10/12 px-8 py-4 mx-auto opacity-1 absolute top-20 catelog-menu"
              >
                <div v-for="item in catalog" class="flex-1 mx-4">
                  <h3 class="text-bold text-slate-800 border-b mb-2 py-2 inline-block">
                    {{ item.categories }}
                  </h3>
                  <ul>
                    <li v-for="list in item.lists" class="mb-2 text-slate-700 hover:text-sky-700">
                      <a class="cursor-pointer">{{ list }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Transition>
          </li>

          <li class="mx-6 py-6">
            <span class="nav-style"><a class="nav-link">ABOUT</a></span>
          </li>
          <li class="mx-6 py-6">
            <span class="nav-style"><a class="nav-link">SERVICE</a></span>
          </li>
          <li class="mx-6 py-6">
            <span class="nav-style"><a class="nav-link">NEWS</a></span>
          </li>
          <li class="mx-6 py-6">
            <span class="nav-style"><a class="nav-link"> CONTACT</a></span>
          </li>
        </ul>
      </nav>
      <span class="flex-none">cart icon</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
const catalog = [
  {
    categories: 'Bullet CCTV Cameras',
    lists: [
      'Cam 2 MP Wireless Camera',
      'Cam PTZ Camera',
      'Sen Cameras',
      'Network Cameras',
      '360 Degree Camera'
    ]
  },
  {
    categories: 'C-Mount CCTV Cameras',
    lists: [
      'Cam 4 MP Dome Camera',
      'Wireless Camera',
      'Waterproof Cameras',
      'Dummy Camera',
      'Security Cameras'
    ]
  },
  {
    categories: 'Dome CCTV Cameras',
    lists: [
      'Cam 8 MP Dome Camera',
      'Cam Wireless Camera',
      'Night Vision Cameras',
      'Battery Cameras',
      'Small Drone Cameras'
    ]
  },
  {
    categories: 'Infrared CCTV Cameras',
    lists: [
      'Cam Bullet Camera',
      'Cam Wireless Dome Camera',
      'Rotating Cameras',
      'Day Cameras',
      'HD Cameras'
    ]
  }
]
</script>

<style lang="scss" scoped>
.catelog-menu {
  translate: -35%
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  transform: translateY(-20px);
}
.slide-fade-enter-to {
  opacity: 1;
}
.slide-fade-leave-to {
  transform: translateY(0px);
  opacity: 0;
}
</style>

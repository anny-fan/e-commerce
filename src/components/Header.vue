<script setup>
import { ref } from 'vue'

const showCatalog = ref(false)
const toggleMenu = ref(false)

const catalog = [
  //#region
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
  //#endregion
]
</script>

<template>
  <div class="relative">
    <div class="container mx-auto flex gap-4 py-8 items-center">
      <router-link
        to="/"
        class="grow lg:flex-none lg:order-first text-2xl text-bold"
        @click="toggleMenu = false"
        >LOGO</router-link
      >
      <nav class="lg:grow order-first flex gap-2" :class="{ open: toggleMenu }">
        <ul
          class="menu text-center lg:text-left h-fit w-full -start-full top-14 lg:flex lg:grow lg:justify-center bg-white lg:bg-transparent drop-shadow-sm lg:drop-shadow-none border lg:border-transparent absolute lg:static flex-col lg:flex-row"
        >
          <li class="mx-6 py-8">
            <span class="lg:nav-style"
              ><router-link to="/" class="nav-link" @click="toggleMenu = false"
                >HOME</router-link
              ></span
            >
          </li>

          <li
            class="mx-6 py-8"
            v-on:mouseover="showCatalog = true"
            v-on:mouseleave="showCatalog = false"
          >
            <span class="lg:nav-style"
              ><router-link to="/catalog" class="nav-link" @click="toggleMenu = false"
                >CATALOG
              </router-link></span
            >
            <!-- catalog menu-->
            <Transition name="slide-fade">
              <div
                v-if="showCatalog"
                class="hidden lg:flex bg-white drop-shadow-sm border lg:w-[975px] xl:w-[1200px] px-8 py-4 mx-auto opacity-1 absolute -left-[90px] lg:-left-[80px] xl:-left-[5%] 2xl:left-[5%] top-20 catelog-menu"
              >
                <div v-for="item in catalog" class="flex-1 mx-4">
                  <h3 class="text-bold text-slate-800 border-b mb-2 py-2 inline-block">
                    {{ item.categories }}
                  </h3>
                  <ul>
                    <li v-for="list in item.lists" class="mb-2 text-slate-700 hover:text-sky-700">
                      <a class="active:text-slate-400 cursor-pointer">{{ list }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Transition>
          </li>
          <li class="mx-6 py-8">
            <span class="lg:nav-style"
              ><router-link to="/about" class="nav-link" @click="toggleMenu = false"
                >ABOUT</router-link
              ></span
            >
          </li>
          <li class="mx-6 py-8">
            <span class="lg:nav-style"
              ><router-link to="/service" class="nav-link" @click="toggleMenu = false"
                >SERVICE</router-link
              ></span
            >
          </li>
          <li class="mx-6 py-8">
            <span class="lg:nav-style"
              ><router-link to="/news" class="nav-link" @click="toggleMenu = false"
                >NEWS</router-link
              ></span
            >
          </li>
          <li class="mx-6 py-8">
            <span class="lg:nav-style"
              ><router-link to="/contact" class="nav-link" @click="toggleMenu = false">
                CONTACT</router-link
              ></span
            >
          </li>
        </ul>
        <!-- hamburger -->
        <div
          class="hamburger flex flex-col item-center justify-between lg:hidden w-6 h-4 cursor-pointer"
          @click="toggleMenu = !toggleMenu"
        >
          <span class="block bg-black h-0.5 w-full rounded-lg origin-top-left"></span>
          <span class="block bg-black h-0.5 w-full rounded-lg"></span>
          <span class="block bg-black h-0.5 w-full rounded-lg origin-bottom-left"></span>
        </div>
      </nav>
      <!-- user autenticate -->
      <div class="flex-none flex gap-2 flex-row">
        <router-link to="/login" class="nav-link" @click="toggleMenu = false">Login</router-link>
        <router-link to="/signup" class="nav-link" @click="toggleMenu = false">Sign Up</router-link>
      </div>
      <!-- cart -->
      <router-link to="/cart" class="flex-none w-6 cursor-pointer"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 612 792"
          style="enable-background: new 0 0 612 792"
          xml:space="preserve"
        >
          <path
            d="M95.6,243v344.3c0,10.6,8.6,19.1,19.1,19.1h382.5c10.6,0,19.1-8.6,19.1-19.1V243c0-10.6-8.6-19.1-19.1-19.1h-95.6v-95.6
          c0-52.8-42.8-95.6-95.6-95.6c-52.8,0-95.6,42.8-95.6,95.6v95.6h-95.6C104.2,223.9,95.6,232.4,95.6,243z M248.6,128.3
          c0-31.7,25.7-57.4,57.4-57.4s57.4,25.7,57.4,57.4v95.6H248.6V128.3z M133.9,262.1h76.5v38.3c0,10.6,8.6,19.1,19.1,19.1
          s19.1-8.6,19.1-19.1v-38.3h114.8v38.3c0,10.6,8.6,19.1,19.1,19.1s19.1-8.6,19.1-19.1v-38.3h76.5v306H133.9V262.1z"
          ></path></svg
      ></router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.open {
  .menu {
    inset-inline-start: 0;
  }
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

.hamburger {
  .open & {
    span {
      transition: transform 0.2s ease-in-out;
      &:first-child {
        transform: rotate(38deg);
      }
      &:nth-child(2) {
        transform: scaleY(0);
      }
      &:last-child {
        transform: rotate(-38deg);
      }
    }
  }
}
</style>

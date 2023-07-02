<template>
  <div class="product-catalog container mx-auto">
    <div class="flex gap-8">
      <aside class="sidebar basis-2/12">
        <ul class="sidebar-title">
          <li>Category</li>
          <li>Shop By Color</li>
          <li>Shop By Lens</li>
          <li>Shop By Voltage</li>
          <li>Shop By Price</li>
          <li>Shop By Brand</li>
        </ul>
      </aside>
      <main class="basis-10/12">
        <div class="collection-header flex w-100 gap-2">
          <div class="collection-view flex gap-1 items-center" :data-view="currentView">
            <a
              v-for="view in views"
              :key="view.value"
              :title="view.label + ' view'"
              :class="{ 'change-mode': true, active: currentView === view.value }"
              class="width-[16px]"
              @click="changeView(view.value)"
              :data-view="view.value"
            >
              <svg
                v-if="view.value === 'grid'"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40H40c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40H200c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40H360c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328z"
                />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"
                />
              </svg>
            </a>
          </div>

          <div class="collection-items-per-page">
            <label for="paginateBy">Paginate by</label>
            <select v-model="perPage" @change="updatePagination">
              <option v-for="option in perPageOptions" :value="option" :key="option">
                {{ option }}
              </option>
            </select>
          </div>

          <div class="sortby">
            <label for="sortBy">Sort by</label>
            <select v-model="sortBy" @change="updateSort">
              <option v-for="option in sortOptions" :value="option.value" :key="option.value">
                {{ option.label }}
              </option>
            </select>
          </div>
        </div>
        <div class="products grid lg:grid-cols-2 xl:grid-cols-3">
          <TransitionGroup name="fade" mode="out-in">
            <div class="product" v-for="product in displayedProducts" :key="product.id">
              <img :src="getImagePath(product.image)" :alt="product.name" />
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              <p>{{ product.price }}</p>
              <button @click="addToCart(product)">Add to Cart</button>
            </div>
          </TransitionGroup>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

const currentView = ref('grid')
const views = [
  { value: 'grid', label: 'Grid' },
  { value: 'list', label: 'List' }
]

const perPage = ref(12)
const perPageOptions = [12, 16, 20, 24, 30, 48]
const currentPage = ref(1)
const totalItems = ref(0)
const products = ref([])
const displayedProducts = ref([])

// Calculate the total number of pages based on the total items and items per page
const totalPages = computed(() => Math.ceil(totalItems.value / perPage.value))

const sortBy = ref('price-ascending')
const sortOptions = [
  { value: 'default', label: 'Feature' },
  // { value: 'best-selling', label: 'Best selling' },
  // { value: 'title-ascending', label: 'Alphabetically, A-Z' },
  // { value: 'title-descending', label: 'Alphabetically, Z-A' },
  { value: 'price-ascending', label: 'Price, low to high' },
  { value: 'price-descending', label: 'Price, high to low' }
  // { value: 'created-ascending', label: 'Date, old to new' },
  // { value: 'created-descending', label: 'Date, new to old' }
]

const changeView = (view) => {
  currentView.value = view
}

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    fetchData()
  }
}

const getImagePath = (image) => {
  return new URL(`../assets/products/${image}.webp`, import.meta.url).href
}

fetchData()

// Watch for changes in sort or pagination and update displayed products
// watch([sortBy, perPage, currentPage], () => {
//   updateDisplayedProducts()
// })

// const request = new Request('@/db.json')

// Example of a method to fetch data for the current page from an API
async function fetchData() {
  try {
    const response = await fetch('/db.json')
    if (!response.ok) {
      throw new Error(`Failed to fetch products (${response.status} ${response.statusText})`)
    }
    const data = await response.json()
    products.value = data
    totalItems.value = data.length
    updateDisplayedProducts()
  } catch (error) {
    console.error('Error fetching productssss:', error)
  }
}

const updatePagination = (e) => {
  if (e.target.value !== perPage.value) {
    currentPage.value = 1
    perPage.value = e.target.value
    console.log('perPage', perPage.value)
    // Perform any necessary actions when the perPage value changes
    // For example, you can update the displayed items or fetch data for the new page
    goToPage(1) // Reset to the first page after changing the items per page
    fetchData()
  }
}

const updateSort = (newSortBy) => {
  if (newSortBy !== sortBy.value) {
    sortBy.value = newSortBy
    // Perform any necessary actions when the sort option changes
    goToPage(1) // Reset to the first page after changing the sort option
    fetchData()
  }
}

function updateDisplayedProducts() {
  let sortedProducts = [...products.value] // Make a copy of the products array
  if (sortBy.value === 'default') {
    sortedProducts.sort((a, b) => 0)
  } else if (sortBy.value === 'price-ascending') {
    // Sort products by price in ascending order
    sortedProducts.sort((a, b) => a.price - b.price)
  } else if (sortBy.value === 'price-descending') {
    // Sort products by price in descending order
    sortedProducts.sort((a, b) => b.price - a.price)
  }

  const start = (currentPage.value - 1) * perPage.value
  const end = start + perPage.value
  console.log('sortedProducts', sortedProducts.slice(start, end))
  console.log('perPage', perPage.value)

  displayedProducts.value = sortedProducts.slice(start, end)
}
</script>

<style lang="scss" scoped>
.sidebar-title {
  li {
    font-size: x-large;
    border-bottom: 1px solid;
    padding: 1rem 0;
  }
}
</style>

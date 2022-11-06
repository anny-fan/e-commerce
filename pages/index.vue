<template>
  <div>
    <home-carousel :sale_items="sale_items" />
    <br />
    <v-container>
      <h1 class="text-md-h4 text-h6">Check these out</h1>
      <br />
      <product-slider :products="products" />
      <br /><br /><br />
      <newsletter />
    </v-container>
  </div>
</template>

<script>
export default {
  async created() {
    this.products = await this.$content("products").fetch();
    this.sale_items = await this.$content("products")
      .where({ onSale: true })
      .fetch();
  },
  data() {
    return {
      products: null,
      sale_items: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>

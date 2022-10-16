<template>
  <div>
    <Nav />
    <HomeCarousel :sale_items="sale_items" />
    <Footer />
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

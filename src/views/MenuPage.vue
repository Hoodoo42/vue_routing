<template>
  <div>
    <page-header></page-header>
    <h3>menu</h3>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
export default {
  components: {
    PageHeader,
  },
};
</script>

<style scoped>
div {
  display: grid;
  text-align: center;
}
</style>
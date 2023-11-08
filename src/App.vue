<script>
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';
import { store } from './store';
import axios from 'axios';

export default {
  components: {
    PageHeader,
    PageMain,
    PageFooter,
  },
  data() {
    return {};
  },
  created() {
    axios.get('http://localhost:3000/products').then((res) => {
      const products = res.data;
      store.db = products;
    });
  },
};
</script>

<template>
  <PageHeader />
  <PageMain />
  <PageFooter />
</template>

<style lang="scss">
@use './styles/partials/general.scss' as *;
@use './styles/partials/variables.scss' as *;
@use './styles/partials/mixins.scss' as *;
</style>

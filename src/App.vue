<script>
import PageHeader from './components/Page-Header.vue';
import PageMain from './components/Page-Main.vue';
import PageFooter from './components/Page-Footer.vue';

export default {
  components: {
    PageHeader,
    PageMain,
    PageFooter,
  },
  data() {
    return {
      message: 'TEST',
    };
  },
};
</script>

<template>
  <PageHeader />
  <PageMain />
  <PageFooter />
</template>

<style lang="scss"></style>

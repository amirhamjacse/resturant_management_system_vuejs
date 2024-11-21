<template>
  <div id="app">
    <!-- Header Component -->
    <Header />

    <!-- Main Content -->
    <div class="main-content">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,

  },
};
</script>

<style>
.main-content {
  padding: 20px;
}
</style>

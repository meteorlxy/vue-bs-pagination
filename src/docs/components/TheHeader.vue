<template>
  <header>
    <div class="jumbotron jumbotron-fluid text-center bg-transparent m-0">
      <img src="../assets/img/vue_logo.png">
      
      <h1 class="my-4">Bootstrap Pagination for Vue</h1>
      
      <p class="text-muted my-2">A very simple vue component - bootstrap pagination</p>
      
      <p class="text-muted my-2">
        For <code>Vue 2.2+</code> and <code>Bootstrap 3</code> / <code>Bootstrap 4.0.0-beta</code>
      </p>
      
      <a
        class="btn btn-outline-secondary btn-lg my-3"
        href="https://github.com/meteorlxy/vue-bs-pagination"
        target="_blank">
        <i class="fa fa-github"></i> GitHub
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style type="text/css" lang="scss" scoped>
header {
  background: linear-gradient(to top ,#fff , #d5ffc1);
}
</style>
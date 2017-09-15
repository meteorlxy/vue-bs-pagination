<template>
  <div id="app">
    <header class="jumbotron text-center">
      <img src="static/img/logo.png">
      <h1>Bootstrap Pagination for Vue</h1>
      <p class="text-muted">A very simple vue component - bootstrap pagination</p>
      <p class="text-muted">Compatible with Vue 2.x & Bootstrap 3/4-beta</p>
      <a class="btn btn-outline-secondary btn-lg" href="https://github.com/meteorlxy/vue-bs-pagination" target="_blank"><i class="fa fa-github"></i> GitHub</a>
    </header>
    <main class="container">
      <div id="demo">
        <h3>Demo</h3>
        <hr>
        <div class="form-group">
          <label for="input-total">Total Pages</label>
          <input type="number" class="form-control" id="input-total" v-model.number="total">
          <small class="form-text text-muted">prop: <code>total</code>, type: <code>Number</code>, required: <code>true</code></small>
        </div>
        <div class="form-group">
          <label for="input-each-side">Each Side</label>
          <input type="number" class="form-control" id="input-each-side" v-model.number="eachSide">
          <small class="form-text text-muted">prop: <code>eachSide</code>, type: <code>Number</code>, default: <code>1</code></small>
        </div>
        <div class="form-group">
          <label for="input-current-page">Current Page</label>
          <input type="number" class="form-control" id="input-current-page" :value="currentPage" readonly>
          <small class="form-text text-muted">v-model: <code>currentPage</code></small>
        </div>
        <div>
          <p>Result</p>
          <v-pagination v-model="currentPage" :total="total" :each-side="eachSide"></v-pagination>
        </div>
      </div>
    </main>
    <footer class="text-center text-muted">
      <hr>
      <p>vue-bs-pagination</p>
      <div class="h3 mb-5">
        <a href="https://github.com/meteorlxy/vue-bs-pagination" target="_blank"><i class="fa fa-github"></i></a>
      </div>
    </footer>
  </div>
</template>

<script>
import VuePagination from '../src/components/Pagination'
export default {
  name: 'vue-pagination',
  components: {
    'v-pagination': VuePagination,
  },
  data () {
    return {
      total: 10,
      currentPage: 1,
      eachSide: 1,
    }
  },
}
</script>

<style type="text/css" lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
header {
  &.jumbotron {
    background: linear-gradient(to top ,#fff , #d5ffc1);
  }
}
</style>



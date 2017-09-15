<template>
  <div id="app">
    <header class="jumbotron text-center">
      <h1>Bootstrap Pagination for Vue</h1>
      <br>
      <p class="text-muted">Dev Mode</p>
    </header>
    <main class="container">
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
    </main>
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



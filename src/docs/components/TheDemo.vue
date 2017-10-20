<template>
  <section id="pagination-demo">
    <h3>Demo</h3>
    <hr>
    <div class="form-group">
      <label for="input-total">Total Pages</label>
      
      <input
        v-model.number="total"
        type="number"
        id="input-total"
        class="form-control"
        
      >
      
      <small class="form-text text-muted">prop: <code>total</code>, type: <code>Number</code>, required: <code>true</code></small>
    </div>
    
    <div class="form-group">
      <label for="input-each-side">Each Side</label>
      
      <input
        v-model.number="eachSide"
        type="number"
        id="input-each-side"
        class="form-control"
      >
      
      <small class="form-text text-muted">prop: <code>eachSide</code>, type: <code>Number</code>, default: <code>1</code></small>
    </div>
    
    <div class="form-group">
      <label for="input-current-page">Current Page</label>
      
      <input
        :value="currentPage"
        type="number"
        id="input-current-page"
        class="form-control"
        readonly
      >
      
      <small class="form-text text-muted">v-model: <code>currentPage</code></small>
    </div>
    <div>
      <p>Result</p>
      
      <VuePagination
        v-model="currentPage"
        :total="total"
        :each-side="eachSide"
      />
    </div>
  </section>
</template>

<script>
import VuePagination from '@/components/VuePagination'
export default {
  name: 'TheDemo',
  components: {
    VuePagination,
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
<template>
<ul class="pagination">
  
  <!--Prev Button-->
  <li
    :class="{ disabled: onFirstPage }"
    class="page-item"
  >
    
    <a
      @click.prevent="prevPage"
      class="page-link"
      rel="prev"
      aria-label="Previous"
    >
      <span aria-hidden="true">&laquo;</span>
    </a>
    
  </li>
  
  <!--Page Buttons-->
  <li
    v-for="paginator in paginators"
    :class="{ active: paginator.value === currentPage, disabled: !paginator.enable}"
    class="page-item"
  >
    
    <a
      @click.prevent="setPage(paginator.value)"
      class="page-link"
      :disabled="!paginator.enable"
    >
      <span>{{ paginator.value }}</span>
    </a>
    
  </li>
  
  <!--Next Button-->
  <li
    :class="{ disabled: onLastPage }"
    class="page-item"
  >
    
    <a
      @click.prevent="nextPage"
      class="page-link"
      rel="next"
      aria-label="Next"
    >
      <span aria-hidden="true">&raquo;</span>
    </a>
    
  </li>
  
</ul>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1,
      validator: val => val > 0
    },
    total: {
      type: Number,
      required: true,
      validator: val => val > 0,
    },
    eachSide: {
      type: Number,
      default: 1,
      validator: val => val >= 0,
    },
  },
  computed: {
    firstPage () {
      return 1
    },
    lastPage () {
      return this.total
    },
    onFirstPage () {
      return this.currentPage === this.firstPage
    },
    onLastPage () {
      return this.currentPage === this.lastPage
    },
    currentPage () {
      return this.value
    },
    paginators () {
      let paginators = []
      if (this.lastPage < this.eachSide * 2 + 4) {
        for (let i = this.firstPage; i < this.lastPage + 1; ++i) {
          paginators.push({
            value: i,
            enable: true,
          })
        }
      } else {
        if (this.currentPage - this.firstPage < this.eachSide + 2) { // if currentPage near firstPage
          for (let i = this.firstPage; i < Math.max(this.eachSide * 2 + 1, this.currentPage + this.eachSide + 1); ++i) {
            paginators.push({
              value: i,
              enable: true,
            })
          }
          paginators.push({
            value: '...',
            enable: false,
          })
          paginators.push({
            value: this.lastPage,
            enable: true,
          })
        } else if (this.lastPage - this.currentPage < this.eachSide + 2) { // if currentPage near lastPage
          paginators.push({
            value: this.firstPage,
            enable: true,
          })
          paginators.push({
            value: '...',
            enable: false,
          })
          for (let i = Math.min(this.lastPage - this.eachSide * 2 + 1, this.currentPage - this.eachSide); i < this.lastPage + 1; ++i) {
            paginators.push({
              value: i,
              enable: true,
            })
          }
        } else { // if currentPage in the middle
          paginators.push({
            value: this.firstPage,
            enable: true,
          })
          paginators.push({
            value: '...',
            enable: false,
          })
          for (let i = this.currentPage - this.eachSide; i < this.currentPage + this.eachSide + 1; ++i) {
            paginators.push({
              value: i,
              enable: true,
            })
          }
          paginators.push({
            value: '...',
            enable: false,
          })
          paginators.push({
            value: this.lastPage,
            enable: true,
          })
        }
      }
      return paginators
    },
  },
  methods: {
    nextPage () {
      this.setPage(this.currentPage + 1)
    },
    prevPage () {
      this.setPage(this.currentPage - 1)
    },
    setPage (targetPage) {
      if (targetPage <= this.lastPage && targetPage >= this.firstPage) {
        this.$emit('input', targetPage)
      }
    },
  },
}
</script>

<style type="text/css" lang="scss">
.pagination {
  a.page-link:not(.disabled) {
    cursor: pointer;
  }
}
</style>
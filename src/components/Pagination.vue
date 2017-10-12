<template>
<ul class="pagination">
  
  <!--Prev Button-->
  <li class="page-item"
    :class="{ disabled: onFirstPage }">
    
    <a class="page-link" rel="prev" aria-label="Previous"
      @click.prevent="prevPage">
      <span aria-hidden="true">&laquo;</span>
    </a>
    
  </li>
  
  <!--Page Buttons-->
  <li class="page-item"
    v-for="paginator in paginators"
    :class="{ active: paginator.value === currentPage, disabled: !paginator.enable}">
    
    <a class="page-link"
      :disabled="!paginator.enable"
      @click.prevent="setPage(paginator.value)">
      <span>{{ paginator.value }}</span>
    </a>
    
  </li>
  
  <!--Next Button-->
  <li class="page-item"
    :class="{ disabled: onLastPage }">
    
    <a class="page-link" rel="next" aria-label="Next"
      @click.prevent="nextPage">
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
    },
    total: {
      type: Number,
      required: true,
    },
    eachSide: {
      type: Number,
      default: 1,
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
      if (this.firstPage <= this.lastPage) {
        if (this.lastPage < this.eachSide * 2 + 4) {
          for (let i = 1; i < this.lastPage + 1; ++i) {
            paginators.push({
              value: i,
              enable: true,
            })
          }
        } else {
          if (this.currentPage - 1 < this.eachSide + 2) {
            for (let i = 1; i < Math.max(this.eachSide * 2 + 1, this.currentPage + this.eachSide + 1); ++i) {
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
          } else if (this.lastPage - this.currentPage < this.eachSide + 2) {
            paginators.push({
              value: 1,
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
          } else {
            paginators.push({
              value: 1,
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

<style type="text/css" lang="scss" scoped>
.pagination {
  a {
    cursor: pointer;
  }
}
</style>
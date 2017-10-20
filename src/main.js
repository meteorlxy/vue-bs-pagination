import VuePagination from './components/VuePagination'

export default VuePagination

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('VuePagination', VuePagination)
}

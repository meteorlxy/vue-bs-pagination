# vue-bs-pagination

> A very simple vue component - bootstrap pagination

## Usage

### Get start

#### Import via `npm`

```bash
npm install --save vue-bs-pagination
```

#### Register component

```js
import Vue from 'vue'
import VuePagination from 'vue-bs-pagination'
Vue.component('v-pagination', VuePagination)
```

#### Template

```html
<v-pagination :total="10" v-model="page"></v-pagination>
```

#### Stylesheet

> Use `Bootstrap 3` or `Bootstrap 4.0-beta`

### Parameters

```js
props: {
  total: {
    type: Number,
    required: true,
  },
  eachSide: {
    type: Number,
    default: 1,
  },
}
```


## Develop

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


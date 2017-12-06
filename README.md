# vue-bs-pagination

[![build status](https://www.travis-ci.org/meteorlxy/vue-bs-pagination.svg?branch=master)](https://www.travis-ci.org/meteorlxy/vue-bs-pagination)
[![npm version](https://badge.fury.io/js/vue-bs-pagination.svg)](https://badge.fury.io/js/vue-bs-pagination)

> A very simple vue component - bootstrap pagination

[Live Demo](https://meteorlxy.github.io/vue-bs-pagination/)

---

## Get started

### Import

#### Build tools

Import via `npm`

```bash
npm install --save vue-bs-pagination
```

Register component

```js
import Vue from 'vue'
import VuePagination from 'vue-bs-pagination'
Vue.component('VuePagination', VuePagination)
```

#### Browser

Import via `<script>` tag

```html
<script src="path/to/dist/vue-bs-pagination.js"></script>
```

### Usage

#### Template

In HTML
```html
<vue-pagination :total="10" v-model="page"></vue-pagination>
```

In SFC
```html
<VuePagination :total="10" v-model="page" /> 
```

#### Stylesheet

> Use `Bootstrap 3` or `Bootstrap 4.0-beta`

### Parameters

```js
props: {
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
}
```

---

## Developing & Contributing

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

- `/src/components` the source file of `vue-bs-pagination` component
- `/src/docs` the source file of [github-pages](https://meteorlxy.github.io/vue-bs-pagination/) of this project

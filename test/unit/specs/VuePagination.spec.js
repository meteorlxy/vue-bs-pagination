import { mount } from 'vue-test-utils'
import VuePagination from '@/components/VuePagination'

describe('VuePagination.vue', () => {
  const createWrapper = propsData => mount(VuePagination, { propsData })

  let wrapper

  let props

  // vue properties and methods
  describe('test vue properties and methods', () => {
    props = {
      value: 5,
      total: 20,
      eachSide: 2,
    }

    beforeEach(() => {
      wrapper = createWrapper(props)
    })

    describe('test computed properties', () => {
      it('firstPage', () => {
        expect(wrapper.vm.firstPage).toEqual(1)
      })

      it('lastPage', () => {
        expect(wrapper.vm.lastPage).toEqual(props.total)
      })

      it('currentPage', () => {
        expect(wrapper.vm.currentPage).toEqual(props.value)
      })

      it('onFirstPage', () => {
        wrapper.setProps({ value: 1 })
        expect(wrapper.vm.onFirstPage).toBe(true)
        wrapper.setProps({ value: props.total })
        expect(wrapper.vm.onFirstPage).toBe(props.total === 1)
      })

      it('onLastPage', () => {
        wrapper.setProps({ value: 1 })
        expect(wrapper.vm.onLastPage).toBe(props.total === 1)
        wrapper.setProps({ value: props.total })
        expect(wrapper.vm.onLastPage).toBe(true)
      })
    })

    describe('test methods', () => {
      it('nextPage', () => {
        jest.spyOn(wrapper.vm, 'setPage')
        wrapper.vm.nextPage()
        expect(wrapper.vm.setPage).toBeCalledWith(props.value + 1)
      })

      it('prevPage', () => {
        jest.spyOn(wrapper.vm, 'setPage')
        wrapper.vm.prevPage()
        expect(wrapper.vm.setPage).toBeCalledWith(props.value - 1)
      })

      it('setPage', () => {
        wrapper.vm.setPage(10)
        wrapper.vm.setPage(21)
        wrapper.vm.setPage(0)
        expect(wrapper.emitted().input).toBeTruthy()
        expect(wrapper.emitted().input.length).toEqual(1)
        expect(wrapper.emitted().input[0]).toEqual([10])
      })
    })

    describe('test click event handler', () => {
      it('the button of prev-page clicked', () => {
        jest.spyOn(wrapper.vm, 'prevPage')
        wrapper.find('.pagination li:nth-child(1) a').trigger('click')
        expect(wrapper.vm.prevPage).toBeCalled()
      })
      it('the button of next-page clicked', () => {
        jest.spyOn(wrapper.vm, 'nextPage')
        wrapper.find('.pagination li:nth-last-child(1) a').trigger('click')
        expect(wrapper.vm.nextPage).toBeCalled()
      })
      it('the button of a-certain-page clicked', () => {
        jest.spyOn(wrapper.vm, 'setPage')
        wrapper.find('.pagination li:nth-child(2) a').trigger('click')
        expect(wrapper.vm.setPage).toBeCalledWith(1)
      })
    })
  })

  // paginators generation
  describe('test paginators generation', () => {
    it('eachSide prop is great enough to list all the page links', () => {
      wrapper = createWrapper({
        value: 1,
        total: 10,
        eachSide: 4,
      })
      expect(wrapper.vm.paginators.length).toEqual(10)
    })
    it('currentPage near firstPage', () => {
      wrapper = createWrapper({
        value: 2,
        total: 10,
        eachSide: 1,
      })
      expect(wrapper.vm.paginators).toEqual([
        {
          value: 1,
          enable: true
        },
        {
          value: 2,
          enable: true
        },
        {
          value: 3,
          enable: true
        },
        {
          value: '...',
          enable: false
        },
        {
          value: 10,
          enable: true
        },
      ])
    })
    it('currentPage near lastPage', () => {
      wrapper = createWrapper({
        value: 9,
        total: 10,
        eachSide: 1,
      })
      expect(wrapper.vm.paginators).toEqual([
        {
          value: 1,
          enable: true
        },
        {
          value: '...',
          enable: false
        },
        {
          value: 8,
          enable: true
        },
        {
          value: 9,
          enable: true
        },
        {
          value: 10,
          enable: true
        },
      ])
    })
    it('currentPage in the middle', () => {
      wrapper = createWrapper({
        value: 5,
        total: 10,
        eachSide: 1,
      })
      expect(wrapper.vm.paginators).toEqual([
        {
          value: 1,
          enable: true
        },
        {
          value: '...',
          enable: false
        },
        {
          value: 4,
          enable: true
        },
        {
          value: 5,
          enable: true
        },
        {
          value: 6,
          enable: true
        },
        {
          value: '...',
          enable: false
        },
        {
          value: 10,
          enable: true
        },
      ])
    })
  })
})

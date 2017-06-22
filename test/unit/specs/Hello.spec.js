import Vue from 'vue'
import PurchaseList from '@/components/PurchaseList'

describe('PurchaseList.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(PurchaseList)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('p').textContent)
      .to.equal('아직 판매된 내역이 없습니다.')
  })
})

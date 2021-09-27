import {ADD_COUNTER, ADD_TO_CART} from './mutations-types'

export default {
    // mutations中的唯一目的就是修改state中的状态
    // 尽量使mutations中每个方法的功能比较单一
    [ADD_COUNTER](state, payLoad){
      payLoad.count ++
    },
    [ADD_TO_CART](state, payLoad){
      payLoad.checked = false
      state.cartList.push(payLoad)
    }
  }
import {ADD_COUNTER, ADD_TO_CART} from './mutations-types'

export default  {

    addCarList(context,payLoad){
      // let newProduct = null
      // for(let item in state.cartList){
      //   if(item.iid = payLoad.iid){
      //     newProduct = item
      //   }
      // }

      return new Promise((resolve,reject)=>{

        let product = context.state.cartList.find(item => item.iid == payLoad.iid)

        if(product){
          context.commit(ADD_COUNTER, product)
          resolve('商品数量加一')
        }else{
          payLoad.count = 1
          context.commit(ADD_TO_CART, payLoad)
          resolve('加入购物车成功')

        }
      })
      // 调用数组的方法
      
    }
  }
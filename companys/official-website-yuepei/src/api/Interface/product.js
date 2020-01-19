import qs from 'qs'
import request from '@/utils/request'
import  common_api  from '../config'
// api
// const  common_api  = '/api'

// 获取商品详情
const product = {
    getProductList: function(params) {
    return request({
      url:  common_api + '/product',
      method: 'get',
      params: params,
    })
  },
  getProductById: function(params) {
    return request({
      url:  common_api + `/product/${params.id}`,
      method: 'get',
      params: {state:params.state},
    })
  }
}
export default product

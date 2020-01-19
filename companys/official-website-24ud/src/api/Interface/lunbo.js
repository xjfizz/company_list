import qs from 'qs'
import request from '@/utils/request'
import  common_api  from '../config'
// api
// const  common_api  = '/api'

// 获取商品详情
const lunbo = {
    getLunBoList: function(params) {
    return request({
      url:  common_api + '/slideshow',
      method: 'get',
      params: params
    })
  }
}
export default lunbo

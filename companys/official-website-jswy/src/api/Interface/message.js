import qs from 'qs'
import request from '@/utils/request'
import  common_api  from '../config'
// api
// const  common_api  = '/api'

// 获取商品详情
const message = {
    addMessage: function(params) {
    return request({
      url:  common_api + '/message',
      method: 'post',
      data: params
    })
  },

}
export default message

import {request, send} from './request'

export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}

export function getHomeData(type,page){
    return send({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}
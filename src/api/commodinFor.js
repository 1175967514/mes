import request from '@/utils/request'
/***********  通用  *************/
// 获取所有设备类型
export function getAllEquipment() {
  return request({
    url: '/api-gyd/getAllEquipment',
    method: 'POST'
  })
}
// 获取所有组织
export function getAllOrg() {
  return request({
    url: '/api-gyd/getAllOrg',
    method: 'POST'
  })
}
// 获取所有工序
export function getAllProcedure() {
  return request({
    url: '/api-gyd/getAllProcedure',
    method: 'POST'
  })
}
// 获取所有品种名称
export function getAllVarieties() {
  return request({
    url: '/api-gyd/getAllVarieties',
    method: 'POST'
  })
}
// 获取所有车间
export function getAllWorkShop() {
  return request({
    url: '/api-gyd/getAllWorkShop',
    method: 'POST'
  })
}
/***********  工艺单模板  *************/
export function getSheet() {
  return request({
    url: '/api-gyd/getProcessSheet',
    method: 'POST'
  })
}
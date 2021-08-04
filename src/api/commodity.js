import request from '@/utils/request'
// 系统生成编码
export function getSysNumber() {
  return request({
    url: '/v1/common/getSysNumber',
    method: 'GET'
  })
}

/** ****************************类别管理*******************************************/
//

// 分类列表
export function getCategoryList(data) {
  return request({
    url: '/v1/itemCat/selectTreeList?current=' + data.current + '&size=' + data.size,
    method: 'GET'
  })
}
// 商品分类
export function getGoodCategoryList(data) {
  return request({
    url: '/v1/itemCat/selectTreeList?current=' + data.current + '&size=' + data.size + '&isWebMallCat=' + data.isWebMallCat + '&isHotSelling=0',
    method: 'GET'
  })
}
// 积分
export function getisHotSellingList(data) {
  return request({
    url: '/v1/itemCat?current=' + data.current + '&size=' + data.size + '&isHotSelling=' + data.isHotSelling,
    method: 'GET'
  })
}
export function addCategoryList(data) {
  return request({
    url: '/v1/itemCat',
    method: 'POST',
    data: data
  })
}
export function editorCategoryList(data) {
  return request({
    url: '/v1/itemCat',
    method: 'PUT',
    data: data
  })
}
export function delCategoryList(data) {
  return request({
    url: '/v1/itemCat',
    method: 'DELETE',
    data: data
  })
}
// 获取所有分类
export function getclassList(data) {
  return request({
    url: '/v1/itemCat?current=' + data.current + '&size=' + data.size,
    method: 'GET'
  })
}
export function searchCategoryList(data) {
  return request({
    url: '/v1/itemCat/selectTreeList?current=' + data.current + '&size=' + data.size + '&catName=' + data.catName,
    method: 'GET'
  })
}
// 获取商品分类已在分类中使用的分类ID集合(校验商品分类是否可以删除)
export function delCList() {
  return request({
    url: '/v1/itemCat/getItemItemCatRelCatIds',
    method: 'GET'
  })
}
/** ****************************品牌管理*******************************************/
export function getBrandList(data) {
  return request({
    url: '/v1/brand?current=' + data.current + '&size=' + data.size,
    method: 'GET'
  })
}
export function searchBrandList(data) {
  return request({
    url: '/v1/brand?current=' + data.current + '&size=' + data.size + '&brandName=' + data.brandName,
    method: 'GET'
  })
}
export function addBrandList(data) {
  return request({
    url: '/v1/brand',
    method: 'POST',
    data: data
  })
}
export function editorBrandList(data) {
  return request({
    url: '/v1/brand',
    method: 'PUT',
    data: data
  })
}
export function delBrandList(data) {
  return request({
    url: '/v1/brand',
    method: 'DELETE',
    data: data
  })
}
export function delBList() {
  return request({
    url: '/v1/itemCat/getItemItemCatRelCatIds',
    method: 'GET'
  })
}
/** ****************************属性管理*******************************************/
export function getAttrGroupList(data) {
  return request({
    url: '/v1/itemProp?current=' + data.current + '&size=' + data.size,
    method: 'GET'
  })
}
export function searchAttrGroupList(data) {
  return request({
    url: '/v1/itemProp?current=' + data.current + '&size=' + data.size + '&propName=' + data.propName + '&isSellingProp=' + data.isSellingProp,
    method: 'GET'
  })
}
export function isgetAttrGroupList(data) {
  return request({
    url: '/v1/itemProp?current=' + data.current + '&size=' + data.size + '&isSellingProp=' + data.isSellingProp,
    method: 'GET'
  })
}
export function addAttrGroupList(data) {
  return request({
    url: '/v1/itemProp',
    method: 'POST',
    data: data
  })
}
export function editorAttrGroupList(data) {
  return request({
    url: '/v1/itemProp',
    method: 'PUT',
    data: data
  })
}
export function delAttrGroupList(data) {
  return request({
    url: '/v1/itemProp',
    method: 'DELETE',
    data: data
  })
}
/** ****************************商品管理*******************************************/
export function getCommodityList(data) {
  return request({
    url: '/v1/item?current=' + data.current + '&size=' + data.size + '&isDeleted=' + data.isDeleted + '&itemType=' + data.itemType,
    method: 'GET'
  })
}
// 普通商品搜索
export function searchCommodityList(data, url) {
  return request({
    url: '/v1/item?current=' + data.current + '&size=' + data.size + '&isDeleted=0' + url
  })
}
// 积分商品搜索
export function newsearchCommodityList(data, url) {
  return request({
    url: '/v1/item?current=' + data.current + '&size=' + data.size + '&isDeleted=0' + url,
    method: 'GET'
  })
}
export function addCommodityList(data) {
  return request({
    url: '/v1/item',
    method: 'POST',
    data: data
  })
}
export function editorCommodityList(data) {
  return request({
    url: '/v1/item',
    method: 'PUT',
    data: data
  })
}

// 商品上架/下架/审核
export function upadownCommodityList(data) {
  return request({
    url: '/v1/item/operation',
    method: 'POST',
    data: data
  })
}
// 根据商品id获取该商品已使用的分类ID集合
export function getcadList(data) {
  return request({
    url: '/v1/itemCat/getCatIdsByItemId/' + data,
    method: 'GET'
  })
}
// 根据商品ID查询SKU列表信息
export function getSkuList(data) {
  return request({
    url: '/v1/sku/selectSku?&itemId=' + data,
    method: 'GET'
  })
}
// 根据商品ID查询属性/属性选项
export function getAttrList(data) {
  return request({
    url: '/v1/itemProp/getItemPropByItemIdChoose/' + data.itemId + '/' + data.type,
    method: 'GET'
  })
}
// 根据商品ID查询关联商品信息
export function getGoodList(data) {
  return request({
    url: '/v1/itemItemRel/getItemByItemId?current=' + data.current + '&size=' + data.size + '&itemId=' + data.itemId,
    method: 'GET'
  })
}

// 根据商品id商家列表
export function getMerchantsList(data) {
  return request({
    url: '/v1/seller/getSellerListVo?current=' + data.current + '&size=' + data.size + '&itemId=' + data.itemId,
    method: 'POST'
  })
}

// 商家粉丝300所有列表
export function getMerchants(data) {
  return request({
    url: '/v1/seller/getSellerList?current=' + data.current + '&size=' + data.size + '&censorStatus=4',
    method: 'POST'
  })
}

// 商家所有列表
export function getMerchantsListAll(data) {
  return request({
    url: '/v1/seller/getSellerListVo?current=' + data.current + '&size=' + data.size + '&censorStatus=4',
    method: 'POST'
  })
}
// 商品图片
export function getImgList(data) {
  return request({
    url: '/v1/itemPic?itemId=' + data.itemId + '&isDefault=' + data.isDefault,
    method: 'GET'
  })
}
// 批量添加商品同步信息
export function saveBatchList(data) {
  return request({
    url: '/v1/syncItem/saveBatch',
    method: 'POST',
    data: data
  })
}
// 获取商品已同步信息
export function getBatchList(data) {
  return request({
    url: '/v1/syncItem/selectSellerIntersection?itemId=' + data.itemId,
    method: 'GET'
  })
}
// 获取商品已同步信息
export function delBatchList(data) {
  return request({
    url: '/v1/syncItem',
    method: 'DELETE',
    data: data
  })
}
// 商家下架同步平台商品
export function delMerchantgoods(data) {
  return request({
    url: '/v1/syncItem/deleteRelation',
    method: 'POST',
    data: data
  })
}
// 获取视频集合信息
export function getselectAllList(data) {
  return request({
    url: '/v1/itemVideoPic/selectAllList?itemId=' + data.itemId,
    method: 'GET'
  })
}
// 获取积分列表
export function getMemberPointsRule(data) {
  return request({
    url: '/v1/memberPointsRule?current=' + data.current + '&size=' + data.size,
    method: 'GET'
  })
}
export function editorMemberPointsRule(data) {
  return request({
    url: '/v1/memberPointsRule',
    method: 'PUT',
    data: data
  })
}


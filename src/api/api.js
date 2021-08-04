import request from '@/utils/request'
import { data } from 'jquery'
import QueryString from 'qs'

export function Login(data) {//登录
  return request({
    url: '/v1/user/login',
    method: 'post',
    data
  })
}



//采购订单

export function PurchaseOrderQuery(id) {//采购订单  查询
  return request({
    url: '/v1/order/findPurchaseOrder/',
    method: 'get',
    params: {id} ,
  })
}

export function PurchaseOrderRemove(data) {//采购订单  删除
  return request({
    url: '/v1/order/delete/' + data,
    method: 'get',
  })
}

export function PurchaseOrderImport(data) {//采购订单  上传excel文件导入订单
  return request({
    url: '/v1/order/upload/' ,
    method: 'post',
    data
  })
}

//供应商

export function SupplierInquire(userId) {//供应商信息  查询
  return request({
    url: '/v1/provider/findSupplier/',
    method: 'get',
    params: {userId} ,
  })
}





export function SupplierAdd(data) {//供应商信息  新增上传
  return request({
    url: '/v1/provider/upload' ,
    method: 'post',
    params: data ,
  })
}



export function SupplierDelete(id) {//供应商信息  删除
  return request({
    url: '/v1/provider/delete/',
    method: 'get',
    params: {id} ,
  })
}

export function SupplierStart(id) {//供应商  启用
  return request({
    url: '/v1/provider/statusStart/',
    method: 'get',
    params: {id} ,
  })
}

export function SupplierForbid(id) {//供应商  禁用
  return request({
    url: '/v1/provider/statusEnd/',
    method: 'get',
    params: {id} ,
  })
}

//超市信息

export function SupermarketQuery(userId) {//超市信息  查询
  return request({
    url: '/v1/supermarket/findSupermarket/',
    method: 'get',
    params: {userId} ,
  })
}

export function SupermarketImport(data) {//超市信息  excel文件上传
  return request({
    url: '/v1/supermarket/upload/' ,
    method: 'post',
    data
  })
}

// export function SupermarketExport(userId) {//超市信息  导出下载excel文件
//   return request({
//     url: '/v1/supermarket/download/',
//     method: 'get',
//     params: {userId} ,
//   })
// }

export function SupermarketAdd(data) {//超市  新增
  return request({
    url: '/v1/supermarket/add/' ,
    method: 'post',
    data
  })
}

export function SupermarketDelete(id) {//超市信息  删除
  return request({
    url: '/v1/supermarket/delete/',
    method: 'get',
    params: {id} ,
  })
}

export function SupermarketStart(id) {//超市  启用
  return request({
    url: '/v1/supermarket/updateStatusStart/',
    method: 'get',
    params: {id} ,
  })
}

export function SupermarketForbid(id) {//超市  禁用
  return request({
    url: '/v1/supermarket/updateStatusProhibit/',
    method: 'get',
    params: {id} ,
  })
}

export function SalesorderDelete(id) {//销售订单  删除
  return request({
    url: '/v1/supermarket/delete/',
    method: 'get',
    params: {id} ,
  })
}

//我的
//供应商信息
export function Basiclier(data) {//供应商信息 根据用户id查询供应商信息
  return request({
    url: '/v1/provider/findSupplier',
    method: 'get',
    params: data ,
  })
}

export function deleteBasiclier(id) {//供应商信息 根据ID删除供应商数据
  return request({
    url: '/v1/provider/delete',
    method: 'get',
    params: {id} ,
  })
}
//启用
export function startUsing(id) {//供应商信息 启用
  return request({
    url: '/v1/provider/statusStart',
    method: 'get',
    params: {id} ,
  })
}

//禁用
export function stopUsing(id) {//供应商信息 禁用
  return request({
    url: '/v1/provider/statusEnd',
    method: 'get',
    params: {id} ,
  })
}
//导出
export function SupplierExport(userId) {//供应商信息  导出excel表格，并下载
  return request({
    url: '/v1/provider/download/',
    method: 'get',
    params: {userId} ,
  })
}
//导入
export function SupplierImport(data) {//供应商信息  excel文件上传
  return request({
    url: '/v1/provider/upload' ,
    method: 'post',
    params:data
  })
}


/* ======================================================================= */
//超市信息
export function Supermarket(data) {
  return request({
    url: '/v1/supermarket/findSupermarket',
    method: 'get',
    params: data ,
  })
}
//新增（form表单提交）
//删除
export function deleteSupermarket(id) {
  return request({
    url: '/v1/supermarket/delete',
    method: 'get',
    params: {id} ,
  })
}
//删除
// export function deleteSupermarket(id) {
//   return request({
//     url: '/v1/supermarket/delete',
//     method: 'get',
//     params: {id} ,
//   })
// }

//启用
export function startUsingSupermarket(id) {
  return request({
    url: '/v1/supermarket/updateStatusStart',
    method: 'get',
    params: {id} ,
  })
}

//禁用
export function stopUsingSupermarket(id) {//供应商信息 禁用
  return request({
    url: '/v1/supermarket/updateStatusProhibit',
    method: 'get',
    params: {id} ,
  })
}
/* ======================================================================= */
//商品信息
//查询
export function Goods(data) {
  return request({
    url: '/v1/goods/findGoods',
    method: 'get',
    params: data ,
  })
}

//根据id查找商品
export function GoodsId(id) {
  return request({
    url: '/v1/goods/findGoodsId',
    method: 'get',
    params: {id} ,
  })
}

//修改商品
export function UpdateGoods(id) {
  return request({
    url: '/v1/goods/updateGoods',
    method: 'get',
    params: {id} ,
  })
}
//删除商品
export function deleteGoods(id) {//供应商信息 根据ID删除供应商数据
  return request({
    url: '/v1/goods/delete',
    method: 'get',
    params: {id} ,
  })
}
//启用
export function startUsingGoods(id) {
  return request({
    url: '/v1/goods/updateStatusStart',
    method: 'get',
    params: {id} ,
  })
}

//禁用
export function stopUsingGoods(id) {
  return request({
    url: '/v1/goods/updateStatusProhibit',
    method: 'get',
    params: {id} ,
  })
}
/* ======================================================================= */
//销售订单
//查询订单
export function salesOrder(data) {
  return request({
    url: '/v1/order/findSupermarket',
    method: 'get',
    params: data ,
  })
}
//删除订单
export function deleteSalesOrder(id) {
  return request({
    url: '/v1/order/updateDelete',
    method: 'get',
    params: {id} ,
  })
}

/* ======================================================================= */
//用户管理
//查找
export function FindUser(data) {
  return request({
    url: '/v1/user/findUser',
    method: 'get',
    params: data ,
  })
}

//新增
export function AddUser(data) {
  return request({
    url: '/v1/user/add',
    method: 'get',
    params: data ,
  })
}
//删除
export function DeleteUser(userId) {
  return request({
    url: '/v1/user/deleteUser',
    method: 'get',
    params: {userId} ,
  })
}
//修改用户权限
export function UpdateUser(data) {
  return request({
    url: '/v1/user/updateRole',
    method: 'get',
    params: data ,
  })
}

//首页数据
export function HomePage(data) {//首页展示数据获取
  return request({
    url: '/v1/order/findHomeNum/' + data,
    method: 'get',
    
  })
}
//采购信息
export function findPurchaseOrder(data) {
  return request({
    url: '/v1/order/findPurchaseOrder',
    method: 'get',
    params: data ,
  })
}
export function DeletePurchaseOrder(data) {
  return request({
    url: '/v1/order/updateDelete',
    method: 'post',
    params:data
  })
}

//日志管理
export function getSysLogForPage(data) {
  return request({
    url: '/v1/syslog/getSysLogForPage',
    method: 'post',
    params: data ,
  })
}
//轮播图管理
export function getBanner(data) {
  return request({
    url: '/v1/carouselimges/getCarouselimgesForPage',
    method: 'get',
    params: data ,
  })
}

//删除轮播图
export function deleteBanner(data) {
  return request({
    url: 'v1/carouselimges/deleteCarouselimges',
    method: 'post',
    params: data ,
  })
}
//id查询轮播图
export function getBannerById(id) {
  return request({
    url: '/v1/carouselimges/getCarouselimgesById',
    method: 'get',
    params: {id} ,
  })
}
//修改轮播图
export function updateBanner(data) {
  return request({
    headers:{
      contentType:"application/json"
    },
    url: '/v1/carouselimges/updateCarouselimges',
    method: 'post',
    data: data ,
  })
}
//上传轮播图url
export function uploadBannerUrl(data) {
  return request({
   
    url: '/v1/carouselimges/addCarouselimges',
    method: 'post',
    data: data ,
  })
}
//头条管理

export function findHeadlines(data) {
  return request({
    url: '/v1/headlines/findHeadlines',
    method: 'get',
    params: data ,
  })
}
//新增头条
export function newHeadlines(data) {
  return request({
    url: '/v1/headlines/addHeadlines',
    method: 'post',
    params: data ,
  })
}
//删除头条
export function deleteHeadlines(data) {
  return request({
    url: '/v1/headlines/deleteHeadlines',
    method: 'post',
    params: data ,
  })
}
//修改头条
export function updateHeadlines(data) {
  return request({
    headers:{
      contentType:"application/json"
    },
    url: '/v1/headlines/updateHeadlines',
    method: 'post',
    params: data ,
  })
}
//新增用户
export function addNewUser(data) {
  return request({
    url: '/v1/user/add',
    method: 'post',
    params: data ,
  })
}
//退出登录
export function outLogin(userId) {
  return request({
    url: '/v1/user/loginOut',
    method: 'get',
    params: {userId} 
  })
}
//类别管理
//新增用户
export function findClassification(data) {
  return request({
    url: '/v1/classification/findClassification',
    method: 'get',
    params: data ,
  })
}
//删除类别
export function deleteClassification(data) {
  return request({
    url: '/v1/classification/deleteClassification',
    method: 'post',
    params:data
  })
}
//新增商品品类
export function addClassification(data) {
  return request({
    url: '/v1/classification/addClassification',
    method: 'post',
    params:data
  })
}
//修改商品品类
export function updateClassification(data) {
  return request({
    url: '/v1/classification/updateClassification',
    method: 'post',
    params:data
  })
}
//商品管理
export function shopFindGoods(data) {
  return request({
    url: '/v1/shoppingmallgoods/findGoods',
    method: 'get',
    params:data
  })
}
//新增商品
export function addGoods(data) {
  return request({
    url: '/v1/goods/addGoods',
    method: 'post',
    params:data
  })
}
//查询商城商品
export function shoppingMallFindGoods(data) {
  return request({
    url: '/v1/shoppingmallgoods/findGoods',
    method: 'get',
    params:data
  })
}
//批量删除商城商品
export function shoppingMallDeleteGoods(data) {
  return request({
    url: '/v1/shoppingmallgoods/deleteGoods',
    method: 'post',
    params:data
  })
}
//商城商品下架
export function updateStatusOff(id) {
  return request({
    url: '/v1/shoppingmallgoods/updateStatusOff',
    method: 'get',
    params:{id}
  })
}
//商城商品上架
export function updateStatusOn(id) {
  return request({
    url: '/v1/shoppingmallgoods/updateStatusOn',
    method: 'get',
    params:{id}
  })
}
//商城根据id查找商品
export function shoppingMallGetById(id) {
  return request({
    url: '/v1/shoppingmallgoods/getById',
    method: 'get',
    params: {id} ,
  })
}
//商城修改商品
export function shoppingMallUpdateGoods(data) {
  return request({
    url: '/v1/shoppingmallgoods/updateGoods',
    method: 'post',
    params: data ,
  })
}
//商城新增商品
export function shoppingMallAddGoods(data) {
  return request({
    url: '/v1/shoppingmallgoods/addGoods',
    method: 'post',
    params: data 
  })
}
//生成商品编码
export function shoppingMallCommodityCode() {
  return request({
    url: '/v1/shoppingmallgoods/commodityCode',
    method: 'get',
  })
}
//商品品类查询
export function shoppingMallFindClassification() {
  return request({
    url: '/v1/shoppingclassification/findClassification',
    method: 'get',
  })
}
//批量删除商城商品品类
export function shoppingMallDeleteClassification(data) {
  return request({
    url: '/v1/shoppingclassification/deleteClassification',
    method: 'post',
    params:data
  })
}
//商城修改商品品类
export function shoppingMallUpdateClassification(data) {
  return request({
    url: '/v1/shoppingclassification/updateClassification',
    method: 'post',
    params: data ,
  })
}
//商城新增商品品类
export function shoppingMallAddClassification(data) {
  return request({
    url: '/v1/shoppingclassification/addClassification',
    method: 'post',
    params: data 
  })
}
//修改用户密码
export function updatePassword(data) {
  return request({
    url: '/v1/app/updatePassword',
    method: 'post',
    params: data 
  })
}



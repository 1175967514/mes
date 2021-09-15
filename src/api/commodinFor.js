import request from '@/utils/request';
/***********  工艺单模板  *************/
export function getSheet() {
  return request({
    url: '/api-gyd/getProcessSheet',
    method: 'POST'
  });
}

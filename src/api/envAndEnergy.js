import request from '@/utils/request';
// 环境管理与能源管理模块接口
export function getAllEquipment(query) {
  return request({
    url: '/api-screen/queryWenShiDu',
    method: 'POST',
    data: query
  });
}

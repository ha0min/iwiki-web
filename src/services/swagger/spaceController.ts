// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** list GET /space/list */
export async function listUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseGenericListSpaceResponse>('/space/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

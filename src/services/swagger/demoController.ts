// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** demo list GET /demo/list */
export async function listUsingGET(options?: { [key: string]: any }) {
  return request<API.Demo[]>('/demo/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** demo list PUT /demo/list */
export async function listUsingPUT(options?: { [key: string]: any }) {
  return request<API.Demo[]>('/demo/list', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** demo list POST /demo/list */
export async function listUsingPOST(options?: { [key: string]: any }) {
  return request<API.Demo[]>('/demo/list', {
    method: 'POST',
    ...(options || {}),
  });
}

/** demo list DELETE /demo/list */
export async function listUsingDELETE(options?: { [key: string]: any }) {
  return request<API.Demo[]>('/demo/list', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** demo list PATCH /demo/list */
export async function listUsingPATCH(options?: { [key: string]: any }) {
  return request<API.Demo[]>('/demo/list', {
    method: 'PATCH',
    ...(options || {}),
  });
}

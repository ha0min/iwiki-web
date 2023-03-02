// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** hello GET /hello */
export async function helloUsingGET(options?: { [key: string]: any }) {
  return request<string>('/hello', {
    method: 'GET',
    ...(options || {}),
  });
}

/** hello PUT /hello */
export async function helloUsingPUT(options?: { [key: string]: any }) {
  return request<string>('/hello', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** hello POST /hello */
export async function helloUsingPOST(options?: { [key: string]: any }) {
  return request<string>('/hello', {
    method: 'POST',
    ...(options || {}),
  });
}

/** hello DELETE /hello */
export async function helloUsingDELETE(options?: { [key: string]: any }) {
  return request<string>('/hello', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** hello PATCH /hello */
export async function helloUsingPATCH(options?: { [key: string]: any }) {
  return request<string>('/hello', {
    method: 'PATCH',
    ...(options || {}),
  });
}

/** test GET /test */
export async function testUsingGET(options?: { [key: string]: any }) {
  return request<API.Test[]>('/test', {
    method: 'GET',
    ...(options || {}),
  });
}

/** test PUT /test */
export async function testUsingPUT(options?: { [key: string]: any }) {
  return request<API.Test[]>('/test', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** test POST /test */
export async function testUsingPOST(options?: { [key: string]: any }) {
  return request<API.Test[]>('/test', {
    method: 'POST',
    ...(options || {}),
  });
}

/** test DELETE /test */
export async function testUsingDELETE(options?: { [key: string]: any }) {
  return request<API.Test[]>('/test', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** test PATCH /test */
export async function testUsingPATCH(options?: { [key: string]: any }) {
  return request<API.Test[]>('/test', {
    method: 'PATCH',
    ...(options || {}),
  });
}

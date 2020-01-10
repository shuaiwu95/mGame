
/**
  * API接口默认参数配置
  */
export const API_DEFAULT_CONFIG = {
  mockBaseUrl: 'http://localhost:9090',
  prodBaseUrl: 'http://localhost:9090',
  isMocked: process.env.NODE_ENV !== 'production',
  isDebug: true,
  sep: '.'
}
/**
 * AXIOS默认参数配置
 */
export const AXIOS_DEFAULT_CONFIG = '5000'

export const CONSTANTS = {
  API_BASE_URL: 'https://staging-sejal-delhi.8848digitalerp.com/',
  API_METHOD_SDK: 'api/method/sejal_delhi.sdk.api',

  // API_BASE_URL: 'http://192.168.29.54:8000',

  // Production Backend URL
  // API_BASE_URL: '',
};

export const headerGenerator = (token: any) => {
  const API_CONFIG = {
    headers: {
      Accept: 'application/json',
      Authorization: token,
    },
  };
  return API_CONFIG;
};

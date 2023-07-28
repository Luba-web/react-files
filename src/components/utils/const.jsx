// заменить на свой токен
const accessToken = 'your_token';

// название пути на диске
const path = 'test';

export const uploadUrl = `https://cloud-api.yandex.net/v1/disk/resources/upload?path=/${path}`;

export const headers = {
  Authorization: `OAuth ${accessToken}`,
  'Content-Type': 'application/json',
};

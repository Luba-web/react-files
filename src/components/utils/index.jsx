import { uploadUrl, headers } from './const';

export const uploadToYandexDisk = async (files) => {
  // Запрос на получение URL для загрузки файлов
  const uploadResponse = await fetch(uploadUrl, {
    method: 'GET',
    headers,
  });
  const { href } = await uploadResponse.json();

  // Загрузка файлов на полученный URL
  for (const file of files) {
    const formData = new FormData();
    formData.append('file', file);

    await fetch(href, {
      method: 'PUT',
      body: formData,
    });
  }
};

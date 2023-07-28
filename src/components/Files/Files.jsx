import { useState } from 'react';
import { uploadToYandexDisk } from '../utils';

export const Files = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedCount, setSelectedCount] = useState('');

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).slice(0, selectedCount);
    console.log(e.target.files.length);
    setSelectedCount(e.target.files.length);
    setSelectedFiles(files);
  };

  const handleCountChange = (e) => {
    const count = parseInt(e.target.value);
    setSelectedCount(count);
  };

  const handleUpload = () => {
    console.log(selectedFiles);
    uploadToYandexDisk(selectedFiles);
  };

  return (
    <div className="container">
      <label>
        Выберите количество файлов (от 1 до 100):
        <input
          type="number"
          min="1"
          max="100"
          value={selectedCount}
          onChange={handleCountChange}
        />
      </label>
      <label>
        Выберите файлы для загрузки:
        <input type="file" multiple onChange={handleFileChange} />
      </label>
      <button
        disabled={!selectedCount || selectedCount > 100}
        onClick={handleUpload}
      >
        Загрузить
      </button>
    </div>
  );
};

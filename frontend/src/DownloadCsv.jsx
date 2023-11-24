import React from 'react';

const DownloadCsv = () => {
  const jsonData = [
    { id: 1, name: 'John', age: 30343434, st: { wwe: 21 } },
    { id: 2, name: 'Jane', age: 28 },
    // Add more data as needed
  ];

  const flattenObject = (obj) => {
    const result = {};

    const flatten = (currentObj, parentKey = '') => {
      for (const key in currentObj) {
        const newKey = parentKey ? `${parentKey}_${key}` : key;

        if (typeof currentObj[key] === 'object' && !Array.isArray(currentObj[key])) {
          flatten(currentObj[key], newKey);
        } else {
          result[newKey] = currentObj[key];
        }
      }
    };

    flatten(obj);
    return result;
  };

  const flattenData = jsonData.map((item) => flattenObject(item));

  const headers = Array.from(
    flattenData.reduce((keys, obj) => {
      Object.keys(obj).forEach((key) => keys.add(key));
      return keys;
    }, new Set())
  );

  const csvContent = [
    headers.join(','),
    ...flattenData.map((obj) =>
      headers.map((header) => (obj[header] !== undefined ? obj[header] : '')).join(',')
    ),
  ].join('\n');

  const downloadCsv = () => {
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'data.csv');

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  return (
    <div>
      <button onClick={downloadCsv}>Download CSV</button>
    </div>
  );
};

export default DownloadCsv;

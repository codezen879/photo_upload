import React from 'react';

const DownloadCsv = ({ jsonData }) => {
  const flattenObject = (obj, prefix = '') => {
    return Object.keys(obj).reduce((acc, key) => {
      const pre = prefix.length ? `${prefix}.` : '';
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        const flatValues = flattenObject(obj[key], `${pre}${key}`);
        Object.keys(flatValues).forEach((nestedKey) => {
          acc[`${nestedKey}`] = flatValues[nestedKey];
        });
      } else {
        acc[`${pre}${key}`] = obj[key];
      }
      return acc;
    }, {});
  };

  const flatData = jsonData.map((item) => flattenObject(item));
  const keys = Array.from(new Set(flatData.flatMap(Object.keys)));

  const getKeyDepth = (key) => {
    const splitKey = key.split('.');
    return splitKey.length - 1;
  };

  const getKeySpacing = (key, depth) => {
    const totalSpacing = Math.max(0, 2 * depth - 1); // Ensure spacing is not negative
    const currentSpacing = getKeyDepth(key);
    const spaces = totalSpacing - currentSpacing;
    return ' '.repeat(spaces);
  };

  const csvContent = keys.map((key) => {
    const depth = getKeyDepth(key);
    const spacing = getKeySpacing(key, depth);

    const values = flatData.map((item) => {
      return item[key] !== undefined ? item[key] : '';
    });
    return `${spacing}${key},${values.join(',')}`;
  }).join('\n');

  const downloadCsv = () => {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
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

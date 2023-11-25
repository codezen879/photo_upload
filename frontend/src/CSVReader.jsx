import React from 'react';
import Papa from 'papaparse';

const CSVReader = () => {
  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];

    Papa.parse(selectedFile, {
      header: true,
      complete: (result) => {
        // Convert parsed CSV data to JSON
        const jsonData = convertToJSON(result);
        console.log(JSON.stringify(jsonData, null, 2)); // Print JSON data with proper indentation
      },
    });
  };

  const convertToJSON = (parsedData) => {
    const jsonData = [];
    parsedData.data.forEach((row) => {
      const entry = {};
      parsedData.meta.fields.forEach((field) => {
        entry[field] = row[field];
      });
      jsonData.push(entry);
    });
    return jsonData;
  };

  return (
    <div>
      <input type="file" onChange={handleFileInputChange} />
    </div>
  );
};

export default CSVReader;

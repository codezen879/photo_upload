import React from 'react';
import Papa from 'papaparse';

const JSONtoCSV = (jsonData) => {
  const csvRows = [];
  const headers = Object.keys(jsonData[0]);
  csvRows.push(headers);

  jsonData.forEach((row) => {
    const values = [];
    headers.forEach((header) => {
      if (header === '_1' || header === '_2') {
        // Handling the 'Name' columns split into two
        const name = `${row['_1']} ${row['_2']}`.trim();
        values.push(name);
      } else if (header === '_3' || header === '_4') {
        // Handling the 'Age' columns split into two
        const age = `${row['_3']} ${row['_4']}`.trim();
        values.push(age);
      } else {
        values.push(row[header]);
      }
    });
    csvRows.push(values);
  });

  return Papa.unparse(csvRows);
};

const ConvertJSONToCSV = () => {
  const jsonData = [
    { id: 1, name: { firstName: 'sham', lastName: 'Madan' }, age: { Number: 12, word: 'Twelve' } },
    { id: 2, name: { firstName: 'shamu', lastName: 'Mudan' }, age: { Number: 12, word: 'Twelve' } },
    // Add more data as needed
  ];

  const convertToCSV = () => {
    const csv = JSONtoCSV(jsonData);

    // Create a Blob object for the CSV file
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);

    // Create a link element to trigger the CSV download
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'data.csv');
    link.style.display = 'none'; // Hide the link

    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <button onClick={convertToCSV}>Convert JSON to CSV</button>
    </div>
  );
};

export default ConvertJSONToCSV;

// import React from 'react';

// const jsonData = [
//   { id: 1, name: 'John', age: 30 },
//   { id: 2, name: 'Jane', age: 28 },
//   // Add more data as needed
// ];

// const Print = () => {
//   const print = () => {
//     const tableRows = jsonData.map((item) => (
//       `<tr key=${item.id}>
//         <td>${item.id}</td>
//         <td>${item.name}</td>
//         <td>${item.age}</td>
//       </tr>`
//     ));

//     const tableContent = `
//       <html>
//         <head>
//         <img src="https://hips.hearstapps.com/hmg-prod/images/dwayne-the-rock-johnson-gettyimages-1061959920.jpg"/>
//         <p>WWE</p>
//           <title>Print Table</title>
//           <style>
//             table {
//               border-collapse: collapse;
//               width: 100%;
//             }
//             th, td {
//               border: 1px solid #dddddd;
//               text-align: left;
//               padding: 8px;
//             }
//             th {
//               background-color: #f2f2f2;
//             }
//           </style>
//         </head>
//         <body>
//           <h1>JSON Data in Table Format</h1>
//           <table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Age</th>
//               </tr>
//             </thead>
//             <tbody>
//               ${tableRows.join('')}
//             </tbody>
//           </table>
//         </body>
//       </html>
//     `;

//     const printWindow = window.open('', '_blank', 'width=600,height=600');
//     if (printWindow) {
//       printWindow.document.write(tableContent);
//       printWindow.document.close();
//       printWindow.print();
//     } else {
//       alert('Please allow pop-ups for this website');
//     }
//   };

//   return (
//     <div>
//       {/* Button to trigger printing */}
//       <button onClick={print}>Print Table</button>
//     </div>
//   );
// };

// export default Print;



import React from 'react';

const jsonData = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 28 },
  // Add more data as needed
];

const Print = () => {
  const print = () => {
    const tableRows = jsonData.map((item) => (
      `<tr key=${item.id}>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.age}</td>
      </tr>`
    ));

    const tableContent = `
      <html>
        <head>
        <img src="https://hips.hearstapps.com/hmg-prod/images/dwayne-the-rock-johnson-gettyimages-1061959920.jpg"/>
    <p>Harsh</p>
          <title>Print Table</title>
          <style>
            table {
              border-collapse: collapse;
              width: 100%;
            }
            th, td {
              border: 1px solid #dddddd;
              text-align: left;
              padding: 8px;
            }
            th {
              background-color: #f2f2f2;
            }
          </style>
        </head>
        <body>
          <h1>JSON Data in Table Format</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              ${tableRows.join('')}
            </tbody>
          </table>
        </body>
      </html>
    `;

    const printWindow = window.open('', '_blank', 'width=800,height=800'); // Increase width and height
    if (printWindow) {
      printWindow.document.write(tableContent);
      printWindow.document.close();
      printWindow.print();
    } else {
      alert('Please allow pop-ups for this website');
    }
  };

  return (
    <div>
      {/* Button to trigger printing */}
      <button onClick={print}>Print Table</button>
    </div>
  );
};

export default Print;

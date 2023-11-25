import { useState } from 'react'
import ImageUpload from './ImageUpload'
import Print from './Print'
import DownloadCsv from './DownloadCsv'
import CSVReader from './csvReader'
import ConvertJSONToCSV from './ConvertJSONToCSV'
function App() {

  const jsonData = [
    { id: 1, name: { firstName: 'sham', lastName: 'Madan' }, age: { Number: 12, word: 'Twelve' } },
    { id: 2, name: { firstName: 'shamu', lastName: 'Mudan' }, age: { Number: 12, word: 'Twelve' } },
    // Add more data as needed
  ];
  return (
    <>
    {/* <ImageUpload/> */}
    {/* <Print/> */}
    <CSVReader/>
    <DownloadCsv jsonData={jsonData} />
    <ConvertJSONToCSV/>
    </>
  )
}

export default App

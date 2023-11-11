import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageId, setImageId] = useState('');
  const [fetchedImage, setFetchedImage] = useState(null);

  const convertToBase64 = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageData = {
        image: reader.result,
      };

      // You can set the selected file here if needed
      setSelectedFile(file);

      // Make API call to upload the image using Axios
      axios.post("http://localhost:5000/api/v1/create-image", imageData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => {
        console.log(response.data);
        // Do something with the response, if needed
      })
      .catch(error => {
        console.error('Error uploading image:', error);
      });
    };

    reader.readAsDataURL(file);
  };

  const handleFetchImage = () => {
    // Make API call to fetch the image by ID using Axios
    axios.get(`http://localhost:5000/api/v1/get-image/${imageId}`)
      .then(response => {
        console.log('Fetched image by ID:', response.data);

        // Set the fetched image to the state
        setFetchedImage(response.data.image);
      })
      .catch(error => {
        console.error('Error fetching image by ID:', error);
      });
  };

  return (
    <div>
      <input accept='image/*' type='file' onChange={convertToBase64} />
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}

      <div>
        <label>Enter Image ID:</label>
        <input type="text" value={imageId} onChange={(e) => setImageId(e.target.value)} />
        <button onClick={handleFetchImage}>Fetch Image</button>
      </div>

      {fetchedImage && <img src={fetchedImage} alt="Fetched" style={{ maxWidth: '100%', maxHeight: '300px' }} />}
    </div>
  );
};

export default ImageUpload;

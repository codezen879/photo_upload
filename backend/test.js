
const LZString = require('lz-string');




// Compressing the URL
const compressedURL = LZString.compressToBase64(originalURL);

// console.log("Original URL:", originalURL);
console.log("Compressed URL:", compressedURL);

// Decompressing the URL
const decompressedURL = LZString.decompressFromBase64(compressedURL);

// console.log("Decompressed URL:", decompressedURL);

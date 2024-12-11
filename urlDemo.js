import url, { URLSearchParams } from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

// URL Object
const urlObj = new URL(urlString);

console.log(urlObj);

// format() turns an object into a string
console.log(url.format(urlObj));

//import.meta.url - file URL
console.log(import.meta.url);

// fileUrlToPath
console.log(url.fileURLToPath(import.meta.url));

console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search);
console.log(params)
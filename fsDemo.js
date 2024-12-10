// import fs from 'fs';
import fs from 'fs/promises'

//readfile();
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

//readFileSync() - Sychronous version
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);

// readFile() - Promise .then()
fs.readFile('./test.txt', 'utf8')
.then((data) => console.log(data))
.catch((err) => console.log(err));
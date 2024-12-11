import path from 'path';
import url from 'url'

const filepath = './dir1/dir2/test.txt';

// basename()
console.log(path.basename(filepath));

// dirname()
console.log(path.dirname(filepath));

//extname()
console.log(path.extname(filepath));

//parse()
console.log(path.parse(filepath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// join 
const filepath2 = path.join(__dirname, 'dir1', 'dir2', 'dir3', 'test.txt');
console.log(filepath2);

//reslove 
const filepath3 = path.resolve(__dirname, 'dir1', 'dir2', 'dir3', 'test.txt');
console.log(filepath3);
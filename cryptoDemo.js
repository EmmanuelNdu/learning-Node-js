import crpto from 'crypto';

//createHash
const hash = crpto.createHash('sha256');
hash.update('password1234');
console.log(hash.digest('hex'));

// randomBytes
crpto.randomBytes(16, (err, buf) => {
    if (err) throw err;
    console.log(buf.toString('hex'));
});

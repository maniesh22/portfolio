const fs = require('fs');
const archiver = require('archiver');
const out = fs.createWriteStream('portfolio-ready.zip');
const archive = archiver('zip', { zlib: { level: 9 }});
out.on('close', () => console.log('zip created', archive.pointer()));
archive.pipe(out);
archive.glob('**/*', { ignore: ['node_modules/**/.cache/**'] });
archive.finalize();

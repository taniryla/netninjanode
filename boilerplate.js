const fs = require('fs');
const folderName = process.argv[2] || 'Project'

// // Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("in the callback");
//     if (err) throw err;
// });
try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`)
    fs.writeFileSync(`${folderName}/app.js`)
    fs.writeFileSync(`${folderName}/styles.css`)
} catch (e) {
    console.log('something went wrong');
    console.log(e);
}
// console.log("I come after mkdir!")
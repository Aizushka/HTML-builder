const { readdir, stat } = require('fs/promises');
const path = require('path');

const pathToFolder = path.join(__dirname, 'secret-folder');

async function getFilesInfo() {
  const secretFiles = await readdir(pathToFolder, { withFileTypes: true });
  const files = secretFiles.filter((el) => el.isFile());

  for (let file of files) {
    let pathToFile = path.join(pathToFolder, file.name);
    let extname = path.extname(pathToFile);
    let fileName = path.basename(pathToFile, extname);
    let fileStats = await stat(pathToFile);
    let fileSize = fileStats.size;
    console.log(`${fileName} - ${extname} - ${fileSize}`);
  }
}

getFilesInfo();

const { readdir, mkdir, rm, copyFile } = require('fs/promises');
const path = require('path');

const copyFrom = path.join(__dirname, 'files');
const copyTo = path.join(__dirname, 'files-copy');

async function copyFolder() {
  mkdir(copyTo, { recursive: true });
  const filesInCopyFolder = readdir(copyTo);
  (await filesInCopyFolder).forEach((file) => {
    rm(copyTo, file, { force: true });
  });
  const filesToCopy = readdir(copyFrom);
  (await filesToCopy).forEach((file) => {
    const copyFileFrom = path.join(__dirname, 'files', file);
    const copyFileTo = path.join(__dirname, 'files-copy', file);
    copyFile(copyFileFrom, copyFileTo);
  });
}

copyFolder();

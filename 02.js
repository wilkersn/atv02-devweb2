
const fs = require('fs')
const util = require('util')

const readDir = util.promisify(fs.readdir)

const readDirectory = async (path) => {
  const filenames = await readDir(path)
  for (let filename of filenames) {
    console.log(filename)
  }
}


console.log(readDirectory(process.cwd()));
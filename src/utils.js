const path = require('path')
const fs = require('fs')

function getRuntimePath (_path) {
  return path.resolve(process.cwd(), _path)
}

module.exports = {
  getRuntimePath
}

const fse = require('fs-extra')
const ejs = require('ejs')
const path = require('path')
const inquirer = require('inquirer')
const fs = require('fs')
const { getRuntimePath } = require('../utils')

// 模板名称所需要递归ejs编译的文件夹数组
const templateWhiteDirlist = {
  'vue3-template-h5': ['src', 'utils']
}

async function reWriteFile (projectName, templateName) {
  const prompts = selectBusinessLine()
  const answer = await inquirer.prompt(prompts)
  const templatespath = path.join(__dirname, `../../template/${templateName}`)
  console.info('创建开始')
  const writeFile = setWriteFile(templateWhiteDirlist[templateName] || [])
  fs.mkdir(getRuntimePath(projectName), async () => {
    try {
      const result = await writeFile(templatespath, answer, projectName)
      console.info('创建完成')
    } catch (error) {
      console.info('创建失败：', error)
    }
  })
}

function selectBusinessLine () {
  const prompts = [
    {
      name: 'businessLine',
      message: '请选择项目所属业务线',
      type: 'list',
      choices: [
        { name: '基础业务', value: 'base' }
      ]
    }
  ]
  return prompts
}

/**
 * 使用模板文件 编译和写入目标项目
 * @param {需要递归用ejs编译的文件夹数组} writeFilesArr 
 * @returns function 
 */
function setWriteFile (writeFilesArr) {
  const whiteFiles = writeFilesArr
  function writeFile (templatespath, answer, projectName, dirPath = '/') {
    return new Promise(async (resolve, reject) => {
      try {
        let resultFlag = null
        const files = await fs.readdirSync(templatespath)
        files.forEach(async (file) => {
          if (['node_modules', 'yarn.lock'].includes(file)) return

          const currentFilePath = `${templatespath}/${file}`
          const isDir = fs.lstatSync(currentFilePath).isDirectory()
          if (isDir) {
            const fileDir = getRuntimePath(`${projectName}${dirPath}${file}`)
            if (whiteFiles.includes(file)) {
              await fs.mkdirSync(fileDir, { recursive: true })
              writeFile(currentFilePath, answer, projectName, `${dirPath}${file}/`)
              return
            }
            fse.copySync(path.resolve(__dirname, currentFilePath), fileDir)
            return (resultFlag = true)
          }
          try {
            const data = await ejs.renderFile(path.join(templatespath, file), answer)
            path.extname(file) === '.ejs' && (file = `${path.basename(file, '.ejs')}`)
            await fs.writeFileSync(path.join(process.cwd(), `${projectName}${dirPath}${file}`), data)
            resultFlag = true
          } catch (error) {
            resultFlag = false
            reject(error)
          }
        })
        resultFlag && resolve(true)
      } catch (error) {
        reject(error)
      }
    })
  }

  return writeFile
}

module.exports = {
  reWriteFile,
  templateWhiteDirlist
}

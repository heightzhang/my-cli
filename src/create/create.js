const fse = require('fs-extra')
const path = require('path')
const inquirer = require('inquirer')

const { getRuntimePath } = require('../utils')
const { reWriteFile, templateWhiteDirlist } = require('./reWriteFile')

async function main (projectName, templateType) {
  let templateName = ''
  let prompts = []
  switch (templateType) {
    case 'vue':
      prompts = [{
        name: 'vueTemplateType',
        message: '请选择Vue模板类型',
        type: 'list',
        choices: [
          { name: 'vue3-h5', value: 'vue3-template-h5' },
        ]
      }]
      const { vueTemplateType } = await inquirer.prompt(prompts)
      templateName = vueTemplateType
      break
    default:
      process.exit()
  }
  if( Object.keys(templateWhiteDirlist).includes(templateName)) {
    reWriteFile(projectName, templateName)
    return
  }
  console.info('创建开始')
  try {
    fse.copySync(path.resolve(__dirname, `../../template/${templateName}`), getRuntimePath(projectName))
    console.info('创建完成')
  } catch (e) {
    console.info('创建失败：' + JSON.stringify(e))
  }
}

module.exports = main


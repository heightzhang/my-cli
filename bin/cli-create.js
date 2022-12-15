#!/usr/bin/env node

const program = require('commander')
const inquirer = require('inquirer')

const createHandler = require('../src/create/create')

program.usage('<project-name>')
program.parse(process.argv)

if (program.args.length < 1) {
  console.info('参数不完整，请确认')
  process.exit()
}
const [projectName] = program.args

const prompts = [
  {
    name: 'templateType',
    message: '请选择创建项目模版的类型',
    type: 'list',
    choices: [
      { name: 'vue 模版', value: 'vue' },
      { name: 'taro 模板(待添加)', value: 'taro' }
    ]
  }
]

;(async () => {
  try {
    const { templateType } = await inquirer.prompt(prompts)
    await createHandler(projectName, templateType)
  } catch (e) {}
})()

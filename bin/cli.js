#!/usr/bin/env node

const program = require('commander')

program
  .version(require('../package').version)
  .name('hz')
  .usage('<command>')
  .command('create <project-name>', '创建项目模版', {
    executableFile: 'cli-create'
  })
  // .command('deploy-dev', '部署开发环境', {
  //   executableFile: 'gooda-deploy-dev'
  // })
  // .command('deploy-init', '生成部署配置文件', {
  //   executableFile: 'gooda-deploy-init'
  // })
program.parse(process.argv)

import {ContainerConfig} from './containerConfig'

const container = await ContainerConfig.getInstance();

module.exports.testFunc = () => {
  console.log(container.resolve('test'))
}
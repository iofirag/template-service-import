import {ConfigCreatorService} from './services/configCreatorService'
import {ContainerConfig} from './containerConfig'
import app from 'express';
import url from 'url';


(async () => {
  try {
    console.log('NODE_ENV=', process.env.NODE_ENV)
    // build config file using template (etcd keys & default values)
    const configCreatorService = new ConfigCreatorService()
    await configCreatorService.init();
    
    // build dependency injection using configs
    const container = await ContainerConfig.getInstance();
    // const testData = container.resolve('test');
    // console.log(testData)
  } catch(error) {
    console.error(error)
  }
})()
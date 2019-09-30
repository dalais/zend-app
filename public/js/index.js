import AppService from '../../resources/src/componets/app.service'
import {config} from '../../resources/src/componets/config'
import '../../resources/src/componets/header.component'

console.log("Config key: ", config.key)

const service = new AppService('Hello World!')
service.log()
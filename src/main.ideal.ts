import Ving, { App } from 'ving'
import { MallModule } from './modules/mall/mall.module'
import { VipModule } from './modules/vip/vip.module'

@App({
  modules: [MallModule, VipModule],
})
export class Ving {}
import Ving, { App } from 'ving'
import { VipRouter } from './modules/vip/vip.router'

@App({
  routers: [VipRouter],
  stores: [],
  plugins: []
})
export class Ving {}
import { Module } from '@/decorators/Module'
import { VipRouter } from './vip.router'
import { VipStore } from './vip.store'

@Module({
  routers: [VipRouter],
  stores: [VipStore]
})
export class VipModule {}
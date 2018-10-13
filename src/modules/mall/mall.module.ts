import { Module } from '@/decorators/Module'
import { MallRouter } from './mall.router'
import { MallStore } from './mall.store'

@Module({
  routers: [MallRouter],
  stores: [MallStore]
})
export class MallModule {}
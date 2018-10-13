import { Router, Route, View } from '@/decorators/Router'

@Router('vip')
export class VipRouter {
  private mode: string

  constructor () {
    this.mode = 'history'
  }
  // routes
  @Route('home')
  @View('home')
  home () {
    return {
      meta: {},
      children: [
        { path: 'page1', component: () => {} },
        { path: 'page1', component: () => {} }
      ]
    }
  }

  @Route('intro')
  @View('intro')
  intro () {}

  // hook
  beforeEach (to, from, next) {}
  afterEach (to, from, next) {}
}
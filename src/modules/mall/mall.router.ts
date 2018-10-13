import { Router, Route, View } from '@/decorators/Router'

@Router('mall')
export class MallRouter {
  mode: string = 'history'

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
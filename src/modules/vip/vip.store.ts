import { Store, State, Getter, Mutation, Action, Param } from '@/decorators/Store'

@Store()
export class VipStore {
  constructor () {}

  @State() count = 1

  @Getter()
  total (@State('count') count) {
    return count + 1
  }

  @Mutation()
  addCount (@State('count') count, @Param() params) {
    count += params.count
  }

  @Action()
  findUser (@Mutation() mutations) {
    this.mutations.addCount(1)
  }
}
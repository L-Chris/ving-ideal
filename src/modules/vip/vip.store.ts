import { Store, State, Getter, Mutation, Action } from '@/decorators/Store'

@Store({
  modules: []
})
export class VipStore {
  @State() count = 1

  @Getter()
  total (state) {
    return state.count + 1
  }

  @Mutation()
  addCount (state, count) {
    state.count += count
  }

  @Action()
  findUser ({ commit }, count) {
    commit('addCount', count)
  }
}
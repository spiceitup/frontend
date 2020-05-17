import { SpiceState, UserCredential } from "./io"
import { AuthAPI } from "~/assets/ts/api/auth"

export const state = (): SpiceState => ({
  authUser: null
})

export const mutation = {
  SET_USER (state: SpiceState, user: string){
    state.authUser = user
  }
}

export const actions = {

  nuxtServerInit ({ commit }: any, { req } : any) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },

  async login ({ commit }: any, { username, password }: UserCredential) {
    try {
      const { data } = await AuthAPI.login(username, password)
      commit('SET_USER', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout ({ commit }: any) {
    await AuthAPI.logout()
    commit('SET_USER', null)
  }
}
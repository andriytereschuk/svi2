const initialState = {
  homes: [],
}

export const actions = {
  async fetchHomes({ commit }, app) {
    const version = app.context.isDev ? 'draft' : 'published'
    const response = await app.$storyapi.get(`cdn/stories/`, {
      starts_with: 'homes',
      version,
    })
    const items = response.data.stories

    commit('setHomes', items)
  },
}

export const mutations = {
  setHomes(state, items) {
    state.homes = items
  },
}

export const state = () => initialState

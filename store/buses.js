const initialState = {
  buses: [],
}

export const actions = {
  async fetchBuses({ commit }, app) {
    const version = app.context.isDev ? 'draft' : 'published'
    const response = await app.$storyapi.get(`cdn/stories/`, {
      starts_with: 'buses',
      version,
    })
    const list = response.data.stories

    commit('setBuses', list)
  },
}

export const mutations = {
  setBuses(state, buses) {
    state.buses = buses
  },
}

export const state = () => initialState

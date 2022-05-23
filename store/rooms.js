const initialState = {
  rooms: [],
}

export const actions = {
  async fetchRooms({ commit }, app) {
    const version = app.context.isDev ? 'draft' : 'published'
    const response = await app.$storyapi.get(`cdn/stories/`, {
      starts_with: 'rooms',
      version,
    })
    const items = response.data.stories[0].content.items

    commit('setRooms', items)
  },
}

export const mutations = {
  setRooms(state, items) {
    state.rooms = items
  },
}

export const state = () => initialState

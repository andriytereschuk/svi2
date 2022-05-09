const initialState = {
  rooms: [],
}

export const actions = {
  async fetchRooms({ commit }, app) {
    const response = await app.$storyapi.get(`cdn/stories/`, {
      starts_with: 'rooms',
      version: 'published',
    })
    const items = response.data.stories.map(
      ({ content: { items } }) => items[0]
    )

    commit('setRooms', items)
  },
}

export const mutations = {
  setRooms(state, items) {
    state.rooms = items
  },
}

export const state = () => initialState
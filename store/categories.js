const initialState = {
  categories: [],
}

export const actions = {
  async fetchCategories({ commit }, app) {
    const version = app.context.isDev ? 'draft' : 'published'
    const response = await app.$storyapi.get(`cdn/stories/`, {
      starts_with: 'categories',
      version,
    })
    const items = response.data.stories

    commit('setCategories', items)
  },
}

export const mutations = {
  setCategories(state, items) {
    state.categories = items
  },
}

export const state = () => initialState

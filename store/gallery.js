const initialState = {
  slides: [],
}

export const actions = {
  async get({ commit }, app) {
    const response = await app.$storyapi.get(`cdn/stories/`, {
      starts_with: 'gallery',
      version: 'published',
    })

    const slides = response.data.stories[0].content.slides

    commit('set', slides)
  },
}

export const mutations = {
  set(state, slides) {
    state.slides = slides
  },
}

export const state = () => initialState

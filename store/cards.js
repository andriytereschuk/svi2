const initialState = {
  cards: [],
}

export const actions = {
  async fetchCards({ commit }, app) {
    const version = app.context.isDev ? 'draft' : 'published'
    const response = await app.$storyapi.get(`cdn/stories/`, {
      starts_with: 'cards',
      version,
    })
    const list = response.data.stories
      .map(({ content, slug }) => {
        const {
          title,
          info,
          link,
          price,
          image: { filename },
        } = content
        return {
          slug,
          title,
          info,
          link,
          price,
          image: filename,
        }
      })
      .sort(({ slug: slug1 }, { slug: slug2 }) => {
        if (slug1 < slug2) {
          return -1
        }
        if (slug1 > slug2) {
          return 1
        }
        return 0
      })

    commit('setCards', list)
  },
}

export const mutations = {
  setCards(state, cards) {
    state.cards = cards
  },
}

export const state = () => initialState

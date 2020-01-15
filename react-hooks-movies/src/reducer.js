export const defaultState = {
  loading: true,
  movies: [],
}
export const reducer = (state, actions) => {
  switch (actions.type) {
    case 'SUCCESS': return {
      ...state,
      movies: actions.movies
    }
    default: return state
  }
}
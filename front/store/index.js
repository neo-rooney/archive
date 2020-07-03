export const actions = {
  //모든 페이지에서 화면이 그려지기 전에 실행된다.
  nuxtServerInit({ commit, dispatch, state }, { req }) {
    return dispatch('users/loadUser')
  }
}
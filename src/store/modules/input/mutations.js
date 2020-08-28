export default {
  onClickItem: function(state, payload) {
    state.myInput = state.myInput + payload;
  },
  onClickReset: function(state) {
    state.myInput = "";
  },
  onClickConfirm: function(state) {
    state.showModal = false;
  },
  onClickDelete: function(state, payload) {
    localStorage.removeItem(payload);
    const itemIndex = state.myHistory.indexOf(payload);
    state.myHistory.splice(itemIndex, 1);
  },
};

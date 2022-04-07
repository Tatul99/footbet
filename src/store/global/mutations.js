import state from "./state";

// export function someMutation(/* state */) {
export function changeBool(state, payload) {
  state.bool = payload;
}
// }

import filterReducer from "./filterReducer";
import deepFreeze from "deep-freeze";

describe("filterReducer", () => {
  test("SET_FILTER changes state.filter", () => {
    const state = {};

    const action = {
      type: "SET_FILTER",
      filter: "first",
    };

    deepFreeze(state);

    const filter = filterReducer(state, action);

    expect(filter).toMatch(action.filter);
  });
});

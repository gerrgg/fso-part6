import anecdoteReducer from "./anecdoteReducer";
import deepFreeze from "deep-freeze";

describe("noteReducer", () => {
  test("returns new state with action VOTE", () => {
    const state = [
      {
        content: "the app state is in redux store",
        votes: 0,
        id: 1,
      },
    ];

    const action = {
      type: "VOTE",
      data: {
        id: 1,
      },
    };

    deepFreeze(state);
    const newState = anecdoteReducer(state, action);

    expect(newState).toHaveLength(1);

    const updatedAnecdote = newState.find((n) => n.id === action.data.id);

    expect(updatedAnecdote.votes).toBe(1);
  });
});

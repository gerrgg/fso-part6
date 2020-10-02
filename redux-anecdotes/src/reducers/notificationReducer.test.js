import notificationReducer from "./notificationReducer";
import deepFreeze from "deep-freeze";

describe("notificationReducer", () => {
  test("SET_NOTIFICATION changes the state.notification", () => {
    const state = {};

    const action = {
      type: "SET_NOTIFICATION",
      notification: "Setting notifications should be easy",
    };

    deepFreeze(state);

    const notification = notificationReducer(state, action);

    expect(notification).toMatch(action.notification);
  });

  test("REMOVE_NOTIFICATION sets the state.notification to null", () => {
    const state = {};

    const action = {
      type: "REMOVE_NOTIFICATION",
    };

    deepFreeze(state);

    const notification = notificationReducer(state, action);

    expect(notification).toBeNull();
  });
});

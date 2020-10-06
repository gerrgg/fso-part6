const notificationReducer = (state = null, action) => {
  // console.log("ACTION: ", action);
  // console.log("STATE: ", state);

  switch (action.type) {
    case "SET_NOTIFICATION": {
      console.log(action);

      const timeout = action.data.timeout * 100;

      setTimeout(() => {
        return null;
      }, timeout);

      return action.data.notification;
    }

    case "REMOVE_NOTIFICATION": {
      return null;
    }

    default:
      return state;
  }
};

export const setNotification = (notification, timeout = 10) => {
  return {
    type: "SET_NOTIFICATION",
    data: {
      notification,
      timeout,
    },
  };
};

export const removeNotification = () => {
  return {
    type: "REMOVE_NOTIFICATION",
  };
};

export default notificationReducer;

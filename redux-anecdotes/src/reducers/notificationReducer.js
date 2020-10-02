const notificationReducer = (state = null, action) => {
  // console.log("ACTION: ", action);
  // console.log("STATE: ", state);

  switch (action.type) {
    case "SET_NOTIFICATION": {
      return action.notification;
    }
    case "REMOVE_NOTIFICATION": {
      return null;
    }
    default:
      return state;
  }
};

export const setNotification = (notification) => {
  return {
    type: "SET_NOTIFICATION",
    notification,
  };
};

export const removeNotification = () => {
  return {
    type: "REMOVE_NOTIFICATION",
  };
};

export default notificationReducer;
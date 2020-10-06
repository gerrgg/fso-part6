const anecdoteReducer = (state = [], action) => {
  // setup swtich statchments for dealing with object created below
  switch (action.type) {
    case "VOTE": {
      const id = action.data.id;
      // get anecdote by id
      const anecdoteToChange = state.find((n) => n.id === id);

      // copy anecdote object and update vote count
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };

      // copy the state except for the updated anecdote
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote
      );
    }

    case "NEW_ANECDOTE":
      return [...state, action.data];

    case "INIT_ANECDOTES":
      return action.data;

    default:
      return state;
  }
};

export const VoteFor = (id) => {
  // create an object with keyboard and data
  return {
    type: "VOTE",
    data: { id },
  };
};

export const CreateAnecdote = (content) => {
  return {
    type: "NEW_ANECDOTE",
    data: {
      content,
      votes: 0,
    },
  };
};

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: "INIT_ANECDOTES",
    data: anecdotes,
  };
};

export default anecdoteReducer;

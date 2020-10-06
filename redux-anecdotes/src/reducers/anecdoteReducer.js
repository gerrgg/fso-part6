import anecdoteService from "../services/anecdotes";

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

    case "REMOVE_ANECDOTE": {
      const id = action.data.id;

      return state.filter((anecdote) => anecdote.id !== id);
    }

    case "NEW_ANECDOTE":
      return [...state, action.data];

    case "INIT_ANECDOTES":
      return action.data;

    default:
      return state;
  }
};

export const VoteFor = (id, objectToUpdate) => {
  return async (dispatch) => {
    const updatedObject = {
      ...objectToUpdate,
      votes: objectToUpdate.votes + 1,
    };

    await anecdoteService.update(id, updatedObject);

    dispatch({
      type: "VOTE",
      data: { id },
    });
  };
};

export const CreateAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch({
      type: "NEW_ANECDOTE",
      data: newAnecdote,
    });
  };
};

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();

    dispatch({
      type: "INIT_ANECDOTES",
      data: anecdotes,
    });
  };
};

export const removeAnecdote = (id) => {
  return async (dispatch) => {
    await anecdoteService.remove(id);

    dispatch({
      type: "REMOVE_ANECDOTE",
      data: { id },
    });
  };
};

export default anecdoteReducer;

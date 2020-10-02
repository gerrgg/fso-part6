import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { VoteFor, CreateAnecdote } from "./reducers/anecdoteReducer";

const App = () => {
  const anecdotesSortedByLikes = useSelector((state) =>
    state.sort((a, b) => a.votes < b.votes)
  );

  const dispatch = useDispatch();

  const vote = (id) => {
    console.log("vote", id);
    dispatch(VoteFor(id));
  };

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(CreateAnecdote(content));
    console.log(content);
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotesSortedByLikes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default App;

import React from "react";
import AnecdoteForm from "./components/AnecdoteForm";
import { useSelector, useDispatch } from "react-redux";
import { VoteFor } from "./reducers/anecdoteReducer";

const App = () => {
  const anecdotesSortedByLikes = useSelector((state) =>
    state.sort((a, b) => a.votes < b.votes)
  );

  const dispatch = useDispatch();

  const vote = (id) => {
    console.log("vote", id);
    dispatch(VoteFor(id));
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
      <AnecdoteForm />
    </div>
  );
};

export default App;

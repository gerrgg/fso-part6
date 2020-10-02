import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { VoteFor } from "../reducers/anecdoteReducer";
import Filter from "../components/Filter";
import {
  setNotification,
  removeNotification,
} from "../reducers/notificationReducer";

const Anecdotes = () => {
  const anecdotesSortedByLikes = useSelector((state) => {
    // filter out anecdotes if set else show all
    const anecdotes = state.filter
      ? state.anecdotes.filter((anecdote) =>
          anecdote.content.includes(state.filter)
        )
      : state.anecdotes;

    // sort by likes
    return anecdotes.sort((a, b) => a.votes < b.votes);
  });

  return (
    <div>
      <Filter />
      {anecdotesSortedByLikes.map((anecdote) => (
        <Anecdote key={anecdote.id} anecdote={anecdote} />
      ))}
    </div>
  );
};

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(VoteFor(id));
    dispatch(setNotification(`You voted for "${anecdote.content}"`));

    setTimeout(() => dispatch(removeNotification()), 5000);
  };

  return (
    <div className="anecdote">
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote.id)}>vote</button>
      </div>
    </div>
  );
};

export default Anecdotes;

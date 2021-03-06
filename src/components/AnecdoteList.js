import React from 'react';
import { connect } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import Notification from './Notification';

const Anecdote = ({ anecdote, vote }) => {

  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={vote}>vote</button>
      </div>
    </div>
  );
};

const AnecdoteList = (props) => {
  return (
    <div>
      {props.notification && (
        <Notification />
      )}
      {props.anecdotes.anecdotes.map((anecdote, index) => 
        <Anecdote 
          key={index} 
          anecdote={anecdote} 
          vote={() => props.voteAnecdote(anecdote)}
        />
      )}
    </div>
  );
};

export const filterCheck = (state) => {
  if (state.filter) {
    return { 
      anecdotes: state.anecdotes
        .filter(anecdote => anecdote.filtered === false)
        .sort((a, b) => b.votes - a.votes)
    };
  } else if (!state.filter) {
    return { 
      anecdotes: state.anecdotes
        .sort((a, b) => b.votes - a.votes) 
    };
  }
};

const mapStateToProps = state => {
  if (state.notification) {
    return {
      notification: state.notification,
      anecdotes: filterCheck(state)
    };
  } else {
    return {
      notification: null,
      anecdotes: filterCheck(state)
    };
  }
};


const ConnectedAnecdoteListComponent = connect(mapStateToProps, { voteAnecdote })(AnecdoteList);

export default ConnectedAnecdoteListComponent;
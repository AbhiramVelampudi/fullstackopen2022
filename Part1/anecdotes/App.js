import React, { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ text, onClickHandler }) => (
  <button onClick={onClickHandler}>{text}</button>
);

const Anecdote = ({ text, Upvote }) => (
  <div>
    <p>{text}</p>
    <p>{"has " + Upvote + " votes"}</p>
  </div>
);

const App = () => {
  const anecdotes = [
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Adding manpower to a late software project makes it later!",
    "If you cannot grok the overall structure of a program while taking a shower, you are not ready to code it.",
    "Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live.",
    "Plan to throw one (implementation) away; you will, anyhow.",
    "Program testing can be used to show the presence of bugs, but never to show their absence!",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "When debugging, novices insert corrective code; experts remove defective code.",
    "The belief that complex systems require armies of designers and programmers is wrong. A system that is not understood in its entirety, or at least to a significant degree of detail by a single individual, should probably not be built.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const maxVote = Math.max(...votes);
  const maxVoteIndex = votes.findIndex((vote) => vote === maxVote);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * (anecdotes.length - 0.1));
    // console.log(randomIndex);
    setSelected(randomIndex);
  };
  const handleVote = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  };

  return (
    <div>
      <Header text={"Anecdote For the day"} />
      <Anecdote text={anecdotes[selected]} vote={votes[selected]} />
      <Button text={"Upvote"} onClickHandler={handleVote} />
      <Button text={"Generate"} onClickHandler={handleClick} />
      <Header text={"Anecdote with major Upvotes "} />
      <Anecdote text={anecdotes[maxVoteIndex]} Upvote={votes[maxVoteIndex]} />
    </div>
  );
};

export default App;
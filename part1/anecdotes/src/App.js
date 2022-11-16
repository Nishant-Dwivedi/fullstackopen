import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    0:0,
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0
  })

  const randomAnecdote = () => {
    let min = 0;
    let max = anecdotes.length;
    let random =  Math.floor(Math.random() * (max-min) + min);
    setSelected(random);
  }

  const updateVotes = () => {
    setVotes({
      ...votes,
      [selected] : votes[selected] + 1,
    })
  }

  const mostUpvoted = () => {
    let maxKey = 0;
    let maxValue = 0;
    for (let count in votes) {
     for (let prop in votes) {
      if (votes[prop] > maxValue){
        maxKey = prop;
        maxValue= votes[prop]
      }
     }
    }
    return maxKey
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Button clickHandler = {randomAnecdote} text="next anecdote"/>
      <Button clickHandler={updateVotes} text="vote"/>
      <h2>Most upvoted anecdote</h2>
      <p>{anecdotes[mostUpvoted()]}</p>
    </div>
  )
}

const Button = ({clickHandler,text}) => {
  return (
    <>
      <button onClick={clickHandler}>{text}</button>
    </>
  )
}




export default App
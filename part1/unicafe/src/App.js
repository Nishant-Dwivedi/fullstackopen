import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button clickHandler = {()=>{setGood(good+1)}} name = "good"/>
      <Button clickHandler = {()=>{setNeutral(neutral+1)}} name = "neutral"/>
      <Button clickHandler = {()=>{setBad(bad+1)}} name = "bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Button = ({name, clickHandler}) => {
  return (
  <button onClick={clickHandler}>{name}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good == 0 && neutral == 0 && bad==0){
    return (
      <div>
         <h2>statistics</h2>
         <StatisticLine text="no feeback given"/>
      </div>
    )}
  return (
    <div>
      <h2>statistics</h2>
      <table>
      <tr><StatisticLine text="good" value={good}/>
      </tr>
      <tr>
        <StatisticLine text="neutral" value={neutral}/>
      </tr>
      <tr>
        <StatisticLine text="bad" value={bad}/>
      </tr>
      <tr>
        <StatisticLine text="all" value={good+neutral+bad}/>
      </tr>
      <tr>
        <StatisticLine text="average" value={(neutral+good+bad)/3}/>
      </tr>
      <tr>
        <StatisticLine text="positive" value={`${(good/(neutral+good+bad)*100)}%`}/>
      </tr>
      </table>
    </div>
  )
}

const StatisticLine = function ({text, value}) {
  return (
    <>
     <td>{text}</td>
     <td>{value}</td>
    </>
   
  )
}
export default App
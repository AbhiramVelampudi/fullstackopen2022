import { useState } from 'react'

const Header = ({name}) => <h1> {name} </h1>

const Button = ({name, action}) => <button onClick={action}>{name}</button>

const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statictics = (props) => {
  let total = props.good + props.bad + props.neutral
  if (total > 0)
    return (
      <table>
        <tbody>
        <StatisticLine text="Good:- " value={props.good} />
        <StatisticLine text="Neutral:- " value={props.neutral} />
        <StatisticLine text="Bad:- " value={props.bad} />
        <StatisticLine text="All:- " value={total} />
        <StatisticLine text="Average:- " value={props.average()} />
        <StatisticLine text="Positive:- " value={props.positive()} />
        </tbody>
      </table>
    )
  return <p>NO FEEDBACK IS PROVIDED</p>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const calculateAverage = () => {
    let count = good + bad + neutral
    let sum = good - bad
    if (count > 0)    
      return sum / count
    return 0
  }

  const calculatePositivePercentage = () => {
    let count = good + bad + neutral
    if (count > 0)
      return (good/count * 100 + "%")
    return (0 + "%")
  }


  return (
    <div>
      <Header name="Provide Your Feedback" />
      <Button name="Good" action={() => setGood(good+1)} />
      <Button name="Neutral" action={() => setNeutral(neutral+1)} />
      <Button name="Bad" action={() => setBad(bad+1)} />
     
      <Header name="Statistics" />
      <Statictics good={good} bad={bad} neutral={neutral}
      positive={() => calculatePositivePercentage()} average={() => calculateAverage()}/>
    </div>
  )
}

export default App